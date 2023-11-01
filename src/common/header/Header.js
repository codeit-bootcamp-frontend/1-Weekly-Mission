import React from "react";
import Folder from "../../folder/Folder";
import FolderSkeleton from "../../components/skeleton/FolderSkeleton";
import HeaderButton from "../../components/button/HeaderButton";
export default function Header({ data, isLoading }) {
  console.log(data);
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
