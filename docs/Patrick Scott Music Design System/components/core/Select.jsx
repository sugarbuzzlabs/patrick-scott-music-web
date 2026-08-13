import React from 'react';
export function Select({ label, options = [], value, onChange, placeholder, style }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'block', ...style }}>
      {label && <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 'var(--label-size)', letterSpacing: 'var(--label-tracking)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>{label}</span>}
      <select value={value} onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', boxSizing: 'border-box', background: 'var(--surface-raised)', appearance: 'none',
          border: '1px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-subtle)'), borderRadius: 'var(--radius-sm)',
          color: value ? 'var(--text-primary)' : 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 16,
          padding: '12px 14px', outline: 'none', backgroundImage: 'linear-gradient(45deg, transparent 49%, var(--gray-400) 50%), linear-gradient(135deg, var(--gray-400) 50%, transparent 51%)',
          backgroundPosition: 'calc(100% - 20px) 55%, calc(100% - 14px) 55%', backgroundSize: '6px 6px', backgroundRepeat: 'no-repeat' }}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
