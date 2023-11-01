import FolderHero from "./FolderHero/FolderHero";
import SharedHero from "./SharedHero/SharedHero";

function HeroContent({ pageType }) {
  return (
    <>
      {pageType === "folder" && <FolderHero />}
      {pageType === "shared" && <SharedHero />}
    </>
  );
}

export default HeroContent;
