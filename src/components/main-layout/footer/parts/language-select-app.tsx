import React from "react";
import { Wrap } from "../../../wrap/wrap.component";
import { Select } from "../../../inputs/select/select.component";
import { ReactComponent as AppStoreIcon } from "../../../../assets/icons/social/app_store_button.svg";
import { selectOptions } from "../footer.component";
import { SelectLanguageAppLinkProps } from "../footer.types";

export const SelectLanguageAppLink: React.FC<SelectLanguageAppLinkProps> = (props) => {
  const { language, onSelect, reverse } = props;
  return (
    <Wrap
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        width: "100%",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <Wrap sx={{ maxWidth: "12rem", margin: "0 auto" }}>
        <Select
          options={selectOptions}
          value={language}
          onSelect={onSelect}
          optionsPosition={"top"}
          borderRadius={"small"}
          fullWidth
        />
      </Wrap>

      <Wrap sx={{ marginLeft: "auto" }}>
        <AppStoreIcon />
      </Wrap>
    </Wrap>
  );
};
