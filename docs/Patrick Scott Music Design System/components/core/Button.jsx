import React from 'react';
export function Button({ variant = 'solid', size = 'md', disabled = false, full = false, children, onClick, href, style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = { sm: '8px 14px', md: '12px 20px', lg: '16px 28px' }[size];
  const fs = { sm: 13, md: 14, lg: 16 }[size];
  const variants = {
    solid: {
      background: press ? 'var(--accent-deep)' : hover ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--text-on-accent)', border: '1px solid transparent',
    },
    outline: {
      background: hover ? 'var(--ink-800)' : 'transparent', color: 'var(--text-primary)',
      border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
    },
    ghost: {
      background: 'transparent', color: hover ? 'var(--text-accent)' : 'var(--text-primary)',
      border: '1px solid transparent',
    },
  };
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--font-body)', fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.04em', fontSize: fs, padding: pad, borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
    width: full ? '100%' : undefined, textDecoration: 'none', boxSizing: 'border-box',
    transition: 'background var(--dur) var(--ease), border-color var(--dur) var(--ease), color var(--dur) var(--ease)',
    ...variants[variant], ...style,
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} disabled={disabled} onClick={disabled ? undefined : onClick} style={base}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
      {children}
    </Tag>
  );
}
