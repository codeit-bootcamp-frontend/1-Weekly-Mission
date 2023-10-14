import { $dom } from "../../class/dom.js"
import { authSigninURL, authSignupURL, checkEmailURL } from "../../constants/webApis.js"
import { isError, locator, printError } from "../checkout/c_common.js"
import { common_preventDefault } from "../checkout/c_mixin_common.js"
import { curry, curryTwo, pipe } from "../default.js"

// input태그의 값을 저장하기 위한 함수
const saveData = (obj, res) => {
  res[obj.name] = obj.value
}

// 모든 input태그의 값을 저장하는 함수
const allSave = (obj) => {
  const res = {}
  for (const $input of obj.inputs) {
    saveData($input, res)
  }
  return res
}

// 저장한 input태그의 값을 fetch 하기 위한 객체 형태로 만들어주는 함수
// email 중복 확인 때는 email 값만 저장하도록 if문 분기점을 만들었음
const valueToData = curry((type, obj) => {
  const data = {};
  if (type === 'email') {
    data.email = obj.email
    return data;
  }
  if (type === 'submit') {
    data.email = obj.email
    data.password = obj.password
    return data
  }
})

// ajax 통신을 위해, url과 method 그리고 data를 받아 fetch함수를 호출하는 비동기 함수
const api_request = curryTwo(async (url, method, data) => {
  // ajax 통신 1회 이후, 한번 더 fetch를 할 경우에 data로 Promise 객체가 들어오는 것을 처리함.
  if (data instanceof Promise) {
    data = await data
  }
  return await fetch(url, {
    "method": method,
    "headers": {
      'Content-Type': 'application/json',
    },
    "body": JSON.stringify(data)
  })
})

// StatusCode를 이용해 통신의 결과를 콘솔에서 확인하고, StatusCode를 저장함.
const a_getStatus = async (promise) => {
  const statusCode = (await promise).status;
  console.log(statusCode)
  return statusCode
}

// 비동기 locator 함수
const a_locator = async (promise) => {
  const statusCode = await promise
  const obj = {};
  obj.email = locator($dom.inputEm)
  obj.password = locator($dom.inputPw)
  obj.status = statusCode
  return obj
}

// 비동기 printError 함수, 에러타입을 지정하는 setErrorType 기능도 수행함.
// 중첩된 기능은 a_setErrorType 함수로 분리할 예정
const a_printError = async (promise) => {
  const obj = await promise
  if (obj.status === 409) {
    obj.email.errorType = "occupiedError"
    printError(obj.email)
    return null
  }
  if (obj.status === 400) {
    obj.email.errorType = "invaildError"
    obj.password.errorType = "invaildError"
    printError(obj.email);
    printError(obj.password);
    return null
  }
  if (obj.status === 200) {
    return obj
  }
}

// 비동기 allSave 함수
const a_allSave = async (promise) => {
  const obj = await promise
  if (obj) {
    const data = {};
    data.email = obj.email.value
    data.password = obj.password.value
    return data
  }
  return obj
}

// 통신의 결과가 성공이면, 해당 StatusCode를 확인하고 다음 페이지로 넘기는 함수
const a_goToFolder = async (promise) => {
  const statusCode = (await promise)?.status;
  statusCode === 200 ? location.href = "/folder.html" : null;
}

export const api_signup = pipe(
  // 이메일 중복 확인
  locator,
  common_preventDefault,
  isError,
  allSave,
  valueToData("email"),
  api_request(checkEmailURL, "POST"),
  // 비동기 작동시작
  a_getStatus,
  a_locator,
  a_printError,
  // 중복이 없을 경우 회원가입 진행
  a_allSave,
  api_request(authSignupURL, "POST"),
  a_goToFolder
)

export const api_signin = pipe(
  // 해당 id, password로 가입된 유저가 있는지 확인
  locator,
  common_preventDefault,
  isError,
  allSave,
  valueToData("submit"),
  api_request(authSigninURL, "POST"),
  a_getStatus,
  a_locator,
  a_printError,
  a_goToFolder,
)

// **! Promise 객체의 오류를 잡는 과정을 추가해야함. !**