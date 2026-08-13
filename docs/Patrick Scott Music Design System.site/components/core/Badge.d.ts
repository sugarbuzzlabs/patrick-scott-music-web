export interface BadgeProps {
  /** neutral | accent | live (filled amber) | sold (dimmed) */
  tone?: 'neutral' | 'accent' | 'live' | 'sold';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
