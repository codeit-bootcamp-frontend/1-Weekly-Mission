import requestAPI from "../api";

//np
const postCheckEmail = async (email: string) => {
  const data = { email };

  const { response } = await requestAPI(`check-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.status === 409;
};

export default postCheckEmail;
