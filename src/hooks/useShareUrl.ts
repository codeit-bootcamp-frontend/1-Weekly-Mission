import { useLocation } from "react-router-dom";

const UseShareUrl = (userId: any, folderId: any) => {
  const location = useLocation().pathname;
  const wholeUrl = window.location.href;
  const hostAddress = wholeUrl.replace(`${location}`, "");
  const shareURL = `${hostAddress}/shared?user=${userId}&folder=${folderId}`;
  return shareURL;
};

export default UseShareUrl;
