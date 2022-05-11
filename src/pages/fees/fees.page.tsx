import React, { useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/images/backgrounds/fees/fees_main_bg.png";
import { Section } from "../../components/section/section.component";
import { Accordeon } from "../../components/accordeon/accordeon.component";
import { IconButton } from "../../components/icon-button/icon-button.component";
import { ReactComponent as ArrowIconLeft } from "../../assets/icons/arrow_left.svg";
import { Wrap } from "../../components/wrap/wrap.component";
import { FindCountry, PlanInfo } from "./fees.styles";
import { Divider } from "../../components/divider/divider.styles";
import TitaniumAccountBg from "../../assets/images/backgrounds/fees/plastic_card.png";
import { Input } from "../../components/inputs/input/input.component";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
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
      <Section mainContent>
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
              <IconButton disabled={currentPlan === 0} onClick={handlePrevPlan}>
                <ArrowIconLeft />
              </IconButton>
              <IconButton disabled={currentPlan === planInfoItems.length - 1} reverse onClick={handleNextPlan}>
                <ArrowIconLeft />
              </IconButton>
            </Wrap>
          </Wrap>
          <PlanInfo.Description>
            <Wrap>
              {planInfoItems[currentPlan].prosItems.map((pros, idx) => (
                <Wrap>
                  <Accordeon title={pros.title} description={pros.description} />
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
              <img src={planInfoItems[currentPlan].imgSrc} alt={"Plan info"} />
            </Wrap>
          </PlanInfo.Description>
        </PlanInfo.Root>
      </Section>
      <Section mainContent>
        <FindCountry.Root>
          <Wrap
            sx={{
              gridArea: "country",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {countries.map((country) => {
              const { Item } = FindCountry.Countries;
              return <Item>{`${country.country} (${country.count})`}</Item>;
            })}
          </Wrap>
          <Wrap sx={{ gridArea: "title" }}>
            <FindCountry.Title>
              We’re proud to announce that we’re in more than 180 countries all over the world, find out if we’re in
              yours!
            </FindCountry.Title>
          </Wrap>
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
              helperText={"Didn’t find your country or residence in here?  Please Contact us"}
            />
          </Wrap>
        </FindCountry.Root>
      </Section>
    </>
  );
};
