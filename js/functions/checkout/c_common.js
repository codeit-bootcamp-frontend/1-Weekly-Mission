import { errClass } from "../../constants/cssClass.js";
import { errorMessage } from "../../constants/errorMessage.js";
import { $dom } from "../../class/dom.js";

export const locator = (event) => {
  const res = {};
  res.event = event;
  res.tag = event.currentTarget ?? event
  res.name = res.tag.name;
  res.value = res.tag.value;
  switch (res.name) {
    case 'email':
      res.label = $dom.labelEm
      res.p = $dom.pEm
      break;
    case 'password':
      res.label = $dom.labelPw
      res.p = $dom.pPw
      res.input = $dom.inputPw
      res.img = $dom.imgPw
      break;
    case 'passwordCheck':
      res.label = $dom.labelCh
      res.p = $dom.pCh
      break;
    case 'submit':
      res.inputs = $dom.inputs
      break;
    case 'passwordBtn':
      res.img = $dom.imgPw
      res.input = $dom.inputPw
      break;
    case 'passwordCheckBtn':
      res.img = $dom.imgCh
      res.input = $dom.inputCh
      break;
  }
  return res
}

export const isValue = (obj) => {
  if (!obj.value) obj.errorType = 'emptyError';
  return obj
}

export const printError = (obj) => {
  if (obj.errorType) {
    obj.p.textContent = errorMessage[obj.name][obj.errorType];
    obj.label.classList.add(errClass);
    obj.tag.classList.add(errClass);
    return null;
  }
  return obj;
}

export const resetError = (obj) => {
  obj.p.textContent = "";
  obj.label.classList.remove(errClass);
  obj.tag.classList.remove(errClass);
}

export const isError = (obj) => {
  if (Array.from(obj.inputs)
    .some($input => $input.classList.contains(errClass)))
    return null;
  return obj;
}

const goToFolder = (obj) => {
}