import { BaseButton } from "./BaseButton";
import getData from "../services/api";
import "./SortingFolder.css";
import { useEffect, useState } from "react";

const SortingFolder = ({ folderList }) => {
  return (
    <div>
      <BaseButton name={folderList}></BaseButton>
    </div>
  );
};

export default SortingFolder;
