import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.scss";
import NavBar from "./routes/Nav/NavBar.jsx";
import { Home } from "./routes/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <NavBar />,
    children: [
      {
        path: "menu",
        element: <App />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
