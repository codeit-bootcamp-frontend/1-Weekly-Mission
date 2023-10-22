import axios from "axios";
import { API_URL } from "./api";

export const getData = async (pageCount) => {
  try {
    const { data } = await axios.get(
      "/api" + `${API_URL}&perPage=10&currentPage=${pageCount}`
    );
  } catch (err) {
    console.log(err);
  }
};
