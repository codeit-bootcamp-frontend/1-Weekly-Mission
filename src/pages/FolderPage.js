import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";

import SearchBar from "../components/searchBar/SearchBar";
import Footer from "../components/footer/Footer";
import Landing from "../components/landing/Landing";
import useFetch from "../hooks/useFetch";
export default function FolderPage() {
  return (
    <div>
      <NavSec />
      <Header />
      <SearchBar />
    </div>
  );
}
