import reactDOM from "react-dom";

const ModalPortal = ({children}) => {
  const el = document.getElementById("modal");
  return reactDOM.createPortal(children, el);
}

export default ModalPortal;