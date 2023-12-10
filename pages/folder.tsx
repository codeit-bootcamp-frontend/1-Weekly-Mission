import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderInput";
import LinkSection from "@/components/Main/LinkSection";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import { useGetUserId } from "@/hooks/useGetUserId";
import useObserver from "@/hooks/useObserver";

export default function FolderPage() {
  const { setRefForObserver } = useObserver();
  const id = useGetUserId();

  if (!id) return null;

  return (
    <>
      <Navigation id={id} $page="folder" />
      <HeaderSearch id={id} setRefForObserver={setRefForObserver} />
      <Main>
        <LinkSection id={id} />
      </Main>
      <Footer setRefForObserver={setRefForObserver} />
    </>
  );
}
