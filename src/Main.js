import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import NotFoundPage from './pages/errors/NotFoundPage';
import SignInPage from './pages/login/SignInPage';
import LandingPage from './pages/landing/LandingPage';
import SignUpPage from './pages/login/SignUpPage';

function Main() {
  const LoginContext = createContext();

  return (
    <LoginContext.Provider value="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default Main;
