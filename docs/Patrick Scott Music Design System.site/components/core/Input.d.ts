export interface InputProps {
  /** Mono uppercase label above the field */
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  /** Error message; turns border and label red */
  error?: string;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
