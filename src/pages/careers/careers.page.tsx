import React, { ChangeEventHandler, useCallback, useEffect, useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import careersBg from "../../assets/backgrounds/careers/careers_bg.png";
import careersVideoPlugImg from "../../assets/backgrounds/careers/careers_video_plug.png";
import { ReactComponent as SalaryBenefits } from "../../assets/icons/benefits-careers/salaryBenefits.svg";
import { ReactComponent as Bonuses } from "../../assets/icons/benefits-careers/bonuses.svg";
import { ReactComponent as EmployeeInsurance } from "../../assets/icons/benefits-careers/employeeInsurance.svg";
import { ReactComponent as FlexibleWorkspace } from "../../assets/icons/benefits-careers/flexibleWorkspace.svg";
import { ReactComponent as PlatinumAccount } from "../../assets/icons/benefits-careers/platinumAccount.svg";
import { ReactComponent as SocialEvents } from "../../assets/icons/benefits-careers/socialEvents.svg";
import { VacationsComponent } from "../../components/vacations/vacations.component";
import { Input } from "../../components/inputs/input/input.component";
import { Select } from "../../components/inputs/select/select.component";
import { SelectHandler, SelectOption, SelectOptions } from "../../components/inputs/select/select.types";
import { Wrap } from "../../components/wrap/wrap.component";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../utils/use-media-query";
import { vacationsList } from "../../mock-data/careets";
import { uiCareerDropDown, uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useDispatch, useSelector } from "../../redux/store";
import operations from "../../redux/uiData/operations";
import _ from "lodash";

// const selectOptions: SelectOptions = [
//   { id: "opt-0", label: "Select", value: "none" },
//   { id: "opt-1", label: "1-30 days", value: "1-30" },
//   { id: "opt-2", label: "1-60 days", value: "1-60" },
//   { id: "opt-3", label: "1-90 days", value: "1-90" },
//   { id: "opt-4", label: "1-120 days", value: "1-120" },
// ];

export const CareersPage: React.FC = (): JSX.Element => {
  const careersDropDown = useSelector(uiCareerDropDown);
  const { aboutUsCareers } = useSelector(uiDataWebsiteText);
  const dispatch = useDispatch();
  const [formData, setFormdata] = useState<{
    jobKeywordMatch: "0" | "1" | "2";
    keywords: string;
    jobLocation: SelectOption | null;
    postedDays: SelectOption | null;
  }>({ keywords: "", jobLocation: null, postedDays: null, jobKeywordMatch: "0" });
  const isMobile = useMediaQuery("sm");
  const nav = useNavigate();

  const commonHandler = (name: string, value: string | SelectOption) => {
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name) {
      commonHandler(name, value);
      //@ts-ignore - add lodash debounce
      // dispatch(
      //   operations.getCareerJobs({
      //     jobLocation: Number(formData.jobLocation.id),
      //     postedDays: Number(formData.postedDays.id),
      //     keywords: formData.keywords,
      //     jobKeywordMatch: Number(formData.jobKeywordMatch),
      //   }),
      // )
    }
  };

  const handleSelect: SelectHandler = (e) => {
    const { name, value } = e.target;
    if (name) {
      commonHandler(name, value);
    }
  };

  const handleSelectFilterType = (value: "0" | "1" | "2") => () => {
    commonHandler("jobKeywordMatch", value);
  };

  const handleClickOpenAccount = () => {
    nav("/auth/register");
  };
  const keywordsFilterButtons: {
    value: "0" | "1" | "2";
    title: string;
  }[] = [
    { value: "0", title: aboutUsCareers.abtus_cr_opone },
    { value: "1", title: aboutUsCareers.abtus_cr_optwo },
    { value: "2", title: aboutUsCareers.abtus_cr_opthree },
  ];
  const benefitsList: {
    image: any;
    title: string;
    text: string;
  }[] = [
    {
      image: <SalaryBenefits />,
      title: "Salary Benefits",
      text: "Get what you deserve a salary that actually makes you feel valued.",
    },
    {
      image: <Bonuses />,
      title: "Bonuses",
      text: "Performance bonuses to let you know we appreciate your hard work",
    },
    {
      image: <EmployeeInsurance />,
      title: "Employee Insurance",
      text: "Access to medical insurance for you and your spouse and dependents",
    },
    {
      image: <FlexibleWorkspace />,
      title: "Flexible workspace",
      text: "Work from home for up to 20 days per month",
    },
    {
      image: <PlatinumAccount />,
      title: "Platinum account",
      text: "A free Black Banx Platinum account",
    },
    {
      image: <SocialEvents />,
      title: "Social Events",
      text: "Regular themed social events like summer and winter parties",
    },
  ];
  return (
    <>
      <SlideSection
        bgImage={careersBg}
        title={aboutUsCareers.abtus_cr_headone}
        justify={"center"}
        bgVariant={"gradient"}
        titleAlign={"center"}
        h={isMobile ? "45rem" : "57.8rem"}
        titleWidth={isMobile ? "90%" : "70%"}
        BgImageStyles={
          isMobile
            ? {
                backgroundPosition: "70%",
                backgroundSize: "90rem 100%",
                backgroundRepeat: "no-repeat",
                opacity: "0.8 !important",
              }
            : {
                backgroundSize: "100%",
              }
        }
        button={{
          title: "Open Account",
          onClick: handleClickOpenAccount,
        }}
      />

      <Section mainContent>
        <Wrap sx={{ margin: isMobile ? "3rem 0" : "6rem 0" }}>
          <h3>BENEFITS</h3>
        </Wrap>
        <Wrap sx={{ marginBottom: isMobile ? "3rem" : "9rem", width: "100%", display: "flex", flexWrap: "wrap" }}>
          {benefitsList.map((el) => (
            <Wrap sx={{ width: isMobile ? "50%" : "33%" }}>
              <Wrap sx={{ marginTop: "3rem", marginBottom: "3rem" }}>{el.image}</Wrap>
              <h5 style={{ marginBottom: "1.3rem" }}>{el.title}</h5>
              <p style={{ maxWidth: "90%", fontSize: "2.2rem" }}>{el.text}</p>
            </Wrap>
          ))}
        </Wrap>
      </Section>

      <Section mainContent>
        <Wrap sx={{ margin: isMobile ? "3rem 0" : "6rem 0" }}>
          <h3>{aboutUsCareers.abtus_cr_headtwo}</h3>
        </Wrap>
        <Wrap sx={{ marginBottom: isMobile ? "3rem" : "9rem", width: "100%" }}>
          <img src={careersVideoPlugImg} alt={"Careers video"} style={{ position: "relative", width: "100%" }} />
        </Wrap>
      </Section>

      <Section mainContent>
        <Wrap sx={{ maxWidth: "76.8rem", width: "100%", margin: "0 auto" }}>
          <VacationsComponent sections={vacationsList} />
        </Wrap>
      </Section>
      <Section mainContent>
        <h3>{aboutUsCareers.abtus_cr_headtwoSub}</h3>
        <Wrap sx={{ maxWidth: "76.8rem", width: "100%", margin: "4rem auto 14rem" }}>
          <Input
            fullWidth
            value={formData["keywords"]}
            onChange={handleInputChange}
            label={aboutUsCareers.abtus_cr_bxone_title}
            startIcon={<SearchIcon />}
            placeholder={aboutUsCareers.abtus_cr_bxone_plcehldr}
            name={"keywords"}
            LabelRootProps={{ style: { marginBottom: "3.2rem" } }}
          />

          <Wrap sx={{ display: "flex", marginTop: "1.6rem", marginBottom: "4rem" }}>
            {keywordsFilterButtons.map((button) => (
              <Wrap sx={{ marginRight: "1.6rem" }} key={button.value}>
                <Button
                  onClick={handleSelectFilterType(button.value)}
                  selected={formData.jobKeywordMatch === button.value}
                >
                  {button.title}
                </Button>
              </Wrap>
            ))}
          </Wrap>
          {/* <Wrap sx={{ width: "100%", marginBottom: "4rem" }}>
            <Input
              fullWidth
              onChange={handleInputChange}
              label={aboutUsCareers.abtus_cr_bxtwo_title}
              startIcon={<SearchIcon />}
              placeholder={"Start entering jobLocation"}
              name={"jobLocation"}
              value={formData["jobLocation"]}
              LabelRootProps={{ style: { marginBottom: "3.2rem" } }}
            />
          </Wrap> */}
          {careersDropDown.abtus_cr_cntry && (
            <Wrap sx={{ width: "100%", marginBottom: "4rem" }}>
              <Select
                fullWidth
                options={careersDropDown.abtus_cr_cntry}
                value={formData["jobLocation"]}
                onSelect={handleSelect}
                optionsPosition={"bottom"}
                label={aboutUsCareers.abtus_cr_bxtwo_title}
                name={"jobLocation"}
                InputProps={{
                  LabelRootProps: { style: { marginBottom: "3.2rem" } },
                }}
              />
            </Wrap>
          )}
          {careersDropDown.abtus_cr_day && (
            <Select
              fullWidth
              options={careersDropDown.abtus_cr_day}
              value={formData["postedDays"]}
              onSelect={handleSelect}
              optionsPosition={"bottom"}
              label={"Date of posting"}
              name={"postedDays"}
              InputProps={{
                LabelRootProps: { style: { marginBottom: "3.2rem" } },
              }}
            />
          )}
        </Wrap>
      </Section>
    </>
  );
};
