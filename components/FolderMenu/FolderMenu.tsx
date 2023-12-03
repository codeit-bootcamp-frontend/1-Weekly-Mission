import * as S from "./FolderMenu.styled";
import Image from "next/image";
import addIcon from "@/src/assets/images/addIcon.svg";
import shareIcon from "@/src/assets/images/shareIcon.svg";
import penIcon from "@/src/assets/images/penIcon.svg";
import deleteIcon from "@/src/assets/images/deleteIcon.svg";
import { useEffect, useState } from 'react';
import axiosInstance from '@/lib/axios';

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

type FoldersData = {
  id: number,
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  }
}

export default function FolderMenu() {
  const [folders, setFolders] = useState<FoldersData[]>([]);
  const [folderName, setFolderName] = useState('전체');

  // 폴더 목록에 필요한 데이터 받아오기
  const getFolders = async () => {
    const res = await axiosInstance.get('/users/1/folders');
    const { data } = res?.data;
    setFolders(data);
  }

  useEffect(() => {
    getFolders();
  }, []);

  const handleChangeFolderName = (e: React.MouseEvent<HTMLLIElement>) => {
    setFolderName(e.currentTarget.innerText);
  }

  const handleClickAllfolder= (e: React.MouseEvent<HTMLLIElement>) => {
    setFolderName(e.currentTarget.innerText);

  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.FolderList>
          <S.Folder onClick={handleClickAllfolder}>전체</S.Folder>
          {folders.map((folder) => 
            <S.Folder key={folder.id} onClick={handleChangeFolderName}>{folder.name}</S.Folder>
          )}
        </S.FolderList>
        <S.AddFolderButton>
          폴더 추가
          <Image src={addIcon} alt="폴더 추가하기" width={16} height={16} />
        </S.AddFolderButton>
      </S.Wrapper>
      <S.FolderHeader>
        <S.FolderName>{folderName}</S.FolderName>
        <S.FolderOptionList>
          <FolderOption src={shareIcon}>공유</FolderOption>
          <FolderOption src={penIcon}>이름 변경</FolderOption>
          <FolderOption src={deleteIcon}>삭제</FolderOption>
        </S.FolderOptionList>
      </S.FolderHeader>
    </S.Container>
  );
}
