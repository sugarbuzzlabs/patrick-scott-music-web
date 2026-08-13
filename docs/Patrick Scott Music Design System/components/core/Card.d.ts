export interface CardProps {
  /** Image URL; rendered B&W via --photo-filter */
  image?: string;
  imageAlt?: string;
  /** Makes the whole card a link with hover border */
  href?: string;
  padding?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
