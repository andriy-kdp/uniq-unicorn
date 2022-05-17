import { CSSObject, CSSProperties } from "styled-components";
import { ButtonArrowProps } from "../button-arrow/button-arrow.types";

export type SlideSectionProps = {
  bgImage: string;
  title?: string;
  m?: CSSProperties["margin"];
  button?: {
    title: string;
    onClick: ButtonArrowProps["onClick"];
  };
  justify?: "center" | "right";
  bgVariant?: "gradient";
  titleWidth?: CSSProperties["maxWidth"];
  titleAlign?: CSSProperties["textAlign"];
  mobile?: boolean;
  BgImageStyles?: CSSObject;
};
