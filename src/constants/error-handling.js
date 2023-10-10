import { ERROR_CLASS_NAME } from "./common.js";

const displayErrorMessage = (el, message) => (el.textContent = message);

const addErrorClass = (...element) => element.forEach((el) => el.classList.add(ERROR_CLASS_NAME));

const removeErrorClass = (el) => el.classList.remove(ERROR_CLASS_NAME);

export { displayErrorMessage, addErrorClass, removeErrorClass };
