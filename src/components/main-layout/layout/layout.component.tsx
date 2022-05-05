import React, { PropsWithChildren } from "react";
import { LayoutContainer } from "./layout.styles";

export const Layout: React.FC<PropsWithChildren<{}>> = ({
  children,
}): JSX.Element => <LayoutContainer>{children}</LayoutContainer>;
