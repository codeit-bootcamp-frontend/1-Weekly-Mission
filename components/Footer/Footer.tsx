import { forwardRef } from 'react';
import { SNS, socialMedia } from '@/components';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/display';
import * as S from './Footer.style';

interface Props {
  ref: React.Ref<HTMLDivElement>;
}

function Footer({ props, ref }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <S.Container ref={ref}>
        <S.Box>
          <S.Span>codeit - 2023</S.Span>
          <S.LinkContainer>
            <S.Links href="privacy.html">Privacy Policy</S.Links>
            <S.Links href="faq.html">FAQ</S.Links>
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

export default forwardRef(Footer);
