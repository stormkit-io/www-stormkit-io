import React from 'react'
import Icon from '~/components/Icon'

type shTierFn = (t?: number, e?: 'premium' | '') => React.ReactNode

const render = (v: string, enabled: boolean) => (
  <>
    {enabled ? (
      <Icon name="Check" color="success" sx={{ mr: 2, ml: 0 }} />
    ) : (
      <Icon name="Close" color="error" sx={{ mr: 2, ml: 0 }} />
    )}
    {v}
  </>
)

const features: shTierFn[] = [
  () => render('Unlimited teams', true),
  () => render('Monitoring', true),
  (_, e) => render('Custom TLS certificates', e === 'premium'),
  () => render('Unlimited domains', true),
  () => render('All other features', true),

  (_, e) => render('Audit logs', e === 'premium'),
  () => render('Unlimited projects', true),
  (_, e) =>
    render(e === 'premium' ? 'Premium support' : 'Community support', true),
  (_, e) => render('Custom features', e === 'premium'),
]

export default features
