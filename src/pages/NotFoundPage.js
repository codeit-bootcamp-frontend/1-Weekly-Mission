import { Link } from "react-router-dom";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";

function NotFoundPage() {
  return (
    <>
      <Gnb />
      <div>NotFoundPage</div>
      <Link to="/folder">폴더 페이지로 이동</Link>
      <Footer className="footer" size="large" />
    </>
  );
}

export default NotFoundPage;
