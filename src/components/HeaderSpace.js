import styled from "styled-components";

import "../styles/reset.css";

function HeaderSpace({ profiles }) {
  // window.addEventListener("scroll", (e) => {
  //   if (window.scrollY > 300 && window.scrollY < 1100) {
  //     document
  //       .querySelector(".linkAdd-background")
  //       .classList.add("show-bottom");
  //   } else {
  //     document
  //       .querySelector(".linkAdd-background")
  //       .classList.remove("show-bottom");
  //   }
  // });

  return (
    <>
      {profiles !== undefined ? (
        <Header>
          <HeroHeader>
            <CompanyMark>
              <CircleLogo src={profiles.profileImageSource} alt="" />
              <CompanyName>{profiles.name}</CompanyName>
            </CompanyMark>
            <BookMarkWrapper>
              <BookMark>{profiles.title}</BookMark>
            </BookMarkWrapper>
          </HeroHeader>
        </Header>
      ) : null}
    </>
  );
}

const Header = styled.div`
  display: flex;
  width: 1440px;
  padding: 20px 624px 60px 624px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: var(--linkbrary-bg, #f0f6ff);
`;

const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 188px;
  height: 164px;
`;

const CompanyMark = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const CircleLogo = styled.img`
  width: 28px;
  height: 28px;
`;

const CompanyName = styled.span`
  color: var(--text-color-light-mode, #000);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const BookMark = styled.span`
  color: #000;

  text-align: center;

  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
`;

const BookMarkWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default HeaderSpace;
