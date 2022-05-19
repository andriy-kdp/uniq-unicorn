import React, { ChangeEventHandler, useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import careersBg from "../../assets/backgrounds/careers/careers_bg.png";
import careersVideoPlugImg from "../../assets/backgrounds/careers/careers_video_plug.png";
import { VacationsComponent } from "../../components/vacations/vacations.component";
import { Input } from "../../components/inputs/input/input.component";
import { Select } from "../../components/inputs/select/select.component";
import { SelectHandler, SelectOption, SelectOptions } from "../../components/inputs/select/select.types";
import { ReactComponent as FlagIconCn } from "../../assets/icons/flags/flag_cn.svg";
import { ReactComponent as FlagIconEsp } from "../../assets/icons/flags/flag_esp.svg";
import { ReactComponent as FlagIconPt } from "../../assets/icons/flags/flag_pt.svg";
import { ReactComponent as FlagIconRu } from "../../assets/icons/flags/flag_ru.svg";
import { ReactComponent as FlagIconUs } from "../../assets/icons/flags/flag_us.svg";
import { Wrap } from "../../components/wrap/wrap.component";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../utils/use-media-query";
import { vacationsList } from "../../mock-data/careets";

const selectOptions: SelectOptions = [
  { id: "opt-1", label: "中文", value: "chinese", endIcon: <FlagIconCn /> },
  {
    id: "opt-2",
    label: "Español ",
    value: "espaniol",
    endIcon: <FlagIconEsp />,
  },
  {
    id: "opt-3",
    label: "Português 3",
    value: "portugues",
    endIcon: <FlagIconPt />,
  },
  {
    id: "opt-4",
    label: "Русский",
    value: "russian",
    endIcon: <FlagIconRu />,
  },
  {
    id: "opt-5",
    label: "English",
    value: "english",
    endIcon: <FlagIconUs />,
  },
];

const keywordsFilterButtons: {
  value: "exact" | "title" | "description";
  title: string;
}[] = [
  { value: "exact", title: "Exact match" },
  { value: "title", title: "In job title" },
  { value: "description", title: "In description" },
];

export const CareersPage: React.FC = (): JSX.Element => {
  const [formData, setFormdata] = useState<{
    filterBy: "exact" | "title" | "description";
    keywords: string;
    location: string;
    dateOfPosting: SelectOption | null;
  }>({ keywords: "", location: "", dateOfPosting: null, filterBy: "exact" });
  const isMobile = useMediaQuery("sm");
  const nav = useNavigate();

  const commonHandler = (name: string, value: string | SelectOption) => {
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    if (name) {
      commonHandler(name, value);
    }
  };

  const handleSelect: SelectHandler = (e) => {
    const { name, value } = e.target;
    if (name) {
      commonHandler(name, value);
    }
  };

  const handleSelectFilterType = (value: "exact" | "title" | "description") => () => {
    commonHandler("filterBy", value);
  };

  const handleClickOpenAccount = () => {
    nav("/auth/register");
  };

  return (
    <>
      <SlideSection
        bgImage={careersBg}
        title={"Come and work with us all over the world"}
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
          <h3>We're looking for talented people to join us</h3>
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
        <h3>Search for openings:</h3>
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
                <Button onClick={handleSelectFilterType(button.value)} selected={formData.filterBy === button.value}>
                  {button.title}
                </Button>
              </Wrap>
            ))}
          </Wrap>
          <Wrap sx={{ width: "100%", marginBottom: "4rem" }}>
            <Input
              fullWidth
              onChange={handleInputChange}
              label={"Location"}
              startIcon={<SearchIcon />}
              placeholder={"Start entering location"}
              name={"location"}
              value={formData["location"]}
              LabelRootProps={{ style: { marginBottom: "3.2rem" } }}
            />
          </Wrap>

          <Select
            fullWidth
            options={selectOptions}
            value={formData["dateOfPosting"]}
            onSelect={handleSelect}
            optionsPosition={"bottom"}
            label={"Date of posting"}
            name={"dateOfPosting"}
            InputProps={{
              LabelRootProps: { style: { marginBottom: "3.2rem" } },
            }}
          />
        </Wrap>
      </Section>
    </>
  );
};
