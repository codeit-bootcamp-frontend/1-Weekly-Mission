import { NextRouter } from "next/router";

const redirectIfAccessToken = (router: NextRouter) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    router.push("/folder");
  }
};

export default redirectIfAccessToken;
