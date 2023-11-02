import { useEffect, useState } from "react";
import { Header } from "../../component/Header/Header.js";
import { Article } from "../../component/Article/Article.js";
import { folderRequestApi } from "../../api/requestApi.js";

const SharedPage = () => {
  const [items, setItems] = useState({
    name: "",
    links: [],
    owner: {},
  });

  const folder = async () => {
    const { name, links, owner } = await folderRequestApi("sample/folder");
    setItems({
      name,
      links,
      owner,
    });
  };
  
  useEffect(() => {
    folder()
  }, [])

  return (
    <>
      <Header items={items} />
      <Article items={items.links} />
    </>
  );
};

export default SharedPage;
