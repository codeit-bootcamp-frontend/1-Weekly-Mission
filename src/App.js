import { Header } from "./Header.js";
import { Article } from "./Article.js";
import { Footer } from "./Footer.js";
import { useState, useEffect } from "react";
import { RequestAPI } from "./RequestApi.js";
import { FOLDER_FAIL, PROFILE_FAIL } from "./ErrorMessage.js";
import "./css/index.css";


export function App() {
  const [profile, setProfile] = useState({
    src: "",
    email: "",
  });
  const [items, setItems] = useState({
    name : '',
    links : [],
    owner : {},
  })


  const information = async () => {
    try {
      const review = await RequestAPI( '/api/sample/user', PROFILE_FAIL );
      const { profileImageSource, email } = review;
      setProfile({
        src : profileImageSource,
        email,
      });

      const response = await RequestAPI(`/api/sample/folder`, FOLDER_FAIL);
      const { name, links, owner } = response.folder;
      setItems({
        name,
        links,
        owner,
      });
    } catch(error){
        /*로그인 뜨게 하기 */
    } 
  }

  useEffect(() => {
    information();
  }, []);

  return (
    <>
      <div className="header">
        <Header profile={profile} items={items}/>
      </div>
      <div className="article">
        <Article items={items} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
