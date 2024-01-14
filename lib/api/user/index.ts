import { ApiMapper } from "@/lib/apiMapper";
import request from "@/lib/axios";

export const getUsers = async () => {
  const response = await request.get(`${ApiMapper.user.get.GET_USERS}`, {
    type: "auth",
  });

  return response.data[0];
};

export const getUsersId = async (id: number) => {
  const response = await request.get(`${ApiMapper.user.get.GET_USERS}/${id}`);

  return response.data[0];
};
