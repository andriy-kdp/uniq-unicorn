import { Navigate, Route, Routes } from "react-router-dom";
import React, { useMemo } from "react";

import { CryptoCurrencyPage } from "../../pages/crypto-currency/crypto-currency.page";
import { MainPage } from "../../pages/main/main.page";
import { RouteItemType } from "./app-router.types";

const routesList: RouteItemType[] = [
  { path: "/", Component: <MainPage /> },
  { path: "/crypto_currency", Component: <CryptoCurrencyPage /> },
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
