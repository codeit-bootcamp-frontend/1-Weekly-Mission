import { useParams } from "react-router-dom";
import * as S from "./folderTabList.style.js";
import { ENTIRE_LINK_FOLDER_NAME } from "utils/constants.js";

export default function FolderTabList({ folderList }) {
  const { folderId } = useParams();
  return (
    <S.FolderTabList>
      <li>
        <S.FolderNavLink to="/folder" $isActive={!folderId}>
          {ENTIRE_LINK_FOLDER_NAME}
        </S.FolderNavLink>
      </li>
      {folderList.length > 0 &&
        folderList?.map((folder) => {
          return (
            <li key={folder.id}>
              <S.FolderNavLink
                to={`/folder/${folder.id}`}
                $isActive={String(folder.id) === folderId}
              >
                {folder.name}
              </S.FolderNavLink>
            </li>
          );
        })}
    </S.FolderTabList>
  );
}
