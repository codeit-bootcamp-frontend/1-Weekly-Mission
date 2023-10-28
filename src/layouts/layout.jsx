import { Outlet } from "react-router-dom";
import HeaderComponent from "components/header/header.jsx";
import FooterComponent from "components/footer/footer.jsx";

export default function Layout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}
