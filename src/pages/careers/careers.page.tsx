import React, { ChangeEventHandler, useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import careersBg from "../../assets/images/backgrounds/careers/careers_bg.png";
import careersVideoPlugImg from "../../assets/images/backgrounds/careers/careers_video_plug.png";
import {
  VacationsComponent,
  VacationSection,
} from "../../components/vacations/vacations.component";
import { Input } from "../../components/inputs/input/input.component";
import { Select } from "../../components/inputs/select/select.component";
import {
  SelectHandler,
  SelectOption,
  SelectOptions,
} from "../../components/inputs/select/select.types";
import { ReactComponent as FlagIconCn } from "../../assets/icons/flags/flag_cn.svg";
import { ReactComponent as FlagIconEsp } from "../../assets/icons/flags/flag_esp.svg";
import { ReactComponent as FlagIconPt } from "../../assets/icons/flags/flag_pt.svg";
import { ReactComponent as FlagIconRu } from "../../assets/icons/flags/flag_ru.svg";
import { ReactComponent as FlagIconUs } from "../../assets/icons/flags/flag_us.svg";
import { Wrap } from "../../components/wrap/wrap.component";
import { ReactComponent as SearchIcon } from "../../assets/icons/search_icon.svg";
import { InputProps } from "../../components/inputs/input/input.types";
import { Button } from "../../components/button/button.component";
const vacationsList: VacationSection[] = [
  {
    title: "Sales",
    vacations: [
      {
        title: "Sales and Service Representative",
        description:
          "We're looking for an advanced Sales and Service Representative to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
      {
        title: "Sales Associate Supervisor",
        description:
          "We're looking for a mid-level Sales Associate Supervisor to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
    ],
  },
  {
    title: "Software Development",
    vacations: [
      {
        title: "Engineering Manager",
        description:
          "We're looking for an experienced engineering manager to join our team.",
        salary: { from: 80, to: 100 },
        variant: "part_time",
      },
      {
        title: "Frontend Developer",
        description:
          "We're looking for an experienced frontend developer to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
      {
        title: "Backend Beveloper",
        description:
          "We're looking for an experienced backend developer to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
    ],
  },
  {
    title: "Customer Success",
    vacations: [
      {
        title: "Customer Success Manager",
        description:
          "We're looking for a mid-level product designer to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
    ],
  },
];

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
  const [selected, setSelected] = useState<SelectOption | null>(null);

  const [formData, setFormdata] = useState<{
    filterBy: "exact" | "title" | "description";
    keywords: string;
    location: string;
    dateOfPosting: SelectOption | null;
  }>({ keywords: "", location: "", dateOfPosting: null, filterBy: "exact" });

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
    console.log(name);
    if (name) {
      commonHandler(name, value);
    }
  };

  const handleSelectFilterType = (value: "exact" | "title" | "description") => {
    commonHandler("filterBy", value);
  };

  return (
    <>
      <SlideSection
        bgImage={careersBg}
        title={"Come and work with us all over the world"}
        titleWidth={"80rem"}
        justify={"center"}
        bgVariant={"gradient"}
        button={{
          title: "Open Account",
          onClick: () => {},
        }}
      />
      <Section content>
        <Wrap sx={{ margin: "6rem 0" }}>
          <h3>We're looking for talented people to join us</h3>
        </Wrap>
        <img src={careersVideoPlugImg} alt={"Careers video"} />
      </Section>
      <Section content>
        <Wrap sx={{ width: "76.8rem", margin: "0 auto" }}>
          <VacationsComponent sections={vacationsList} />
        </Wrap>
      </Section>
      <Section content>
        <h3>Search for openings:</h3>
        <Wrap sx={{ width: "76.8rem", margin: "0 auto" }}>
          <Input
            fullWidth
            value={formData["keywords"]}
            onChange={handleInputChange}
            label={"Keywords"}
            startIcon={<SearchIcon />}
            placeholder={"Search jobs by keywords"}
            name={"keywords"}
          />
          <Wrap sx={{ display: "flex" }}>
            {keywordsFilterButtons.map((button) => (
              <Button
                onClick={() => handleSelectFilterType(button.value)}
                selected={formData.filterBy === button.value}
              >
                {button.title}
              </Button>
            ))}
          </Wrap>
          <Input
            fullWidth
            onChange={handleInputChange}
            label={"Location"}
            startIcon={<SearchIcon />}
            placeholder={"Start entering location"}
            name={"location"}
            value={formData["location"]}
          />
          <Select
            fullWidth
            options={selectOptions}
            value={formData["dateOfPosting"]}
            onSelect={handleSelect}
            optionsPosition={"bottom"}
            label={"Date of posting"}
            name={"dateOfPosting"}
          />
        </Wrap>
      </Section>
    </>
  );
};
