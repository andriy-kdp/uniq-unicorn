export type InputProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
  endIcon?: React.ReactNode;
  placeholder?: string;
  helperText?: string;
  label?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  borderRadius?: "small";
  InputNativeProps?: React.InputHTMLAttributes<HTMLInputElement>;
  RootProps?: React.HTMLAttributes<HTMLDivElement>;
  IconRootProps?: React.HTMLAttributes<HTMLDivElement>;
  LabelRootProps?: React.HTMLAttributes<HTMLSpanElement>;
  name?: string;
  _select?: boolean;
};
