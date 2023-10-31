import Footer from "../components/Footer/Footer"
import HeaderSearch from "../components/Header/HeaderSearch"
import Main from "../components/Main/Main"
import Navigation from "../components/Nav/Navigation"
import { useState } from "react";

function FolderPage() {
  const [isUser, setIsUser] = useState(null);

  return (
    <>
      <Navigation page='folder' type='user' setIsUser={setIsUser} />
      <HeaderSearch />
      <Main page='folder' type='links' isUser={isUser} />
      <Footer />
    </>
  )
}

export default FolderPage