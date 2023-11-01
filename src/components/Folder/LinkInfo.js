import styled from "styled-components";
import share from "../../images/share.svg";
import change from "../../images/pen.svg";
import deleting from "../../images/delete.svg";

const LinkOptions = [
  { name: "공유", img: share },
  { name: "이름변경", img: change },
  { name: "삭제", img: deleting },
];

function LinkInfo({ folderName }) {
  return (
    <Wrapper>
      <FolderTitle>{folderName ? folderName : "전체"}</FolderTitle>
      <HandleLink $isDisplay={folderName !== "전체"}>
        {LinkOptions.map((option) => {
          return (
            <ContentBox key={option.name}>
              <ContentImg src={option.img} alt={option.name} />
              <ContentTitle>{option.name}</ContentTitle>
            </ContentBox>
          );
        })}
      </HandleLink>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media (max-width: 1123px) {
    width: 700px;
  }
  @media (max-width: 768px) {
    width: 500px;
    flex-direction: column;
  }
`;
const FolderTitle = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
const HandleLink = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  ${({ $isDisplay }) => (!$isDisplay ? "display: none" : "")}
`;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ContentTitle = styled.div`
  color: var(--linkbrary-gray-60, #9fa6b2);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ContentImg = styled.img`
  width: 18px;
  height: 18px;
`;
export default LinkInfo;
