import React from "react";
import { Routes, Route } from "react-router-dom";

const PageRender = ({ routesOptions }) => (
  <Routes>
    {routesOptions.map((item) => (
      <Route key={item.to} path={item.to} element={item.element} />
    ))}
  </Routes>
);

export default PageRender;
