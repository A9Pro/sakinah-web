import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative py-20 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-5xl mx-auto">

        <div className="w-full h-px mb-16"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,74,0.2), transparent)' }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="flex items-center gap-4">
            <Image src="/sakinah_icon.jpg" alt="Sakinah" width={44} height={44}
              className="rounded-xl" style={{ border: '1px solid rgba(201,168,74,0.2)' }} />
            <div>
              <div className="text-2xl" style={{ color: '#C9A84A', fontFamily: 'serif' }}>سكينة</div>
              <div className="text-xs tracking-widest uppercase"
                style={{ color: 'rgba(232,213,183,0.3)' }}>Sakinah · Beta v1.0</div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com/sakinah_dhikrapp" target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase transition-colors hover:opacity-100"
              style={{ color: 'rgba(201,168,74,0.5)' }}>
              Instagram
            </a>
            <a href="https://www.tiktok.com/@sakinahapp" target="_blank" rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase"
              style={{ color: 'rgba(201,168,74,0.5)' }}>
              TikTok
            </a>
            <Link href="/privacy"
              className="text-xs tracking-widest uppercase"
              style={{ color: 'rgba(201,168,74,0.5)' }}>
              Privacy
            </Link>
          </div>

        </div>

        <div className="text-center mt-12">
          <p className="text-xs" style={{ color: 'rgba(232,213,183,0.2)' }}>
            Made with ♥ for the Ummah · 2026 Sakinah App
          </p>
        </div>

      </div>
    </footer>
  )
}