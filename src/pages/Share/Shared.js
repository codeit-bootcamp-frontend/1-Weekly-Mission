import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Share from "../../components/Share/Share";

import "./Shared.css";

const Shared = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Share />
      <Footer />
    </>
  );
};

export default Shared;
