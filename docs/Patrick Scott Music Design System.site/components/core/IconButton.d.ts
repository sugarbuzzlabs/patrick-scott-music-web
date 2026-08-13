export interface IconButtonProps {
  /** Accessible label (required) */
  label: string;
  /** An inline Lucide SVG */
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  /** Square edge in px, default 40 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
