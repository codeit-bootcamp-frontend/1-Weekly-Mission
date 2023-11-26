import "./header.css";
import { FolderInfo } from "../../types/types";

interface FolderInfoProps {
  folderInfo: FolderInfo | undefined;
}

export default function Header({ folderInfo }: FolderInfoProps) {
  return (
    <header className="header">
      <div className="header-user-info-box">
        <img
          src={folderInfo?.folder.owner.profileImageSource}
          alt="profile"
          className="header-profile-image"
        />
        <span className="header-user-name">
          {folderInfo?.folder.owner.name}
        </span>
      </div>
      <span className="header-folder-name">{folderInfo?.folder.name}</span>
    </header>
  );
}
