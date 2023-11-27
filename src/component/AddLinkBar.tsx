import { forwardRef } from "react";
import { CTASmall } from "./CTASmall";
import iconLink from "../assets/img/icon-link-primary.svg";
import * as Styled from "../style/AddLinkBar";
interface Props {
  float?: boolean;
}

const AddLinkBar = forwardRef(
  ({ float }: Props, ref: React.Ref<HTMLDivElement> | null) => {
    const temp = float ? true : false;
    console.log("fixed: " + temp);
    return (
      <Styled.Container $isfixed={temp}>
        <Styled.LinkDiv ref={ref}>
          <Styled.LinkImg src={iconLink} alt="search" />
          <Styled.LinkInput placeholder="링크를 추가해 보세요." />
          <CTASmall>추가하기</CTASmall>
        </Styled.LinkDiv>
      </Styled.Container>
    );
  }
);

export default AddLinkBar;
