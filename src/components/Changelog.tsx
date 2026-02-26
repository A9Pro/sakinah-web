export default function Changelog() {
  const versions = [
    {
      version: 'v1.0 Beta',
      date: 'February 2026',
      tag: 'Latest',
      changes: [
        'Floating tasbih counter over all apps',
        '5 dhikr presets with custom goals',
        'Prayer times calculated from GPS or city search',
        'Adhan reminders for all 5 prayers + Tahajjud',
        'Dhikr reminder with device alarm',
        'Session history and streak tracking',
        'About page with how-to guide',
      ],
    },
  ]

  return (
    <section id="changelog" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-20">
          <div className="text-xs tracking-widest uppercase mb-4"
            style={{ color: 'rgba(201,168,74,0.5)' }}>
            Version History
          </div>
          <h2 className="text-5xl md:text-6xl mb-6"
            style={{ color: '#E8D5B7', fontWeight: 300 }}>
            Change<span style={{ color: '#C9A84A' }}>log</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(201,168,74,0.4), rgba(201,168,74,0.05))' }} />

          {versions.map((v, i) => (
            <div key={i} className="relative pl-10 pb-16">
              {/* Dot */}
              <div className="absolute left-0 top-1 w-2 h-2 rounded-full -translate-x-1/2"
                style={{ background: '#C9A84A', boxShadow: '0 0 10px rgba(201,168,74,0.5)' }} />

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl" style={{ color: '#C9A84A' }}>{v.version}</span>
                {v.tag && (
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(201,168,74,0.15)',
                      border: '1px solid rgba(201,168,74,0.3)',
                      color: '#C9A84A',
                    }}>
                    {v.tag}
                  </span>
                )}
              </div>

              <div className="text-xs tracking-widest uppercase mb-6"
                style={{ color: 'rgba(232,213,183,0.3)' }}>
                {v.date}
              </div>

              <div className="glass-card rounded-2xl p-6">
                {v.changes.map((change, j) => (
                  <div key={j} className="flex items-start gap-3 mb-3 last:mb-0">
                    <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                      style={{ background: '#C9A84A' }} />
                    <span className="text-sm leading-relaxed"
                      style={{ color: 'rgba(232,213,183,0.7)' }}>
                      {change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}