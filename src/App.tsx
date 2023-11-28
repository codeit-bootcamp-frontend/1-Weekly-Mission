import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FolderPage,
  SharedPage,
  HomePage,
  ErrorPage,
  SignInPage,
  SignUpPage,
} from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />

          <Route path="folder">
            <Route index element={<FolderPage />} />
          </Route>

          <Route path="shared">
            <Route index element={<SharedPage />} />
          </Route>

          <Route path="signin">
            <Route index element={<SignInPage />} />
          </Route>

          <Route path="signup">
            <Route index element={<SignUpPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
