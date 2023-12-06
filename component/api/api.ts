import axios from "axios";

const apiUrl = "https://bootcamp-api.codeit.kr/api";

export default async function getApi(path: string) {
    try {
        const res = await axios.get(`${apiUrl}${path}`);
        if (res.status === 200) {
            return res.data;
        }
    } catch (e) {
        throw new Error("Unknown error");
    }
}
