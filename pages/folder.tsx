import { useRef, useState } from "react";
import Footer from "@/components/Footer/Footer";
import HeaderSearch from "@/components/Header/HeaderInput";
import Main from "@/components/Main/Main";
import Navigation from "@/components/Nav/Navigation";
import useObserver, { Dom } from "@/hooks/useObserver";
import { Empty } from "@/pages/folder.styled";
import LinkSection from "@/components/Main/LinkSection";

const initialRef = { headerForm: null, headerInput: null, floatDiv: null, floatInput: null, footer: null };

export default function FolderPage() {
  const [id] = useState(Math.ceil(Math.random() * 1));
  const DOM = useRef<Dom>(initialRef);
  useObserver(DOM.current);

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
