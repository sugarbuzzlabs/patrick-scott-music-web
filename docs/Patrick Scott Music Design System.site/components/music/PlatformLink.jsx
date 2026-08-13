import React from 'react';
export function PlatformLink({ name, href = '#', style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none',
        fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: hover ? 'var(--text-on-accent)' : 'var(--text-primary)', background: hover ? 'var(--accent)' : 'transparent',
        border: '1px solid ' + (hover ? 'var(--accent)' : 'var(--border-subtle)'), padding: '12px 18px',
        transition: 'all var(--dur) var(--ease)', ...style }}>
      {name}
      <span aria-hidden="true" style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1 }}>↗</span>
    </a>
  );
}
