import React from 'react';
export function Card({ image, imageAlt = '', children, href, padding = 24, style }) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', background: 'var(--surface-card)', textDecoration: 'none', color: 'var(--text-primary)',
        border: '1px solid ' + (hover && href ? 'var(--border-strong)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-none)', overflow: 'hidden', transition: 'border-color var(--dur) var(--ease)',
        cursor: href ? 'pointer' : undefined, ...style }}>
      {image && <img src={image} alt={imageAlt} style={{ display: 'block', width: '100%', height: 180, objectFit: 'cover', filter: 'var(--photo-filter)' }} />}
      <div style={{ padding }}>{children}</div>
    </Tag>
  );
}
