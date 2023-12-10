import { useState } from "react";
import Input from "../input/Input";
import DefaultModalLayout from "./defaultModalLayout/DefaultModalLayout";
import GradientButton from "../button/GradientButton";

interface DeleteModalProp {
  title: string;
  content: {
    id: number;
    title: string;
  };
}

const EnterModal = ({ title, content }: DeleteModalProp) => {
  const [folderName, setFolderName] = useState(content.title);

  return (
    <DefaultModalLayout
      title={title}
      buttonItem={
        <GradientButton>
          {folderName !== "" ? "변경하기" : "추가하기"}
        </GradientButton>
      }
      inputItem={
        <Input
          label="contentInput"
          placeholder={"내용 입력"}
          value={folderName}
          setValue={setFolderName}
        />
      }
    />
  );
};

export default EnterModal;
