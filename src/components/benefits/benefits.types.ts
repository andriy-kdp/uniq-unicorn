export type BenefitsProps = {
  items: BenefitItemsType;
  secondary?: boolean;
};

export type BenefitITemType = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export type BenefitItemsType = BenefitITemType[];
