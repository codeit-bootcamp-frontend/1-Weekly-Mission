import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shared from "./pages/Share/Shared";
import HomePage from "./pages/Homepage/Homepage";
import Signup from "./pages/SignUp/Signup";
import Signin from "./pages/SignIn/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="folder" element={<Shared />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
      <Shared />;
    </BrowserRouter>
  );
};

export default App;
