import React, { PropsWithChildren } from "react";
import { MainContentContainer } from "./main-content.types";
export const MainContent: React.FC<PropsWithChildren<{}>> = ({
  children,
}): JSX.Element => <MainContentContainer>{children}</MainContentContainer>;
