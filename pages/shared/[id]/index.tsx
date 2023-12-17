import SearchImg from "@/public/assets/shared/img_search.png";
import { useCallback, useEffect, useState } from "react";
import {
  CardContainer,
  ContentContainer,
  FolderContentContainer,
  SharedWrapper,
} from "@/styles/sharedStyled";
import { Section } from "@/components/common/commonStyled";
import Image from "next/image";
import request from "@/lib/axios";
import Input from "@/components/input/Input";
import Card from "@/components/card/Card";
import { ApiMapper } from "@/lib/apiMapper";
import { useRouter } from "next/router";

interface User {
  name: string;
  image_source: string;
}

interface CardData {
  id: number;
}

const Shared = () => {
  const [cardData, setCardData] = useState<CardData[]>([]);
  const [user, setUser] = useState<User>();
  const [folderName, setFolderName] = useState<string>("");
  const [searchLinkValue, setSearchLinkValue] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const [userId, setUserId] = useState(null);

  const handleFolder = useCallback(async () => {
    if (id === undefined) return;
    try {
      const result = await request.get(
        `${ApiMapper.folder.get.GET_FOLDER}/${Number(id)}`
      );

      if (result.status === 200) {
        const { data } = result.data;

        setFolderName(data[0].name);
        setUserId(data[0].user_id);
        return;
      }

      throw new Error();
    } catch (e) {
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  }, [id]);

  const handleFolderUser = useCallback(async () => {
    if (!userId) return;
    try {
      const result = await request.get(
        `${ApiMapper.user.get.GET_USERS}/${userId}`
      );

      if (result.status === 200) {
        const { data } = result.data;

        setUser(data[0]);
        return;
      }

      throw new Error();
    } catch (e) {
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  }, [userId]);

  const handleLinks = useCallback(async () => {
    if (!(userId && id)) return;
    try {
      const result = await request.get(`${ApiMapper.link.get.GET_LINKS}`, {
        path: { userId: 1 },
        query: { folderId: id },
      });

      if (result.status === 200) {
        const { data } = result.data;

        setCardData(data);
        return;
      }

      throw new Error();
    } catch (e) {
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요.");
    }
  }, [userId, id]);

  useEffect(() => {
    handleFolder();
  }, [handleFolder]);

  useEffect(() => {
    handleFolderUser();
  }, [handleFolderUser]);

  useEffect(() => {
    handleLinks();
  }, [handleLinks]);

  return (
    <SharedWrapper>
      <Section $bg="var(--background)">
        <ContentContainer $isFolder={false}>
          {user?.image_source && (
            <Image
              id="userProfile"
              src={user?.image_source}
              alt="profileImg"
              width="60"
              height="60"
            />
          )}

          <div id="userName">{user?.name}</div>
          <div id="folderName">{folderName}</div>
        </ContentContainer>
      </Section>
      <Section $bg="#fff">
        <FolderContentContainer $isFolder={false}>
          <Input
            label="searchLink"
            icon={
              <Image src={SearchImg} alt="inputIcon" className="inputIcon" />
            }
            placeholder="링크를 검색해보세요"
            value={searchLinkValue}
            setValue={setSearchLinkValue}
          />

          {cardData.length > 0 ? (
            <CardContainer>
              {cardData?.map((e) => {
                return <Card key={e.id} cardData={e} isFolder={false} />;
              })}
            </CardContainer>
          ) : (
            <div className="noLinkContainer">저장된 링크가 없습니다</div>
          )}
        </FolderContentContainer>
      </Section>
    </SharedWrapper>
  );
};

export default Shared;
