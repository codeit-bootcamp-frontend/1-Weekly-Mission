export const MODALS_ID = {
  addFolder: "addFolder",
  share: "share",
  rename: "rename",
  delete: "delete",
};

export const BUTTONS = [
  {
    iconSource: "images/share.svg",
    text: "공유",
    modalId: MODALS_ID.share,
  },
  {
    iconSource: "images/pen.svg",
    text: "이름 변경",
    modalId: MODALS_ID.rename,
  },
  {
    iconSource: "images/trash.svg",
    text: "삭제",
    modalId: MODALS_ID.delete,
  },
];

export const ALL_LINKS_TEXT = "전체";

export const KAKAO_SHARE_DATA = {
  title: "Linkbrary",
  description: "링크를 저장하고 공유하는 가장 쉬운 방법",
  imageUrl: "https://codeit-frontend.codeit.com/static/images/brand/og_tag.png",
};
