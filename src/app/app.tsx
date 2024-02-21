import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes";

const App = (): React.ReactElement => {
  return <RouterProvider router={routes} />;
};

export default App;
