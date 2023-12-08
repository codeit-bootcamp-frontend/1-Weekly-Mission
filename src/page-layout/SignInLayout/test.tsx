import { axiosInstance } from "@/src/sharing/util";

async function handleSignIn() {
  const res = await axiosInstance.get("sign-in");
  console.log(res);
  return res;
}

console.log(handleSignIn());
