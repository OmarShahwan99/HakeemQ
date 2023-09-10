import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  return <div onClick={props.onColse} className={classes.backdrop}></div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onColse={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={`${classes.modal} ${props.className}`}>
          {props.children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
