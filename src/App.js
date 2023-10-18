import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FolderOwnerInfo from "./FolderOwnerInfo";
import CardList from "./CardList";

const App = () => {
  return (
    <div>
      <Navbar />
      <FolderOwnerInfo />
      <CardList />
      <Footer />
    </div>
  );
};

export default App;
