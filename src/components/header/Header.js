import React from "react";
import Folder from "../../folder/Folder";
import FolderSkeleton from "../skeleton/FolderSkeleton";
// 얘 왜 빨간거 뜨냥
import HeaderButton from "../button/HeaderButton";
export default function Header({ data, isLoading }) {
  if (data && isLoading) {
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

  // return (
  //   <div>
  //     {!isLoading ? (
  //       <Folder items={data} isLoading={isLoading} />
  //     ) : (
  //       <FolderSkeleton />
  //     )}
  //   </div>
  // );
}
