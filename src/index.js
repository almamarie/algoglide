import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ArrayContextProvider } from "./context/array-context";
import { AlgorithmContextProvider } from "./context/algorithm-context";
import { SideBarContextProvider } from "./context/side-bar-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SideBarContextProvider>
    <AlgorithmContextProvider>
      <ArrayContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ArrayContextProvider>
    </AlgorithmContextProvider>
  </SideBarContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
