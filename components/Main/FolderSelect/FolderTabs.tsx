import { ButtonAdd, Li, Ul } from "@/components/Main/FolderSelect/FolderTabs.styled";
import { Container } from "@/components/Main/FolderSelect/FolderSelect.styled";
import useData from "@/hooks/useData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TabsProps } from "@/components/Main/FolderSelect/FolderSelect.type";
import { URLS } from "@/constants/path";

export default function FolderTabs({ id, setTitle, handleModal }: TabsProps) {
  const tabs = useData(URLS.FOLDER_CATEGORY, id);
  const [prevSelect, setPrevSelect] = useState<HTMLElement>();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    prevSelect?.classList.remove("active");

    const target = e.target as HTMLLIElement;

    setPrevSelect(target);

    target.classList.add("active");

    if (!target.textContent) return;
    setTitle(target.textContent);
  };

  return (
    <Container>
      <Ul>
        <Link href="/folder" onClick={handleClick}>
          <Li>전체</Li>
        </Link>
        {tabs?.data?.map((tab) => (
          <Link href={`?folderId=${tab.id}`} key={tab.id} onClick={handleClick}>
            <Li>{tab.name}</Li>
          </Link>
        ))}
      </Ul>
      <ButtonAdd onClick={handleModal}>
        폴더 추가
        <Image width={16} height={16} src="/add.svg" alt="폴더에 추가하기" />
      </ButtonAdd>
    </Container>
  );
}
