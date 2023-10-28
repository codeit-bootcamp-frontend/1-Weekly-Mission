import { useParams } from "react-router-dom";
import * as S from "./folderTabList.style.js";

export default function FolderTabList({ folderList }) {
  const params = useParams();
  const folderId = params.folderId;
  return (
    <S.FolderList>
      <li>
        <S.FolderNavLink to="/folder" $isActive={!folderId}>
          전체
        </S.FolderNavLink>
      </li>
      {folderList?.map((folder) => {
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
    </S.FolderList>
  );
}
