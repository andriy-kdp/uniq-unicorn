import { Navigate, Route, Routes } from "react-router-dom";
import React, { useMemo } from "react";
import { RouteItemType } from "./app-router.types";

const routesList: RouteItemType[] = [
  { path: "/", Component: <h1>Main page</h1> },
  { path: "/test", Component: <h1>Test page</h1> },
];

const getRoutes = (routes: RouteItemType[]) => {
  return routes.map((route, index) => {
    const { Component, nestedRoutes, ...rest } = route;
    if (nestedRoutes) {
      return (
        <Route key={`nested-${index}`} {...rest}>
          {getRoutes(nestedRoutes)}
        </Route>
      );
    }
    return <Route element={Component} key={`route-${index}`} {...rest} />;
  });
};

export const AppRouter: React.FC = (): JSX.Element => {
  const routes = useMemo(() => getRoutes(routesList), []);
  return (
    <Routes>
      {routes}
      <Route path={"*"} element={<Navigate to={"/"} />} />
    </Routes>
  );
};
