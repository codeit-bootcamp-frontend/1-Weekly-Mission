import { instance } from "src/libs/api";
import { FormValuesType } from "src/types/FormValue";

interface Props {
  email: string;
  password: string;
}

export async function postSignin(auth: Props) {
  const response = await instance.post("/api/sign-in", {
    auth,
  });
  return response;
}

export async function postSignup(auth: FormValuesType) {
  const response = await instance.post<{}, FormValuesType>("/api/sign-up", {
    auth,
  });
  return response;
}
