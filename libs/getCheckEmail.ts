import axios from "@/libs/axios";

export default async function getCheckEmail(email: string) {
  let result: undefined;
  await axios
    .post(`/check-email`, {
      email: email,
    })
    .then((response) => {
      console.log(response.data);
      result = response.data;
    })
    .catch((error) => {
      console.log(error.response);
    });
  return result;
}
