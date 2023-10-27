import Footer from "./Footer";
import { BasicHeader } from "./Header";

function NavAndFooterBasic({ children }) {
  return (
    <>
      <BasicHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default NavAndFooterBasic;
