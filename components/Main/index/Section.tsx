import { StyledImage, StyledSection, Text, Title } from "@/components/Main/index/Section.styled";

const TEXT = {
  link: ["", "원하는 링크", "를 저장하세요", "나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요."],
  folder: ["링크를 폴더로", "관리", "하세요", "나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다."],
  share: [
    "저장한 링크를",
    "공유",
    "해 보세요",
    "여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.",
  ],
  search: ["저장한 링크를", "검색", "해 보세요", "중요한 정보들을 검색으로 쉽게 찾아보세요."],
};

interface Isection {
  $reverse?: boolean;
  $contents: Text;
}

export default function Section({ $reverse = false, $contents }: Isection) {
  return (
    <>
      <StyledSection $reverse={$reverse}>
        <StyledImage $reverse={$reverse} width={1} height={1} src={`index/section_${$contents}.svg`} alt={`${$contents} 기능 예시 이미지`} />
        <Title $contents={$contents}>
          {TEXT[$contents][0]}
          <span>{TEXT[$contents][1]}</span>
          {TEXT[$contents][2]}
        </Title>
        <Text>{TEXT[$contents][3]}</Text>
      </StyledSection>
    </>
  );
}
