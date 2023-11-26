import DialogMain from "./DialogMain";
// 다른 서브 컴포넌트들 import하기

const Dialog = Object.assign(DialogMain, {
  Title: DialogMain.Title,
  CloseButton: DialogMain.CloseButton,
});

export default Dialog;
