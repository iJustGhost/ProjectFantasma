import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import Gate from "./Gate";
import Content from "./Content";
import { ProtectedRoute } from "./ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Gate />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/content" element={<Content />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
