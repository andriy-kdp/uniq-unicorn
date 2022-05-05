export type RouteItemType = {
  path?: string;
  Component?: JSX.Element;
  index?: boolean;
  nestedRoutes?: RouteItemType[];
};
