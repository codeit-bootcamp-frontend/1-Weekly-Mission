import shareIcon from 'assets/images/share.svg';
import nameModifyIcon from 'assets/images/pen.svg';
import deleteIcon from 'assets/images/trash.svg';
import facebookIcon from 'assets/images/akar-icons_facebook-fill.svg';
import twitterIcon from 'assets/images/akar-icons_twitter-fill.svg';
import youtubeIcon from 'assets/images/akar-icons_youtube-fill.svg';
import instagramIcon from 'assets/images/ant-design_instagram-filled.svg';
import kakaotalkShareIcon from 'assets/images/share_kakao.svg';
import facebookShareIcon from 'assets/images/share_facebook.svg';
import linkCopyIcon from 'assets/images/share_copy.svg';

export const SAMPLE_ID = -2;
export const ALL_ID = -1;
export const noDiscriptMsg = '링크 설명이 없어요 💦';
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
