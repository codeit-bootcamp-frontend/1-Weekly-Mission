import Nav from "../components/nav/Nav";
import Header from "../components/header/Header";
import Landing from "../components/landing/Landing";
import Footer from "../components/footer/Footer";
import Profile from "../components/profile/Profile";
import useFetch from "../hooks/useFetch";

import React from "react";

export default function SharedPage() {
  const response = useFetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const [data, isLoading] = response;

  return (
    <div className="App">
      <Nav />
      <Header data={data} isLoading={isLoading} />
      <Landing data={data} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
