import NotFound from "NotFound";
import Folder from "pages/Folder";
import Shared from "pages/Shared";
import Signin from "pages/Signin";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "router/Root";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Folder /> },
        { path: "/signin", element: <Signin /> },
        { path: "/shared", element: <Shared /> },
        { path: "/folder", element: <Folder /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
