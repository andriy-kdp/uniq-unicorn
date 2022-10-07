import React, { PropsWithChildren, useEffect, useState } from "react";
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
import { uiDataWebsiteText, uiDataCountryOfResidence } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { useParams } from "react-router-dom";

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
  const countryOfResidence = useSelector(uiDataCountryOfResidence);
  const { accountsFees } = useSelector(uiDataWebsiteText);
  const [currentPlan, setCurrentPlan] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>("");
  const [inProp, setInProp] = useState<boolean>(true);
  const [slideDirection, setSlideDirection] = useState<boolean>(false);
  const isMobile = useMediaQuery("sm");
  const isTablet = useMediaQuery("md");
  const { feeId } = useParams();
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
  const handleFilter = (e: any) => {
    console.log(e);
    //@ts-ignore
    const searchWord = e.target.value.toLowerCase();
    const country = countryOfResidence
      .filter((el: any) => el)
      .trim()
      .toLowerCase()
      .includes(searchWord.trim().toLowerCase());
    console.log(country);
  };
  const planInfoItems: PlanInfoType[] = [
    {
      title: accountsFees.ac_fee_typslde_hdone,
      imgSrc: TitaniumAccountBg,
      prosItems: [
        {
          title: accountsFees.ac_fee_typslde_hdone_subhdone,
          description: [accountsFees.ac_fee_typslde_hdone_subhdone_pone],
        },
        {
          title: accountsFees.ac_fee_typslde_hdone_subhdtwo,
          description: [
            accountsFees.ac_fee_typslde_hdone_subhdtwo_pone,
            accountsFees.ac_fee_typslde_hdone_subhdtwo_ptwo,
            accountsFees.ac_fee_typslde_hdone_subhdtwo_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdone_subhdfour,
          description: [
            accountsFees.ac_fee_typslde_hdone_subhdfour_pone,
            accountsFees.ac_fee_typslde_hdone_subhdfour_ptwo,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdone_subhdthree,
          description: [
            accountsFees.ac_fee_typslde_hdone_subhdthree_pone,
            accountsFees.ac_fee_typslde_hdone_subhdthree_ptwo,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdone_subhdfive,
          description: [accountsFees.ac_fee_typslde_hdone_subhdfive_pone],
        },
        {
          title: accountsFees.ac_fee_typslde_hdone_subhdSix,
          description: [
            accountsFees.ac_fee_typslde_hdone_subhdsix_pone,
            accountsFees.ac_fee_typslde_hdone_subhdsix_ptwo,
            accountsFees.ac_fee_typslde_hdone_subhdsix_pthree,
            accountsFees.ac_fee_typslde_hdone_subhdsix_pfour,
          ],
        },
      ],
    },
    {
      title: accountsFees.ac_fee_typslde_hdtwo,
      imgSrc: TitaniumAccountBg,
      prosItems: [
        {
          title: accountsFees.ac_fee_typslde_hdtwo_subhdone,
          description: [accountsFees.ac_fee_typslde_hdtwo_subhdone_pone],
        },
        {
          title: accountsFees.ac_fee_typslde_hdtwo_subhdtwo,
          description: [
            accountsFees.ac_fee_typslde_hdtwo_subhdtwo_pone,
            accountsFees.ac_fee_typslde_hdtwo_subhdtwo_ptwo,
            accountsFees.ac_fee_typslde_hdtwo_subhdtwo_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdtwo_subhdthree,
          description: [
            accountsFees.ac_fee_typslde_hdtwo_subhdthree_pone,
            accountsFees.ac_fee_typslde_hdtwo_subhdthree_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdtwo_subhdfour,
          description: [
            accountsFees.ac_fee_typslde_hdtwo_subhdfour_pone,
            accountsFees.ac_fee_typslde_hdtwo_subhdfour_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdtwo_subhdsix,
          description: [
            accountsFees.ac_fee_typslde_hdtwo_subhdSix_pone,
            accountsFees.ac_fee_typslde_hdtwo_subhdSix_ptwo,
            accountsFees.ac_fee_typslde_hdtwo_subhdSix_pthree,
            accountsFees.ac_fee_typslde_hdtwo_subhdSix_pfour,
          ],
        },
      ],
    },
    {
      title: accountsFees.ac_fee_typslde_hdthree,
      imgSrc: TitaniumAccountBg,
      prosItems: [
        {
          title: accountsFees.ac_fee_typslde_hdthree_subhdone,
          description: [accountsFees.ac_fee_typslde_hdthree_subhdone_pone],
        },
        {
          title: accountsFees.ac_fee_typslde_hdthree_subhdtwo,
          description: [
            accountsFees.ac_fee_typslde_hdthree_subhdtwo_pone,
            accountsFees.ac_fee_typslde_hdthree_subhdtwo_ptwo,
            accountsFees.ac_fee_typslde_hdthree_subhdtwo_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdthree_subhdthree,
          description: [
            accountsFees.ac_fee_typslde_hdthree_subhdthree_pone,
            accountsFees.ac_fee_typslde_hdthree_subhdthree_ptwo,
            accountsFees.ac_fee_typslde_hdthree_subhdthree_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdthree_subhdfour,
          description: [
            accountsFees.ac_fee_typslde_hdthree_subhdfour_pone,
            accountsFees.ac_fee_typslde_hdthree_subhdfour_ptwo,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdthree_subhdfive,
          description: [
            accountsFees.ac_fee_typslde_hdthree_subhdfive_pone,
            accountsFees.ac_fee_typslde_hdthree_subhdfive_ptwo,
            accountsFees.ac_fee_typslde_hdthree_subhdfive_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdthree_subhdsix,
          description: [
            accountsFees.ac_fee_typslde_hdthree_subhdsix_pone,
            accountsFees.ac_fee_typslde_hdthree_subhdsix_ptwo,
            accountsFees.ac_fee_typslde_hdthree_subhdsix_pthree,
            accountsFees.ac_fee_typslde_hdthree_subhdsix_pfour,
            accountsFees.ac_fee_typslde_hdthree_subhdsix_pfive,
            accountsFees.ac_fee_typslde_hdthree_subhdsix_psix,
          ],
        },
      ],
    },
    {
      title: accountsFees.ac_fee_typslde_hdfour,
      imgSrc: TitaniumAccountBg,
      prosItems: [
        {
          title: accountsFees.ac_fee_typslde_hdfour_subhdone,
          description: [accountsFees.ac_fee_typslde_hdfour_subhdone_pone],
        },
        {
          title: accountsFees.ac_fee_typslde_hdfour_subhdtwo,
          description: [
            accountsFees.ac_fee_typslde_hdfour_subhdtwo_pone,
            accountsFees.ac_fee_typslde_hdfour_subhdtwo_ptwo,
            accountsFees.ac_fee_typslde_hdfour_subhdtwo_pthree,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdfour_subhdthree,
          description: [
            accountsFees.ac_fee_typslde_hdfour_subhdthree_pone,
            accountsFees.ac_fee_typslde_hdfour_subhdthree_ptwo,
            accountsFees.ac_fee_typslde_hdfour_subhdthree_pthree,
            accountsFees.ac_fee_typslde_hdfour_subhdthree_pfour,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdfour_subhdfour,
          description: [
            accountsFees.ac_fee_typslde_hdfour_subhdfour_pone,
            accountsFees.ac_fee_typslde_hdfour_subhdfour_ptwo,
          ],
        },
        {
          title: accountsFees.ac_fee_typslde_hdfour_subhdfive,
          description: [accountsFees.ac_fee_typslde_hdfour_subhdfive_pone],
        },
        {
          title: accountsFees.ac_fee_typslde_hdfour_subhdsix,
          description: [
            accountsFees.ac_fee_typslde_hdfour_subhdsix_pone,
            accountsFees.ac_fee_typslde_hdfour_subhdsix_ptwo,
            accountsFees.ac_fee_typslde_hdfour_subhdsix_pthree,
            accountsFees.ac_fee_typslde_hdfour_subhdsix_pfour,
            accountsFees.ac_fee_typslde_hdfour_subhdsix_pfive,
            accountsFees.ac_fee_typslde_hdfour_subhdsix_pSix,
          ],
        },
      ],
    },
  ];
  const countries: { country: string }[] = [
    { country: accountsFees.ac_fee_lower_drp_dflt_one },
    { country: accountsFees.ac_fee_lower_drp_dflt_two },
    { country: accountsFees.ac_fee_lower_drp_dflt_three },
    { country: accountsFees.ac_fee_lower_drp_dflt_four },
    { country: accountsFees.ac_fee_lower_drp_dflt_five },
  ];

  useEffect(() => {
    if (feeId) setCurrentPlan(+feeId);
  }, [feeId]);

  return (
    <>
      <SlideSection
        bgImage={MainBg}
        title={accountsFees.ac_fee_hdone}
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
            {countries.map((country, idx) => {
              const { Item } = FindCountry.Countries;
              return <Item key={country.country + idx}>{`${country.country}`}</Item>;
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
                onChange={(e) => handleFilter(e)}
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
