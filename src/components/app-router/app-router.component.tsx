import { Navigate, Route, Routes } from "react-router-dom";
import React, { useMemo } from "react";

import { CryptoCurrencyPage } from "../../pages/crypto-currency/crypto-currency.page";
import { MainPage } from "../../pages/main/main.page";
import { RouteItemType } from "./app-router.types";
import { BankAccountsPage } from "../../pages/bank-accounts/bank-accounts.page";
import { MissionPage } from "../../pages/mission/mission.page";
import { CareersPage } from "../../pages/careers/careers.page";
import { SecurityPage } from "../../pages/security/security.page";
import { FeesPage } from "../../pages/fees/fees.page";

const routesList: RouteItemType[] = [
  { path: "/", Component: <MainPage /> },
  { path: "/crypto_currency", Component: <CryptoCurrencyPage /> },
  { path: "/bank_accounts", Component: <BankAccountsPage /> },
  { path: "/mission", Component: <MissionPage /> },
  { path: "/careers", Component: <CareersPage /> },
  { path: "/security", Component: <SecurityPage /> },
  { path: "/fees", Component: <FeesPage /> },
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
