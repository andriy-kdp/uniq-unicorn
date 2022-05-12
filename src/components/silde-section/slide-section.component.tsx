import React, { PropsWithChildren } from "react";
import { Wrap } from "../wrap/wrap.component";
import { Section } from "../section/section.component";
import { MainHeader } from "../../pages/main/main.styles";
import { ButtonArrow } from "../button-arrow/button-arrow.component";
import { BgGradient } from "../bg-gradient/bg-gradient.component";
import { SlideSectionProps } from "./slide.section.types";
import { useMediaQuery } from "../../utils/use-media-query";

export const SlideSection: React.FC<PropsWithChildren<SlideSectionProps>> = (props) => {
  const { children, bgImage, title, justify, button, bgVariant, titleWidth, titleAlign, BgRootProps, m } = props;
  const isMobile = useMediaQuery("xs");
  return (
    <>
      <Section align={"center"} m={m}>
        {bgVariant === "gradient" ? (
          <BgGradient imgSrc={bgImage} />
        ) : (
          <Wrap
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              height: "57.8rem",
              ...BgRootProps,
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
          mainContent
          justify={"center"}
          align={justify === "center" ? "center" : justify === "right" ? "flex-end" : "flex-start"}
          pos={isMobile ? "relative" : "absolute"}
          h={"100%"}
        >
          {title && (
            <Wrap
              sx={{
                maxWidth: titleWidth || !isMobile ? "60%" : "100%",
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
