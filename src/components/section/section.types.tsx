import { CSSProperties } from "react";

export type ContentProps = {
  direction?: "row" | " column"; // default: column
  p?: CSSProperties["padding"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  m?: CSSProperties["margin"];
  w?: CSSProperties["width"];
  h?: CSSProperties["height"];
  pos?: CSSProperties["position"];
  content?: boolean;
  bgImg?: string;
};
