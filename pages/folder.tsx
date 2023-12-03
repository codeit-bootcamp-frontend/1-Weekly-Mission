import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderInput";
import LinkSection from "@/components/Main/LinkSection";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import { useGetUserId } from "@/hooks/useGetUserId";
import useObserver, { Dom } from "@/hooks/useObserver";
import { useRef } from "react";

const initialRef = { headerForm: null, headerInput: null, floatDiv: null, floatInput: null, footer: null };

export default function FolderPage() {
  const id = useGetUserId();
  const DOM = useRef<Dom>(initialRef);
  useObserver(DOM.current);

  if (!id) return null;

  return (
    <>
      <Navigation id={id} $page="folder" />
      <HeaderSearch id={id} dom={DOM} />
      <Main>
        <LinkSection id={id} />
      </Main>
      <Footer dom={DOM} />
    </>
  );
}
