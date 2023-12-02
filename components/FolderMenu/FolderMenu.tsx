import * as S from "./FolderMenu.styled";
import Image from "next/image";
import addIcon from "@/src/assets/images/addIcon.svg";
import shareIcon from "@/src/assets/images/shareIcon.svg";
import penIcon from "@/src/assets/images/penIcon.svg";
import deleteIcon from "@/src/assets/images/deleteIcon.svg";

type FolderOptionProps = {
  src: string;
  children: string;
};

export function FolderOption({ src, children }: FolderOptionProps) {
  return (
    <S.FolderOption>
      <Image src={src} width={18} height={18} alt={src} />
      {children}
    </S.FolderOption>
  );
}

export default function FolderMenu() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.FolderList>
          <S.Folder>전체</S.Folder>
          <S.Folder>즐겨찾기</S.Folder>
          <S.Folder>코딩 팁</S.Folder>
          <S.Folder>유용한 글</S.Folder>
          <S.Folder>나만의 장소</S.Folder>
          {/* {data.map((folder) => 
            <S.Folder key={folder.id} onClick={handleFolderName}>{folder.name}</S.Folder>
          )} */}
        </S.FolderList>
        <S.AddFolderButton>
          폴더 추가
          <Image src={addIcon} alt="폴더 추가하기" width={16} height={16} />
        </S.AddFolderButton>
      </S.Wrapper>
      <S.FolderHeader>
        <S.FolderName>폴더 이름</S.FolderName>
        <S.FolderOptionList>
          <FolderOption src={shareIcon}>공유</FolderOption>
          <FolderOption src={penIcon}>이름 변경</FolderOption>
          <FolderOption src={deleteIcon}>삭제</FolderOption>
        </S.FolderOptionList>
      </S.FolderHeader>
    </S.Container>
  );
}
