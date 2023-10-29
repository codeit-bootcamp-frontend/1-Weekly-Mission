import React from "react";
import Folder from "../../folder/Folder";
import FolderSkeleton from "../skeleton/FolderSkeleton";
import HeaderButton from "../button/HeaderButton";
export default function Header({ data, isLoading }) {
  if (data) {
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
  return <HeaderButton />;
}
