import Footer from "./Footer";
import { FixedHeader } from "./Header";

function NavAndFooterFixed({ children }) {
  return (
    <>
      <FixedHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default NavAndFooterFixed;
