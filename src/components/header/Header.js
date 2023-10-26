import React from "react";
import Folder from "../../folder/Folder";
import FolderSkeleton from "../skeleton/FolderSkeleton";
export default function Header({ data, isLoading }) {
  return (
    <div>
      {!isLoading ? (
        <Folder items={data} isLoading={isLoading} />
      ) : (
        <FolderSkeleton />
      )}
    </div>
  );
}
