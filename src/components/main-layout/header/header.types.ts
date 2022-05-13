export type MenuItemType = {
  label: string;
  path?: string;
  icon?: React.ReactNode;
  dropdownItems?: Omit<MenuItemType, "dropdownItems">[];
  description?: string;
};

export type MenuPartProps = {
  menuItems: MenuItemType[];
  right?: boolean;
  setSubmenuItems?: React.Dispatch<Omit<MenuItemType, "dropdownItems">[]>;
};
