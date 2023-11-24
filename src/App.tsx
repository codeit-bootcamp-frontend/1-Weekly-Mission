import "./css/reset.css";
import "./css/root.css";
import "./components/components.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
import { useFetch } from "./hooks/useFetch";
import { AccountContext } from "./contexts/AccountContext";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const { data: userData, errorMessage } = useFetch("users/1", 1);
  const [isVisible, setIsVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  if (!userData) return;
  /* userData.data[0] */
  return (
    <AccountContext.Provider
      value={{ account: userData, errorMessage, isVisible, isSecondVisible }}
    >
      <div className="App">
        <Header />
        <Routes>
          <Route path="/shared" element={<Shared />} />
          <Route
            path="/folder"
            element={
              <Folder
                setIsVisible={setIsVisible}
                setIsSecondVisible={setIsSecondVisible}
              />
            }
          >
            <Route
              index
              element={
                <Folder
                  setIsVisible={setIsVisible}
                  setIsSecondVisible={setIsSecondVisible}
                />
              }
            />
            <Route
              path=":folderId"
              element={
                <Folder
                  setIsVisible={setIsVisible}
                  setIsSecondVisible={setIsSecondVisible}
                />
              }
            />
          </Route>
        </Routes>
        <Footer />
      </div>
    </AccountContext.Provider>
  );
}

export default App;
