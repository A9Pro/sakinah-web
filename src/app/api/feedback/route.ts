import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const type = formData.get('type') as string
    const message = formData.get('message') as string

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '369752f3-8121-44f3-9edf-2038c216117d',
        subject: `[${type.toUpperCase()}] Sakinah feedback from ${name}`,
        from_name: name,
        email: email,
        message: `Type: ${type}\n\nFrom: ${name} (${email})\n\n${message}`,
      }),
    })

    const data = await res.json()
    if (data.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ error: data.message || 'Failed' }, { status: 500 })
    }
  } catch (error) {
    console.error('Feedback error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}