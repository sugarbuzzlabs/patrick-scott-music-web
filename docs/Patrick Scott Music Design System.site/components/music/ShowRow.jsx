import React from 'react';
export function ShowRow({ date, time, venue, city, note, ticketHref, soldOut = false, style }) {
  const [hover, setHover] = React.useState(false);
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'grid', gridTemplateColumns: '150px 1fr auto', gap: 24, alignItems: 'center',
        padding: '20px 16px', borderBottom: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
        background: hover ? 'var(--ink-900)' : 'transparent', transition: 'all var(--dur) var(--ease)', opacity: soldOut ? 0.55 : 1, ...style }}>
      <div>
        <div style={{ ...mono, color: 'var(--text-accent)' }}>{date}</div>
        {time && <div style={{ ...mono, color: 'var(--text-muted)', marginTop: 4 }}>{time}</div>}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.01em' }}>{venue}</div>
        <div style={{ ...mono, color: 'var(--text-muted)', marginTop: 4 }}>{city}{note ? ' · ' + note : ''}</div>
      </div>
      {soldOut ? (
        <span style={{ ...mono, color: 'var(--text-muted)', border: '1px solid var(--border-subtle)', padding: '8px 14px' }}>Sold out</span>
      ) : ticketHref ? (
        <a href={ticketHref} style={{ ...mono, color: hover ? 'var(--text-on-accent)' : 'var(--text-primary)', background: hover ? 'var(--accent)' : 'transparent', border: '1px solid ' + (hover ? 'var(--accent)' : 'var(--border-strong)'), padding: '8px 14px', textDecoration: 'none', transition: 'all var(--dur) var(--ease)' }}>Tickets</a>
      ) : (
        <span style={{ ...mono, color: 'var(--text-secondary)' }}>Free show</span>
      )}
    </div>
  );
}
