/* @ds-bundle: {"format":4,"namespace":"PatrickScottMusicDesignSystem_e1fb0d","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"PlatformLink","sourcePath":"components/music/PlatformLink.jsx"},{"name":"SectionHeader","sourcePath":"components/music/SectionHeader.jsx"},{"name":"ShowRow","sourcePath":"components/music/ShowRow.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"1f6ead178816","components/core/Button.jsx":"2d51dabfd762","components/core/Card.jsx":"38e507cf28a3","components/core/Dialog.jsx":"7883261f429d","components/core/IconButton.jsx":"b2f128bf05d7","components/core/Input.jsx":"198625fd8f74","components/core/Select.jsx":"209ae42f79d9","components/core/Tabs.jsx":"358f5eaa43cd","components/core/Textarea.jsx":"5a8bc703dc36","components/music/PlatformLink.jsx":"43baa1ce0b80","components/music/SectionHeader.jsx":"378e1eb3bd11","components/music/ShowRow.jsx":"05ceb99e874e","ds-loader.js":"494553a91241","ui_kits/website/Booking.jsx":"15e06229d4d7","ui_kits/website/Home.jsx":"0170a0bae591","ui_kits/website/PressKit.jsx":"0bbfd93bc3ff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PatrickScottMusicDesignSystem_e1fb0d = window.PatrickScottMusicDesignSystem_e1fb0d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const tones = {
    neutral: {
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-secondary)',
      background: 'transparent'
    },
    accent: {
      border: '1px solid var(--accent)',
      color: 'var(--accent)',
      background: 'transparent'
    },
    live: {
      border: '1px solid var(--accent)',
      color: 'var(--text-on-accent)',
      background: 'var(--accent)'
    },
    sold: {
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-muted)',
      background: 'var(--ink-800)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-none)',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'solid',
  size = 'md',
  disabled = false,
  full = false,
  children,
  onClick,
  href,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const pad = {
    sm: '8px 14px',
    md: '12px 20px',
    lg: '16px 28px'
  }[size];
  const fs = {
    sm: 13,
    md: 14,
    lg: 16
  }[size];
  const variants = {
    solid: {
      background: press ? 'var(--accent-deep)' : hover ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--ink-800)' : 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)')
    },
    ghost: {
      background: 'transparent',
      color: hover ? 'var(--text-accent)' : 'var(--text-primary)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontSize: fs,
    padding: pad,
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    width: full ? '100%' : undefined,
    textDecoration: 'none',
    boxSizing: 'border-box',
    transition: 'background var(--dur) var(--ease), border-color var(--dur) var(--ease), color var(--dur) var(--ease)',
    ...variants[variant],
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  image,
  imageAlt = '',
  children,
  href,
  padding = 24,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      background: 'var(--surface-card)',
      textDecoration: 'none',
      color: 'var(--text-primary)',
      border: '1px solid ' + (hover && href ? 'var(--border-strong)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-none)',
      overflow: 'hidden',
      transition: 'border-color var(--dur) var(--ease)',
      cursor: href ? 'pointer' : undefined,
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      display: 'block',
      width: '100%',
      height: 180,
      objectFit: 'cover',
      filter: 'var(--photo-filter)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(12,11,10,0.8)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '92vw',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-strong)',
      boxShadow: 'var(--shadow-pop)',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      marginBottom: 16
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '120%',
      textTransform: 'uppercase',
      fontSize: 24,
      lineHeight: 1
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'transparent',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-primary)',
      width: 32,
      height: 32,
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7")), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  label,
  children,
  onClick,
  href,
  size = 40,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      background: hover ? 'var(--ink-800)' : 'transparent',
      border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
      color: hover ? 'var(--text-accent)' : 'var(--text-primary)',
      cursor: 'pointer',
      borderRadius: 'var(--radius-none)',
      transition: 'all var(--dur) var(--ease)',
      boxSizing: 'border-box',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--label-size)',
      letterSpacing: 'var(--label-tracking)',
      textTransform: 'uppercase',
      color: error ? 'var(--error)' : 'var(--text-muted)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      background: 'var(--surface-raised)',
      border: '1px solid ' + (error ? 'var(--error)' : focus ? 'var(--focus-ring)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '12px 14px',
      outline: 'none',
      transition: 'border-color var(--dur) var(--ease)'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--error)',
      marginTop: 6
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--label-size)',
      letterSpacing: 'var(--label-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      background: 'var(--surface-raised)',
      appearance: 'none',
      border: '1px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      color: value ? 'var(--text-primary)' : 'var(--text-muted)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '12px 14px',
      outline: 'none',
      backgroundImage: 'linear-gradient(45deg, transparent 49%, var(--gray-400) 50%), linear-gradient(135deg, var(--gray-400) 50%, transparent 51%)',
      backgroundPosition: 'calc(100% - 20px) 55%, calc(100% - 14px) 55%',
      backgroundSize: '6px 6px',
      backgroundRepeat: 'no-repeat'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, tabs.map(t => {
    const is = t === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange && onChange(t),
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '12px 18px',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: is ? 'var(--text-primary)' : 'var(--text-muted)',
        boxShadow: is ? 'inset 0 -2px 0 var(--accent)' : 'none',
        transition: 'color var(--dur) var(--ease)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--label-size)',
      letterSpacing: 'var(--label-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      background: 'var(--surface-raised)',
      resize: 'vertical',
      border: '1px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      padding: '12px 14px',
      outline: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/music/PlatformLink.jsx
try { (() => {
function PlatformLink({
  name,
  href = '#',
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: hover ? 'var(--text-on-accent)' : 'var(--text-primary)',
      background: hover ? 'var(--accent)' : 'transparent',
      border: '1px solid ' + (hover ? 'var(--accent)' : 'var(--border-subtle)'),
      padding: '12px 18px',
      transition: 'all var(--dur) var(--ease)',
      ...style
    }
  }, name, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\u2197"));
}
Object.assign(__ds_scope, { PlatformLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/music/PlatformLink.jsx", error: String((e && e.message) || e) }); }

// components/music/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--label-size)',
      fontWeight: 500,
      letterSpacing: 'var(--label-tracking)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '120%',
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      lineHeight: 0.95,
      fontSize: 'var(--text-4xl)'
    }
  }, title)), action);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/music/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/music/ShowRow.jsx
try { (() => {
function ShowRow({
  date,
  time,
  venue,
  city,
  note,
  ticketHref,
  soldOut = false,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      gridTemplateColumns: '150px 1fr auto',
      gap: 24,
      alignItems: 'center',
      padding: '20px 16px',
      borderBottom: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
      background: hover ? 'var(--ink-900)' : 'transparent',
      transition: 'all var(--dur) var(--ease)',
      opacity: soldOut ? 0.55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, date), time && /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, time)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      textTransform: 'uppercase',
      letterSpacing: '0.01em'
    }
  }, venue), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, city, note ? ' · ' + note : '')), soldOut ? /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      color: 'var(--text-muted)',
      border: '1px solid var(--border-subtle)',
      padding: '8px 14px'
    }
  }, "Sold out") : ticketHref ? /*#__PURE__*/React.createElement("a", {
    href: ticketHref,
    style: {
      ...mono,
      color: hover ? 'var(--text-on-accent)' : 'var(--text-primary)',
      background: hover ? 'var(--accent)' : 'transparent',
      border: '1px solid ' + (hover ? 'var(--accent)' : 'var(--border-strong)'),
      padding: '8px 14px',
      textDecoration: 'none',
      transition: 'all var(--dur) var(--ease)'
    }
  }, "Tickets") : /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      color: 'var(--text-secondary)'
    }
  }, "Free show"));
}
Object.assign(__ds_scope, { ShowRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/music/ShowRow.jsx", error: String((e && e.message) || e) }); }

// ds-loader.js
try { (() => {
// ds-loader.js — resolves the design-system namespace.
// Prefers the compiled _ds_bundle.js namespace on window; falls back to
// transpiling the component .jsx sources directly (dev convenience).
window.loadDS = async function (base) {
  const findNS = () => {
    for (const k of Object.keys(window)) {
      try {
        const v = window[k];
        if (v && typeof v === 'object' && v.window !== v && v.Button && v.ShowRow) return v;
      } catch (e) {/* cross-origin frame etc. */}
    }
    return null;
  };
  const ready = findNS();
  if (ready) return ready;
  const groups = [['components/core/', ['Button', 'IconButton', 'Input', 'Select', 'Textarea', 'Badge', 'Card', 'Tabs', 'Dialog']], ['components/music/', ['SectionHeader', 'ShowRow', 'PlatformLink']]];
  const ns = {};
  for (const [dir, comps] of groups) {
    await Promise.all(comps.map(async c => {
      const src = await fetch(base + dir + c + '.jsx').then(r => r.text());
      const clean = src.replace(/^import[^\n]*$/gm, '').replace(/export function/g, 'function');
      const code = Babel.transform(clean, {
        presets: [['react', {
          runtime: 'classic'
        }]]
      }).code;
      ns[c] = new Function('React', code + '\nreturn ' + c + ';')(React);
    }));
  }
  return ns;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-loader.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
function Booking() {
  const {
    Button,
    Input,
    Select,
    Textarea,
    SectionHeader,
    Badge
  } = window.__NS;
  const [sent, setSent] = React.useState(false);
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Booking",
    title: "Bring the show to you"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 1.55,
      maxWidth: 440,
      margin: '24px 0'
    }
  }, "Bars, breweries, festivals, weddings, private parties. Solo looping sets, duo, or full band."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Solo + loop pedal"), /*#__PURE__*/React.createElement(Badge, null, "Duo"), /*#__PURE__*/React.createElement(Badge, null, "Full band")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/dark-stage-guitar.jpg",
    alt: "Live at a bar",
    style: {
      width: '100%',
      height: 300,
      objectFit: 'cover',
      filter: 'var(--photo-filter)',
      marginTop: 40,
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-accent)',
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "Request sent"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 22,
      marginTop: 12
    }
  }, "I'll get back to you within 48 hours.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Event type",
    placeholder: "Pick one",
    options: ['Bar / brewery', 'Festival', 'Wedding', 'Private party', 'Corporate']
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Date",
    placeholder: "MM/DD/YYYY"
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell me about your event",
    rows: 5,
    placeholder: "Venue, crowd, vibe, set length\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    full: true,
    onClick: () => setSent(true)
  }, "Send booking request"))));
}
window.Booking = Booking;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const {
    Button,
    Badge,
    Card,
    Input,
    SectionHeader,
    ShowRow,
    PlatformLink,
    IconButton
  } = window.__NS;
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase'
  };
  const section = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '80px 32px'
  };
  const [subbed, setSubbed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      alignItems: 'flex-end',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/hero-bw-stage.png",
    alt: "Patrick Scott on stage",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 20%',
      filter: 'var(--photo-filter)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--protect-bottom)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      width: '100%',
      padding: '0 32px 72px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)',
      marginBottom: 16
    }
  }, "Live looping \xB7 Genre-bending covers \xB7 Atlanta"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '120%',
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      lineHeight: 0.92,
      fontSize: 'clamp(56px, 8vw, 104px)'
    }
  }, "Any song.", /*#__PURE__*/React.createElement("br", null), "Built live."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    size: "lg",
    onClick: () => go('booking')
  }, "Book a show"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    href: "#shows"
  }, "See dates")))), /*#__PURE__*/React.createElement("div", {
    id: "shows",
    style: section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Upcoming shows",
    title: "On stage"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(ShowRow, {
    date: "FRI \xB7 AUG 21",
    time: "8:00 PM",
    venue: "Monday Night Brewing",
    city: "Atlanta, GA",
    ticketHref: "#"
  }), /*#__PURE__*/React.createElement(ShowRow, {
    date: "SAT \xB7 AUG 29",
    time: "7:00 PM",
    venue: "The Porch Sessions",
    city: "Decatur, GA",
    note: "looping set"
  }), /*#__PURE__*/React.createElement(ShowRow, {
    date: "FRI \xB7 SEP 04",
    time: "9:00 PM",
    venue: "Ormsby's",
    city: "Atlanta, GA"
  }), /*#__PURE__*/React.createElement(ShowRow, {
    date: "SAT \xB7 SEP 12",
    time: "9:00 PM",
    venue: "Smith's Olde Bar",
    city: "Atlanta, GA",
    soldOut: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...section,
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Listen",
    title: "Hip hop, gone folk"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      color: 'var(--text-secondary)',
      lineHeight: 1.55,
      margin: '20px 0 28px'
    }
  }, "Covers you know, arranged like you've never heard them. Built live with a loop pedal \u2014 country to R&B to pop, one set."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PlatformLink, {
    name: "Spotify"
  }), /*#__PURE__*/React.createElement(PlatformLink, {
    name: "Apple Music"
  }), /*#__PURE__*/React.createElement(PlatformLink, {
    name: "YouTube"
  }), /*#__PURE__*/React.createElement(PlatformLink, {
    name: "Instagram"
  })))), /*#__PURE__*/React.createElement("div", {
    style: section
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Watch",
    title: "Live sets"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Card, {
    image: "../../assets/photos/festival-stage.jpg",
    href: "#",
    imageAlt: "Festival set"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "Festival"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginTop: 6
    }
  }, "Full band, ACS Festival")), /*#__PURE__*/React.createElement(Card, {
    image: "../../assets/photos/closeup-mic.jpg",
    href: "#",
    imageAlt: "Bar set"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "Solo loop"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginTop: 6
    }
  }, "90s hip hop, gone folk")), /*#__PURE__*/React.createElement(Card, {
    image: "../../assets/photos/patio-duo.jpg",
    href: "#",
    imageAlt: "Patio duo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "Duo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      marginTop: 6
    }
  }, "Patio sessions")))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      padding: '72px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontStretch: '120%',
      textTransform: 'uppercase',
      fontSize: 38,
      lineHeight: 0.95
    }
  }, "New shows, first."), subbed ? /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)',
      marginTop: 24
    }
  }, "You're on the list.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 28,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@example.com",
    type: "email",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    onClick: () => setSubbed(true)
  }, "Sign up")))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PressKit.jsx
try { (() => {
function PressKit() {
  const {
    Button,
    SectionHeader,
    Badge,
    Card
  } = window.__NS;
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Press kit",
    title: "Patrick Scott",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Download EPK")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 48,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-primary)',
      fontSize: 18,
      lineHeight: 1.55,
      marginTop: 0
    }
  }, "Atlanta-based performer known for genre-bending covers \u2014 hip hop reworked folk-style, country, R&B, pop \u2014 built live with a loop pedal."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, "From brewery patios to festival stages, the set is designed to catch people off guard: songs everyone knows, arranged in ways nobody expects."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      margin: '24px 0 40px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent"
  }, "Live looping"), /*#__PURE__*/React.createElement(Badge, null, "Solo / duo / band"), /*#__PURE__*/React.createElement(Badge, null, "Atlanta, GA")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, "Approved photos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/hero-bw-stage.png",
    style: {
      width: '100%',
      height: 120,
      objectFit: 'cover',
      filter: 'var(--photo-filter)'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/closeup-mic.jpg",
    style: {
      width: '100%',
      height: 120,
      objectFit: 'cover',
      filter: 'var(--photo-filter)'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/festival-stage.jpg",
    style: {
      width: '100%',
      height: 120,
      objectFit: 'cover',
      filter: 'var(--photo-filter)'
    },
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "Set formats"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, "Solo looping (2\u20133 hrs) \xB7 Duo \xB7 Full band. PA and lighting available for private events.")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontWeight: 700
    }
  }, "booking@patrickscottmusic.com")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "Tips"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      color: 'var(--text-secondary)',
      lineHeight: 1.6
    }
  }, "Enjoyed the show? Tip via Venmo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    href: "https://venmo.com"
  }, "Venmo \u2197"))))));
}
window.PressKit = PressKit;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PressKit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.PlatformLink = __ds_scope.PlatformLink;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.ShowRow = __ds_scope.ShowRow;

})();
