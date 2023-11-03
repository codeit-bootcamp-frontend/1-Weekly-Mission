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
    areaLabel: "공유 버튼",
  },
  {
    id: "2",
    title: "이름 변경",
    imageSource: trashIconSrc,
    areaLabel: "이름 변경 버튼",
  },
  {
    id: "3",
    title: "삭제",
    imageSource: penIconSrc,
    areaLabel: "삭제 버튼",
  },
];

export default function FolderHeader({ folderTitle }) {
  return (
    <S.FolderHeader>
      <S.FolderTitle>{folderTitle}</S.FolderTitle>

      {folderTitle !== ENTIRE_LINK_FOLDER_NAME && (
        <S.ButtonList>
          {BUTTON_LIST.map((buttonItem) => {
            const { id, areaLabel, imageSource, title } = buttonItem;
            return (
              <li key={id}>
                <S.ButtonItem area-label={areaLabel}>
                  <S.ButtonImage
                    src={imageSource}
                    alt={`${areaLabel} 아이콘`}
                  />
                  <S.ButtonTitle>{title}</S.ButtonTitle>
                </S.ButtonItem>
              </li>
            );
          })}
        </S.ButtonList>
      )}
    </S.FolderHeader>
  );
}
