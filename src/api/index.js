import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_API,

  headers: {
    accept: "application/json",
  },
});

export default request;
