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
import {
  uiCareerDropDown,
  uiCareerJobs,
  uiDataSelectedLanguageId,
  uiDataWebsiteText,
} from "../../redux/uiData/selectors";
import { useDispatch, useSelector } from "../../redux/store";
import operations from "../../redux/uiData/operations";
import _ from "lodash";
import { MissionDescription, MissionSubTitle, MissionTitle } from "../mission/mission.styles";

export const CareersPage: React.FC = (): JSX.Element => {
  const careersDropDown = useSelector(uiCareerDropDown);
  const { aboutUsCareers } = useSelector(uiDataWebsiteText);
  const language = useSelector(uiDataSelectedLanguageId);
  const careerJobs = useSelector(uiCareerJobs);
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
      dispatch(
        operations.getCareerJobs({
          jobLocation: Number(formData.jobLocation.id),
          postedDays: Number(formData.postedDays.id),
          keywords: formData.keywords,
          jobKeywordMatch: Number(formData.jobKeywordMatch),
        }),
      );
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
    { value: "0", title: "Exact match" },
    { value: "1", title: "In job title" },
    { value: "2", title: "In description" },
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

  useEffect(() => {
    dispatch(operations.getCareerJobs({ languageId: language }));
  }, []);
  const data = careerJobs?.map((element: any) => {
    return {
      title: element.department,
      vacations: [
        //@ts-ignore
        {
          title: element.title,
          description: element.description,
          salary: { to: element.salary },
          variant: element.type,
        },
      ],
    };
  });

  // vacations: [] } });)
  return (
    <>
      <SlideSection
        bgImage={careersBg}
        title={"COME AND WORK WITH US ALL OVER THE WORLD"}
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
          <h3>CAREERS AND DIVERSITY</h3>
        </Wrap>
        <MissionDescription>
          Diversity and inclusion, equal opportunity and building trust in the workplace are key priorities for us.
          Mutual respect is the foundation to developing trust and to working in partnership.
        </MissionDescription>
        <MissionDescription>
          We are committed to social equality as exemplified in our Culture and Code of Conduct and employment policies.
          We believe in providing accessibility to job opportunities, and fair and equal treatment to all nationalities
          in the context of our desire for racial and gender equality.
        </MissionDescription>
        <MissionDescription>
          That is why we do not tolerate disrespectful behaviour, discrimination or harassment, including sexual
          harassment, or any threatening, hostile or abusive behaviour. We work together without discrimination based on
          an individual’s race, colour, sex, nationality, ethnicity, age, religion, disability, marital status,
          pregnancy, sexual orientation, gender identity and expression, citizenship or any other characteristic
          protected by law.
        </MissionDescription>
        <MissionDescription>
          We are caring, responsible employers and the well-being of our employees is paramount. We do all we can to
          ensure that working conditions, working hours, working from home, remuneration, pension and health insurance
          arrangements are as tailored to the needs of each local market as possible.
        </MissionDescription>
        <MissionDescription>
          We think that optimal customer service is provided by teams who understand local market dynamics and employ
          local teams in each of our operating markets to ensure that we are closely involved in all countries where we
          operate.
        </MissionDescription>
        <MissionDescription>
          Our current global workforce of more than 2,000 employees is a well diversified mix of different races and
          different gender working for us around the globe.
        </MissionDescription>
        <MissionTitle>
          <h3>Global Workforce - Gender & Race</h3>
        </MissionTitle>
        <MissionDescription>
          Despite already having an extremely diverse mix of gender and races, we are aiming to increase our global
          workforce to 8,000 employees and diversify the gender balance further with a minimum of 40% females overall
          and a growing proportion of females in leadership roles by the end of 2025.
        </MissionDescription>
        <MissionDescription>
          {" "}
          We believe success comes from our people and our culture. That’s why we offer a wide range of meaningful
          benefits ensuring our people thrive no matter what their role is. Our salaries are centred around achievement
          and making people feel valued, whilst performance bonuses reflect our appreciation of going the extra mile and
          making an impact. We offer generous annual leave and family leave policies for new parents, as well as a free
          Black Banx Platinum account for every employee.
        </MissionDescription>
        <MissionDescription>
          Our <MissionSubTitle>‘Stay at Home’</MissionSubTitle> policy is integral to our sustainability programme. We
          encourage employees to work from home, and are targeting a 99% reduction in commuting to work and related GHG
          emissions since by 2030. We have also launched our ‘Work from anywhere’ initiative, reducing global office
          space in order to reduce our ecological footprint and achieve our goal of net zero emissions by 2030.
          Employees can work from any country where they are resident, regardless of whether Black Banx has an office
          there or not. This policy gives potential employees enormous opportunity regardless of their nationality or
          country of residence.
        </MissionDescription>
        <MissionDescription>
          Join one of our Black Banx teams and be a part of redefining the way banking works on a global scale.{" "}
        </MissionDescription>
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
          <h3>{"We're looking for talented people to join us"}</h3>
        </Wrap>
        <Wrap sx={{ marginBottom: isMobile ? "3rem" : "9rem", width: "100%" }}>
          <img src={careersVideoPlugImg} alt={"Careers video"} style={{ position: "relative", width: "100%" }} />
        </Wrap>
      </Section>

      {data && (
        <Section mainContent>
          <Wrap sx={{ maxWidth: "76.8rem", width: "100%", margin: "0 auto" }}>
            <VacationsComponent sections={data} />
          </Wrap>
        </Section>
      )}
      <Section mainContent>
        <h3>{"Search for Openings:"}</h3>
        <Wrap sx={{ maxWidth: "76.8rem", width: "100%", margin: "4rem auto 14rem" }}>
          <Input
            fullWidth
            value={formData["keywords"]}
            onChange={handleInputChange}
            label={"Keywords"}
            startIcon={<SearchIcon />}
            placeholder={"Search jobs by keywords"}
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
                label={"Location"}
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
