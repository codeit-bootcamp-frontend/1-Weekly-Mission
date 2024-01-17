import { ButtonControl, H1, Wrapper } from "@/components/Main/FolderSelect/FolderController.styled";
import { Container } from "@/components/Main/FolderSelect/FolderSelect.styled";
import { ControllerProps } from "@/components/Main/FolderSelect/FolderSelect.type";
import axiosInstance from "@/lib/axios";
import { getCookie } from "@/utils/getCookie";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { FolderData } from "@/utils/getData.type";

export default function FolderController({ handleModal }: ControllerProps) {
  const router = useRouter();
  const folderId = router.query.folderId ?? null;
  const folderFetch = useQuery({
    queryKey: ["folderData"],
    queryFn: async () => {
      const res = await axiosInstance.get("/folders", { headers: { Authorization: getCookie("accessToken") } });
      return res.data;
    },
  });

  const title = folderId ? folderFetch.data.find((v: FolderData) => v.id === Number(folderId))?.name : "전체";

  return (
    <Container>
      <H1>{title}</H1>
      <Wrapper title={title}>
        <ButtonControl onClick={handleModal}>
          <Image width={20} height={20} src="/share.svg" alt="폴더 공유하기" />
          공유
        </ButtonControl>
        <ButtonControl onClick={handleModal}>
          <Image width={20} height={20} src="/edit.svg" alt="폴더 이름 바꾸기" />
          이름 변경
        </ButtonControl>
        <ButtonControl onClick={handleModal}>
          <Image width={20} height={20} src="/delete.svg" alt="폴더 삭제하기" />
          삭제
        </ButtonControl>
      </Wrapper>
    </Container>
  );
}
