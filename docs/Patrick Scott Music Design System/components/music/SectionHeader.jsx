import React from 'react';
export function SectionHeader({ eyebrow, title, action, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, ...style }}>
      <div>
        {eyebrow && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--label-size)', fontWeight: 500, letterSpacing: 'var(--label-tracking)', textTransform: 'uppercase', color: 'var(--text-accent)', marginBottom: 12 }}>{eyebrow}</div>}
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontStretch: '120%', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.95, fontSize: 'var(--text-4xl)' }}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
