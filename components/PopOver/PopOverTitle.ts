const PopOverTitle: PopOver[] = [
  {
    name: '삭제하기',
    option: {
      title: '링크삭제',
      button: { title: '링크 삭제', color: 'red' },
    },
  },
  {
    name: '폴더에 추가',
    option: {
      title: '폴더에 추가',
      button: { title: '추가하기', color: 'blue' },
      trigger: 'AddToFolder',
    },
  },
];

export default PopOverTitle;
