import linkIcon from 'assets/link.svg';
import facebookIcon from 'assets/facebook.svg';
import kakaoIcon from 'assets/Kakao.svg';
import * as handle from 'utils/shareSNS.js';
import * as Style from "./ShareOnSns.style.js";

export default function ShareOnSns() {
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
    <>
      <Style.Container>
        <Style.Box>
          <Style.ImgBox>
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
          <Style.ImgBox>
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
          <Style.ImgBox>
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
    </>
  );
}


 
