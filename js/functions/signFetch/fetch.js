import { $dom } from "../../class/dom.js"
import { checkEmailURL } from "../../constants/webApis.js"
import { isError, locator, printError } from "../checkout/c_common.js"
import { curry, curryTwo, log, pipe } from "../default.js"


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
  data.email = obj.email
  data.password = obj.password
  return data
})

export const api_request = curryTwo(async (url, method, data) => {
  return await fetch(url, {
    "method": method,
    "headers": {
      'Content-Type': 'application/json',
    },
    "body": JSON.stringify(data)
  })
})

const a_getStatus = async (promise) => {
  const status = (await promise).status;
  log(status)
  return status
}

const a_isOccupied = async (promise) => {
  const statusCode = await promise
  if (statusCode === 409) {
    const res = locator($dom.inputEm)
    res.errorType = "occupiedError"
    return res
  }
  if (statusCode === 200) {
    return true
  }
}

const a_printError = async (promise) => {
  if (typeof (await promise) === "object") {
    printError(await promise)
    return false
  }
  if ((await promise) === true) return true
}

const a_goToFolder = async (promise) => {
  const res = await promise;
  res ? location.href = "/folder.html" : null;
}

export const api_checkEmail = pipe(
  locator,
  isError,
  allSave,
  valueToData('email'),
  api_request(checkEmailURL, "POST"),
  // 비동기 작동시작
  a_getStatus,
  a_isOccupied,
  a_printError,
  a_goToFolder
)