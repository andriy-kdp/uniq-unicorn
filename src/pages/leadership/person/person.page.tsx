import React from "react";
import Placeholder from "../../../assets/backgrounds/person/placeholder.png";
import { useMediaQuery } from "../../../utils/use-media-query";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Person } from "./person.styles";

export const PersonPage: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery("sm");

  return (
    <>
      <Wrap
        sx={{
          background: `url(${Placeholder})`,
          height: isMobile ? "34rem" : "65rem",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Person.Wrapper>
          <Person.Title>Name Placeholder</Person.Title>
          <Person.Subtitle>Job Description Placeholder</Person.Subtitle>
        </Person.Wrapper>
      </Wrap>
      <Person.Root>
        <Wrap>
          <Person.Description>
            Black banx protects your money with our global diversification concept
          </Person.Description>
          <Person.Paragraph>
            We've developed strong relationships with the leading Banks in the world to ensure your funds are always
            safe. Our client's money is never held at one Bank in one country. We provide the highest level of
            protection by keeping segregated accounts at the leading Banks, in various countries. As a result your money
            is globally diversified and protected by multiple jurisdictions.{" "}
          </Person.Paragraph>
        </Wrap>
        <Wrap sx={{ marginLeft: "11.6rem" }}>
          <Person.Description>Black Banx protects your money with industry-leading security tools </Person.Description>
          <Person.Paragraph>
            Black Banx is fully PCI DSS 3.2 certified. We comply with the highest Data Security Standards and have a
            Team of Security experts paying utmost attention to protect your data. Our Servers are located in ISO
            certified Data Centers, complying with the highest of standards in the banking industry. Our payment
            software uses encrypted and secured ISO 20022 certified messaging schemes for payment execution and data
            transfers.
          </Person.Paragraph>
        </Wrap>
      </Person.Root>
    </>
  );
};
