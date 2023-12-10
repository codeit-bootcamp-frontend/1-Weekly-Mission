import { HOST } from '@/lib/constants/path';
import { MouseEvent } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

/**
 * @param {*} title 공유할 폴더 title
 * @param {*} url 공유할 링크의 url
 */
export function shareKakaotalk(title: string, url: string): void {
  if (!window.Kakao.isInitialized()) window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  window.Kakao.Share.sendCustom({
    templateId: Number(process.env.NEXT_PUBLIC_KAKAO_MSG_KEY),
    templateArgs: {
      THUMB: 'https://www.ilbe.com/files/attach/new/20150610/12247466/4718962251/5976846550/9300e213bbb7ae4e6e438fd0537f2c48.png',
      TITLE: `${title} | Linkbrary`,
      DESC: `${title} 폴더에 담긴 링크가 궁금하다면!! (๑•̀༚•́)ฅ`,
      PATH: url,
    },
  });
}

export function shareFacebook(url: string): void {
  window.open(`http://www.facebook.com/sharer.php?u=${HOST}/${url}`);
}

/**
 * 클립보드에 링크를 복사하는 함수
 */
export async function copyLink(url: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(`${HOST}/${url}`);
    alert('클립보드에 링크 복사를 성공했어요 ~!');
  } catch (error) {
    alert('클립보드에 링크 복사를 실패했어요ㅠ_ㅠ');
  }
}

/**
 * '공유' 모달 아이콘 클릭 이벤트 핸들러
 */
export function handleShareClick(event: MouseEvent, data: string, folderId?: number): void {
  const SHARE_URL = `shared?user=1&folder=${folderId}`;
  const el = event.target as HTMLElement;
  const target = el?.closest('div')?.children[1];
  if (target?.textContent === '카카오톡') shareKakaotalk(data, SHARE_URL);
  if (target?.textContent === '페이스북') shareFacebook(SHARE_URL);
  if (target?.textContent === '링크 복사') copyLink(SHARE_URL);
}
