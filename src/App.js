import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FolderOwnerInfo from "./FolderOwnerInfo";
import CardList from "./CardList";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <FolderOwnerInfo />
      <SearchBar />
      <CardList />
      <Footer />
    </div>
  );
};

export default App;
