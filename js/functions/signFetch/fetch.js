import { $dom } from "../../class/dom.js"
import { authSigninURL, authSignupURL, checkEmailURL } from "../../constants/webApis.js"
import { isError, locator, printError } from "../checkout/c_common.js"
import { common_preventDefault } from "../checkout/c_mixin_common.js"
import { curry, curryTwo, pipe } from "../default.js"


const saveData = (obj, res) => {
  res[obj.name] = obj.value
}

export const allSave = (obj) => {
  const res = {}
  for (const $input of obj.inputs) {
    saveData($input, res)
  }
  return res
}

export const valueToData = curry((type, obj) => {
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

export const api_request = curryTwo(async (url, method, data) => {
  if (data instanceof Promise) {
    data = await data
    console.log(data)
  }
  return await fetch(url, {
    "method": method,
    "headers": {
      'Content-Type': 'application/json',
    },
    "body": JSON.stringify(data)
  })
})

const a_getStatus = async (promise) => {
  const statusCode = (await promise).status;
  console.log(statusCode)
  return statusCode
}

const a_locator = async (promise) => {
  const statusCode = await promise
  const obj = {};
  obj.email = locator($dom.inputEm)
  obj.password = locator($dom.inputPw)
  obj.status = statusCode
  return obj
}

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

const a_allSave = async (promise) => {
  const obj = await promise
  const data = {};
  data.email = obj?.email.value
  data.password = obj?.password.value
  return data
}

const a_goToFolder = async (promise) => {
  const statusCode = (await promise)?.status;
  statusCode === 200 ? location.href = "/folder.html" : null;
}

export const api_signup = pipe(
  locator,
  common_preventDefault,
  isError,
  allSave,
  valueToData("email"),
  api_request(checkEmailURL, "POST"),
  // 비동기 작동시작
  // 이메일 중복 확인
  a_getStatus,
  a_locator,
  a_printError,
  // 중복이 없을 경우 회원가입 진행
  a_allSave,
  api_request(authSignupURL, "POST"),
  a_goToFolder
)

export const api_signin = pipe(
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