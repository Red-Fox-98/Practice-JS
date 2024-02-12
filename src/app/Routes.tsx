import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(
  () => import(/* webpackChunkName: "Main", webpackPrefetch: true */ "../pages/Main/Main")
);

const NotFound = React.lazy(
  () =>
    import(/* webpackChunkName: "NotFound", webpackPrefetch: true */ "../pages/NotFound/NotFound")
);

const Calculator = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Calculator", webpackPrefetch: true */ "../pages/Calculator/Calculator"
    )
);

const RoutesContainer: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<div>loader</div>}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesContainer;
