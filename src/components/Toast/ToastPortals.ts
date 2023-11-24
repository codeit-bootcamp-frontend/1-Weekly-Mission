import ReactDOM from 'react-dom';

function ToastPortals({ children }) {
  const toastElement = document.querySelector('#toast');
  return ReactDOM.createPortal(children, toastElement);
}

export default ToastPortals;
