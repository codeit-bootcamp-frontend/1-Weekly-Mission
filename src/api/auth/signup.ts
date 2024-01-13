import { DOMAIN_URL } from "@/common/constants";
import { SubmitFormData } from "@/types/form";

const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function signupUser(userData: SubmitFormData) {
  const res = await fetch(`${DOMAIN_URL}/auth/sign-up`, {
    method: "POST",
    headers,
    body: JSON.stringify(userData),
  });
  return await res.json();
}
