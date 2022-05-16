import React, { useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/fees/fees_main_bg.png";
import { Section } from "../../components/section/section.component";
import { Accordeon } from "../../components/accordeon/accordeon.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { FindCountry, PlanInfo } from "./fees.styles";
import { Divider } from "../../components/divider/divider.styles";
import TitaniumAccountBg from "../../assets/backgrounds/fees/plastic_card.png";
import { Input } from "../../components/inputs/input/input.component";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
import { useMediaQuery } from "../../utils/use-media-query";
type PlanInfoType = {
  title: string;
  prosItems: PlanInfoProsItem[];
  imgSrc: string;
};
type PlanInfoProsItem = {
  title: string;
  description: string;
};

const planInfoItems: PlanInfoType[] = [
  {
    title: "Titanium Account",
    imgSrc: TitaniumAccountBg,
    prosItems: [
      {
        title: "Requirements",
        description:
          "Assigned to account holding a min. Balance of 100.000 USD or equivalent amount in any fiat or cryptocurrency",
      },
      {
        title: "Customer service",
        description:
          "Assigned to account holding a min. Balance of 100.000 USD or equivalent amount in any fiat or cryptocurrency",
      },
      {
        title: "Deposits & withdrawals",
        description:
          "Assigned to account holding a min. Balance of 100.000 USD or equivalent amount in any fiat or cryptocurrency",
      },
      {
        title: "Fees",
        description:
          "Assigned to account holding a min. Balance of 100.000 USD or equivalent amount in any fiat or cryptocurrency",
      },
      {
        title: "Other services",
        description:
          "Assigned to account holding a min. Balance of 100.000 USD or equivalent amount in any fiat or cryptocurrency",
      },
    ],
  },
];

const countries: { country: string; count: number }[] = [
  { country: "Europe", count: 57 },
  { country: "Americas", count: 52 },
  { country: "Asia Pacific", count: 28 },
  { country: "Africa", count: 25 },
  { country: "Oceania", count: 18 },
];

export const FeesPage: React.FC = (): JSX.Element => {
  const [currentPlan, setCurrentPlan] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const isMobile = useMediaQuery("sm");
  const isTablet = useMediaQuery("md");
  const handleNextPlan = () => {
    setCurrentPlan((prev) => prev + 1);
  };

  const handlePrevPlan = () => {
    setCurrentPlan((prev) => prev - 1);
  };

  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"Global money flow"}
        bgVariant={"gradient"}
        titleAlign={"center"}
        justify={"center"}
      />

      <Section mainContent m={"20rem auto"}>
        <PlanInfo.Root>
          <Wrap sx={{ display: "flex", marginBottom: "2.4rem" }}>
            <PlanInfo.Title>{planInfoItems[currentPlan].title}</PlanInfo.Title>
            <Wrap
              sx={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
              }}
            >
              {/* FIXME: uncomment this line, when add new cards */}
              {/* <IconButton disabled={currentPlan === 0} onClick={handlePrevPlan}>
                <ArrowIconLeft />
              </IconButton>
              <IconButton disabled={currentPlan === planInfoItems.length - 1} reverse onClick={handleNextPlan}>
                <ArrowIconLeft />
              </IconButton> */}
            </Wrap>
          </Wrap>
          <PlanInfo.Description>
            <Wrap>
              {planInfoItems[currentPlan].prosItems.map((pros, idx) => (
                <Wrap key={`plan-info-${idx}`}>
                  <Accordeon
                    title={pros.title}
                    description={pros.description}
                  />
                  {idx !== planInfoItems[currentPlan].prosItems.length - 1 && (
                    <Wrap sx={{ margin: "2.4rem 0" }}>
                      <Divider />
                    </Wrap>
                  )}
                </Wrap>
              ))}
            </Wrap>
            <Wrap
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PlanInfo.Img
                src={planInfoItems[currentPlan].imgSrc}
                alt={"Plan info"}
              />
            </Wrap>
          </PlanInfo.Description>
        </PlanInfo.Root>
      </Section>

      <Section mainContent m={"0 auto 20rem"}>
        <FindCountry.Root>
          <Wrap
            sx={{
              gridArea: "country",
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              marginBottom: isMobile ? "6rem" : "inherit",
              flexWrap: "wrap",
              gap: isTablet ? "2rem" : "0",
            }}
          >
            {countries.map((country) => {
              const { Item } = FindCountry.Countries;
              return (
                <Item
                  key={country.country}
                >{`${country.country} (${country.count})`}</Item>
              );
            })}
          </Wrap>
          {isMobile && (
            <Wrap
              sx={{
                gridArea: "search",
                display: "flex",
                alignItems: "flex-end",
                margin: isMobile ? "5rem 0" : "inherit",
              }}
            >
              <Input
                fullWidth
                value={searchValue}
                startIcon={<SearchIcon />}
                placeholder={"Please enter country"}
                onChange={(e) => setSearchValue(e.target.value)}
                helperText={
                  "Didn’t find your country or residence in here?  Please Contact us"
                }
              />
            </Wrap>
          )}
          <Wrap sx={{ gridArea: "title" }}>
            <FindCountry.Title>
              We’re proud to announce that we’re in more than 180 countries all
              over the world, find out if we’re in yours!
            </FindCountry.Title>
          </Wrap>
          {!isMobile && (
            <Wrap
              sx={{
                gridArea: "search",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Input
                fullWidth
                value={searchValue}
                startIcon={<SearchIcon />}
                placeholder={"Please enter country"}
                onChange={(e) => setSearchValue(e.target.value)}
                helperText={
                  "Didn’t find your country or residence in here?  Please Contact us"
                }
              />
            </Wrap>
          )}
        </FindCountry.Root>
      </Section>
    </>
  );
};
