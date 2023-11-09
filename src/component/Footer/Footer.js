import { ThemeProvider } from "styled-components";
import SNS from "./SNS.js";
import socialMedia from "./SocialMedia.js";
import * as S from "./Footer.style.js";
import theme from "../../css/display.js";

export function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <S.Box>
          <S.Span>codeit - 2023</S.Span>
          <S.LinkContainer>
            <S.Links to="privacy.html">
              Privacy Policy
            </S.Links>
            <S.Links to="faq.html">
              FAQ
            </S.Links>
          </S.LinkContainer>
          <S.SnsContainer>
            {socialMedia.map((sns, index) => (
              <SNS key={index} alt={sns.name} url={sns.url} icon={sns.icon} />
            ))}
          </S.SnsContainer>
        </S.Box>
      </S.Container>
    </ThemeProvider>
  );
}