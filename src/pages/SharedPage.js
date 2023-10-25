import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FolderOwnerInfo from "../components/FolderOwnerInfo";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";

const SharedPage = () => {
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

export default SharedPage;
