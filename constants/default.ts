import shareIcon from '@/public/assets/images/share.svg';
import nameModifyIcon from '@/public/assets/images/pen.svg';
import deleteIcon from '@/public/assets/images/trash.svg';
import facebookIcon from '@/public/assets/images/akar-icons_facebook-fill.svg';
import twitterIcon from '@/public/assets/images/akar-icons_twitter-fill.svg';
import youtubeIcon from '@/public/assets/images/akar-icons_youtube-fill.svg';
import instagramIcon from '@/public/assets/images/ant-design_instagram-filled.svg';
import kakaotalkShareIcon from '@/public/assets/images/share_kakao.svg';
import facebookShareIcon from '@/public/assets/images/share_facebook.svg';
import linkCopyIcon from '@/public/assets/images/share_copy.svg';
import saveImg from '@/public/assets/images/contents1.svg';
import folderImg from '@/public/assets/images/contents2.svg';
import shareImg from '@/public/assets/images/contents3.svg';
import searchImg from '@/public/assets/images/contents4.svg';

export const SAMPLE_ID = -2;
export const ALL_ID = -1;
export const NO_DISCRIPT_MSG = '링크 설명이 없어요 💦';
export const NO_LINK_MSG = '저장된 링크가 없습니다.';

export const CHOICES = [
  {
    src: shareIcon,
    alt: '공유 아이콘',
    text: '공유',
  },
  {
    src: nameModifyIcon,
    alt: '이름 변경 아이콘',
    text: '이름 변경',
  },
  {
    src: deleteIcon,
    alt: '삭제 아이콘',
    text: '삭제',
  },
];

export const SNS_LIST = [
  {
    src: facebookIcon,
    alt: 'facebook 바로가기',
    url: 'https://www.facebook.com/',
  },
  {
    src: twitterIcon,
    alt: 'twitter 바로가기',
    url: 'https://twitter.com/',
  },
  {
    src: youtubeIcon,
    alt: 'youtube 바로가기',
    url: 'https://www.youtube.com/',
  },
  {
    src: instagramIcon,
    alt: 'instagram 바로가기',
    url: 'https://www.instagram.com/',
  },
];

export const SHARE_LIST = [
  {
    src: kakaotalkShareIcon,
    alt: '카카오톡으로 공유하기',
    msg: '카카오톡',
  },
  {
    src: facebookShareIcon,
    alt: '페이스북으로 공유하기',
    msg: '페이스북',
  },
  {
    src: linkCopyIcon,
    alt: '폴더 링크 복사하기',
    msg: '링크 복사',
  },
];

export const CONTENTS = {
  save: {
    title_pre: '',
    title_grd: '원하는 링크',
    title_post: '를 저장하세요',
    detail: '나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은 모든 것을 한 공간에 저장하세요.',
    src: saveImg,
    alt: '저장된 링크 카드 이미지',
  },
  folder: {
    title_pre: '링크를 폴더로 ',
    title_grd: '관리',
    title_post: '하세요',
    detail: '나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.',
    src: folderImg,
    alt: '폴더 이름 변경하기 모달 이미지',
  },
  share: {
    title_pre: '저장한 링크를 ',
    title_grd: '공유',
    title_post: '해 보세요',
    detail: '여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게 쉽고 빠르게 링크를 공유해 보세요.',
    src: shareImg,
    alt: '폴더 공유하기 모달 이미지',
  },
  search: {
    title_pre: '저장한 링크를 ',
    title_grd: '검색',
    title_post: '해 보세요',
    detail: '중요한 정보들을 검색으로 쉽게 찾아보세요.',
    src: searchImg,
    alt: '검색 결과 화면 이미지',
  },
};
