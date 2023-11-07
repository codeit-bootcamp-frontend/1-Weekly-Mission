export default function shareKakao(Kakao, url, currentFolder) {
  Kakao.Share.sendCustom({
    templateId: 100312,
    templateArgs: {
      title: '제목 영역입니다.',
      description: '설명 영역입니다.',
      url: url,
    },
  });
}
