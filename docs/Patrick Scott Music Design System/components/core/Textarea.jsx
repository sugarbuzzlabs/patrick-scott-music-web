import React from 'react';
export function Textarea({ label, placeholder, value, onChange, rows = 4, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'block', ...style }}>
      {label && <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--label-size)', letterSpacing: 'var(--label-tracking)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>{label}</span>}
      <textarea placeholder={placeholder} value={value} onChange={onChange} rows={rows}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', boxSizing: 'border-box', background: 'var(--surface-raised)', resize: 'vertical',
          border: '1px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-subtle)'), borderRadius: 'var(--radius-sm)',
          color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 16, padding: '12px 14px', outline: 'none' }} />
    </label>
  );
}
