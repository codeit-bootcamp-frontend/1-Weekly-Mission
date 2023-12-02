import Image from "next/image";
import {
  ContentSection,
  ContentWrapper,
  NoDisplayInPcBr,
  SectionTitleContainer,
  TopSection,
  TopWrapper,
} from "./HomeStyledComponents";
import TopImg from "@/public/assets/home/img_topImg.png";
import SectionImg1 from "@/public/assets/home/img_section1Img.png";
import SectionImg2 from "@/public/assets/home/img_section2Img.png";
import SectionImg3 from "@/public/assets/home/img_section3Img.png";
import SectionImg4 from "@/public/assets/home/img_section4Img.png";
import Link from "next/link";
import DefaultBtn from "@/components/button/DefaultButton";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleLinkAddBtn = () => {
    router.push("/signup");
  };
  return (
    <>
      <TopWrapper>
        <TopSection>
          <div className="mainTitle">
            <span>세상의 모든 정보</span>를 <br />
            쉽게 저장하고
            <NoDisplayInPcBr />
            관리해 보세요
          </div>
          <Link href="/signup">
            <DefaultBtn onClick={handleLinkAddBtn} type="default">
              링크 추가하기
            </DefaultBtn>
          </Link>

          <div className="imgContainer">
            <Image src={TopImg} fill alt="mainTopImg" />
          </div>
        </TopSection>
      </TopWrapper>

      <ContentWrapper>
        <ContentSection>
          <SectionTitleContainer>
            <div className="sectionTitle">
              <span>원하는 링크</span>를
              <br />
              저장하세요
            </div>
            <div className="sectionSubTitle">
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <br />
              사고 싶은 옷, 기억하고 싶은 모든 것을
              <br />한 공간에 저장하세요.
            </div>
          </SectionTitleContainer>

          <div className="imgContainer">
            <Image src={SectionImg1} fill alt="section1Img" />
          </div>
        </ContentSection>

        <ContentSection>
          <div className="imgContainer">
            <Image src={SectionImg2} fill alt="section2Img" />
          </div>

          <SectionTitleContainer>
            <div className="sectionTitle">
              링크를 폴더로 <br />
              <span>관리</span>하세요
            </div>
            <div className="sectionSubTitle">
              나만의 폴더를 무제한으로 만들고
              <br />
              다양하게 활용할 수 있습니다.
            </div>
          </SectionTitleContainer>
        </ContentSection>

        <ContentSection>
          <SectionTitleContainer>
            <div className="sectionTitle">
              저장한 링크를 <br />
              <span>공유</span>해 보세요.
            </div>
            <div className="sectionSubTitle">
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <br />
              공유해 보세요.
            </div>
          </SectionTitleContainer>

          <div className="imgContainer">
            <Image src={SectionImg3} fill alt="section3Img" />
          </div>
        </ContentSection>

        <ContentSection>
          <div className="imgContainer">
            <Image src={SectionImg4} alt="section4Img" fill />
          </div>

          <SectionTitleContainer>
            <div className="sectionTitle">
              저장한 링크를 <br />
              <span>검색</span>해보세요
            </div>
            <div className="sectionSubTitle">
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </div>
          </SectionTitleContainer>
        </ContentSection>
      </ContentWrapper>
    </>
  );
};
export default Home;
