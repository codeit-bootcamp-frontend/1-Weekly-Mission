import { GetServerSidePropsContext } from "next";

const getFolderIdFromQuery = (context: GetServerSidePropsContext) => {
  let folderId: undefined | string | string[];

  if (context.query["folderId"]) {
    folderId = context.query["folderId"] as string;
  } else {
    folderId = "0";
  }

  return folderId;
};

export default getFolderIdFromQuery;
