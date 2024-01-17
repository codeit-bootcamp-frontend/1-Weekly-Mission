import { Container } from "@/components/Main/FolderSelect/FolderSelect.styled";
import { TabsProps } from "@/components/Main/FolderSelect/FolderSelect.type";
import { ButtonAdd, Li, Ul } from "@/components/Main/FolderSelect/FolderTabs.styled";
import axiosInstance from "@/lib/axios";
import { getCookie } from "@/utils/getCookie";
import { FolderData } from "@/utils/getData.type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FolderTabs({ handleModal }: TabsProps) {
  const router = useRouter();
  const folderId = router.query.folderId;

  const folderQuery = useQuery({
    queryKey: ["folderData"],
    queryFn: async () => {
      const accessToken = getCookie("accessToken");
      const res = await axiosInstance.get("/folders", { headers: { Authorization: accessToken } });
      return res.data;
    },
  });
  const folderData = folderQuery.data ?? [];

  return (
    <Container>
      <Ul>
        <Link href="/folder">
          <Li className={folderId ? "" : "active"}>전체</Li>
        </Link>
        {folderData.map((tab: FolderData) => (
          <Link href={`?folderId=${tab.id}`} key={tab.id}>
            <Li className={tab.id === Number(folderId) ? "active" : ""}>{tab.name}</Li>
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
