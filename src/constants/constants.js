import kakaoIcon from "../images/kakaoIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import shareIcon from "../images/share.png";
import nameChangeIcon from "../images/pen.png";
import deleteIcon from "../images/delete.png";
import ShareModal from "../components/modal/ShareModal";
import InputModal from "../components/modal/InputModal";
import DeleteModal from "../components/modal/DeleteModal";
import shareButtonIcon from "../images/shareIcon.png";
import SelectModal from "../components/modal/SelectModal";

export const KEBAB_MENUS = [
  { iconTitle: "삭제하기", modalTitle: "링크 삭제", Modal: DeleteModal, buttonText: "삭제하기" },
  { iconTitle: "폴더에 추가", modalTitle: "폴더에 추가", Modal: SelectModal, buttonText: "추가하기" },
];

export const SHARE_LINKS = [
  { iconTitle: "카카오톡", iconSrc: kakaoIcon },
  { iconTitle: "페이스북", iconSrc: facebookIcon },
  { iconTitle: "링크 복사", iconSrc: shareButtonIcon },
];

export const FOLDER_MANAGE_MENUS = [
  { iconTitle: "공유", imgSrc: shareIcon, modalTitle: "폴더 공유", Modal: ShareModal },
  { iconTitle: "이름 변경", imgSrc: nameChangeIcon, modalTitle: "폴더 이름 변경", Modal: InputModal },
  { iconTitle: "삭제", imgSrc: deleteIcon, modalTitle: "폴더 삭제", Modal: DeleteModal },
];
