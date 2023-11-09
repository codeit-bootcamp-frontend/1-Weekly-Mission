const useModal = (type, label) => {
  console.log(type);
  let modalContents = {};

  if (type === "폴더 추가") {
    modalContents = {
      title: type,
      input: true,
      subTitle: "내용입력",
      button: true,
      buttonName: "추가하기",
    };
  } else if (type === "이름 변경") {
    modalContents = {
      title: "폴더 이름 변경",
      input: true,
      subTitle: label,
      button: true,
      buttonName: "변경하기",
    };
  } else if (type === "삭제") {
    modalContents = {
      title: "폴더 삭제",
      input: false,
      subTitle: label,
      button: true,
      buttonName: "삭제하기",
    };
  } else if (type === "링크 삭제") {
    modalContents = {
      title: type,
      input: false,
      subTitle: "내용입력",
      button: true,
      buttonName: "삭제하기",
    };
  } else if (type === "공유") {
    modalContents = {
      title: "폴더 공유",
      input: false,
      subTitle: label,
      button: true,
      buttonName: "SNS",
    };
  } else if (type === "폴더에 추가") {
    modalContents = {
      title: type,
      input: false,
      subTitle: "내용입력",
      button: true,
      buttonName: "추가하기",
    };
  }
  return modalContents;
};

export default useModal;
