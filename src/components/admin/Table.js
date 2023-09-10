import { Button, Table } from "antd";

const DoctorsTable = (props) => {
  const dataSource = [
    {
      key: "1",
      name: "Omar Shahwan",
      email: "omar@gmail.com",
      spz: 'Dentist',
      status: "Deactive",
      action: <Button>Active</Button>,
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

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
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default DoctorsTable;
