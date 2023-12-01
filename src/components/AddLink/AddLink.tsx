import { ChangeEvent, FormEventHandler, useState } from "react";
import style from "./AddLink.module.css";
import linkIcon from "../../assets/img/link.svg";
import AddLinkModal from "../Modal/AddLinkModal";
import { Folder } from "../Modal/AddLinkModal";
import Image from "next/image";

function AddLink({ folders }: { folders: Folder[] }) {
  const [url, setUrl] = useState("");
  const [isModal, setIsModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModal(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleExitClick = () => {
    setIsModal(false);
  };
  return (
    <>
      <form className={style.root} onSubmit={handleSubmit}>
        <div className={style.section}>
          <Image src={linkIcon} alt="링크 아이콘" />
          <input
            className="input"
            placeholder="링크를 추가해 보세요."
            onChange={handleChange}
          ></input>
        </div>
        <button className={style.button}>추가하기</button>
      </form>
      {isModal && (
        <AddLinkModal
          url={url}
          folders={folders}
          onExitClick={handleExitClick}
        />
      )}
    </>
  );
}
export default AddLink;
