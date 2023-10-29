import { useAsync } from "../util/useAsync";
import { axiosInstance } from "../util/axiosInstance";
import axios from "axios";
export const useGetUser = ({ userId }) => {
  //1. userId를 받아 get 요청
  const getUser = (userId) => axiosInstance.get(`users/${userId}`);
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
