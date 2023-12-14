import axios from "axios";

const apiUrl = "https://bootcamp-api.codeit.kr/api";

export async function getApi(path: string) {
    try {
        const res = await axios.get(`${apiUrl}${path}`);
        if (res.status === 200) {
            return res.data;
        }
    } catch (e) {
        throw new Error("Unknown error");
    }
}

export async function postSignIn(email: string, password: string) {
    try {
        const res = await axios.post(`${apiUrl}/sign-in`, {
            email,
            password,
        });
        if (res.status === 200) {
            return res.data;
        }
    } catch (e) {
        throw new Error("Wrong email, password");
    }
}

export async function checkEmail(email: string) {
    try {
        const res = await axios.post(`${apiUrl}/check-email`, {
            email,
        });
        if (res.status === 200) {
            return res.data;
        }
    } catch (e) {
        throw new Error("Wrong email");
    }
}

export async function postSignUp(email: string, password: string) {
    try {
        const res = await axios.post(`${apiUrl}/sign-up`, {
            email,
            password,
        });
        if (res.status === 200) {
            return res.data;
        }
    } catch (e) {
        throw new Error("Wrong email, password");
    }
}
