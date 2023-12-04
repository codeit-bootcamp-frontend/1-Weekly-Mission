import Image from "next/image";
import styled from "styled-components";

import { SampleFolderItem } from "@/types/api";
import Searchbar from "@/components/Searchbar/Searchbar";
import CardList from "@/components/Card/CardList";

interface OwnerProps {
  items: {
    name: string;
    owner: {
      name: string;
      profileImageSource: string;
    };
  };
}

interface ShareContainerProps {
  shareData: {
    folder: SampleFolderItem;
  };
  handleSearchbar: (value: string) => void;
}

const Owner = ({ items }: OwnerProps) => {
  const { name, owner } = items;

  return (
    <StyledOwnerContainerBox>
      <StyledOwnerInnerContainerBox>
        <Image
          src={owner.profileImageSource}
          alt="User Profile"
          width={60}
          height={60}
        />
        <StyledOwnerNameParagraph>@{owner.name}</StyledOwnerNameParagraph>
        <StyledOwnerFolderParagraph>{name}</StyledOwnerFolderParagraph>
      </StyledOwnerInnerContainerBox>
    </StyledOwnerContainerBox>
  );
};

const ShareContainer = ({
  shareData,
  handleSearchbar,
}: ShareContainerProps) => {
  const { folder } = shareData;
  return (
    <>
      <Owner items={folder} />
      <StyledShareBox>
        <Searchbar handleSearch={handleSearchbar} />
        <CardList cards={folder?.links} />
      </StyledShareBox>
    </>
  );
};

export default ShareContainer;

const StyledShareBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 4rem auto;
  padding: 0 clamp(3.2rem, 5%, 19rem);
`;

const StyledOwnerContainerBox = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0 6rem;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background: var(--linkbrary-bg, #f0f6ff);
`;

const StyledOwnerInnerContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    height: 6rem;
    border-radius: 4.7rem;
    object-fit: cover;
  }
`;

const StyledOwnerNameParagraph = styled.p`
  color: var(--text-color-light-mode, #000);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.4rem;
`;

const StyledOwnerFolderParagraph = styled.p`
  color: #000;
  text-align: center;
  vertical-align: middle;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
