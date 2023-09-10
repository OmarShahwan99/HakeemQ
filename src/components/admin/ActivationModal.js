import React from "react";
import { Modal } from "antd";

const ActivationModal = (props) => {
  const activateAccountHandler = () => {
    props.onActive(props.id);
  };

  return (
    <>
      <Modal
        title="Are you sure ?"
        open={props.isOpen}
        onOk={activateAccountHandler}
        onCancel={props.onCancel}
        okText="Confirm"
        confirmLoading={props.isLoading}
      >
        <p>Do you want to activate this doctor account ?</p>
      </Modal>
    </>
  );
};
export default ActivationModal;
