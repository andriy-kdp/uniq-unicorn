import React, { MouseEventHandler, useMemo, useState } from "react";
import { Input } from "../input/input.component";
import { SelectOption, SelectProps } from "./select.types";
import { Sel } from "./select.styles";
import ClickAwayListener from "react-click-away-listener";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow_down.svg";
import { ReactComponent as ArrowUpIcon } from "../../../assets/icons/arrow_up.svg";
import { Divider } from "../../divider/divider.styles";

export const Select: React.FC<SelectProps> = (props) => {
  const [showOptions, setShowOptions] = useState<boolean>();
  const { value, onSelect, options, optionsPosition = "bottom" } = props;

  const handleCloseList = () => {
    setShowOptions(false);
  };

  const handleOpenList = () => {
    setShowOptions(true);
  };

  const handleSelect =
    (option: SelectOption): MouseEventHandler<HTMLDivElement> =>
    () => {
      onSelect(option);
      setShowOptions(false);
    };

  const getOptionsWithUpArrow = useMemo(() => {
    const arrowPositionIndex =
      optionsPosition === "top" ? 0 : options.length - 1;
    return options.map((option, index) =>
      index !== arrowPositionIndex
        ? option
        : { ...option, icon: <ArrowUpIcon onClick={handleCloseList} /> }
    );
  }, []);

  return (
    <ClickAwayListener onClickAway={handleCloseList}>
      <Sel.Root>
        <Input
          value={value?.label || ""}
          InputNativeProps={{ readOnly: true, onFocus: handleOpenList }}
          onIconClick={handleOpenList}
          startIcon={
            <Sel.Adornment.Root>
              <ArrowDownIcon />
              {!value && <Sel.Adornment.Label>Select</Sel.Adornment.Label>}
            </Sel.Adornment.Root>
          }
        />
        {showOptions && (
          <Sel.Options.Root>
            {getOptionsWithUpArrow.map((option) => (
              <>
                <Sel.Options.Item.Root>
                  {option.icon && (
                    <Sel.Options.Item.Icon>{option.icon}</Sel.Options.Item.Icon>
                  )}
                  <Sel.Options.Item.Title onClick={handleSelect(option)}>
                    {option.label}
                  </Sel.Options.Item.Title>
                </Sel.Options.Item.Root>
                <Divider />
              </>
            ))}
          </Sel.Options.Root>
        )}
      </Sel.Root>
    </ClickAwayListener>
  );
};
