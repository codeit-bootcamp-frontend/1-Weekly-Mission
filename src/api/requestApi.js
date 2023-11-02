import axios from "axios";
import { PROFILE_FAIL, FOLDER_FAIL, FOLDER_DATA_FAIL } from "../component/ErrorMessage";

async function RequestAPI(endpoint) {
  const URL = "https://bootcamp-api.codeit.kr/api/";

  const response = await axios.get(`${URL}${endpoint}`);
  return response
}

async function profileRequestApi(endpoint) {
  let profile;
  try{
    profile = await RequestAPI(endpoint);
    return profile.data.data[0]
  }catch(error){
    throw new Error(`${PROFILE_FAIL}`)
  }
  
}

async function folderRequestApi(endpoint) {
  let result;
  try{
    result = await RequestAPI(endpoint);
    return result.data.folder
  }catch(error){
    throw new Error(`${FOLDER_FAIL}`)
  }
}

async function folderDataRequestApi(endpoint){
  let result;
  try{
    result = await RequestAPI(endpoint);
    return result.data;
  }catch(error){
    throw new Error(`${FOLDER_DATA_FAIL}`)
  }
}
export { profileRequestApi, folderRequestApi, folderDataRequestApi };
