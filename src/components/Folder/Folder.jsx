import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import getSample from "../../api";
import useAsync from "../../Hooks/useAsync";

function Folder() {
  const [data, isLoading, LoadingError, getSampleAsync] = useAsync(() =>
    getSample("folder")
  );

  const folder = data?.folder;
  const name = folder?.name;
  const owner = folder?.owner;
  const links = folder?.links;

  return (
    <>
      <Header name={name} owner={owner} />
      <Main links={links} />
    </>
  );
}

export default Folder;
