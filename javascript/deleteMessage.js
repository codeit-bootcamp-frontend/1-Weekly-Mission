import { notificationMessage } from "./variables.js"

export function deleteMessage (e) {
  if (e.target.nextElementSibling === notificationMessage) {
    notificationMessage.classList.remove('notify');
    notificationMessage.remove();
  }
}
