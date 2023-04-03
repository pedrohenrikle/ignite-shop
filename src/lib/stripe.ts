import Stripe from 'stripe'
import HttpsProxyAgent from 'https-proxy-agent'

const proxy = process.env.HTTP_PROXY

console.log(proxy)

let stripe_options

if (proxy) {
  const agent = HttpsProxyAgent(proxy)
  stripe_options = {
    apiVersion: '2022-08-01',
    appInfo: {
      name: 'Ignite Shop',
    },
    httpAgent: agent,
  }
} else {
  stripe_options = {
    apiVersion: '2022-08-01',
    appInfo: {
      name: 'Ignite Shop',
    },
  }
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, stripe_options)
