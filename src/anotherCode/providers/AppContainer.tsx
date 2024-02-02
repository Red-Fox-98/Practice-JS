import React from "react";
import store from "src/anotherCode/store";
import { instance } from "src/anotherCode/api/instance";
import Routes from "src/anotherCode/routing/Routes";

const AppContainer = (): React.ReactElement => {
  instance.interceptors.request.use((config) => {
    if (store.getState().app.baseURL) {
      config.baseURL = `${store.getState().app.baseURL}/api/`;
    }
    return config;
  });

  return (
    <>
      <Routes />
    </>
  );
};

export default AppContainer;
