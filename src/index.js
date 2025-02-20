import ReactDOM from "react-dom/client";
import "./main.css";

import React from "react";
import App from "./App";

//router dom import
import { BrowserRouter,Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
