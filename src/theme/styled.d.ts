import "styled-components";

type ColorShades = {
  primary: string;
  secondary?: string;
  tertiary?: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: ColorShades;
      text: ColorShades & { button: { dark: string } };
    };
  }
}
