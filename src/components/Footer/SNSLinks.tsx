import styled from 'styled-components';
import facebook_icon from '../../assets/svg/facebook.svg';
import twitter_icon from '../../assets/svg/twitter.svg';
import youtube_icon from '../../assets/svg/youtube.svg';
import instagram_icon from '../../assets/svg/instagram.svg';
import SNSLink from './SNSLink';

const SNS_LINKS = [
  {
    id: 1,
    url: 'https://www.facebook.com/',
    icon: facebook_icon,
    alt: 'facebook',
  },
  {
    id: 2,
    url: 'https://twitter.com/',
    icon: twitter_icon,
    alt: 'twitter',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/',
    icon: youtube_icon,
    alt: 'youtube',
  },
  {
    id: 4,
    url: 'https://www.instagram.com/',
    icon: instagram_icon,
    alt: 'instagram',
  },
];

function SNSLinks() {
  return (
    <SNSLinksStyle>
      {SNS_LINKS.map((snsLink) => {
        return (
          <SNSLink snsLink={snsLink} key={snsLink.id}/>
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
