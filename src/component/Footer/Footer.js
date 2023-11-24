import {SNS, socialMedia} from "component";
import { ThemeProvider } from "styled-components";
import theme from "css/display.js";
import * as S from "./Footer.style.js";

export default function Footer() {
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
