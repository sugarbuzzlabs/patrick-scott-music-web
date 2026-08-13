function PressKit() {
  const { Button, SectionHeader, Badge, Card } = window.__NS;
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' };
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px' }}>
      <SectionHeader eyebrow="Press kit" title="Patrick Scott" action={<Button variant="outline">Download EPK</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, marginTop: 40 }}>
        <div>
          <p style={{ color: 'var(--text-primary)', fontSize: 18, lineHeight: 1.55, marginTop: 0 }}>Atlanta-based performer known for genre-bending covers — hip hop reworked folk-style, country, R&B, pop — built live with a loop pedal.</p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>From brewery patios to festival stages, the set is designed to catch people off guard: songs everyone knows, arranged in ways nobody expects.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', margin: '24px 0 40px' }}>
            <Badge tone="accent">Live looping</Badge><Badge>Solo / duo / band</Badge><Badge>Atlanta, GA</Badge>
          </div>
          <div style={{ ...mono, color: 'var(--text-muted)', marginBottom: 12 }}>Approved photos</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            <img src="../../assets/photos/hero-bw-stage.png" style={{ width: '100%', height: 120, objectFit: 'cover', filter: 'var(--photo-filter)' }} alt="" />
            <img src="../../assets/photos/closeup-mic.jpg" style={{ width: '100%', height: 120, objectFit: 'cover', filter: 'var(--photo-filter)' }} alt="" />
            <img src="../../assets/photos/festival-stage.jpg" style={{ width: '100%', height: 120, objectFit: 'cover', filter: 'var(--photo-filter)' }} alt="" />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card><div style={{ ...mono, color: 'var(--text-accent)' }}>Set formats</div><div style={{ marginTop: 10, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Solo looping (2–3 hrs) · Duo · Full band. PA and lighting available for private events.</div></Card>
          <Card><div style={{ ...mono, color: 'var(--text-accent)' }}>Contact</div><div style={{ marginTop: 10, fontWeight: 700 }}>booking@patrickscottmusic.com</div></Card>
          <Card><div style={{ ...mono, color: 'var(--text-accent)' }}>Tips</div><div style={{ marginTop: 10, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Enjoyed the show? Tip via Venmo.</div><div style={{ marginTop: 12 }}><Button variant="outline" size="sm" href="https://venmo.com">Venmo ↗</Button></div></Card>
        </div>
      </div>
    </div>
  );
}
window.PressKit = PressKit;