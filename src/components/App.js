import GlobalNav from "./modules/GlobalNav";
import Footer from "./modules/Footer";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../utils/UserContext";

function App() {
  return (
    <UserProvider>
      <GlobalNav />
      <Outlet />
      <Footer />
    </UserProvider>
  );
}

export default App;
