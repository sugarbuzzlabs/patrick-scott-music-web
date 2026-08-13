// ds-loader.js — resolves the design-system namespace.
// Prefers the compiled _ds_bundle.js namespace on window; falls back to
// transpiling the component .jsx sources directly (dev convenience).
window.loadDS = async function (base) {
  const findNS = () => {
    for (const k of Object.keys(window)) {
      try {
        const v = window[k];
        if (v && typeof v === 'object' && v.window !== v && v.Button && v.ShowRow) return v;
      } catch (e) { /* cross-origin frame etc. */ }
    }
    return null;
  };
  const ready = findNS();
  if (ready) return ready;
  const groups = [
    ['components/core/', ['Button', 'IconButton', 'Input', 'Select', 'Textarea', 'Badge', 'Card', 'Tabs', 'Dialog']],
    ['components/music/', ['SectionHeader', 'ShowRow', 'PlatformLink']],
  ];
  const ns = {};
  for (const [dir, comps] of groups) {
    await Promise.all(comps.map(async (c) => {
      const src = await fetch(base + dir + c + '.jsx').then(r => r.text());
      const clean = src.replace(/^import[^\n]*$/gm, '').replace(/export function/g, 'function');
      const code = Babel.transform(clean, { presets: [['react', { runtime: 'classic' }]] }).code;
      ns[c] = new Function('React', code + '\nreturn ' + c + ';')(React);
    }));
  }
  return ns;
};
