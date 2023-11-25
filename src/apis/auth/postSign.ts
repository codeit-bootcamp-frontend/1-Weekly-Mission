import requestAPI from "../api";

type Data = {
  email: string;
  password: string;
};

const postSign = async (signType: string, data: Data) => {
  const { response, result } = await requestAPI(`sign-${signType}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    const {
      data: { accessToken, refreshToken },
    } = await result;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  }

  return response;
};

export default postSign;
