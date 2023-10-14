import { errClass } from "../../constants/cssClass.js";
import { errorMessage } from "../../constants/errorMessage.js";
import { $dom } from "../../class/dom.js";

// event 객체를 받아서 해당 이벤트리스너가 달린 DOM 객체, event.currentTarget을 확인하고,
// currentTarget의 name값에 따라 달라지는 res 객체를 반환합니다.
// 사용자에게 오류를 표시하기 위해서 res 객체에는 필요한 객체의 주소값이 담깁니다.
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

// res 객체를 받아서 해당 input태그에 값이 있는지 확인하고, 없으면 errorType을 지정해줍니다.
export const isValue = (obj) => {
  if (!obj.value) obj.errorType = 'emptyError';
  return obj
}

// res 객체를 받아서 errorType을 확인하고, 타입에 맞는 에러메시지를 p태그의 textContent로 할당합니다.
// input태그와 label 태그에 css class로 효과를 줍니다.
// error가 있을 경우 반환값을 null로 지정하여, pipe에서 다음 함수가 실행되지 않도록 합니다. (오류 메시지의 중첩 방지)
export const printError = (obj) => {
  if (obj.errorType) {
    obj.p.textContent = errorMessage[obj.name][obj.errorType];
    obj.label.classList.add(errClass);
    obj.tag.classList.add(errClass);
    return null;
  }
  return obj;
}

// focusin 했을 경우 에러메시지를 초기화합니다.
export const resetError = (obj) => {
  obj.p.textContent = "";
  obj.label.classList.remove(errClass);
  obj.tag.classList.remove(errClass);
}

// 버튼을 눌러 submit할 경우 에러가 있는 경우에 null을 반환하여, 이후 함수가 실행되지 않도록 합니다.
// 에러가 있는 경우, formData의 제출을 막습니다.
export const isError = (obj) => {
  if (Array.from(obj.inputs)
    .some($input => $input.classList.contains(errClass)))
    return null;
  return obj;
}