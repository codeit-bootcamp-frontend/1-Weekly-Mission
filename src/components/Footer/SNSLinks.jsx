import styled from 'styled-components';

function SNSLinks() {
  return (
    <SNSLinksStyle>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/facebook.svg" alt="facebook 홈페이지로 연결된 facebook 로고" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/twitter.svg" alt="twitter 홈페이지로 연결된 twitter 로고" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/youtube.svg" alt="youtube 홈페이지로 연결된 youtube 로고" />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/images/instagram.svg" alt="instagram 홈페이지로 연결된 instagram 로고" />
      </a>
    </SNSLinksStyle>
  );
}

export default SNSLinks;

const SNSLinksStyle = styled.div`
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
  height: 2rem;
`;
