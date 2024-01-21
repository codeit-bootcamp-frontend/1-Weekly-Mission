import { DOMAIN_URL, headers } from "@/common/constants";
import { EmailData } from "@/types/form";

export async function checkEmail(email: EmailData) {
  const res = await fetch(`${DOMAIN_URL}/users/check-email`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(email),
  });

  return await res.json();
}
