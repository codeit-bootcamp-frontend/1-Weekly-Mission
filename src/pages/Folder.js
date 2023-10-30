import Nav from "../components/Nav";
import AddLink from "../components/AddLink";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import SortingFolder from "../components/SortingFolder";
import Option from "../components/Option";
import CardList from "../components/CardList";
import { useState, useEffect } from "react";

const Folder = () => {

  
  return (
    <div>
      <Nav />
      <AddLink />
      <SearchBar />
      <SortingFolder />
      <Option />
      {/* <CardList cards={cards} /> */}
      <Footer />
    </div>
  );
};

export default Folder;
