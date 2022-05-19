import { VacationSection } from "../components/vacations/vacations.component";

export const vacationsList: VacationSection[] = [
  {
    title: "Sales",
    vacations: [
      {
        title: "Sales and Service Representative",
        description: "We're looking for an advanced Sales and Service Representative to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
      {
        title: "Sales Associate Supervisor",
        description: "We're looking for a mid-level Sales Associate Supervisor to join our team.",
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
        description: "We're looking for an experienced engineering manager to join our team.",
        salary: { from: 80, to: 100 },
        variant: "part_time",
      },
      {
        title: "Frontend Developer",
        description: "We're looking for an experienced frontend developer to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
      {
        title: "Backend Beveloper",
        description: "We're looking for an experienced backend developer to join our team.",
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
        description: "We're looking for a mid-level product designer to join our team.",
        salary: { from: 80, to: 100 },
        variant: "full_time",
      },
    ],
  },
];
