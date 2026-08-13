export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  rows?: number;
  style?: React.CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
