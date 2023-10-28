import React from "react";

const Shared = React.lazy(() => import("./page/shared/Shared"));
const Folder = React.lazy(() => import("./page/folder/Folder"));

const routes = [
  { path: "/shared", element: Shared },
  { path: "/folder", element: Folder },
];

export default routes;
