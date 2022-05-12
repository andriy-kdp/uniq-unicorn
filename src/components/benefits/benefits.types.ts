export type BenefitsProps = {
  items: BenefitItemsType;
  secondary?: boolean;
  vertical?: boolean;
  centered?: boolean;
};

export type BenefitITemType = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export type BenefitItemsType = BenefitITemType[];
