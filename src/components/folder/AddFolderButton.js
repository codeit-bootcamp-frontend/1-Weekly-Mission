import { useState, useEffect } from "react";
import addPurpleImg from "../../image/add.svg";
import addWhiteImg from "../../image/addWhite.svg";

const AddFolderButton = () => {
  const [addImg, setAddImg] = useState(addPurpleImg);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setAddImg(addWhiteImg);
    } else {
      setAddImg(addPurpleImg);
    }
  };

  useEffect(() => {
    handleResize();

    // 윈도우의 resize 이벤트에 handleResize 함수를 추가하여 화면 크기가 변경될 때마다 실행되도록 함
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <button className="add_folder">
      <span className="add_folder_msg">폴더 추가</span>
      <img className="add_folder_img" src={addImg} alt="폴더 추가 버튼" />
    </button>
  );
};

export default AddFolderButton;
