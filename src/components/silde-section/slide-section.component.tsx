import React, { PropsWithChildren } from "react";
import { Wrap } from "../wrap/wrap.component";
import MainBg from "../../assets/images/backgrounds/home-page/main_bg.png";
import { Section } from "../section/section.component";
import { MainHeader } from "../../pages/main/main.styles";
import { ButtonArrow } from "../button-arrow/button-arrow.component";
import { ButtonArrowProps } from "../button-arrow/button-arrow.types";
import { BgGradient } from "../bg-gradient/bg-gradient.component";
import { CSSProperties } from "styled-components";

type SliceSectionProps = {
  bgImage: string;
  title?: string;
  button?: {
    title: string;
    onClick: ButtonArrowProps["onClick"];
  };
  justify?: "center" | "right";
  bgVariant?: "gradient";
  titleWidth?: CSSProperties["maxWidth"];
};

export const SlideSection: React.FC<PropsWithChildren<SliceSectionProps>> = (
  props
) => {
  const { children, bgImage, title, justify, button, bgVariant, titleWidth } =
    props;
  return (
    <>
      <Section align={"center"}>
        {bgVariant === "gradient" ? (
          <BgGradient imgSrc={bgImage} />
        ) : (
          <Wrap
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              height: "57.8rem",
            }}
          >
            <img
              src={bgImage}
              alt={title}
              style={{
                position: "relative",
                marginRight: 0,
                height: "100%",
              }}
            />
          </Wrap>
        )}

        <Section
          content
          justify={"center"}
          align={
            justify === "center"
              ? "center"
              : justify === "right"
              ? "flex-end"
              : "flex-start"
          }
          pos={"absolute"}
          h={"100%"}
        >
          {title && (
            <Wrap
              sx={{
                maxWidth: titleWidth || "60%",
                textTransform: "uppercase",
                display: "flow-root",
              }}
            >
              <MainHeader>{title}</MainHeader>
            </Wrap>
          )}
          {button && (
            <Wrap
              sx={{
                marginTop: "1.5rem",
              }}
            >
              <ButtonArrow onClick={button.onClick}>{button.title}</ButtonArrow>
            </Wrap>
          )}
        </Section>
      </Section>
      {children}
    </>
  );
};
