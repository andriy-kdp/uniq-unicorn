import React from "react";
import { Vacations } from "./vacations.styles";
import { ReactComponent as DollarIcon } from "../../assets/icons/vacations/dollar-sign.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/vacations/clock.svg";
import { Wrap } from "../wrap/wrap.component";
export type VacationItem = {
  title: string;
  description: string;
  variant: "full_time" | "part_time";
  salary: {
    from: number;
    to: number;
  };
};

const variantsMap: Record<VacationItem["variant"], string> = {
  full_time: "Full time",
  part_time: "Part time",
};

export type VacationSection = {
  title: string;
  vacations: VacationItem[];
};

export type VacationsComponentProps = {
  sections: VacationSection[];
};

export const VacationsComponent: React.FC<VacationsComponentProps> = (props) => {
  const { sections } = props;
  return (
    <Vacations.Body>
      {sections.map((section, idx) => (
        <Vacations.ContainerSection key={`vacation-section-${idx}`}>
          <Vacations.SectionTitle>{section.title}</Vacations.SectionTitle>
          <Vacations.Items.Container>
            {section.vacations.map((vacation, idx) => {
              const { Item: Vacation } = Vacations.Items;
              return (
                <Vacation.Container key={`vacation-item-${idx}`}>
                  <Vacation.Title>{vacation.title}</Vacation.Title>
                  <Vacation.Description>{vacation.description}</Vacation.Description>
                  <Vacation.Footer.Data>
                    <Vacation.Footer.Item>
                      <Wrap sx={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
                        <ClockIcon />
                      </Wrap>
                      {variantsMap[vacation.variant]}
                    </Vacation.Footer.Item>
                    <Vacation.Footer.Item>
                      <Wrap sx={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
                        <DollarIcon />
                      </Wrap>
                      {vacation.salary.from}-{vacation.salary.to}
                    </Vacation.Footer.Item>
                  </Vacation.Footer.Data>
                </Vacation.Container>
              );
            })}
          </Vacations.Items.Container>
        </Vacations.ContainerSection>
      ))}
    </Vacations.Body>
  );
};
