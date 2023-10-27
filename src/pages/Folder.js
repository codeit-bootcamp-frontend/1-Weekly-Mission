import "./Folder.css";
import AddLink from "../components/AddLink";
import { getUserFolder, getUserData, getFolderData } from "../utils/api";
import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Search from "../components/Search";
import Category from "../components/Category";

function Folder() {
  const [state, setState] = useState([]);
  const userData = {
    userId: "1",
    userSaveData: "folders",
  };

  // async function handleList() {
  //   const result = await getUserData({ userData });
  //   // setState(links);
  //   console.log(result);
  // }

  // useEffect(() => {
  //   getFolderData();
  // }, []);

  // TODO : 카테고리 컴포넌트 완성 (카테고리 컴포넌트 내부)
  // TODO : 폴더 아이디 스테이트관리
  // TODO : 폴더 아이디를 갖고 fetch
  return (
    <>
      <section className="folder-section">
        <AddLink />
        <ul className="cards-list">
          <Search />
          <Category />
          <div className="cards">
            {state.map((cardInfo) => {
              return <Cards cardInfo={cardInfo} key={cardInfo.id} />;
            })}
          </div>
        </ul>
      </section>
    </>
  );
}

export default Folder;
