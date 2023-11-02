import styled from 'styled-components';
import { SNS_LIST } from 'constants/default';

function Footer() {
  return (
    <Outer>
      <Container>
        <Resources>©codeit - 2023</Resources>
        <TextBox>
          <Text href="/privacy">Privacy Policy</Text>
          <Text href="/faq">FAQ</Text>
        </TextBox>
        <SocialBox>
          {SNS_LIST.map((sns) => (
            <a key={sns.url} href={sns.url} target="_blank" rel="noopener noreferrer">
              <img alt={sns.alt} src={sns.src} />
            </a>
          ))}
        </SocialBox>
      </Container>
    </Outer>
  );
}

export default Footer;

const Outer = styled.footer`
  background: var(--the-julge-black);
  width: 100%;
  height: 160px;
`;

const Container = styled.div`
  padding: 32px 104px 64px 104px;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    padding: 32px 32px 0;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1.5fr 1fr;
    grid-template-areas:
      'p icon'
      'r .';
    row-gap: 60px;
    column-gap: 30px;
  }
`;

const Resources = styled.div`
  color: var(--grey-70);
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 767px) {
    grid-area: r;
  }
`;

const Text = styled.a`
  text-decoration: none;
  color: var(--grey-10);
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;

const TextBox = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 767px) {
    grid-area: p;
  }
`;

const SocialBox = styled.div`
  display: flex;
  gap: 12px;
  @media (max-width: 767px) {
    grid-area: icon;
    justify-content: flex-end;
  }
`;
