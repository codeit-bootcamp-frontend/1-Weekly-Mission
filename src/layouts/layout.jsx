import { Outlet } from "react-router-dom";
import HeaderComponent from "components/header/Header.jsx";
import FooterComponent from "components/footer/Footer.jsx";
import { PageContainer } from "./layout.style.js";

export default function Layout() {
  return (
    <>
      <HeaderComponent />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <FooterComponent />
    </>
  );
}
