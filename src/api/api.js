import request from ".";
import { ApiMapper } from "./apiMapper";

export const getFolder = async () => {
  try {
    const response = await request.get(ApiMapper.sample.get.GET_FOLDER);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    throw new Error(e);
  }
};

export const getUser = async () => {
  try {
    const response = await request.get(ApiMapper.sample.get.GET_USER);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    throw new Error(e);
  }
};
