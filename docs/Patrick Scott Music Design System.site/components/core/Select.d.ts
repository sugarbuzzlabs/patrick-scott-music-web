export interface SelectProps {
  label?: string;
  options?: string[];
  value?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
