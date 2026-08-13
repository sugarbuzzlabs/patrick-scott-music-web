import React from 'react';
export function IconButton({ label, children, onClick, href, size = 40, style }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} aria-label={label} title={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, background: hover ? 'var(--ink-800)' : 'transparent',
        border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
        color: hover ? 'var(--text-accent)' : 'var(--text-primary)', cursor: 'pointer',
        borderRadius: 'var(--radius-none)', transition: 'all var(--dur) var(--ease)', boxSizing: 'border-box', ...style }}>
      {children}
    </Tag>
  );
}
