import "App.css";

import CardList from "components/units/CardList";
import Searchbar from "components/units/Searchbar";
import Header from "components/units/Header";
import Hero from "components/units/Hero";
import Footer from "components/units/Footer";
import { useEffect, useState } from "react";
import { getUser } from "api/api";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await getUser();
    setUser(data);
  };
  return (
    <div>
      <Header user={user} />
      <main>
        <section className="hero">
          <Hero />
        </section>
        <section>
          <div className="contents">
            <Searchbar />
            <CardList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
