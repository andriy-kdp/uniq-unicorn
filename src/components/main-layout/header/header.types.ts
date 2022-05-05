export type MenuItemType = {
  path: string;
  label: string;
};

export type MenuPartProps = {
  menuItems: MenuItemType[];
  right?: boolean;
};
