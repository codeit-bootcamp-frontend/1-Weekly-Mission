import { DOMAIN_URL } from "@/common/constants";

const headers = { "Content-Type": "application/json; charset=utf-8" };

export async function getFolder() {
  const res = await fetch(`${DOMAIN_URL}/api/folders`, {
    headers,
  });

  const data = await res.json();
  return data;
}
