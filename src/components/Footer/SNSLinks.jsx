import styled from 'styled-components';
import facebook_icon from '../../assets/svg/facebook.svg';
import twitter_icon from '../../assets/svg/twitter.svg';
import youtube_icon from '../../assets/svg/youtube.svg';
import instagram_icon from '../../assets/svg/instagram.svg';

const snsLinkArray = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: facebook_icon,
    alt: 'facebook'
  },
  {
    id: 2,
    url: "https://twitter.com/",
    icon: twitter_icon,
    alt: 'facebook'
  },
  {
    id: 3,
    url: "https://www.youtube.com/",
    icon: youtube_icon,
    alt: 'facebook'
  },
  {
    id: 4,
    url: "https://www.instagram.com/",
    icon: instagram_icon,
    alt: 'facebook'
  }
];

function SNSLinks() {
  return (
    <SNSLinksStyle>
      {snsLinkArray.map((snsLink) => {
        return (
          <a href={snsLink.url} target='_blank' rel='noopener noreferrer'>
            <img src={snsLink.icon} alt={`${snsLink.alt} 홈페이지로 연결된 ${snsLink.alt} 로고`} />
          </a>
        );
      })}
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
