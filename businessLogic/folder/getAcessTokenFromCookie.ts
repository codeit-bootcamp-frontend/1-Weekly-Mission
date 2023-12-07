import { GetServerSidePropsContext } from "next";
import { parse } from "path";

const getAccessTokenFromCookies = (context: GetServerSidePropsContext) => {
  const cookies = context.req.headers.cookie;

  let accessToken = "";

  if (cookies) {
    const parsedCookies = parse(cookies);
    const base = parsedCookies.base;
    accessToken = base.slice(12);
  }

  return accessToken;
};

export default getAccessTokenFromCookies;
