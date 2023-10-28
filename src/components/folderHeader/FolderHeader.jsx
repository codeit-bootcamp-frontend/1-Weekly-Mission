import * as S from "./folderHeader.style.js";
import shareIcon from "assets/icons/share.svg";
import trashIcon from "assets/icons/trash.svg";
import penIcon from "assets/icons/pen.svg";

const BUTTON_LIST = [
  {
    id: "1",
    title: "공유",
    imageSource: shareIcon,
    imageAlt: "공유 버튼 아이콘",
  },
  {
    id: "2",
    title: "이름 변경",
    imageSource: trashIcon,
    imageAlt: "이름 변경 버튼 아이콘",
  },
  {
    id: "3",
    title: "삭제",
    imageSource: penIcon,
    imageAlt: "삭제 버튼 아이콘",
  },
];

export default function FolderHeader({ folderTitle }) {
  return (
    <S.FolderHeader>
      <S.FolderTitle>{folderTitle}</S.FolderTitle>
      <S.ButtonList>
        {BUTTON_LIST.map((buttonItem) => {
          return (
            <li key={buttonItem.id}>
              <S.ButtonItem>
                <S.ButtonImage
                  src={buttonItem.imageSource}
                  alt={buttonItem.imageAlt}
                />
                <S.ButtonTitle>{buttonItem.title}</S.ButtonTitle>
              </S.ButtonItem>
            </li>
          );
        })}
      </S.ButtonList>
    </S.FolderHeader>
  );
}
