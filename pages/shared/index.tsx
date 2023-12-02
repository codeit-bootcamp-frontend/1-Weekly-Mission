import SearchImg from "@/public/assets/shared/img_search.png";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  CardContainer,
  ContentContainer,
  FolderContentContainer,
  SharedWrapper,
} from "./styled";
import { Section } from "@/components/common/commonStyled";
import Image from "next/image";
import request from "@/lib/axios";
import Input from "@/components/input/Input";
import Card from "@/components/card/Card";

interface IUser {
  name: string;
  profileImageSource: string;
}

interface ICardData {
  id: number;
}

const Shared = () => {
  const [cardData, setCardData] = useState<ICardData[]>([]);
  const [user, setUser] = useState<IUser>();
  const [folderName, setFolderName] = useState<string>("");
  const [searchLinkValue, setSearchLinkValue] = useState("");

  const handleFolder = useCallback(async () => {
    const result = await request.get("/api/sample/folder");
    if (!result) return;

    const { folder } = result.data;

    setCardData(folder.links);
    setUser(folder.owner);
    setFolderName(folder.name);
  }, []);

  useEffect(() => {
    handleFolder();
  }, [handleFolder]);

  return (
    <SharedWrapper>
      <Section $bg="var(--background)">
        <ContentContainer $isFolder={false}>
          <Image
            id="userProfile"
            src={user?.profileImageSource!}
            alt="profileImg"
            width="60"
            height="60"
          />
          <div id="userName">{user?.name}</div>
          <div id="folderName">{folderName}</div>
        </ContentContainer>
      </Section>
      <Section $bg="#fff">
        <FolderContentContainer $isFolder={false}>
          <Input
            src={SearchImg}
            placeholder="링크를 검색해보세요"
            value={searchLinkValue}
            setValue={setSearchLinkValue}
          />

          <CardContainer>
            {cardData?.map((e) => {
              return <Card key={e.id} cardData={e} isFolder={false} />;
            })}
          </CardContainer>
        </FolderContentContainer>
      </Section>
    </SharedWrapper>
  );
};

export default Shared;
