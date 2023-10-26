import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinkInput from "../components/LinkInput";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";
import FolderList from "../components/FolderList";

const FolderPage = () => {
  return (
    <div>
      <Navbar isFolderPage={true} />
      <LinkInput />
      <SearchBar />
      <FolderList />
      <CardList isFolderPage={true} />
      <Footer />
    </div>
  );
};

export default FolderPage;
