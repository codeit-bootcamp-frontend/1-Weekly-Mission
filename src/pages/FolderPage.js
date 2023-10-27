import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Menubar from "../components/menuBar/Menubar";

export default function FolderPage() {
  return (
    <div>
      <NavSec />
      <Header />
      <SearchBar />
      <Menubar />
    </div>
  );
}
