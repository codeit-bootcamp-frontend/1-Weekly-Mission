import { useQuery } from "@tanstack/react-query";
import LinkCardList from "src/components/Card/LinkCardList";
import Search from "src/components/Search";
import QUERY_KEYS from "src/constants/queryKeys";
import { getUserSampleFolder } from "src/libs/apis/folder";
import styled from "styled-components";

function Shared() {
  const { data } = useQuery<Folder>({
    queryKey: [QUERY_KEYS.sample.folder],
    queryFn: getUserSampleFolder,
  });

  return (
    <>
      <StyledHeader>
        <StyledGapWrapper>
          <StyledProfileImageWrapper>
            <StyledProfileImage
              src={data?.folder.owner.profileImageSource}
              alt={data?.folder.owner.name}
            />
          </StyledProfileImageWrapper>
          <StyledName>@{data?.folder.owner.name}</StyledName>
        </StyledGapWrapper>
        <StyledBookmark>{data?.folder.owner.name}</StyledBookmark>
      </StyledHeader>
      <StyledItemWrapper>
        <StyledItemInWrapper>
          <Search />
          <StyledCardListWrapper>
            <LinkCardList />
          </StyledCardListWrapper>
        </StyledItemInWrapper>
      </StyledItemWrapper>
    </>
  );
}

export default Shared;

const StyledGapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.blueBackground};
  min-height: 272px;
  padding-bottom: 72px;
`;

const StyledProfileImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledName = styled.span`
  font-size: 1.3rem;
`;

const StyledBookmark = styled.h1`
  font-size: 3rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 0.6px;
  margin-top: 27px;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  width: 100%;
  min-height: 100%;
  padding: 56px 80px;

  @media (max-width: 1199px) and (min-width: 375px) {
    padding: 56px 51px;
  }
`;

const StyledItemInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 64px;
`;

const StyledCardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;
