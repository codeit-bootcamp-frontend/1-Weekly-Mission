import { GetServerSidePropsContext } from "next";

export const getAccessToken = (context: GetServerSidePropsContext) => {
  const accessToken = context.req.cookies["accessToken"];

  return accessToken ?? "";
};
