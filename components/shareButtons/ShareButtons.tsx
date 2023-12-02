import React from "react";
import * as S from "@/components/shareButtons/ShareButtons.style";
import { SHARE_LINKS } from "@/constants/constants";
import handleCopyClipBoard from "@/utils/handleCopyLink";
import { ShareLinksProps } from "@/types/type";

const ShareButtons = () => {
  // const location = useLocation();
  // const currentUrl = `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
  return (
    <S.ShareButtonWrap>
      {SHARE_LINKS.map((share: ShareLinksProps) => (
        <li key={share.iconTitle}>
          <S.ShareButton onClick={() => handleCopyClipBoard(``)}>
            <S.ShareIcon src={share.iconSrc.src} />
            <S.shareText>{share.iconTitle}</S.shareText>
          </S.ShareButton>
        </li>
      ))}
    </S.ShareButtonWrap>
  );
};

export default ShareButtons;
