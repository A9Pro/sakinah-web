export default function Screenshots() {
  const screens = [
    { label: 'Home Screen', desc: 'Clean dashboard with dhikr and stats' },
    { label: 'Floating Counter', desc: 'Counts dhikr over any app' },
    { label: 'Prayer Reminders', desc: 'Adhan + location based times' },
  ]

  return (
    <section id="screenshots" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <div className="text-xs tracking-widest uppercase mb-4"
            style={{ color: 'rgba(201,168,74,0.5)' }}>
            See It In Action
          </div>
          <h2 className="text-5xl md:text-6xl mb-6"
            style={{ color: '#E8D5B7', fontWeight: 300 }}>
            Every <span style={{ color: '#C9A84A' }}>Detail</span> Considered
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screens.map((screen, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              {/* Phone mockup */}
              <div className="relative w-52 h-96 rounded-3xl"
                style={{
                  background: 'linear-gradient(160deg, #141830, #0D0F1E)',
                  border: '2px solid rgba(201,168,74,0.2)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,74,0.05)',
                }}>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 rounded-b-2xl"
                  style={{ background: '#0D0F1E', border: '1px solid rgba(201,168,74,0.15)', borderTop: 'none' }} />
                {/* Screen content placeholder */}
                <div className="absolute inset-3 rounded-2xl flex flex-col items-center justify-center gap-3"
                  style={{ background: '#0A0A0F' }}>
                  <div className="text-3xl" style={{ color: '#C9A84A' }}>سكينة</div>
                  <div className="w-12 h-px" style={{ background: 'rgba(201,168,74,0.3)' }} />
                  <div className="text-xs tracking-widest uppercase"
                    style={{ color: 'rgba(232,213,183,0.3)' }}>
                    {screen.label}
                  </div>
                  {/* Decorative elements */}
                  <div className="w-32 h-2 rounded-full mt-2"
                    style={{ background: 'rgba(201,168,74,0.1)' }} />
                  <div className="w-24 h-2 rounded-full"
                    style={{ background: 'rgba(201,168,74,0.07)' }} />
                  <div className="w-28 h-2 rounded-full"
                    style={{ background: 'rgba(201,168,74,0.05)' }} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm mb-1" style={{ color: '#C9A84A' }}>{screen.label}</div>
                <div className="text-xs" style={{ color: 'rgba(232,213,183,0.4)' }}>{screen.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-xs tracking-widest uppercase"
          style={{ color: 'rgba(232,213,183,0.25)' }}>
          Real screenshots coming soon — download the beta and see for yourself
        </p>

      </div>
    </section>
  )
}