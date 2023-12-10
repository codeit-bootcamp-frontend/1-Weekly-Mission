import axios from "@/pages/api/axios";

async function getUserData() {
  try {
    const response = await axios.get("sample/user");
    const body = response.data;
    return body;
  } catch (error) {
    console.log(error);
  }
}

export default getUserData;
