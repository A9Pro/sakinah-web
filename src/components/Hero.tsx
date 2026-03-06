import Image from 'next/image'
import { Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
      style={{ zIndex: 1 }}>

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(201,168,74,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

      {/* App Icon */}
      <div className="animate-float mb-8 relative">
        <div className="absolute inset-0 rounded-3xl"
          style={{ boxShadow: '0 0 60px rgba(201,168,74,0.2)', borderRadius: '28px' }} />
        <Image
          src="/sakinah_icon.jpg"
          alt="Sakinah App"
          width={120}
          height={120}
          className="rounded-3xl relative"
          style={{ border: '1px solid rgba(201,168,74,0.3)' }}
        />
      </div>

      {/* Arabic name */}
      <div className="text-8xl md:text-9xl mb-2 gold-shimmer"
        style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
        سكينة
      </div>

      <div className="text-xs tracking-[0.5em] uppercase mb-6"
        style={{ color: 'rgba(232,213,183,0.4)' }}>
        S A K I N A H
      </div>

      <div className="section-divider mb-8" />

      <p className="text-xl md:text-2xl mb-4 max-w-lg"
        style={{ color: 'rgba(232,213,183,0.8)', fontWeight: 300, lineHeight: 1.6 }}>
        Your digital tasbih.<br />
        Find peace, one dhikr at a time.
      </p>

      <p className="text-sm mb-12 max-w-md"
        style={{ color: 'rgba(232,213,183,0.35)', fontStyle: 'italic', lineHeight: 1.8 }}>
        &ldquo;Verily, in the remembrance of Allah do hearts find rest.&rdquo;<br />
        — Surah Ar-Ra&apos;d 13:28
      </p>

      {/* Download button */}
      <div id="download" className="flex flex-col sm:flex-row gap-4 items-center">
        <a
          href="/sakinah-beta-v2.apk"
          download
          className="flex items-center gap-3 px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #C9A84A, #E8D5B7)',
            color: '#0D0F1E',
            fontWeight: 600,
            boxShadow: '0 0 40px rgba(201,168,74,0.3)',
          }}>
          <Download size={16} />
          Download Beta APK
        </a>
        <div className="text-xs tracking-widest"
          style={{ color: 'rgba(232,213,183,0.35)' }}>
          v2.0 Beta · Android · Free
        </div>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-6 mt-10">
        <a href="https://www.instagram.com/sakinah_dhikrapp" target="_blank" rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase transition-colors"
          style={{ color: 'rgba(201,168,74,0.5)' }}>
          Instagram
        </a>
        <div style={{ width: '1px', height: '12px', background: 'rgba(201,168,74,0.2)' }} />
        <a href="https://www.tiktok.com/@sakinahapp" target="_blank" rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase transition-colors"
          style={{ color: 'rgba(201,168,74,0.5)' }}>
          TikTok
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(201,168,74,0.3)' }}>
        <div className="text-xs tracking-widest uppercase">Scroll</div>
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(201,168,74,0.3), transparent)' }} />
      </div>

    </section>
  )
}