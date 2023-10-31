
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./Main";
import "./style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
