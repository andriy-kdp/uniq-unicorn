import { BlockScheme } from "./tree-block-scheme.styles";

export interface RootlikeBlockSchemeProps {
  root: string;
  li: string[];
}
interface SchemeProps {
  props: RootlikeBlockSchemeProps;
}

export const RootlikeBlockScheme: React.FC<SchemeProps> = ({ props }: SchemeProps): JSX.Element => (
  <BlockScheme>
    <span>{props.root}</span>
    <ul>
      {props.li.map((el) => (
        <li>
          <code>{el}</code>
        </li>
      ))}
    </ul>
  </BlockScheme>
);
