import { notifyMsg } from "./valiable.js"


export function deleteMsg (e) {
  if (e.target.nextElementSibling === notifyMsg) {
    notifyMsg.classList.remove('notify');
    notifyMsg.remove();
  }
}