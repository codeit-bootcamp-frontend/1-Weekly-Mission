import { useState, useEffect } from "react";
import { getResponse } from "./api.js";
import Header from "./components/Header.js";
import './styles/app.css';

function App() {

  const [user, setUser] = useState(null);

  async function getUser(){
    const user = await getResponse('sample/user');
    if(!user) return;
    const {id, name, email, profileImageSource} = user;
    setUser(user);
  }

  useEffect(() => getUser, []);

  return (
    <>
      <div className = "header"><Header user={user}/></div>
      {/* <div>프로필&폴더 이름을 넣을거다</div>
      <div>카드들을 넣을거다</div> */}
    </>
  );
}

export default App;