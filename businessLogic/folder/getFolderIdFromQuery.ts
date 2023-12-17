import { GetServerSidePropsContext } from "next";

const getFolderIdFromQuery = (context: GetServerSidePropsContext) => {
  return context.query["folderId"] || "0";
};

export default getFolderIdFromQuery;
