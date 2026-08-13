import React from 'react';
export function Tabs({ tabs = [], active, onChange, style }) {
  return (
    <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border-subtle)', ...style }}>
      {tabs.map((t) => {
        const is = t === active;
        return (
          <button key={t} onClick={() => onChange && onChange(t)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '12px 18px',
              fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: is ? 'var(--text-primary)' : 'var(--text-muted)',
              boxShadow: is ? 'inset 0 -2px 0 var(--accent)' : 'none', transition: 'color var(--dur) var(--ease)' }}>
            {t}
          </button>
        );
      })}
    </div>
  );
}
