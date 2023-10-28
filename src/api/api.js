import request from ".";
import { ApiMapper } from "./apiMapper";

export const getSampleFolder = async () => {
  try {
    const response = await request.get(ApiMapper.sample.get.GET_FOLDER);
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    throw new Error(e);
  }
};

export const getFolder = async () => {
  try {
    const response = await request.get(ApiMapper.folder.get.GET_FOLDER, {
      path: {
        userId: 1,
      },
    });
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

export const getLinks = async (folderId) => {
  try {
    const query = folderId !== 1 ? { folderId: folderId } : null;
    const response = await request.get(ApiMapper.links.get.GET_LINKS, {
      path: {
        userId: 1,
      },
      query: query,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    throw new Error(e);
  }
};
