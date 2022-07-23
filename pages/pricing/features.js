export const featuresV1 = {
  free: [
    '15 deployments per month',
    '100GB bandwidth',
    '1 million serverless requests',
    'Unlimited team seats',
    'Unlimited domains',
    'Unlimited environments',
    'TLS certificates included',
  ],
  small: ['Everything in free plan', '100 deployments per month'],
  medium: ['Everything in starter plan', '500 deployments per month'],
  large: ['Everything in medium plan', '1000 deployments per month'],
}

export const featuresV2 = {
  free: [
    '15 deployments per month',
    '100GB bandwidth',
    '1 million serverless requests',
  ],
  pro: ['Everything in free plan', '100 deployments per month'],
  business: ['Everything in pro plan', '500 deployments per month'],
  enterprise: ['Everything in business plan', '1000 deployments per month'],
}

export const packagesV1 = [
  {
    name: 'free',
    price: 0,
    title: 'Free',
    features: featuresV1.free,
    color: '#e4bb17',
    cta: 'Get started for free',
  },
  {
    name: 'starter',
    title: 'Starter',
    price: 9.9,
    features: featuresV1.small,
    color: '#4388c7',
  },
  {
    name: 'medium',
    title: 'Medium',
    price: 49.9,
    features: featuresV1.medium,
    color: '#50b950',
  },
  {
    name: 'enterprise',
    title: 'Enterprise',
    price: 99.9,
    features: featuresV1.large,
    color: '#f55c27',
  },
]

export const packagesV2 = [
  {
    name: 'free',
    price: 0,
    title: 'Free',
    features: featuresV2.free,
    color: '#e4bb17',
    cta: 'Get started for free',
  },
  {
    name: 'pro',
    title: 'Pro',
    price: 20,
    features: featuresV2.pro,
    color: '#4388c7',
  },
  {
    name: 'business',
    title: 'Business',
    price: 75,
    features: featuresV2.business,
    color: '#50b950',
  },
  {
    name: 'enterprise',
    title: 'Enterprise',
    price: 200,
    features: featuresV2.enterprise,
    color: '#f55c27',
  },
]

export const comparisonV1 = [
  { name: 'Concurrent builds', value: [1, 1, 2, 3] },
  {
    name: 'Each 1m requests',
    value: ['$6', '$6', '$6', 'Volume based'],
  },
  {
    name: 'Each 10GB Bandwidth',
    value: ['$1', '$1', '$1', 'Volume based'],
  },
  { name: 'Autoscaling', value: [true, true, true, true] },
  { name: 'Multiple environments', value: [true, true, true, true] },
  { name: 'Production-ready', value: [true, true, true, true] },
  { name: 'Deploy previews', value: [true, true, true, true] },
  { name: 'Custom domains', value: [true, true, true, true] },
  { name: 'Deploy hooks', value: [false, false, true, true] },
  { name: 'Cold start prevention', value: [false, false, false, true] },
  { name: 'Premium support', value: [false, false, false, true] },
]

export const comparisonV2 = [
  { name: 'Concurrent builds', value: [1, 1, 2, 3] },
  { name: 'Autoscaling', value: [true, true, true, true] },
  { name: 'Unlimited environments', value: [true, true, true, true] },
  { name: 'Unlimited team members', value: [true, true, true, true] },
  { name: 'Deployment previews', value: [true, true, true, true] },
  { name: 'Deployment hooks', value: [true, true, true, true] },
  { name: 'Outbound webhooks', value: [true, true, true, true] },
  { name: 'Custom domains', value: [true, true, true, true] },
  { name: 'Custom storage', value: [true, true, true, true] },
  { name: 'Premium support', value: [false, false, false, true] },
]
