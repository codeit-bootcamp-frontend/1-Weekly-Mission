import { useQuery } from "@tanstack/react-query";
import LinkCardList from "src/components/Card/LinkCardList";
import AddLinkBar from "src/components/Link/AddLinkBar";
import Search from "src/components/Search";
import QUERY_KEYS from "src/constants/queryKeys";
import { getUserFolderList } from "src/libs/apis/folder";
import { styled } from "styled-components";

function Folder() {
  // const { data } = useQuery<UserFolder[]>({
  //   queryKey: [QUERY_KEYS.folder],
  //   queryFn: getUserFolderList,
  // });

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledHeaderInWrapper>
          <AddLinkBar />
        </StyledHeaderInWrapper>
      </StyledHeader>
      <StyledItemWrapper>
        <StyledItemInWrapper>
          <Search />
          <StyledCardListWrapper>
            <LinkCardList />
          </StyledCardListWrapper>
        </StyledItemInWrapper>
      </StyledItemWrapper>
    </StyledWrapper>
  );
}

export default Folder;

const StyledWrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 16rem;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.blueBackground};
  min-height: 17rem;
  padding-bottom: 4.5rem;
`;

const StyledHeaderInWrapper = styled.div`
  width: 63%;
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
