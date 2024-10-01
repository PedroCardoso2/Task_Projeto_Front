"use client"


import { Route, Router, Routes } from "react-router-dom";
import { RouteElement } from "@/router/routes";

export default function Home() {
  return (
    <Router>
      <Routes>
        {routes.map((route: RouteElement, idx: number) => {
          return <Route key={idx} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );

}
