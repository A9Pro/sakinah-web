'use client'
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Send, Upload, X, CheckCircle } from 'lucide-react'

export default function Feedback() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: 'feedback',
    message: '',
  })
  const [images, setImages] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onDrop = useCallback((accepted: File[]) => {
    const newFiles = [...images, ...accepted].slice(0, 2)
    setImages(newFiles)
    const newPreviews = newFiles.map(f => URL.createObjectURL(f))
    setPreviews(newPreviews)
  }, [images])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 2,
    disabled: images.length >= 2,
  })

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    const newPreviews = previews.filter((_, i) => i !== index)
    setImages(newImages)
    setPreviews(newPreviews)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const screenshotNote = images.length > 0
        ? `\n\n[${images.length} screenshot(s) attached by user — ${images.map(f => f.name).join(', ')}]`
        : ''

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '369752f3-8121-44f3-9edf-2038c216117d',
          subject: `[${form.type.toUpperCase()}] Sakinah feedback from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: `Type: ${form.type}\n\nFrom: ${form.name} (${form.email})\n\n${form.message}${screenshotNote}`,
          botcheck: false,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('sent')
        setForm({ name: '', email: '', type: 'feedback', message: '' })
        setImages([])
        setPreviews([])
      } else {
        console.error('Web3Forms error:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Submit error:', err)
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,74,0.2)',
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#E8D5B7',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    fontFamily: 'Cormorant Garamond, serif',
  }

  return (
    <section id="feedback" className="relative py-32 px-6" style={{ zIndex: 1 }}>
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-20">
          <div className="text-xs tracking-widest uppercase mb-4"
            style={{ color: 'rgba(201,168,74,0.5)' }}>
            Beta Testing
          </div>
          <h2 className="text-5xl md:text-6xl mb-6"
            style={{ color: '#E8D5B7', fontWeight: 300 }}>
            Your <span style={{ color: '#C9A84A' }}>Voice</span> Matters
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-sm leading-relaxed"
            style={{ color: 'rgba(232,213,183,0.5)', lineHeight: 1.8 }}>
            Found a bug? Have a suggestion? Want to share your experience?<br />
            Every piece of feedback shapes the next version.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-20 glass-card rounded-3xl">
            <CheckCircle size={48} className="mx-auto mb-6" style={{ color: '#C9A84A' }} />
            <h3 className="text-2xl mb-3" style={{ color: '#E8D5B7' }}>JazakAllahu Khayran</h3>
            <p className="text-sm" style={{ color: 'rgba(232,213,183,0.5)' }}>
              Your feedback has been received. May Allah reward you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs tracking-widest uppercase block mb-2"
                  style={{ color: 'rgba(201,168,74,0.6)' }}>Name</label>
                <input
                  style={inputStyle}
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase block mb-2"
                  style={{ color: 'rgba(201,168,74,0.6)' }}>Email</label>
                <input
                  style={inputStyle}
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase block mb-2"
                style={{ color: 'rgba(201,168,74,0.6)' }}>Type</label>
              <select
                style={{ ...inputStyle, cursor: 'pointer' }}
                value={form.type}
                onChange={e => setForm({ ...form, type: e.target.value })}>
                <option value="feedback" style={{ background: '#0D0F1E' }}>General Feedback</option>
                <option value="bug" style={{ background: '#0D0F1E' }}>Bug Report</option>
                <option value="suggestion" style={{ background: '#0D0F1E' }}>Feature Suggestion</option>
                <option value="review" style={{ background: '#0D0F1E' }}>App Review</option>
              </select>
            </div>

            <div>
              <label className="text-xs tracking-widest uppercase block mb-2"
                style={{ color: 'rgba(201,168,74,0.6)' }}>Message</label>
              <textarea
                style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
                placeholder="Tell us everything..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            {/* Image upload — filenames noted in message */}
            <div>
              <label className="text-xs tracking-widest uppercase block mb-2"
                style={{ color: 'rgba(201,168,74,0.6)' }}>
                Screenshots (optional, max 2)
              </label>

              {images.length < 2 && (
                <div {...getRootProps()}
                  className="rounded-xl p-6 text-center cursor-pointer transition-all"
                  style={{
                    border: `2px dashed ${isDragActive ? 'rgba(201,168,74,0.6)' : 'rgba(201,168,74,0.2)'}`,
                    background: isDragActive ? 'rgba(201,168,74,0.05)' : 'transparent',
                  }}>
                  <input {...getInputProps()} />
                  <Upload size={20} className="mx-auto mb-2" style={{ color: 'rgba(201,168,74,0.5)' }} />
                  <p className="text-xs" style={{ color: 'rgba(232,213,183,0.4)' }}>
                    {isDragActive ? 'Drop here...' : 'Drag & drop or click to upload'}
                  </p>
                </div>
              )}

              {previews.length > 0 && (
                <div className="flex gap-3 mt-3">
                  {previews.map((src, i) => (
                    <div key={i} className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt="preview"
                        className="w-20 h-20 object-cover rounded-xl"
                        style={{ border: '1px solid rgba(201,168,74,0.3)' }} />
                      <button type="button" onClick={() => removeImage(i)}
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: '#C9A84A' }}>
                        <X size={10} color="#0D0F1E" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-3 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, #C9A84A, #E8D5B7)',
                color: '#0D0F1E',
                fontWeight: 600,
              }}>
              <Send size={14} />
              {status === 'sending' ? 'Sending...' : 'Send Feedback'}
            </button>

            {status === 'error' && (
              <p className="text-center text-xs" style={{ color: '#ff6b6b' }}>
                Something went wrong. Please try emailing sakinahhapp@gmail.com
              </p>
            )}

          </form>
        )}
      </div>
    </section>
  )
}