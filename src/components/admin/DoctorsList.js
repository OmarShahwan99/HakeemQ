import React from "react";
import { Button, List, Table } from "antd";

import { useContext, useState, useEffect } from "react";

import ApiContext from "../../store/api-context";

import { notification } from "antd";
import ActivationModal from "./ActivationModal";

const DoctorsList = () => {
  const { sendRequest, isLoading, error } = useContext(ApiContext);

  const [id, setId] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isActive, setIsActive] = useState(false);

  const [doctors, setDoctors] = useState([]);

  const openModalHandler = (id) => {
    setModalIsOpen(true);
    setId(id);
  };

  const fetchDoctors = async () => {
    const response = await sendRequest({
      url: "/doctors",
      method: "GET",
    });
    const responseData = await response.data;
    setDoctors(responseData);
  };

  const activateAccount = async (id) => {
    const response = await sendRequest({
      url: `/doctor/${id}/activate`,
      method: "PUT",
      data: id,
    });
    console.log(response);
    if (response.status === 200) {
      setIsActive((prevState) => !prevState);
      setModalIsOpen(false);
      notification.open({
        type: "success",
        message: response.msg,
      });
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [isActive]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Spz",
      dataIndex: "spz",
      key: "spz",
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["md"],
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  let tableData = [];

  for (let drIdx in doctors) {
    const updatedDoctor = {
      ...doctors[drIdx],
      spz: doctors[drIdx].spz.name,
      status: (
        <p
          style={{
            color: doctors[drIdx].is_activated === 0 ? "red" : "green",
          }}
        >
          {doctors[drIdx].is_activated === 0 ? "Deactivated" : "Activated"}
        </p>
      ),
      action: (
        <Button
          style={{
            backgroundColor:
              doctors[drIdx].is_activated === 0 ? "green" : "red",
          }}
          onClick={() => openModalHandler(doctors[drIdx].id)}
          type="primary"
        >
          {doctors[drIdx].is_activated === 0 ? "Activate" : "Deactivate"}
        </Button>
      ),
    };
    tableData.push(updatedDoctor);
  }

  return (
    <>
      <Table dataSource={tableData} columns={columns} />
      <ActivationModal
        isOpen={modalIsOpen}
        onCancel={() => setModalIsOpen(false)}
        id={id}
        onActive={activateAccount}
        isLoading={isLoading}
      />
    </>
  );
};

export default DoctorsList;
