import { DOMAIN_URL, headers } from "@/common/constants";
import { SubmitFormData } from "@/types/form";

export async function signinUser(userData: SubmitFormData) {
  const res = await fetch(`${DOMAIN_URL}/auth/sign-in`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userData),
  });
  return await res.json();
}
