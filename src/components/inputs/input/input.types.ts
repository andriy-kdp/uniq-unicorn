export type InputProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onIconClick?: () => void;
  placeholder?: string;
  helperText?: string;
  label?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  InputNativeProps?: React.InputHTMLAttributes<HTMLInputElement>;
  RootProps?: React.HTMLAttributes<HTMLDivElement>;
  IconRootProps?: React.HTMLAttributes<HTMLDivElement>;
  LabelRootProps?: React.HTMLAttributes<HTMLSpanElement>;
  _select?: boolean;
};
