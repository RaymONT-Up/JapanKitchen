import { Fragment } from "react/cjs/react.production.min";
import styles from "./ModalWindow.module.css";
import ReactDom from "react-dom";

const Backdrop = props => {
  return <div onClick={props.onClose} className={styles.backdrop}></div>;
};
const Modal = props => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElementId = document.getElementById("overlays");

const ModalWindow = props => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElementId
      )}
      {ReactDom.createPortal(
        <Modal id={props.id}>{props.children}</Modal>,
        portalElementId
      )}
    </Fragment>
  );
};
export default ModalWindow;
