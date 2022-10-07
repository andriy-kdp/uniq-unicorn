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
import { MediaCoveragePage } from "../../pages/media-covarage/media-coverage.page";
import { BlogPage } from "../../pages/blog/blog.page";
import { BlogArticlePage } from "../../pages/blog/blog-article.page";
import { ChooseAccountPage } from "../../pages/auth/choose-account/choose-account.page";
import { LoginPage } from "../../pages/auth/login/login.page";
import { RegisterPage } from "../../pages/auth/register/register.page";
import { ContactPage } from "../../pages/contact/contact.page";
import { NewsPage } from "../../pages/news/news.page";
import { PrivacyPolicyPage } from "../../pages/privacy-policy-terms/privacy-policy.page";
import { PolicesTermsPage } from "../../pages/privacy-policy-terms/policies-terms.page";
import { LeadershipPage } from "../../pages/leadership/leadership.page";
import { PersonPage } from "../../pages/leadership/person/person.page";
import { FinancialStatementsPage } from "../../pages/financial-statements/financial-statements.page";
const routesList: RouteItemType[] = [
  { path: "/", Component: <MainPage /> },
  { path: "/crypto_currency", Component: <CryptoCurrencyPage /> },
  { path: "/bank_accounts", Component: <BankAccountsPage /> },
  { path: "/mission", Component: <MissionPage /> },
  { path: "/careers", Component: <CareersPage /> },
  { path: "/security", Component: <SecurityPage /> },
  // { path: "/fees", Component: <FeesPage /> },
  {
    path: "/fees",
    nestedRoutes: [
      { path: ":feeId", Component: <FeesPage /> },
      { index: true, Component: <FeesPage /> },
    ],
  },
  {
    path: "/media_coverage",
    nestedRoutes: [
      { index: true, Component: <MediaCoveragePage /> },
      { path: "news/:id", Component: <BlogArticlePage /> },
    ],
  },
  { path: "/contact", Component: <ContactPage /> },

  {
    path: "/news",
    nestedRoutes: [
      { Component: <NewsPage />, index: true },
      { Component: <BlogArticlePage />, path: "article/:id" },
    ],
  },
  { path: "/privacy_policy", Component: <PrivacyPolicyPage /> },
  { path: "/terms", Component: <PolicesTermsPage /> },
  {
    path: "/auth",
    nestedRoutes: [
      {
        Component: <LoginPage />,
        path: "login",
      },
      {
        path: "register",
        Component: <ChooseAccountPage />,
      },
      {
        //type - private, business, institutional
        path: "register/:type",
        Component: <RegisterPage />,
      },
    ],
  },
  {
    path: "/blog",
    nestedRoutes: [
      { Component: <BlogPage />, index: true },
      { path: "articles/:id", Component: <BlogArticlePage /> },
    ],
  },
  {
    path: "/leadership",
    nestedRoutes: [
      { Component: <LeadershipPage />, index: true },
      { path: ":id", Component: <PersonPage /> },
    ],
  },
  { path: "/financialStatements", Component: <FinancialStatementsPage /> },
];

const getRoutes = (routes: RouteItemType[]) => {
  return routes.map((route, index) => {
    const { Component, nestedRoutes, ...rest } = route;
    if (nestedRoutes) {
      return (
        <Route key={`nested-${index}`} element={Component} {...rest}>
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
