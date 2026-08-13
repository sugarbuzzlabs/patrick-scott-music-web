export interface ButtonProps {
  /** 'solid' (amber, one per view region) | 'outline' | 'ghost' */
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Stretch to container width */
  full?: boolean;
  /** Renders an <a> instead of <button> */
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
