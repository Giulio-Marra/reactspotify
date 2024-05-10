import ReactDOM from "react-dom"; // Importa ReactDOM dalla libreria principale

import { Provider } from "react-redux";
import store from "./redux/store"; // Assicurati di importare lo store correttamente

import App from "./App";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
