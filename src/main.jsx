import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.scss";
import { Home } from "./routes/Home/Home.jsx";
import NavBotton from "./routes/Nav/Nav.jsx";
import { Nelly } from "./Nelly/Nelly.jsx";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <NavBotton />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <App />,
      },
      {
        path: "nelly",
        element: <Nelly />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
