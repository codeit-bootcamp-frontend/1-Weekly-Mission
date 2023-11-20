import IMAGES from '../assets/images';

const FOLDER_OPTION_NAMES = [
  {
    id: 1,
    name: '공유',
    optionImg: IMAGES.share,
  },
  {
    id: 2,
    name: '이름 변경',
    optionImg: IMAGES.pen,
  },
  {
    id: 3,
    name: '삭제',
    optionImg: IMAGES.trashcan,
  },
];

const DEFAULT_FOLDER = {
  name: '전체',
  id: 0,
};

const DEFAULT_FOLDER_NAME = '전체';

const DEFAULT_USER_ID = 1;

const MODAL_NAME = {
  edit: {
    title: '폴더 이름 변경',
    buttonText: '변경하기',
    buttonColor: 'blue',
  },
  delete: {
    title: '폴더 삭제',
    description: '폴더명',
    buttonText: '삭제하기',
    buttonColor: 'red',
  },
  addFolder: {
    title: '폴더 추가',
    buttonText: '추가하기',
    buttonColor: 'blue',
  },
  deleteLink: {
    title: '링크 삭제',
    buttonText: '삭제하기',
    buttonColor: 'red',
  },
  share: {
    title: '폴더 공유',
    description: '폴더명',
  },
  add: {
    title: '폴더에 추가',
    description: '링크 주소',
    buttonText: '추가하기',
    buttonColor: 'blue',
  },
};

export {
  FOLDER_OPTION_NAMES,
  DEFAULT_FOLDER,
  DEFAULT_FOLDER_NAME,
  DEFAULT_USER_ID,
  MODAL_NAME,
};
