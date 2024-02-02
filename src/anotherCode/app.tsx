import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ModalProvider from "src/anotherCode/components/ModalProvider/ModalProvider";
import AppContainer from "src/anotherCode/providers/AppContainer";
import store from "src/anotherCode/store";

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ModalProvider>
          <AppContainer />
        </ModalProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
