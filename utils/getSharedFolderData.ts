import axios from "@/pages/api/axios";

async function getSharedFolderData() {
  try {
    const response = await axios.get("sample/folder");
    const body = response.data;
    return body;
  } catch (error) {
    console.log(error);
  }
}

export default getSharedFolderData;
