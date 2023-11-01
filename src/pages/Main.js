import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../components/Card";

//이미지
import logo from "../assets/logo.svg";
import profile from "../assets/profile.svg";
import search from "../assets/Search.svg";
import Avatar from "../assets/Avatar.png";

const TotalFrame = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f0f6ff;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 33px 200px;
`;

const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Img = styled.img``;
const ProfileImg = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 12px;
`;

const ProfileName = styled.div`
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const ProfileStarPage = styled.div`
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const HeaderUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0 60px 0;
`;

const MainContainer = styled.div`
  width: 1060px;
  margin: 0 auto;
`;
const MainContent = styled.div`
  width: 1060px;
`;

const SearchContainer = styled.div`
  position: relative;
  padding: 40px 0;
`;
const MainSearch = styled.input`
  display: flex;
  align-items: flex-start;
  width: 1060px;
  height: 54px;
  padding: 15px 44px;
  border: none;
  border-radius: 10px;
  background: #f5f5f5;
  outline: none;
  &::placeholder {
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

const SearchIcon = styled.img`
  position: relative;
  top: -35px;
  left: 20px;
`;
const MainCard = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 340px);
  gap: 25px 20px;
  width: 1060px;
`;
const FooterContainer = styled.div``;
const Main = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://bootcamp-api.codeit.kr/api/sample/folder"
        );
        setInfo(res.data.folder.links);
        console.log(info);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <TotalFrame>
      <HeaderContainer>
        <HeaderTitle>
          <Img src={logo} />
          <HeaderProfile>
            <Img src={profile} />
            Codeit@codeit.com
          </HeaderProfile>
        </HeaderTitle>
        <HeaderUserInfo>
          <ProfileImg src={Avatar} />
          <ProfileName>@코드잇</ProfileName>
          <ProfileStarPage>⭐즐겨찾기</ProfileStarPage>
        </HeaderUserInfo>
      </HeaderContainer>
      <MainContainer>
        <MainContent>
          <SearchContainer>
            <MainSearch placeholder="링크를 검색해보세요." />
            <SearchIcon src={search}></SearchIcon>
          </SearchContainer>
          <MainCard>
            {info.map((data) => (
              <Card
                createdAt={data.createdAt}
                description={data.description}
                imageSource={data.imageSource}
              />
            ))}
          </MainCard>
        </MainContent>
      </MainContainer>
      <FooterContainer></FooterContainer>
    </TotalFrame>
  );
};

export default Main;
