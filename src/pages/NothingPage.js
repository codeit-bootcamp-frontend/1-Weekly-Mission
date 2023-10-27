import React from "react";
import NavSec from "../components/nav/NavSec";
import Header from "../components/header/Header";
import SearchBar from "../components/searchBar/SearchBar";
import Footer from "../componenets/footer/Footer";
export default function NothingPage({ children }) {
  return (
    <div>
      <NavSec />
      <Header />
      <SearchBar />
      {children}
      <Footer />
    </div>
  );
}
