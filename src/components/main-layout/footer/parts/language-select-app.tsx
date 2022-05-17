import React from "react";
import { Wrap } from "../../../wrap/wrap.component";
import { Select } from "../../../inputs/select/select.component";
import { ReactComponent as AppStoreIcon } from "../../../../assets/icons/social/app_store_button.svg";
import { selectOptions } from "../footer.component";
import { SelectLanguageAppLinkProps } from "../footer.types";
import { SelectLanguageAppLinkRoot } from "./connect.styles";

export const SelectLanguageAppLink: React.FC<SelectLanguageAppLinkProps> = (props) => {
  const { language, onSelect } = props;
  const handleAppIconClick = () => {
    window.open("about:blank", "noopener norefferer");
  };
  return (
    <SelectLanguageAppLinkRoot>
      <Select
        options={selectOptions}
        value={language}
        onSelect={onSelect}
        optionsPosition={"top"}
        borderRadius={"small"}
        fullWidth
        borderColor={"secondary"}
        noAdornment
      />

      <Wrap sx={{ marginLeft: "auto", cursor: "pointer" }} onClick={handleAppIconClick}>
        <AppStoreIcon />
      </Wrap>
    </SelectLanguageAppLinkRoot>
  );
};
