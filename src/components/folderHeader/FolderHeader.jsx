import * as S from "./folderHeader.style.js";
import shareIconSrc from "assets/icons/share.svg";
import trashIconSrc from "assets/icons/trash.svg";
import penIconSrc from "assets/icons/pen.svg";
import { ENTIRE_LINK_FOLDER_NAME } from "utils/constants.js";

const BUTTON_LIST = [
  {
    id: "1",
    title: "공유",
    imageSource: shareIconSrc,
    imageAlt: "공유 버튼 아이콘",
  },
  {
    id: "2",
    title: "이름 변경",
    imageSource: trashIconSrc,
    imageAlt: "이름 변경 버튼 아이콘",
  },
  {
    id: "3",
    title: "삭제",
    imageSource: penIconSrc,
    imageAlt: "삭제 버튼 아이콘",
  },
];

export default function FolderHeader({ folderTitle }) {
  return (
    <S.FolderHeader>
      <S.FolderTitle>{folderTitle}</S.FolderTitle>

      {folderTitle !== ENTIRE_LINK_FOLDER_NAME && (
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
      )}
    </S.FolderHeader>
  );
}
