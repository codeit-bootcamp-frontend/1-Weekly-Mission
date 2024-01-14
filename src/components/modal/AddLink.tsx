import { useEffect, useState } from "react";
import { mutate } from "swr";
import * as S from "./modalStyles/AddLinkStyles";

import ModalButton from "@/components/button/ModalButton";
import ModalTitle from "./ModalTitle";

import { Folder } from "@/types/folder";
import { DOMAIN_URL } from "@/common/constants";
import { useFolder } from "@/hooks/useFolder";

interface AddLinkProps {
  link: string;
  onClose: () => void;
}

export default function AddLink({ link, onClose }: AddLinkProps) {
  const [accessToken, setAccessToken] = useState<string | null>();
  const [selected, setSelected] = useState("");
  const [linkData, setLinkData] = useState({
    url: link,
    folderId: 0,
  });

  const fetcher = async (url: string, data: { url: string; folderId: number }) => {
    if (accessToken) {
      return await fetch(`${DOMAIN_URL}${url}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    }
  };

  const { data: foldersData } = useFolder("/folders");
  const folders: Folder[] = foldersData ?? [];

  const handleOption = (folder: Folder) => () => {
    setSelected(folder.name);
    setLinkData({
      ...linkData,
      folderId: folder.id,
    });
  };

  const handleAddLink = async () => {
    try {
      await fetcher("/links", linkData);
      mutate("/links");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, [accessToken]);

  return (
    <S.Container>
      <S.Description>
        <ModalTitle label="폴더 추가" />
        <S.Info>{link}</S.Info>
      </S.Description>
      <S.Contents>
        {folders.map((folder) => (
          <S.Options
            key={folder.id}
            onClick={handleOption(folder)}
            $isSelected={selected === folder.name}
          >
            <S.Option>
              <S.Title>{folder.name}</S.Title>
              <S.SubTitle>{`${folder.link_count}개 링크`}</S.SubTitle>
            </S.Option>
            <S.IconCheck />
          </S.Options>
        ))}
      </S.Contents>
      <ModalButton action="change" label="추가하기" onClick={handleAddLink} />
    </S.Container>
  );
}
