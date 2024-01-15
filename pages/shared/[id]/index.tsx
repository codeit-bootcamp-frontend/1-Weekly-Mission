import SearchImg from "@/public/assets/shared/img_search.png";
import { useState } from "react";
import {
  CardContainer,
  ContentContainer,
  FolderContentContainer,
  SharedWrapper,
} from "@/styles/sharedStyled";
import { Section } from "@/components/common/commonStyled";
import Image from "next/image";
import Input from "@/components/input/Input";
import Card from "@/components/card/Card";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getUsersId } from "@/lib/api/user";
import QUERY_KEYS from "@/constants/queryKey";
import { getFoldersId, getLinksId } from "@/lib/api/folder";

interface User {
  name: string;
  image_source: string;
}

interface CardData {
  id: number;
}

const Shared = () => {
  const [searchLinkValue, setSearchLinkValue] = useState("");
  const router = useRouter();
  const { id } = router.query; //folderId

  const { data: folderData, isSuccess: getFoldersSuccess } = useQuery({
    queryKey: [QUERY_KEYS.foldersId, id],
    queryFn: () => getFoldersId(Number(id)),
    enabled: !!id,
  });

  const { data: user, isSuccess: getUsersSuccess } = useQuery<User>({
    queryKey: [QUERY_KEYS.usersId, id],
    queryFn: () => getUsersId(folderData[0].user_id),
    enabled: !!getFoldersSuccess && folderData !== undefined,
  });

  const { data: cardData, isSuccess: getLinksSuccess } = useQuery<CardData[]>({
    queryKey: [QUERY_KEYS.linksId, id],
    queryFn: () => getLinksId(Number(id)),
    enabled: !!id,
  });

  return (
    <SharedWrapper>
      <Section $bg="var(--background)">
        <ContentContainer $isFolder={false}>
          {getUsersSuccess && (
            <>
              {user.image_source && (
                <Image
                  id="userProfile"
                  src={user.image_source}
                  alt="profileImg"
                  width="60"
                  height="60"
                />
              )}
              <div id="userName">{user.name}</div>
              <div id="folderName">{folderData[0].name}</div>
            </>
          )}
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

          {getLinksSuccess && (
            <>
              {cardData.length > 0 ? (
                <CardContainer>
                  {cardData?.map((e) => {
                    return <Card key={e.id} cardData={e} isFolder={false} />;
                  })}
                </CardContainer>
              ) : (
                <div className="noLinkContainer">저장된 링크가 없습니다</div>
              )}
            </>
          )}
        </FolderContentContainer>
      </Section>
    </SharedWrapper>
  );
};

export default Shared;
