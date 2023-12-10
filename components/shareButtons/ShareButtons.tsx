import * as S from "@/components/shareButtons/ShareButtons.style";
import { KAKAO_SHARE_DATA, SHARE_LINKS } from "@/constants/constants";
import { useKakaoSdk } from "@/hooks/useKakaoSdk";
import handleCopyClipBoard from "@/utils/handleCopyLink";
import handleFacebookClick from "@/utils/handleFacebookClick";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";

interface ShareLinksProps {
  iconSrc: StaticImageData;
  iconTitle: string;
  shareType: string;
}

const ShareButtons = () => {
  const router = useRouter();
  const currentUrl = `${window.location.origin}${router.asPath}`;

  const { shareKakao } = useKakaoSdk();

  const handleClick = (shareType: string) => {
    switch (shareType) {
      case "kakao":
        shareKakao({ url: currentUrl, ...KAKAO_SHARE_DATA });
        break;
      case "facebook":
        handleFacebookClick(currentUrl);
        break;
      case "copy":
        handleCopyClipBoard(currentUrl);
        break;
    }
  };

  return (
    <S.ShareButtonWrap>
      {SHARE_LINKS.map((share: ShareLinksProps) => (
        <li key={share.iconTitle}>
          <S.ShareButton onClick={() => handleClick(share.shareType)}>
            <S.ShareIcon src={share.iconSrc.src} />
            <S.shareText>{share.iconTitle}</S.shareText>
          </S.ShareButton>
        </li>
      ))}
    </S.ShareButtonWrap>
  );
};

export default ShareButtons;
