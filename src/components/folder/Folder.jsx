import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Folder() {
  const params = useParams();
  const folderId = params.folderId;
  // console.log(folderId);
  useEffect(() => {}, []);

  return <></>;
}
