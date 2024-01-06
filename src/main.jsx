import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Page/About.jsx";
import Contact from "./Page/Contact";
import ItemDetail from "./Page/ItemDetail.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  offset: 100,
  mirror: false,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/:itemName",
    element: <ItemDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
