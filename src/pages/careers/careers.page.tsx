import React, { useState } from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { Section } from "../../components/section/section.component";
import careersBg from "../../assets/images/backgrounds/careers/careers_bg.png";
import careersVideoPlugImg from "../../assets/images/backgrounds/careers/careers_video_plug.png";
import {
  VacationsComponent,
  VacationSection,
} from "../../components/vacations/vacations.component";
import { Button } from "../../components/button/button.component";
import { Input } from "../../components/inputs/input/input.component";
import { Select } from "../../components/inputs/select/select.component";
import {
  SelectOption,
  SelectOptions,
} from "../../components/inputs/select/select.types";

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
  { id: "opt-1", label: "Option 1", value: "option_1" },
  { id: "opt-2", label: "Option 2", value: "option_2" },
  { id: "opt-3", label: "Option 3", value: "option_3" },
];

export const CareersPage = () => {
  const [ival, setIval] = useState<string>("");
  const [selected, setSelected] = useState<SelectOption | null>(null);
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
        <img src={careersVideoPlugImg} alt={"Careers video"} />
      </Section>
      <Section content>
        <VacationsComponent sections={vacationsList} />
      </Section>
      <Section content>
        <h3>Search for openings:</h3>
        <Input
          value={ival}
          onChange={(e) => setIval(e.target.value)}
          label={"Test label component"}
          startIcon={<>Test</>}
          InputNativeProps={{ placeholder: "test placeholder" }}
        />
        <Input
          helperText="TEst helper text"
          value={ival}
          onChange={(e) => setIval(e.target.value)}
          label={"Test label component"}
          placeholder={"TEST PLACEHOLDER"}
        />
        <Select
          options={selectOptions}
          value={selected}
          onSelect={(value) => setSelected(value)}
          optionsPosition={"bottom"}
        />
      </Section>
    </>
  );
};
