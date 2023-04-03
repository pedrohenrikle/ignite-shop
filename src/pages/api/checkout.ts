import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { priceIds } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!priceIds) {
    return res.status(400).json({ error: 'Prices not found.' })
  }

  const line_items = priceIds.map((priceId) => {
    return {
      price: priceId,
      quantity: 1,
    }
  })

  console.log(line_items)

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
