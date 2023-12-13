import axios from "@/pages/api/axios";

async function getFolderList(userID: number | undefined) {
  try {
    const response = userID
      ? await axios.get(`users/${userID}/folders`)
      : await axios.get(`folders`);

    const body = response.data;
    return body;
  } catch (error) {
    console.log(`API ERROR : ${userID} 유저의 폴더 리스트를 가져오는데 실패`);
  }
}

async function getAllLinks(userID: number) {
  try {
    const response = await axios.get(`users/${userID}/links`);
    const body = response.data;
    console.log(body);
    return body;
  } catch (error) {
    console.log(`API ERROR : ${userID} 유저의 전체 링크를 가져오는데 실패`);
  }
}

async function getFolderLinks(userID: number, folderID?: number) {
  try {
    const response =
      folderID !== 0
        ? await axios.get(`users/${userID}/links?folderId=${folderID}`)
        : await axios.get(`users/${userID}/links`);
    const body = response.data;
    return body;
  } catch (error) {
    console.log(`API ERROR : ${userID} 유저의 ${folderID}를 가져오는데 실패`);
  }
}

export { getFolderList, getAllLinks, getFolderLinks };
