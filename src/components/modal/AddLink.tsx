import { MouseEvent, useContext, useState } from "react";
import * as S from "./modalStyles/AddLinkStyles";

import { FolderContext } from "@/context/FolderContext";

import ModalButton from "@/components/button/ModalButton";
import ModalTitle from "./ModalTitle";

interface AddLinkProps {
  link: string;
}

export default function AddLink({ link }: AddLinkProps) {
  const { folderNameList } = useContext(FolderContext);
  const [selected, setSelected] = useState("");

  const handleOption = (e: MouseEvent<HTMLDivElement>) => {
    setSelected(e.currentTarget.id);
  };

  return (
    <S.Container>
      <S.Description>
        <ModalTitle label="폴더 추가" />
        <S.Info>{link}</S.Info>
      </S.Description>
      <S.Contents>
        {folderNameList.map((folder) => (
          <S.Options
            key={folder.name}
            id={folder.name}
            onClick={handleOption}
            $isSelected={selected === folder.name}
          >
            <S.Option>
              <S.Title>{folder.name}</S.Title>
              <S.SubTitle>{`${folder.link.count}개 링크`}</S.SubTitle>
            </S.Option>
            <S.IconCheck />
          </S.Options>
        ))}
      </S.Contents>
      <ModalButton action="change" label="추가하기" />
    </S.Container>
  );
}
