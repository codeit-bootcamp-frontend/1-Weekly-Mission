export default function ConfirmModal(message, onConfirm, onCancel) {
  const confirmAction = () => {
    if (window.confirm(message)) {
      return onConfirm();
    } else {
      return onCancel();
    }
  };
  return confirmAction;
}
