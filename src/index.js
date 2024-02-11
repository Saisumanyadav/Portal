import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ProjectRoutes from "./SampleProjectReact/Routes";
import reportWebVitals from "./reportWebVitals";
import HandleFunc from "./Practice/test";
import Code from "./Practice/code";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HandleFunc /> */}
    {/* <Code /> */}
    <ProjectRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
