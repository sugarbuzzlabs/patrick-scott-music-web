import React from 'react';
export function Badge({ tone = 'neutral', children, style }) {
  const tones = {
    neutral: { border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)', background: 'transparent' },
    accent: { border: '1px solid var(--accent)', color: 'var(--accent)', background: 'transparent' },
    live: { border: '1px solid var(--accent)', color: 'var(--text-on-accent)', background: 'var(--accent)' },
    sold: { border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', background: 'var(--ink-800)' },
  };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)',
      fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
      padding: '4px 10px', borderRadius: 'var(--radius-none)', ...tones[tone], ...style }}>
      {children}
    </span>
  );
}
