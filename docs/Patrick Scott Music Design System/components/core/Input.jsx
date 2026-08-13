import React from 'react';
export function Input({ label, type = 'text', placeholder, value, onChange, error, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'block', ...style }}>
      {label && <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--label-size)', letterSpacing: 'var(--label-tracking)', textTransform: 'uppercase', color: error ? 'var(--error)' : 'var(--text-muted)', marginBottom: 8 }}>{label}</span>}
      <input type={type} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', boxSizing: 'border-box', background: 'var(--surface-raised)',
          border: '1px solid ' + (error ? 'var(--error)' : focus ? 'var(--focus-ring)' : 'var(--border-subtle)'),
          borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
          fontSize: 16, padding: '12px 14px', outline: 'none', transition: 'border-color var(--dur) var(--ease)' }} />
      {error && <span style={{ display: 'block', fontSize: 13, color: 'var(--error)', marginTop: 6 }}>{error}</span>}
    </label>
  );
}
