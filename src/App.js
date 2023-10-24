import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FolderOwnerInfo from "./components/FolderOwnerInfo";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import "./styles/global.css";

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
