import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import SharedPage from './pages/share/SharedPage';
import LandingPage from './pages/landing/LandingPage';
import Layout from './components/layout/Layout';
import FolderPage from './pages/folder/FolderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/shared',
        element: <SharedPage />,
      },
      {
        path: '/folder',
        element: <FolderPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
