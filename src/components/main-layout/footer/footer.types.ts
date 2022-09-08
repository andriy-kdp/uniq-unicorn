import { SelectHandler, SelectOption, SelectOptions } from "../../inputs/select/select.types";

export type FooterLinkGroup = {
  title: string;
  links: { label: string; path: string }[];
};

export type SelectLanguageAppLinkProps = {
  options: SelectOptions | null;
  language: SelectOption | null;
  onSelect: SelectHandler;
  reverse?: boolean;
  optionsPosition?: "top" | "bottom";
};
