import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  HomePage,
  Folder,
  Shared,
  Signup,
  Signin,
  NotFound,
} from "./pages/pages.js"
import GlobalStyle from "./styles/GlobalStyles.js"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="folder" element={<Folder />} />
          <Route path="share" element={<Shared />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
