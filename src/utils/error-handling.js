import { ERROR_CLASS_NAME } from "./utils.js";

const displayErrorMessage = (element, message) => (element.textContent = message);

const addErrorClass = (...element) => element.forEach((el) => el.classList.add(ERROR_CLASS_NAME));

const removeErrorClass = (element) => element.classList.remove(ERROR_CLASS_NAME);

export { displayErrorMessage, addErrorClass, removeErrorClass };
