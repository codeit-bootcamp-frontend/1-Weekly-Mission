import axios from "@/pages/api/axios";

export async function signIn(email: string, password: string) {
  try {
    const res = await axios.post("sign-in", {
      email: email,
      password: password,
    });
    if (res.status === 200) {
      console.log(res.data.accessToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function signUp(email: string, password: string) {
  try {
    const res = await axios.post("sign-up", {
      email: email,
      password: password,
    });
    if (res.status === 200) {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function checkEmail(email: string) {
  try {
    const res = await axios.post("check-email", {
      email: email,
    });
    return res.status === 200;
  } catch (error) {
    console.log(error);
    return false;
  }
}
