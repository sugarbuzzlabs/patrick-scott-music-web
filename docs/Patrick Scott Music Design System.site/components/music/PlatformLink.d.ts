export interface PlatformLinkProps {
  /** Platform name, e.g. "Spotify", "Apple Music", "YouTube", "Venmo" */
  name: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function PlatformLink(props: PlatformLinkProps): JSX.Element;
