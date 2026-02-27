export default function Screenshots() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center">

          {/* ── SCREEN 1: Home ── */}
          <div className="flex flex-col items-center gap-4">
            <div style={{
              width: '260px', height: '520px',
              background: '#111520',
              borderRadius: '44px',
              border: '2px solid rgba(201,168,74,0.3)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(201,168,74,0.1), 0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              {/* Notch */}
              <div style={{
                width: '90px', height: '26px',
                background: '#111520',
                borderRadius: '0 0 16px 16px',
                position: 'absolute', top: 0, left: '50%',
                transform: 'translateX(-50%)', zIndex: 10,
                border: '2px solid rgba(201,168,74,0.2)', borderTop: 'none',
              }} />

              {/* Screen */}
              <div style={{
                width: '100%', height: '100%',
                background: '#0A0A0F',
                borderRadius: '42px',
                overflow: 'hidden',
                paddingTop: '30px',
                fontFamily: 'Georgia, serif',
                position: 'relative',
              }}>
                {/* Header */}
                <div style={{ textAlign: 'center', padding: '20px 16px 12px' }}>
                  <div style={{ fontSize: '38px', color: '#C9A84A' }}>سكينة</div>
                  <div style={{ fontSize: '9px', letterSpacing: '4px', color: 'rgba(232,213,183,0.4)', textTransform: 'uppercase', marginTop: '3px' }}>Sakinah</div>
                </div>

                {/* Dhikr card */}
                <div style={{
                  margin: '0 14px 10px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,168,74,0.15)',
                  borderRadius: '14px', padding: '16px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: '24px', color: '#E8D5B7' }}>سبحان الله</div>
                  <div style={{ fontSize: '9px', color: 'rgba(232,213,183,0.4)', letterSpacing: '1px', marginTop: '3px' }}>SubḥānAllāh</div>
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '8px', margin: '0 14px 12px' }}>
                  {[['247', 'Today'], ['1,840', 'Total']].map(([num, label]) => (
                    <div key={label} style={{
                      flex: 1, background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(201,168,74,0.1)',
                      borderRadius: '10px', padding: '10px 6px', textAlign: 'center',
                    }}>
                      <div style={{ fontSize: '22px', color: '#C9A84A' }}>{num}</div>
                      <div style={{ fontSize: '8px', letterSpacing: '2px', color: 'rgba(232,213,183,0.35)', textTransform: 'uppercase', marginTop: '2px' }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div style={{
                  margin: '0 14px',
                  background: '#E8D5B7', borderRadius: '28px',
                  padding: '12px', textAlign: 'center',
                  fontSize: '11px', color: '#0A0A0F', letterSpacing: '2px',
                }}>Begin Dhikr</div>

                <div style={{ textAlign: 'center', fontSize: '8px', color: 'rgba(232,213,183,0.25)', letterSpacing: '2px', marginTop: '8px' }}>● Ready</div>

                {/* Floating bubble */}
                <div style={{
                  position: 'absolute', bottom: '62px', left: '22px',
                  width: '52px', height: '52px',
                  background: 'radial-gradient(circle at 35% 35%, #2A1F3D, #0D0F1E)',
                  borderRadius: '50%',
                  border: '1px solid rgba(201,168,74,0.4)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                }}>
                  <div style={{ position: 'absolute', top: '2px', right: '2px', fontSize: '7px', color: 'rgba(232,213,183,0.5)' }}>⚙</div>
                  <div style={{ fontSize: '6px', color: '#E8D5B7' }}>سبحان الله</div>
                  <div style={{ fontSize: '16px', color: '#C9A84A', lineHeight: 1 }}>33</div>
                </div>

                {/* Nav */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '50px', background: 'rgba(10,10,15,0.95)',
                  borderTop: '1px solid rgba(201,168,74,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-around',
                  padding: '0 16px', borderRadius: '0 0 42px 42px',
                }}>
                  {[['⚙', 'Settings', false], ['◎', 'History', true], ['🔔', 'Reminders', false]].map(([icon, label, active]) => (
                    <div key={String(label)} style={{ fontSize: '8px', color: active ? '#C9A84A' : 'rgba(232,213,183,0.35)', letterSpacing: '1px', textAlign: 'center' }}>
                      {icon} {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: '#C9A84A', letterSpacing: '2px', textTransform: 'uppercase' }}>Home Screen</div>
              <div style={{ fontSize: '11px', color: 'rgba(232,213,183,0.4)', marginTop: '4px' }}>Clean dashboard with dhikr and stats</div>
            </div>
          </div>

          {/* ── SCREEN 2: Floating Bubble ── */}
          <div className="flex flex-col items-center gap-4">
            <div style={{
              width: '260px', height: '520px',
              background: '#111520',
              borderRadius: '44px',
              border: '2px solid rgba(201,168,74,0.3)',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(201,168,74,0.1), 0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              <div style={{
                width: '90px', height: '26px', background: '#111520',
                borderRadius: '0 0 16px 16px', position: 'absolute', top: 0, left: '50%',
                transform: 'translateX(-50%)', zIndex: 10,
                border: '2px solid rgba(201,168,74,0.2)', borderTop: 'none',
              }} />

              <div style={{
                width: '100%', height: '100%',
                background: 'linear-gradient(160deg, #1a1f3a 0%, #0f1225 100%)',
                borderRadius: '42px', overflow: 'hidden',
                paddingTop: '30px', position: 'relative', fontFamily: 'Georgia, serif',
              }}>
                <div style={{ margin: '10px 16px 0', fontSize: '8px', color: 'rgba(232,213,183,0.3)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Floating over any app
                </div>

                {/* App grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', margin: '8px 14px' }}>
                  {['📧', '🌐', '💬', '📸', '🗺️', '📱'].map((emoji, i) => (
                    <div key={i} style={{
                      background: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                      height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px',
                    }}>{emoji}</div>
                  ))}
                </div>

                {/* Floating bubble */}
                <div style={{
                  position: 'absolute', top: '155px', right: '24px',
                  width: '66px', height: '66px',
                  background: 'radial-gradient(circle at 30% 30%, #2A1F3D 0%, #0D0F1E 60%, #1A0F2E 100%)',
                  borderRadius: '50%',
                  border: '1px solid rgba(201,168,74,0.5)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 30px rgba(201,168,74,0.15), 0 8px 30px rgba(0,0,0,0.6)',
                }}>
                  <div style={{
                    position: 'absolute', top: '3px', right: '3px',
                    width: '16px', height: '16px',
                    background: 'rgba(13,15,30,0.8)', borderRadius: '50%',
                    border: '1px solid rgba(201,168,74,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '7px', color: 'rgba(232,213,183,0.6)',
                  }}>⚙</div>
                  <div style={{ fontSize: '7px', color: '#E8D5B7' }}>سبحان الله</div>
                  <div style={{ fontSize: '20px', color: '#C9A84A', lineHeight: 1 }}>28</div>
                </div>

                <div style={{ position: 'absolute', bottom: '90px', left: '16px', right: '16px' }}>
                  <div style={{ fontSize: '8px', color: 'rgba(232,213,183,0.3)', letterSpacing: '1px', textAlign: 'center', marginBottom: '6px' }}>
                    TAP · HOLD TO RESET · DRAG
                  </div>
                  <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,168,74,0.2), transparent)' }} />
                </div>

                <div style={{ position: 'absolute', bottom: '28px', left: 0, right: 0, textAlign: 'center' }}>
                  <div style={{ fontSize: '7px', color: 'rgba(201,168,74,0.4)', letterSpacing: '2px' }}>DRAG TO BOTTOM TO CLOSE</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: '#C9A84A', letterSpacing: '2px', textTransform: 'uppercase' }}>Floating Counter</div>
              <div style={{ fontSize: '11px', color: 'rgba(232,213,183,0.4)', marginTop: '4px' }}>Counts dhikr over any app</div>
            </div>
          </div>

          {/* ── SCREEN 3: Reminders ── */}
          <div className="flex flex-col items-center gap-4">
            <div style={{
              width: '260px', height: '520px',
              background: '#111520',
              borderRadius: '44px',
              border: '2px solid rgba(201,168,74,0.3)',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(201,168,74,0.1), 0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              <div style={{
                width: '90px', height: '26px', background: '#111520',
                borderRadius: '0 0 16px 16px', position: 'absolute', top: 0, left: '50%',
                transform: 'translateX(-50%)', zIndex: 10,
                border: '2px solid rgba(201,168,74,0.2)', borderTop: 'none',
              }} />

              <div style={{
                width: '100%', height: '100%', background: '#0A0A0F',
                borderRadius: '42px', overflow: 'hidden',
                paddingTop: '30px', position: 'relative', fontFamily: 'Georgia, serif',
              }}>
                {/* Header */}
                <div style={{ padding: '12px 16px 8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ fontSize: '16px', color: '#E8D5B7' }}>←</div>
                  <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'rgba(232,213,183,0.4)', textTransform: 'uppercase', flex: 1, textAlign: 'center' }}>Reminders</div>
                  <div style={{ width: '16px' }} />
                </div>

                {/* Location */}
                <div style={{ fontSize: '7px', letterSpacing: '2px', color: 'rgba(74,74,74,0.9)', textTransform: 'uppercase', margin: '6px 14px 4px' }}>Location</div>
                <div style={{
                  margin: '0 10px 4px', background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,168,74,0.1)', borderRadius: '10px',
                  padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '10px', color: '#E8D5B7' }}>📍 Lagos, Nigeria</div>
                    <div style={{ fontSize: '7px', color: 'rgba(74,74,74,0.9)', marginTop: '1px' }}>Prayer times auto-calculated</div>
                  </div>
                  <div style={{ fontSize: '8px', color: 'rgba(201,168,74,0.5)' }}>Change</div>
                </div>

                {/* Prayer section label */}
                <div style={{ fontSize: '7px', letterSpacing: '2px', color: 'rgba(74,74,74,0.9)', textTransform: 'uppercase', margin: '6px 14px 4px' }}>Prayer Times — أذان</div>

                {/* Prayer rows */}
                {[
                  { name: 'Fajr — الفجر', time: '5:12 AM', on: true },
                  { name: 'Dhuhr — الظهر', time: '1:04 PM', on: true },
                  { name: 'Asr — العصر', time: '4:28 PM', on: false },
                  { name: 'Maghrib — المغرب', time: '7:11 PM', on: true },
                  { name: 'Tahajjud — التهجد', time: '2:30 AM', on: false },
                ].map((row) => (
                  <div key={row.name} style={{
                    margin: '0 10px 4px', background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(201,168,74,0.1)', borderRadius: '10px',
                    padding: '7px 12px', display: 'flex', alignItems: 'center', gap: '8px',
                  }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '10px', color: '#E8D5B7' }}>{row.name}</div>
                      <div style={{ fontSize: '8px', color: 'rgba(201,168,74,0.6)', marginTop: '1px' }}>{row.time}</div>
                      <div style={{ fontSize: '7px', color: 'rgba(74,74,74,0.9)' }}>📿 Adhan</div>
                    </div>
                    {/* Toggle */}
                    <div style={{
                      width: '30px', height: '16px', borderRadius: '8px', flexShrink: 0, position: 'relative',
                      background: row.on ? 'linear-gradient(90deg, #8B6B1A, #C9A84A)' : 'rgba(255,255,255,0.1)',
                    }}>
                      <div style={{
                        position: 'absolute', top: '2px',
                        [row.on ? 'right' : 'left']: '2px',
                        width: '12px', height: '12px', borderRadius: '50%',
                        background: row.on ? 'white' : 'rgba(255,255,255,0.4)',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: '#C9A84A', letterSpacing: '2px', textTransform: 'uppercase' }}>Prayer Reminders</div>
              <div style={{ fontSize: '11px', color: 'rgba(232,213,183,0.4)', marginTop: '4px' }}>Adhan + location based times</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}