export default function Features() {
  const features = [
    {
      icon: '📿',
      title: 'Floating Tasbih',
      desc: 'A beautiful bubble that floats over any app. Tap to count, drag to move, long-press to reset. Always with you.',
    },
    {
      icon: '🕌',
      title: 'Accurate Prayer Times',
      desc: 'Prayer times calculated precisely for your exact location using astronomical math. Fajr, Dhuhr, Asr, Maghrib, Isha.',
    },
    {
      icon: '🔔',
      title: 'Adhan Reminders',
      desc: 'Real Adhan sound plays at prayer time. Device alarm for dhikr reminders. Everything customisable.',
    },
    {
      icon: '🌙',
      title: 'Tahajjud',
      desc: 'A dedicated night prayer reminder so you never miss Qiyam al-Layl. With Adhan sound.',
    },
    {
      icon: '📊',
      title: 'Dhikr History',
      desc: 'Every session recorded. Track your daily count, total count and streak — see your consistency grow.',
    },
    {
      icon: '✨',
      title: '5 Dhikr Presets',
      desc: 'SubhanAllah, Alhamdulillah, Allahu Akbar, Astaghfirullah, La ilaha illAllah — plus custom goals.',
    },
  ]

  return (
    <section id="features" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <div className="text-xs tracking-widest uppercase mb-4"
            style={{ color: 'rgba(201,168,74,0.5)' }}>
            What&apos;s Inside
          </div>
          <h2 className="text-5xl md:text-6xl mb-6"
            style={{ color: '#E8D5B7', fontWeight: 300 }}>
            Built for the <span style={{ color: '#C9A84A' }}>Ummah</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i}
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg mb-3 transition-colors"
                style={{ color: '#C9A84A', fontWeight: 400 }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed"
                style={{ color: 'rgba(232,213,183,0.55)', lineHeight: 1.8 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}