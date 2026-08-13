import showsData from '../data/shows.json';

export interface Show {
  /** ISO date, YYYY-MM-DD */
  date: string;
  time?: string | null;
  venue: string;
  city: string;
  ticketHref?: string | null;
  note?: string | null;
  soldOut?: boolean;
}

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

/** "2026-08-21" -> "FRI · AUG 21" (the mockup's mono date format). */
export function formatShowDate(iso: string): string {
  const d = parseShowDate(iso);
  if (!d) return iso;
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `${DAYS[d.getUTCDay()]} · ${MONTHS[d.getUTCMonth()]} ${day}`;
}

/** Parsed as UTC noon so a local timezone can never shift the calendar day. */
export function parseShowDate(iso: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return null;
  return new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12));
}

/**
 * Upcoming shows only, soonest first. A show stays listed through the end of
 * its own day, so tonight's gig doesn't vanish at midnight UTC.
 */
export function upcomingShows(now: Date = new Date()): Show[] {
  const cutoff = new Date(now);
  cutoff.setHours(0, 0, 0, 0);
  return (showsData as Show[])
    .filter((s) => {
      const d = parseShowDate(s.date);
      return d ? d.getTime() >= cutoff.getTime() - 12 * 60 * 60 * 1000 : false;
    })
    .sort((a, b) => a.date.localeCompare(b.date));
}
