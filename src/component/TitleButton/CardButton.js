import { Link} from "react-router-dom";
import * as S from "./CardMenuBar.style.js";

export function CardButton({ folder, folderId}) {
  const { id, name } = folder;
  const path = `/folder/${id}`;

  return (
    <Link to={path}>
      <S.Button active={folderId === String(folder.id)}>
        {name}
      </S.Button>
    </Link>
  );
}
