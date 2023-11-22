import "./FolderHero.css";
import LinkImg from "../../../assets/image/link.svg";
import AddLinkToFolder from "../../../modals/contents/AddLinkToFolder";
import { useState } from "react";
import getFolderTagListData from "../../../utils/getFolderTagListData";

function FolderHero() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const changeOpenState = (openState) => setOpen(openState);
  const TagListData = getFolderTagListData();
  
  return (
    <section className="hero--folder">
      <div className="container">
        <div className="div-link">
          <div>
            <span>
              <img src={LinkImg} alt="link icon" />
            </span>
          </div>
          <div className="link_container">
            <button className="link_button" onClick={handleClick}>
              추가하기
            </button>
          </div>
        </div>
        <input className="input-link" placeholder="링크를 추가해 보세요" />
      </div>
      <AddLinkToFolder
        isOpen={isOpen}
        changeOpenState={changeOpenState}
        TagListData={TagListData}
      />
    </section>
  );
}

export default FolderHero;
