import deleteIcon from "@/images/delete.png";
import facebookIcon from "@/images/facebookIcon.png";
import kakaoIcon from "@/images/kakaoIcon.png";
import nameChangeIcon from "@/images/pen.png";
import shareIcon from "@/images/share.png";
import shareButtonIcon from "@/images/shareIcon.png";
import { ValidateErrorMsgType, ValidateType } from "@/types/type";

export const ALL_LINKS_ID = "all";

export const MODALS_ID = {
  addFolder: "addFolder",
  addLinkToFolder: "addLinkToFolder",
  share: "share",
  rename: "rename",
  delete: "delete",
};

export const KEBAB_MENUS = [
  { iconTitle: "삭제하기", modalId: MODALS_ID.delete },
  { iconTitle: "폴더에 추가", modalId: MODALS_ID.addLinkToFolder },
];

export const SHARE_LINKS = [
  { iconTitle: "카카오톡", iconSrc: kakaoIcon, shareType: "kakao" },
  { iconTitle: "페이스북", iconSrc: facebookIcon, shareType: "facebook" },
  { iconTitle: "링크 복사", iconSrc: shareButtonIcon, shareType: "copy" },
];

export const FOLDER_MANAGE_MENUS = [
  { iconTitle: "공유", imgSrc: shareIcon, modalId: MODALS_ID.share },
  {
    iconTitle: "이름 변경",
    imgSrc: nameChangeIcon,
    modalId: MODALS_ID.rename,
  },
  { iconTitle: "삭제", imgSrc: deleteIcon, modalId: MODALS_ID.delete },
];

export const VALIDATE: ValidateType = {
  userEmail:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  userPassword: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
};

export const VALIDATE_ERROR_MSG: ValidateErrorMsgType = {
  userEmail: {
    empty: "이메일을 입력해주세요.",
    wrong: "올바른 이메일 주소가 아닙니다.",
    check: "이메일을 확인해주세요",
    exist: "이미 사용 중인 이메일입니다.",
  },
  userPassword: {
    empty: "비밀번호를 입력해주세요.",
    wrong: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    check: "비밀번호를 확인해주세요",
    notEqual: "비밀번호가 일치하지 않아요.",
  },
};

export const KAKAO_SHARE_DATA = {
  title: "Linkbrary",
  description: "링크를 저장하고 공유하는 가장 쉬운 방법",
  imageUrl: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
};
