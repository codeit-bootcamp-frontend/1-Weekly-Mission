import iconLink from "../assets/img/icon-link-primary.svg";
import { CTASmall } from "./CTASmall";
import * as Styled from "../style/LinkBar";

function AddLinkBar() {
  return (
    <Styled.LargeLinkDiv>
      <Styled.LinkImg size={"large"} src={iconLink} alt="search" />
      <Styled.LinkInput placeholder="링크를 추가해 보세요." />
      <CTASmall>추가하기</CTASmall>
    </Styled.LargeLinkDiv>
  );
}

export default AddLinkBar;
