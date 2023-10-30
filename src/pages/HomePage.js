import { Navigate } from "react-router-dom";
import Gnb from "../component/Gnb";

function HomePage() {
  return (
    <>
      <Navigate to="/folder" />;
      <Gnb />
    </>
  );
}

export default HomePage;
