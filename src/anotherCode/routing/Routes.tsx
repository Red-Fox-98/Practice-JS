import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(
  () =>
    import(/* webpackChunkName: "Main", webpackPrefetch: true */ "src/anotherCode/scene/Main/Main")
);

const Secondary = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Secondary", webpackPrefetch: true */ "src/anotherCode/scene/Secondary/Secondary"
    )
);

const NotFound = React.lazy(
  () =>
    import(
      /* webpackChunkName: "NotFound", webpackPrefetch: true */ "src/anotherCode/components/NotFound/NotFound"
    )
);

const Calculator = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Calculator", webpackPrefetch: true */ "src/anotherCode/scene/Calculator/Calculator"
    )
);

const RoutesContainer: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<div>loader</div>}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main' element={<Main />} />
        <Route path='/secondary' element={<Secondary />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesContainer;
