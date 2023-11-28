import FolderHero from "./FolderHero/FolderHero.jsx";
import SharedHero from "./SharedHero/SharedHero";
import { useLocation } from "react-router-dom";
function HeroContent() {
  const pageLocation = useLocation().pathname;
  return (
    <>
      {pageLocation === "/folder" && <FolderHero />}
      {pageLocation === "/shared" && <SharedHero />}
    </>
  );
}

export default HeroContent;
