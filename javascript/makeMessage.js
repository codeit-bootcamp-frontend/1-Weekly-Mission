import { notificationMessage } from './variables.js';
 
function makeMessage(eventTarget, errorMessage){ 
  notificationMessage.classList.add('notify');
  notificationMessage.textContent = errorMessage;
  eventTarget.className = 'inputEvent';
  eventTarget.after(notificationMessage);
}

export default makeMessage; 