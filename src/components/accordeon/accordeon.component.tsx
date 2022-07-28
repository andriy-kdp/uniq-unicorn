import React, { MouseEventHandler, useState } from "react";
import { Acc } from "./accorderon.styles";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus_icon.svg";
import { AccordeonProps } from "./accordeon.types";

export const Accordeon: React.FC<AccordeonProps> = (props): JSX.Element => {
  const { title, description } = props;
  const [showDescription, setShowDescription] = useState<boolean>(false);

  const toggleDescription: MouseEventHandler<HTMLDivElement> = () => {
    setShowDescription((prev) => !prev);
  };
  return (
    <Acc.Root>
      <Acc.Title.Root>
        <Acc.Title.Body>{title}</Acc.Title.Body>
        <Acc.Icon onClick={toggleDescription}>{showDescription ? <MinusIcon /> : <PlusIcon />}</Acc.Icon>
      </Acc.Title.Root>
      {description.map((el) => (
        <Acc.Description visible={showDescription}>{el}</Acc.Description>
      ))}
    </Acc.Root>
  );
};
