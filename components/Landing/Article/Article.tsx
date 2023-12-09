import Image from "next/image";
import landingImg1 from "@/public/landing-image1.png";
import landingImg2 from "@/public/landing-image2.png";
import landingImg3 from "@/public/landing-image3.png";
import landingImg4 from "@/public/landing-image4.png";
import * as Styled from "./Article.styled";

const Article = () => {
  return (
    <Styled.Article>
      <Styled.Section>
        <Styled.Title>
          <Styled.TitleGradient_1> 원하는 링크</Styled.TitleGradient_1>를
          저장하세요
        </Styled.Title>
        <Styled.Description>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상,
          <Styled.LineBreak />
          사고 싶은 옷, 기억하고 싶은 모든 것을
          <Styled.LineBreak />한 공간에 저장하세요.
        </Styled.Description>
        <Styled.ContentImageBox>
          <Image
            src={landingImg1}
            alt="링크의 내용이 담긴 카드들"
            fill
            style={{ objectFit: "cover" }}
          />
        </Styled.ContentImageBox>
      </Styled.Section>
      <Styled.Section>
        <Styled.Title>
          링크를 폴더로
          <Styled.TitleGradient_2> 관리</Styled.TitleGradient_2>하세요
        </Styled.Title>
        <Styled.Description>
          나만의 폴더를 무제한으로 만들고
          <Styled.LineBreak />
          다양하게 활용할 수 있습니다.
        </Styled.Description>
        <Styled.ContentImageBox>
          <Image
            src={landingImg2}
            alt="링크의 내용이 담긴 카드들"
            fill
            style={{ objectFit: "cover" }}
          />
        </Styled.ContentImageBox>
      </Styled.Section>
      <Styled.Section>
        <Styled.Title>
          저장한 링크를
          <Styled.TitleGradient_3> 공유</Styled.TitleGradient_3>해 보세요
        </Styled.Title>
        <Styled.Description>
          여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요.
        </Styled.Description>
        <Styled.ContentImageBox>
          <Image
            src={landingImg3}
            alt="링크의 내용이 담긴 카드들"
            fill
            style={{ objectFit: "cover" }}
          />
        </Styled.ContentImageBox>
      </Styled.Section>
      <Styled.Section>
        <Styled.Title>
          저장한 링크를
          <Styled.TitleGradient_4> 검색</Styled.TitleGradient_4>해 보세요
        </Styled.Title>
        <Styled.Description>
          중요한 정보들을 검색으로 쉽게 찾아보세요.
        </Styled.Description>
        <Styled.ContentImageBox>
          <Image
            src={landingImg4}
            alt="링크의 내용이 담긴 카드들"
            fill
            style={{ objectFit: "cover" }}
          />
        </Styled.ContentImageBox>
      </Styled.Section>
    </Styled.Article>
  );
};

export default Article;
