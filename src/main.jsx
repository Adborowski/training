import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Finance from "./Finance";
import Zelda from "./Zelda";
import { ThemeProvider } from "./ThemeContext";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/finance",
    element: <Finance />,
  },
  {
    path: "/zelda",
    element: <Zelda />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
