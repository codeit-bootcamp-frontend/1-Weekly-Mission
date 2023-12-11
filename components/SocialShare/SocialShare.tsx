import linkIcon from '@/src/assets/link.svg';
import facebookIcon from '@/src/assets/facebook.svg';
import kakaoIcon from '@/src/assets/Kakao.svg';
import * as handle from '@/public/shareSNS.js';
import * as Style from './SocialShare.style';

export default function SocialShare() {
  const sharedUrl = window.location.href;

  const handleCopyUrl = async (url) => {
    await navigator.clipboard.writeText(url);
  };

  const handleFacebook = (url) => {
    handle.shareFacebook(url);
  };

  const handleKakao = (url) => {
    handle.shareKakao(url);
  };

  return (
    <Style.Container>
      <Style.Box>
        <Style.ImgBox color='#fee500'>
          <Style.Img
            src={kakaoIcon}
            onClick={() => {
              handleKakao(sharedUrl);
            }}
          />
        </Style.ImgBox>
        카카오톡
      </Style.Box>
      <Style.Box>
        <Style.ImgBox color='#1877fe'>
          <Style.Img
            src={facebookIcon}
            onClick={() => {
              handleFacebook(sharedUrl);
            }}
          />
        </Style.ImgBox>
        페이스북
      </Style.Box>
      <Style.Box>
        <Style.ImgBox color='rgba(157, 157, 157, 0.04)'>
          <Style.Img
            src={linkIcon}
            onClick={() => {
              handleCopyUrl(sharedUrl);
            }}
          />
        </Style.ImgBox>
        링크 복사
      </Style.Box>
    </Style.Container>
  );
}
