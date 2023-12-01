import axios from "axios";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,

  headers: {
    accept: "application/json",
  },
});

export default request;
