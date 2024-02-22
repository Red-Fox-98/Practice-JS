import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import NotFound from "../pages/NotFound/NotFound";
import Calculator from "../pages/Calculator/Calculator";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/main",
    element: <Main />
  },
  {
    path: "/calculator",
    element: <Calculator />
  },
  {
    path: "/*",
    element: <NotFound />
  }
]);
