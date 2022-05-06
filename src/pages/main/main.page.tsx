import { Benefits } from "../../components/benefits/benefits.component";
import { ReactComponent as BgImg } from "../../assets/images/backgrounds/home-page/main_background.svg";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import { ReactComponent as CardsImg } from "../../assets/images/backgrounds/home-page/cards.svg";
import { MainHeader } from "./main.styles";
import { ReactComponent as MapImage } from "../../assets/images/backgrounds/home-page/map_base_markers.svg";
import MockVideo from "../../assets/images/backgrounds/home-page/mock_video.jpg";
import React from "react";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
export const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Section align={"center"}>
        <BgImg />
        <Wrap sx={{ position: "absolute", right: 0 }}>
          <CardsImg />
        </Wrap>

        <Section content justify={"center"} pos={"absolute"} h={"100%"}>
          <Wrap
            sx={{
              maxWidth: "60%",
              textTransform: "uppercase",
              display: "flow-root",
            }}
          >
            <MainHeader>
              Private or Business accounts set up in minutes
            </MainHeader>
          </Wrap>
          <Wrap sx={{ marginTop: "1.5rem" }}>
            <ButtonArrow>Get started</ButtonArrow>
          </Wrap>
        </Section>
      </Section>

      <Section>
        <Section content>
          <Benefits />
        </Section>
      </Section>

      <Section>
        <Section content>
          <img src={MockVideo} alt="Video here" style={{ width: "100%" }} />
        </Section>
      </Section>

      <Section>
        <Section content>
          <Wrap sx={{ textTransform: "uppercase" }}>
            <h2>Open Accounts, Send and Receive Payments in 28 currencies</h2>
          </Wrap>
          <MapImage />
          <Wrap sx={{ marginLeft: "auto" }}>
            <ButtonArrow>Open Account</ButtonArrow>
          </Wrap>
        </Section>
      </Section>
    </>
  );
};
