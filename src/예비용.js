const ChooseTitle = () => {
  let text;
  switch (type) {
    case 'share':
      text = '폴더 공유';
      break;
    case 'edit':
      text = '폴더 이름 변경';
      break;
    case 'deleteFolder':
      text = '폴더 삭제';
      break;
    case 'deleteLink':
      text = '링크 삭제';
      break;
    case 'add':
      text = '폴더 추가';
      break;
    case 'addFolder':
      text = '폴더에 추가';
      break;
  }
  return text;
};
