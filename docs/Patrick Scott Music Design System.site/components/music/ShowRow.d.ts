/**
 * @startingPoint section="Components" subtitle="Tour-date row with tickets / sold-out states" viewport="700x260"
 */
export interface ShowRowProps {
  /** e.g. "FRI · AUG 21" */
  date: string;
  /** e.g. "8:00 PM" */
  time?: string;
  venue: string;
  city: string;
  /** Extra meta after city, e.g. "full band" */
  note?: string;
  /** Ticket link; omit for free shows */
  ticketHref?: string;
  soldOut?: boolean;
  style?: React.CSSProperties;
}
export declare function ShowRow(props: ShowRowProps): JSX.Element;
