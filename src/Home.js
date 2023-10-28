import { useEffect, useState, useCallback } from "react";
import { Outlet } from "react-router-dom";
import getData from "./utils/api";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Home = () => {
  const [user, setUser] = useState({});

  const getUserData = useCallback(async () => {
    const { data } = await getData("/users/1");
    setUser(data[0]);
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div>
      <Nav user={user} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
