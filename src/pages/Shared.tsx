import { useQuery } from "@tanstack/react-query";
import FolderCardList from "components/card/FolderCardList";
import SearchBar from "components/search/SearchBar";
import QUERY_KEYS from "constants/queryKeys";
import { getUserSampleFolder } from "libs/apis/folder";
import styled from "styled-components";
import manageStatus from "utils/manageStatus";

function Shared() {
  const { isLoading, isError, data } = useQuery<Folder>({
    queryKey: [QUERY_KEYS.sample.folder],
    queryFn: getUserSampleFolder,
  });

  if (isLoading || isError) {
    return manageStatus({ isLoading, isError });
  }

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
        <StyleItemInWrapper>
          <SearchBar />
          <StyledCardListWrapper>
            <FolderCardList links={data?.folder.links} />
          </StyledCardListWrapper>
        </StyleItemInWrapper>
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
  padding: 56px 256px;

  @media (max-width: 1199px) and (min-width: 375px) {
    padding: 56px 51px;
  }
`;

const StyleItemInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 89%;
  gap: 64px;
`;

const StyledCardListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
`;
