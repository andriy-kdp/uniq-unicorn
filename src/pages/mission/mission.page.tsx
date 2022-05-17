import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { MissionDescription, MissionTitle } from "./mission.styles";
import { useMediaQuery } from "../../utils/use-media-query";
export const MissionPage = () => {
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={"BLACK BANX ABOUT US"}
        bgVariant={"gradient"}
        justify={"center"}
        titleAlign={"center"}
        BgImageStyles={
          isMobile
            ? {
                backgroundRepeat: "no-repeat",
                backgroundPosition: "60%",
              }
            : {
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }
        }
      />
      <Section mainContent>
        <MissionTitle>Who we are</MissionTitle>
        <MissionDescription>
          Account opening for you and your business can be difficult if you are based offshore, or if you are in an
          industry that traditional Banks do not support. Most traditional Banks are not your friend, they will monitor
          your transactions closely and rat you out to any authorities if they have the slightest doubt about your
          business. Most Fintech or Challenger Banks are not able to handle substantial amounts for international wire
          transfers and won't accept your business if you are in the Crypto or Payment industry.
        </MissionDescription>
        <MissionDescription>
          When I started my first business twenty years ago I had the same issue as you may have, today. In August 2014,
          I decide to create my own Bank offering a real solution for anybody facing these issues in banking. I created
          Black Banx as a platform for private individuals and businesses as an easy to set up and solid to use banking
          solution, regardless of your nationality, industry or the amounts of money you want to send and receive. I am
          the Rebel of the Banking Industry, but regardless of the criticism I have received for my none conventional
          approach, we will continue to offer the world a banking solution where money can flow freely for a fair price.
        </MissionDescription>
        <MissionDescription>
          Michael Gastauer <br /> Founder and CEO Black Banx Group
        </MissionDescription>
        <MissionDescription>
          With more than 8 Million customers Black Banx is a group of Financial Institutions licensed in various
          countries. Black Banx is the first Crypto Bank accepting deposits in crypto currencies and allowing clients
          the unlimited conversion of Crypto into FIAT and vice versa. We protect customer funds with industry leading
          security tools and our global diversification concept. We provide the highest level of protection by keeping
          segregated accounts in various countries. As a result your money is globally diversified and protected by
          multiple jurisdictions. The services of Black Banx Group are available in 180 countries.
        </MissionDescription>
      </Section>
    </>
  );
};
