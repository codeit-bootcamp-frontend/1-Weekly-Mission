import React, { useEffect, useState } from "react";
import { getfoldersData } from "../../api/folder";
import Folder from "../../folder/Folder";
import styles from "./Header.module.css";
import Profile from "../profile/Profile";
import ProfileSkeleton from "../skeleton/ItemSkeleton";
import useFetch from "../../hooks/useFetch";
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
