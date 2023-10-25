import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LinkInput from "../components/LinkInput";
import CardList from "../components/CardList";
import SearchBar from "../components/SearchBar";

const FolderPage = () => {
  return (
    <div>
      <Navbar />
      <LinkInput />
      <SearchBar />
      <CardList />
      <Footer />
    </div>
  );
};

export default FolderPage;
