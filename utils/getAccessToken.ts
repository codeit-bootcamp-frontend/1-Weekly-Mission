import { GetServerSidePropsContext } from "next";

export const getAccessTokenFromCookie = (
  context: GetServerSidePropsContext
) => {
  const cookieString = context.req.headers.cookie;

  if (!cookieString) return null;

  const cookies = cookieString.split(";");
  const accessTokenCookie = cookies.find((cookie) =>
    cookie.trim().startsWith("accessToken=")
  );

  if (accessTokenCookie) {
    const accessToken = accessTokenCookie.split("=")[1];
    return accessToken;
  }

  return null;
};

export const getAccessTokenFromDocument = (name: string) => {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
