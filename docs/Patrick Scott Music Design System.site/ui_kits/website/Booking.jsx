function Booking() {
  const { Button, Input, Select, Textarea, SectionHeader, Badge } = window.__NS;
  const [sent, setSent] = React.useState(false);
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' };
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
      <div>
        <SectionHeader eyebrow="Booking" title="Bring the show to you" />
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.55, maxWidth: 440, margin: '24px 0' }}>Bars, breweries, festivals, weddings, private parties. Solo looping sets, duo, or full band.</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Badge>Solo + loop pedal</Badge><Badge>Duo</Badge><Badge>Full band</Badge>
        </div>
        <img src="../../assets/photos/dark-stage-guitar.jpg" alt="Live at a bar" style={{ width: '100%', height: 300, objectFit: 'cover', filter: 'var(--photo-filter)', marginTop: 40, display: 'block' }} />
      </div>
      <div>
        {sent ? (
          <div style={{ border: '1px solid var(--border-accent)', padding: 40, textAlign: 'center' }}>
            <div style={{ ...mono, color: 'var(--text-accent)' }}>Request sent</div>
            <div style={{ fontWeight: 700, fontSize: 22, marginTop: 12 }}>I'll get back to you within 48 hours.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="you@example.com" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Select label="Event type" placeholder="Pick one" options={['Bar / brewery', 'Festival', 'Wedding', 'Private party', 'Corporate']} />
              <Input label="Date" placeholder="MM/DD/YYYY" />
            </div>
            <Textarea label="Tell me about your event" rows={5} placeholder="Venue, crowd, vibe, set length…" />
            <Button variant="solid" size="lg" full onClick={() => setSent(true)}>Send booking request</Button>
          </div>
        )}
      </div>
    </div>
  );
}
window.Booking = Booking;