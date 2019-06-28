import React from "react";
import ReactDOM from "react-dom";

import MainLayout from "./components/main-layout";
import AppRouter from "./routes";
import "normalize.css";
import "element-theme-default";
import "./index.css";

ReactDOM.render(
  <MainLayout>
    <AppRouter />
  </MainLayout>,
  document.getElementById("app")
);
