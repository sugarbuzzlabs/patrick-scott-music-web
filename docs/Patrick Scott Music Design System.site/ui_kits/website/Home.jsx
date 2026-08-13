function Home({ go }) {
  const { Button, Badge, Card, Input, SectionHeader, ShowRow, PlatformLink, IconButton } = window.__NS;
  const mono = { fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' };
  const section = { maxWidth: 1200, margin: '0 auto', padding: '80px 32px' };
  const [subbed, setSubbed] = React.useState(false);
  return (
    <div>
      <div style={{ position: 'relative', minHeight: 620, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src="../../assets/photos/hero-bw-stage.png" alt="Patrick Scott on stage" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'var(--photo-filter)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'var(--protect-bottom)' }}></div>
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 32px 72px', boxSizing: 'border-box' }}>
          <div style={{ ...mono, color: 'var(--text-accent)', marginBottom: 16 }}>Live looping · Genre-bending covers · Atlanta</div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontStretch: '120%', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 0.92, fontSize: 'clamp(56px, 8vw, 104px)' }}>Any song.<br />His way.</h1>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <Button variant="solid" size="lg" onClick={() => go('booking')}>Book a show</Button>
            <Button variant="outline" size="lg" href="#shows">See dates</Button>
          </div>
        </div>
      </div>
      <div id="shows" style={section}>
        <SectionHeader eyebrow="Upcoming shows" title="On stage" />
        <div style={{ marginTop: 32 }}>
          <ShowRow date="FRI · AUG 21" time="8:00 PM" venue="Monday Night Brewing" city="Atlanta, GA" ticketHref="#" />
          <ShowRow date="SAT · AUG 29" time="7:00 PM" venue="The Porch Sessions" city="Decatur, GA" note="looping set" />
          <ShowRow date="FRI · SEP 04" time="9:00 PM" venue="Ormsby's" city="Atlanta, GA" />
          <ShowRow date="SAT · SEP 12" time="9:00 PM" venue="Smith's Olde Bar" city="Atlanta, GA" soldOut />
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ ...section, padding: '64px 32px' }}>
          <SectionHeader eyebrow="Listen" title="Hip hop, gone folk" />
          <p style={{ maxWidth: 560, color: 'var(--text-secondary)', lineHeight: 1.55, margin: '20px 0 28px' }}>Covers you know, arranged like you've never heard them. Built live with a loop pedal — country to R&B to pop, one set.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <PlatformLink name="Spotify" /><PlatformLink name="Apple Music" /><PlatformLink name="YouTube" /><PlatformLink name="Instagram" />
          </div>
        </div>
      </div>
      <div style={section}>
        <SectionHeader eyebrow="Watch" title="Live sets" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
          <Card image="../../assets/photos/festival-stage.jpg" href="#" imageAlt="Festival set"><div style={{ ...mono, color: 'var(--text-accent)' }}>Festival</div><div style={{ fontWeight: 700, fontSize: 18, marginTop: 6 }}>Full band, ACS Festival</div></Card>
          <Card image="../../assets/photos/closeup-mic.jpg" href="#" imageAlt="Bar set"><div style={{ ...mono, color: 'var(--text-accent)' }}>Solo loop</div><div style={{ fontWeight: 700, fontSize: 18, marginTop: 6 }}>90s hip hop, gone folk</div></Card>
          <Card image="../../assets/photos/patio-duo.jpg" href="#" imageAlt="Patio duo"><div style={{ ...mono, color: 'var(--text-accent)' }}>Duo</div><div style={{ fontWeight: 700, fontSize: 18, marginTop: 6 }}>Patio sessions</div></Card>
        </div>
      </div>
      <div style={{ background: 'var(--surface-raised)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '72px 32px', textAlign: 'center' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontStretch: '120%', textTransform: 'uppercase', fontSize: 38, lineHeight: 0.95 }}>New shows, first.</h2>
          {subbed ? (
            <div style={{ ...mono, color: 'var(--text-accent)', marginTop: 24 }}>You're on the list.</div>
          ) : (
            <div style={{ display: 'flex', gap: 10, marginTop: 28, alignItems: 'stretch' }}>
              <Input placeholder="you@example.com" type="email" style={{ flex: 1 }} />
              <Button variant="solid" onClick={() => setSubbed(true)}>Sign up</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
window.Home = Home;