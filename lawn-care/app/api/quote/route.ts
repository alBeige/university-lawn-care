import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log submission (replace with DB write in production)
    console.log('[Quote Request]', JSON.stringify({
      timestamp: new Date().toISOString(),
      ...body,
    }, null, 2))

    // Send email notification using Nodemailer
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: 'noreply@universitylawncare.ca',
      to: 'alex_begin@live.com',
      subject: `New quote request from ${body.firstName} ${body.lastName}`,
      text: JSON.stringify(body, null, 2),
    });

    return NextResponse.json({ success: true, message: 'Quote request received.' }, { status: 201 })
  } catch (error) {
    console.error('[Quote API Error]', error)
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 })
  }
}
