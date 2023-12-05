import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import DefaultModalLayout from "./defaultModalLayout/DefaultModalLayout";

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
        <Button type="primary">
          {folderName !== "" ? "변경하기" : "추가하기"}
        </Button>
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
