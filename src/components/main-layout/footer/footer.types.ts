import { SelectHandler, SelectOption } from "../../inputs/select/select.types";

export type FooterLinkGroup = {
  title: string;
  links: { label: string; path: string }[];
};

export type SelectLanguageAppLinkProps = {
  language: SelectOption | null;
  onSelect: SelectHandler;
  reverse?: boolean;
};
