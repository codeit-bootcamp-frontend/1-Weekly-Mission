import { DOMAIN_URL } from "@/common/constants";
import { EmailData } from "@/types/form";

const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function checkEmail(email: EmailData) {
  const res = await fetch(`${DOMAIN_URL}/users/check-email`, {
    method: "POST",
    headers,
    body: JSON.stringify(email),
  });

  const data = await res.json();
  return data;
}
