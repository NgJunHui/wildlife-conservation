require('file-loader?name=[name].[ext]!./index.html');
import { StrictMode } from "react";
import React from 'react';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import {store} from './store';
import App from "./App";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}><App /></Provider>
  </StrictMode>
);
