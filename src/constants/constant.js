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

export {
  FOLDER_OPTION_NAMES,
  DEFAULT_FOLDER,
  DEFAULT_FOLDER_NAME,
  DEFAULT_USER_ID,
};
