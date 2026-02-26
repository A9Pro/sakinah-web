'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(13,15,30,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,168,74,0.1)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/sakinah_icon.jpg" alt="Sakinah" width={32} height={32}
            className="rounded-lg" />
          <span className="text-lg" style={{ color: '#C9A84A', fontFamily: 'serif' }}>سكينة</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Screenshots', 'Changelog', 'Feedback'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: 'rgba(232,213,183,0.5)' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#C9A84A'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(232,213,183,0.5)'}>
              {item}
            </a>
          ))}
        </div>
        <a href="#download"
          className="text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all"
          style={{
            border: '1px solid rgba(201,168,74,0.4)',
            color: '#C9A84A',
          }}>
          Download
        </a>
      </div>
    </nav>
  )
}