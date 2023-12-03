import FolderHero from "./FolderHero/FolderHero";
import SharedHero from "./SharedHero/SharedHero";
import { useRouter } from "next/router";
function HeroContent() {
  const pageLocation = useRouter().pathname;
  return (
    <>
      {pageLocation === "/folder" && <FolderHero />}
      {pageLocation === "/shared" && <SharedHero />}
    </>
  );
}

export default HeroContent;
