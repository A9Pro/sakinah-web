import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const type = formData.get('type') as string
    const message = formData.get('message') as string

    // Handle image attachments
    const attachments: { filename: string; content: Buffer }[] = []
    for (let i = 0; i < 2; i++) {
      const file = formData.get(`image${i}`) as File | null
      if (file) {
        const bytes = await file.arrayBuffer()
        attachments.push({
          filename: file.name,
          content: Buffer.from(bytes),
        })
      }
    }

    await resend.emails.send({
      from: 'Sakinah Feedback <onboarding@resend.dev>',
      to: 'sakinahapp@gmail.com',
      subject: `[${type.toUpperCase()}] New feedback from ${name}`,
      html: `
        <div style="font-family: serif; background: #0D0F1E; color: #E8D5B7; padding: 40px; border-radius: 12px;">
          <h1 style="color: #C9A84A; font-size: 28px; margin-bottom: 8px;">سكينة Sakinah</h1>
          <p style="color: rgba(232,213,183,0.4); font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 32px;">
            New ${type} received
          </p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,74,0.1); color: rgba(201,168,74,0.6); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; width: 80px;">From</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,74,0.1); color: #E8D5B7;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,74,0.1); color: rgba(201,168,74,0.6); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,74,0.1); color: #E8D5B7;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,74,0.1); color: rgba(201,168,74,0.6); font-size: 11px; letter-spacing: 2px; text-transform: uppercase;">Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(201,168,74,0.1); color: #C9A84A;">${type}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: rgba(201,168,74,0.05); border: 1px solid rgba(201,168,74,0.15); border-radius: 8px;">
            <p style="color: rgba(201,168,74,0.6); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 12px;">Message</p>
            <p style="color: rgba(232,213,183,0.8); line-height: 1.8; white-space: pre-wrap;">${message}</p>
          </div>
          ${attachments.length > 0 ? `<p style="color: rgba(232,213,183,0.4); font-size: 12px; margin-top: 20px;">${attachments.length} screenshot(s) attached</p>` : ''}
        </div>
      `,
      attachments,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
