import { CSSProperties } from "react";
export type DividerProps = {
  variant?: "dashed" | "solid";
  width?: CSSProperties["width"];
  position?: "left" | "right";
  background?: CSSProperties["background"];
};
