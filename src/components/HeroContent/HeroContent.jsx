import "./HeroContent.css";
import FolderHero from "./FolderHero/FolderHero";
import SharedHero from "./SharedHero/SharedHero";
import { useState } from "react";
import requestData from "../../services/api";

function HeroContent({ pageType }) {
  return (
    <section className="main-header">
      {pageType === "folder" && <FolderHero />}
      {pageType === "shared" && <SharedHero />}
    </section>
  );
}

export default HeroContent;
