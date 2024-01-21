import { DOMAIN_URL, headers } from "@/common/constants";
import { SubmitFormData } from "@/types/form";

export async function signupUser(userData: SubmitFormData) {
  const res = await fetch(`${DOMAIN_URL}/auth/sign-up`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(userData),
  });
  return await res.json();
}
