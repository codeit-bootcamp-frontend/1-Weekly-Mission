import { DOMAIN_URL } from "common/constants/domain";
import { END_POINT } from "common/constants/endpoints";

export async function getUser() {
  const { sample } = END_POINT;
  const res = await fetch(`${DOMAIN_URL}${sample.user}`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

  if (!res) {
    throw new Error("에러가 발생했습니다.");
  }
  const data = await res.json();
  return data;
}
