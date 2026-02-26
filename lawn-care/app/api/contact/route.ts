import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 })
    }

    // Log to console (replace with DB or email in production)
    console.log('[Contact Form]', JSON.stringify({
      timestamp: new Date().toISOString(),
      name,
      email,
      message,
    }, null, 2))

    // Email sending placeholder:
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({ ... })
    // await transporter.sendMail({
    //   from: 'noreply@universitylawncare.ca',
    //   to: 'hello@universitylawncare.ca',
    //   subject: `Contact form: ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // })

    return NextResponse.json({ success: true, message: 'Message received.' }, { status: 201 })
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json({ success: false, message: 'Failed to send message.' }, { status: 500 })
  }
}
