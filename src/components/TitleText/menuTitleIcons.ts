import shareIcon from '@/src/assets/share.svg';
import penIcon from '@/src/assets/pen.svg';
import deleteIcon from '@/src/assets/Delete.svg';

const menuTitleIcons = [
  {
    name: '공유',
    image: shareIcon,
    option: { title: '폴더 공유', trigger: 'SocialShare' },
  },
  {
    name: '이름 변경',
    image: penIcon,
    option: {
      title: '폴더 이름 변경',
      input: true,
      button: { title: '변경하기', color: 'blue' },
    },
  },
  {
    name: '삭제',
    image: deleteIcon,
    option: { title: '폴더 삭제', button: { title: '삭제하기', color: 'red' } },
  },
];

export default menuTitleIcons;
