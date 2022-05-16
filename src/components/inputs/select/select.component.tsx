import React, { MouseEventHandler, useMemo, useState } from "react";
import { Input } from "../input/input.component";
import { SelectOption, SelectProps, SimpleSelectEvent } from "./select.types";
import { Sel } from "./select.styles";
import ClickAwayListener from "react-click-away-listener";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow_down.svg";
import { ReactComponent as ArrowUpIcon } from "../../../assets/icons/arrow_up.svg";
import { Divider } from "../../divider/divider.styles";
import { Wrap } from "../../wrap/wrap.component";

export const Select: React.FC<SelectProps> = (props) => {
  const [showOptions, setShowOptions] = useState<boolean>();
  const {
    value,
    onSelect,
    options,
    optionsPosition = "bottom",
    borderRadius,
    label,
    InputProps,
    fullWidth,
    name,
    maxWidth,
    borderColor,
    noAdornment,
    error,
  } = props;

  const handleCloseList = () => {
    setShowOptions(false);
  };

  const handleOpenList = () => {
    setShowOptions(true);
  };

  const handleSelect =
    (option: SelectOption): MouseEventHandler<HTMLDivElement> =>
    () => {
      const simpleEvent: SimpleSelectEvent = {
        target: {
          name,
          value: option,
        },
      };
      onSelect(simpleEvent);
      setShowOptions(false);
    };

  const getOptionsWithUpArrow = useMemo(() => {
    const arrowPositionIndex =
      optionsPosition === "bottom" ? 0 : options.length - 1;
    return options.map((option, index) =>
      index !== arrowPositionIndex
        ? option
        : { ...option, startIcon: <ArrowUpIcon onClick={handleCloseList} /> },
    );
  }, []);

  return (
    <ClickAwayListener onClickAway={handleCloseList}>
      <Sel.Root fullWidth={fullWidth} maxWidth={maxWidth}>
        <Input
          value={value?.abbr || value?.label || ""}
          InputNativeProps={{ readOnly: true, onFocus: handleOpenList }}
          onStartIconClick={handleOpenList}
          borderRadius={borderRadius}
          label={label}
          fullWidth={fullWidth}
          borderColor={borderColor}
          error={error}
          _select
          startIcon={
            <Sel.Adornment.Root>
              <ArrowDownIcon />
              {!value && !noAdornment && (
                <Sel.Adornment.Label>Select</Sel.Adornment.Label>
              )}
            </Sel.Adornment.Root>
          }
          endIcon={
            value?.endIcon && (
              <Sel.Adornment.Root>{value.endIcon}</Sel.Adornment.Root>
            )
          }
          {...InputProps}
        />
        {showOptions && (
          <Sel.Options.Root
            optionsPosition={optionsPosition}
            borderRadius={borderRadius}
          >
            {getOptionsWithUpArrow.map((option, index) => (
              <Wrap key={`option-item-${index}`}>
                <Sel.Options.Item.Root>
                  {option.startIcon && (
                    <Wrap sx={{ padding: "1rem 1rem 1rem 0" }}>
                      <Sel.Options.Item.Icon>
                        {option.startIcon}
                      </Sel.Options.Item.Icon>
                    </Wrap>
                  )}
                  <Sel.Options.Item.Title onClick={handleSelect(option)}>
                    {option.label}
                  </Sel.Options.Item.Title>
                  {option.endIcon && (
                    <Sel.Options.Item.Icon>
                      {option.endIcon}
                    </Sel.Options.Item.Icon>
                  )}
                </Sel.Options.Item.Root>
                {index !== options.length - 1 && (
                  <Divider variant="dashed" width={"90%"} />
                )}
              </Wrap>
            ))}
          </Sel.Options.Root>
        )}
      </Sel.Root>
    </ClickAwayListener>
  );
};
