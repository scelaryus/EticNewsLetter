import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config: configPromise })
    const body = await request.json()
    const { email, name } = body

    // Validate email
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Check if already subscribed
    const existing = await payload.find({
      collection: 'subscribers',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (existing.docs.length > 0) {
      return NextResponse.json({ message: 'Already subscribed!' }, { status: 200 })
    }

    // Create new subscriber
    const subscriber = await payload.create({
      collection: 'subscribers',
      data: {
        email,
        name,
        subscribedAt: new Date().toISOString(),
      },
    })

    // Skip email for now - we'll add it later!

    return NextResponse.json({ message: 'Successfully subscribed!', subscriber }, { status: 201 })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
