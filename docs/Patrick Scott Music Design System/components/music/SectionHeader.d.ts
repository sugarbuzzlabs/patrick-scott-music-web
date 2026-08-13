export interface SectionHeaderProps {
  /** Mono amber label above the title, e.g. "UPCOMING SHOWS" */
  eyebrow?: string;
  title: string;
  /** Optional right-aligned element (usually a ghost/outline Button) */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
