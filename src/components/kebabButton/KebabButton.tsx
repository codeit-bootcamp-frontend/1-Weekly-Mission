import React from "react";
import "./kebabButton.css";
import kebabIcon from "../../assets/common/kebab.svg";
import Popover from "../popover/Popover";
import { FolderName } from "../../types/types";

interface KebabButtonProps {
  onClick: () => void;
  isPopoverOpen: boolean;
  url: string;
  folders: FolderName[];
}

export default function KebabButton({
  onClick,
  isPopoverOpen,
  url,
  folders,
}: KebabButtonProps) {
  return (
    <div className="kebab-container">
      <button type="button" className="kebab-button" onClick={onClick}>
        <img src={kebabIcon} alt="kebab-icon" className="kebab-icon" />
      </button>
      {isPopoverOpen && <Popover url={url} folders={folders} />}
    </div>
  );
}
