import { BgGradientContainer } from "./bg-gradien.styles";
import { BgGradientType } from "./bg-gradient.types";

export const BgGradient: React.FC<BgGradientType> = (props): JSX.Element => {
  const { imgSrc } = props;
  return <BgGradientContainer imgSrc={imgSrc} />;
};
