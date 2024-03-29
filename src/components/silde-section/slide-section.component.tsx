import React, { PropsWithChildren } from "react";
import { Wrap } from "../wrap/wrap.component";
import { Section } from "../section/section.component";
import { MainHeader } from "../../pages/main/main.styles";
import { ButtonArrow } from "../button-arrow/button-arrow.component";
import { BgGradient } from "../bg-gradient/bg-gradient.component";
import { SlideSectionProps } from "./slide.section.types";

export const SlideSection: React.FC<PropsWithChildren<SlideSectionProps>> = (props) => {
  const { children, bgImage, title, justify, button, bgVariant, titleWidth, titleAlign, m, h, mobile, BgImageStyles } =
    props;
  return (
    <>
      <Section align={"center"} m={m}>
        {bgVariant === "gradient" ? (
          <BgGradient imgSrc={bgImage} sx={BgImageStyles} h={h} />
        ) : (
          <Wrap
            sx={{
              position: "relative",
              background: `url(${bgImage})`,
              height: mobile ? "34rem" : "65rem",
              width: "100%",
              backgroundRepeat: "no-repeat",
              ...BgImageStyles,
            }}
          />
        )}

        <Section
          mainContent
          justify={"center"}
          align={justify === "center" ? "center" : justify === "right" ? "flex-end" : "flex-start"}
          pos={mobile ? "relative" : "absolute"}
          h={"100%"}
        >
          {title && (
            <Wrap
              sx={{
                maxWidth: titleWidth || "100%",
                width: "100%",
                textTransform: "uppercase",
                display: "flow-root",
                textAlign: titleAlign || "start",
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
