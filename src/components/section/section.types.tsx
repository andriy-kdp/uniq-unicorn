import { CSSProperties } from "react";

export type SectionProps = {
  direction?: "row" | " column";
  p?: CSSProperties["padding"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  m?: CSSProperties["margin"];
  w?: CSSProperties["width"];
  h?: CSSProperties["height"];
  pos?: CSSProperties["position"];
  mainContent?: boolean;
  bgImg?: string;
  bgImgPosition?: CSSProperties["backgroundPosition"];
  mh?: CSSProperties["minHeight"];
};
