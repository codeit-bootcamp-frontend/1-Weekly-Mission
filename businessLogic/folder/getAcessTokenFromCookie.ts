import { GetServerSidePropsContext } from "next";
import { parse } from "path";

const getAccessTokenFromCookies = (context: GetServerSidePropsContext) => {
  const cookies = context.req.headers.cookie;

  if (!cookies) {
    return "";
  }

  const parsedCookies = parse(cookies);
  const base = parsedCookies.base;
  return base.slice(12);
};

export default getAccessTokenFromCookies;
