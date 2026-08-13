import React from 'react';
export function Dialog({ open, onClose, title, children, width = 480 }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(12,11,10,0.8)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width, maxWidth: '92vw', background: 'var(--surface-raised)',
        border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-pop)', padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
          {title && <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontStretch: '120%', textTransform: 'uppercase', fontSize: 24, lineHeight: 1 }}>{title}</h2>}
          <button onClick={onClose} aria-label="Close" style={{ background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', width: 32, height: 32, cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}
