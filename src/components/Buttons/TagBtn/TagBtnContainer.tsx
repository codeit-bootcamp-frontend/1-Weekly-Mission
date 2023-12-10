import style from "./TagBtnContainer.module.css";
import AddImg from "/public/icon/icon-add.svg";
import AddFolder from "../../../modals/contents/AddFolder";
import { useState } from "react";
import { IFolderTagData } from "../../../utils/types/common.types";
import styled from "styled-components";
import Image from "next/image";

interface ITagBtnContainer {
  folderTagBtnList: IFolderTagData[];
  selectedTag: number | string;
  handleOnClick: (id: string | number, name: string) => void;
}

function TagBtnContainer({
  folderTagBtnList,
  selectedTag,
  handleOnClick,
}: ITagBtnContainer) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleClick = () => setOpen(true);
  const changeOpenState = (openState: boolean): void => setOpen(openState);

  return (
    <>
      <div className={style.tag_div}>
        <div className={style.tag_container}>
          {folderTagBtnList?.map((data, index) => (
            <button
              key={index}
              className={data.id === selectedTag ? "tag checked" : "tag"}
              id={String(data?.id)}
              data-count={data?.link?.count}
              onClick={() => handleOnClick(data?.id, data?.name)}
            >
              {data?.name}
            </button>
          ))}
        </div>
        <div className={style.tag_InnerText} onClick={handleClick}>
          <h4 className={style.tag_InnerText_text}>폴더 추가</h4>
          <Image src={AddImg} width={16} height={16} alt="add icon" />
        </div>
        <AddFolder isOpen={isOpen} changeOpenState={changeOpenState} />
      </div>
    </>
  );
}

export default TagBtnContainer;
