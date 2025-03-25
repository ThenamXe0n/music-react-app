import ReactDOM from "react-dom/client";
import "./main.css";

import React from "react";
import App from "./App";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { mystore } from "./redux/store";

//router dom import
import { BrowserRouter, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
