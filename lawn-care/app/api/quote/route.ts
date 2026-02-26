import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Log submission (replace with DB write in production)
    console.log('[Quote Request]', JSON.stringify({
      timestamp: new Date().toISOString(),
      ...body,
    }, null, 2))

    // Email sending placeholder:
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({ ... })
    // await transporter.sendMail({
    //   from: 'noreply@universitylawncare.ca',
    //   to: 'hello@universitylawncare.ca',
    //   subject: `New quote request from ${body.firstName} ${body.lastName}`,
    //   text: JSON.stringify(body, null, 2),
    // })

    return NextResponse.json({ success: true, message: 'Quote request received.' }, { status: 201 })
  } catch (error) {
    console.error('[Quote API Error]', error)
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 500 })
  }
}
