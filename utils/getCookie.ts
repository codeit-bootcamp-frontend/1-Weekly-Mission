import { GetServerSidePropsContext } from "next";

export const getCookie = (name: string) => {
  if (typeof window !== "undefined") {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
};

export const getServerCookie = (context: GetServerSidePropsContext, name: string) => {
  if (context.req.headers.cookie) {
    let matches = context.req.headers.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
};
