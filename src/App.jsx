import { BrowserRouter, Route, Routes } from "react-router-dom"

import {
  HomePage,
  FolderPage,
  SharePage,
  SignUpPage,
  SignInPage,
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

          <Route path="folder">
            <Route index element={<FolderPage />} />
            <Route path=":folderId" element={<FolderPage />} />
          </Route>
          <Route path="share" element={<SharePage />} />

          <Route path="signup" element={<SignUpPage />} />
          <Route path="signin" element={<SignInPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
