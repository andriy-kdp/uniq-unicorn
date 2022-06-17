import React, { PropsWithChildren, useState } from "react";
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
import { IconButton } from "../../components/icon-button/icon-button.component";
import { ReactComponent as ArrowIconLeft } from "../../assets/icons/arrow_left.svg";
import { PlanInfoType } from "./fees.types";
import { Transition } from "react-transition-group";

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
  {
    title: "Titanium Account1",
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

const duration = 100;

const defaultStyle = {
  transition: `all ${duration}ms, opacity ${duration - 50}ms`,
};

const transitionStyles: Record<string, any> = {
  entering: { transform: "translateX(-100%)", opacity: 0 },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(100%)", opacity: 0 },
  exited: { transform: "translateX(100%)", opacity: 0 },
};

const transitionStylesReversed: Record<string, any> = {
  entering: { transform: "translateX(100%)", opacity: 0 },
  entered: { transform: "translateX(0)" },
  exiting: { transform: "translateX(-100%)", opacity: 0 },
  exited: { transform: "translateX(-100%)", opacity: 0 },
};

const Carousel: React.FC<PropsWithChildren<{ in: boolean; reversed?: boolean }>> = (props) => {
  const { in: inProp, reversed, children } = props;
  const dynamicStyles: Record<string, any> = !reversed ? transitionStyles : transitionStylesReversed;
  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...dynamicStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export const FeesPage: React.FC = (): JSX.Element => {
  const [currentPlan, setCurrentPlan] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [inProp, setInProp] = useState<boolean>(true);
  const [slideDirection, setSlideDirection] = useState<boolean>(false);
  const isMobile = useMediaQuery("sm");
  const isTablet = useMediaQuery("md");

  const promisedControl = (reverse: boolean, cb: () => void) => {
    const p = new Promise((res) => {
      setSlideDirection(reverse);
      res(null);
    });
    p.then(() => {
      return new Promise((res) => {
        setInProp(false);
        setTimeout(() => res(null), 200);
      });
    })
      .then(() => {
        return new Promise((res) => {
          cb();
          res(null);
        });
      })
      .then(() => setInProp(true));
  };

  const handleNextPlan = () => {
    promisedControl(true, () => setCurrentPlan((prev) => prev + 1));
  };

  const handlePrevPlan = () => {
    promisedControl(false, () => setCurrentPlan((prev) => prev - 1));
  };

  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={"Global money flow"}
        bgVariant={"gradient"}
        titleAlign={"center"}
        justify={"center"}
        BgImageStyles={isMobile ? { backgroundSize: "cover", backgroundPosition: "40%" } : { backgroundSize: "cover" }}
      />

      <Section mainContent m={isMobile ? "0rem auto 20rem" : "15rem auto"} style={{ overflow: "hidden" }}>
        <Wrap
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
          }}
        >
          <Wrap sx={{ marginRight: "2rem" }}>
            <IconButton disabled={currentPlan === 0} onClick={handlePrevPlan}>
              <ArrowIconLeft />
            </IconButton>
          </Wrap>

          <IconButton disabled={currentPlan === planInfoItems.length - 1} reverse onClick={handleNextPlan}>
            <ArrowIconLeft />
          </IconButton>
        </Wrap>
        <Carousel in={inProp} reversed={slideDirection}>
          <PlanInfo.Root>
            <Wrap sx={{ display: "flex", marginBottom: "2.4rem" }}>
              {!isMobile && <PlanInfo.Title>{planInfoItems[currentPlan].title}</PlanInfo.Title>}
            </Wrap>
            <PlanInfo.Description>
              <Wrap>
                {planInfoItems[currentPlan].prosItems.map((pros, idx) => (
                  <Wrap key={`plan-info-${idx}`}>
                    <Accordeon title={pros.title} description={pros.description} />
                    {idx !== planInfoItems[currentPlan].prosItems.length - 1 && (
                      <Wrap sx={{ margin: "2.4rem 0" }}>
                        <Divider />
                      </Wrap>
                    )}
                  </Wrap>
                ))}
              </Wrap>
              {isMobile && <PlanInfo.Title>{planInfoItems[currentPlan].title}</PlanInfo.Title>}
              <Wrap
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PlanInfo.Img src={planInfoItems[currentPlan].imgSrc} alt={"Plan info"} />
              </Wrap>
            </PlanInfo.Description>
          </PlanInfo.Root>
        </Carousel>
      </Section>

      <Section mainContent m={"0 auto 20rem"}>
        <FindCountry.Root>
          <Wrap
            sx={{
              gridArea: "country",
              display: "flex",
              flexDirection: "column",
              marginBottom: isMobile ? "6rem" : "inherit",
              gap: isTablet ? "2rem" : "0",
            }}
          >
            {countries.map((country) => {
              const { Item } = FindCountry.Countries;
              return <Item key={country.country}>{`${country.country} (${country.count})`}</Item>;
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
                helperText={"Didn’t find your country or residence in here?  Please Contact us"}
              />
            </Wrap>
          )}
          <Wrap sx={{ gridArea: "title" }}>
            <FindCountry.Title>
              We’re proud to announce that we’re in more than 180 countries all over the world, find out if we’re in
              yours!
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
                helperText={"Didn’t find your country or residence in here?  Please Contact us"}
              />
            </Wrap>
          )}
        </FindCountry.Root>
      </Section>
    </>
  );
};
