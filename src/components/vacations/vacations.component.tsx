import React from "react";
import { Vacations } from "./vacations.styles";

export type VacationItem = {
  title: string;
  description: string;
  variant: "full_time" | "part_time";
  salary: {
    from: number;
    to: number;
  };
};

export type VacationSection = {
  title: string;
  vacations: VacationItem[];
};

export type VacationsComponentProps = {
  sections: VacationSection[];
};

export const VacationsComponent: React.FC<VacationsComponentProps> = (
  props
) => {
  const { sections } = props;
  return (
    <Vacations.Body>
      {sections.map((section) => (
        <Vacations.ContainerSection>
          <Vacations.SectionTitle>{section.title}</Vacations.SectionTitle>
          <Vacations.Items.Container>
            {section.vacations.map((vacation) => (
              <Vacations.Items.Item.Container>
                <Vacations.Items.Item.Title>
                  {vacation.title}
                </Vacations.Items.Item.Title>
                <Vacations.Items.Item.Description>
                  {vacation.description}
                </Vacations.Items.Item.Description>
              </Vacations.Items.Item.Container>
            ))}
          </Vacations.Items.Container>
        </Vacations.ContainerSection>
      ))}
    </Vacations.Body>
  );
};
