import axios from '../../node_modules/axios/dist/esm/axios.min.js'
import { API_BASE_URL } from '../constants/common.js'

export const instance = axios.create({
  baseURL: API_BASE_URL,
})

function responsefulfilled(res) {
  if (200 <= res.status && res.status < 300) {
    return res.data
  }
  return Promise.reject(res.data)
}

function responseRejected(error) {
  return error
}

// response 인터셉터
instance.interceptors.response.use(responsefulfilled, responseRejected)
