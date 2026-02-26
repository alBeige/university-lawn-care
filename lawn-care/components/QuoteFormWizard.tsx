'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { ChevronRight, ChevronLeft, Check } from 'lucide-react'
import { services } from '@/data/services'
import { isPostalCodeServiceable } from '@/data/serviceAreas'

type Step = 1 | 2 | 3 | 4 | 5 | 6

interface QuoteData {
  // Step 1
  firstName: string
  lastName: string
  email: string
  phone: string
  // Step 2
  address: string
  city: string
  postalCode: string
  // Step 3
  selectedServices: string[]
  // Step 4
  lotSize: string
  gateAccess: string
  notes: string
  // Step 5
  contactMethod: string
  preferredDate: string
  preferredTime: string
}

const initialData: QuoteData = {
  firstName: '', lastName: '', email: '', phone: '',
  address: '', city: '', postalCode: '',
  selectedServices: [],
  lotSize: '', gateAccess: '', notes: '',
  contactMethod: 'email', preferredDate: '', preferredTime: '',
}

const steps = [
  'Your Info',
  'Address',
  'Services',
  'Property',
  'Preferences',
  'Review',
]

export default function QuoteFormWizard() {
  const [step, setStep] = useState<Step>(1)
  const [data, setData] = useState<QuoteData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [postalValid, setPostalValid] = useState<boolean | null>(null)

  const update = (field: keyof QuoteData, value: string) => {
    setData((d) => ({ ...d, [field]: value }))
    setErrors((e) => { const n = { ...e }; delete n[field]; return n })
  }

  const toggleService = (slug: string) => {
    setData((d) => ({
      ...d,
      selectedServices: d.selectedServices.includes(slug)
        ? d.selectedServices.filter((s) => s !== slug)
        : [...d.selectedServices, slug],
    }))
  }

  const validateStep = (s: Step): boolean => {
    const e: Record<string, string> = {}
    if (s === 1) {
      if (!data.firstName.trim()) e.firstName = 'First name required.'
      if (!data.lastName.trim()) e.lastName = 'Last name required.'
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Valid email required.'
      if (!data.phone.trim()) e.phone = 'Phone number required.'
    }
    if (s === 2) {
      if (!data.address.trim()) e.address = 'Street address required.'
      if (!data.city.trim()) e.city = 'City required.'
      if (!data.postalCode.trim()) e.postalCode = 'Postal code required.'
      else if (!isPostalCodeServiceable(data.postalCode)) e.postalCode = "Sorry, we don't currently service this area. Contact us to check."
    }
    if (s === 3) {
      if (data.selectedServices.length === 0) e.services = 'Please select at least one service.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => {
    if (validateStep(step)) setStep((s) => (s + 1) as Step)
  }

  const back = () => setStep((s) => (s - 1) as Step)

  const handlePostalCheck = (val: string) => {
    update('postalCode', val)
    if (val.length >= 6) {
      setPostalValid(isPostalCodeServiceable(val))
    } else {
      setPostalValid(null)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(step)) return
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <Check size={32} className="text-green-600" />
        </div>
        <h2 className="font-display text-2xl font-bold text-green-800 mb-3">Quote Request Received!</h2>
        <p className="text-green-700 mb-6">
          Thanks, {data.firstName}! We'll review your details and follow up within one business day at {data.email}.
        </p>
        <p className="text-sm text-green-600">Have questions in the meantime? Call us at (519) 123-4567.</p>
      </div>
    )
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-stone-200 bg-white hover:border-stone-300'
    }`

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                  i + 1 < step
                    ? 'bg-green-600 text-white'
                    : i + 1 === step
                    ? 'bg-green-600 text-white ring-4 ring-green-100'
                    : 'bg-stone-100 text-stone-400'
                }`}
              >
                {i + 1 < step ? <Check size={14} /> : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`hidden sm:block flex-1 h-0.5 w-8 ${i + 1 < step ? 'bg-green-600' : 'bg-stone-200'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {steps.map((label, i) => (
            <span
              key={label}
              className={`hidden sm:block text-xs font-medium ${i + 1 === step ? 'text-green-700' : 'text-stone-400'}`}
            >
              {label}
            </span>
          ))}
        </div>
        <p className="sm:hidden text-sm text-green-700 font-medium mt-1">
          Step {step} of {steps.length}: {steps[step - 1]}
        </p>
      </div>

      {/* Step content */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 mb-6">
        {step === 1 && (
          <div className="space-y-5">
            <h2 className="font-display text-xl font-semibold text-stone-900 mb-6">Tell us about yourself</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">First Name *</label>
                <input className={inputClass('firstName')} value={data.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="Jane" />
                {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Last Name *</label>
                <input className={inputClass('lastName')} value={data.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Smith" />
                {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Email Address *</label>
              <input type="email" className={inputClass('email')} value={data.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@example.com" />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number *</label>
              <input type="tel" className={inputClass('phone')} value={data.phone} onChange={(e) => update('phone', e.target.value)} placeholder="(519) 555-0123" />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h2 className="font-display text-xl font-semibold text-stone-900 mb-6">Your service address</h2>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Street Address *</label>
              <input className={inputClass('address')} value={data.address} onChange={(e) => update('address', e.target.value)} placeholder="123 Maple Street" />
              {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">City *</label>
                <input className={inputClass('city')} value={data.city} onChange={(e) => update('city', e.target.value)} placeholder="Waterloo" />
                {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Postal Code *</label>
                <input
                  className={inputClass('postalCode')}
                  value={data.postalCode}
                  onChange={(e) => handlePostalCheck(e.target.value.toUpperCase())}
                  placeholder="N2L 3G1"
                  maxLength={7}
                />
                {postalValid === true && (
                  <p className="mt-1 text-xs text-green-600">✓ Great news — we service your area!</p>
                )}
                {postalValid === false && (
                  <p className="mt-1 text-xs text-amber-600">⚠ This area may be outside our range. We'll confirm during follow-up.</p>
                )}
                {errors.postalCode && <p className="mt-1 text-xs text-red-600">{errors.postalCode}</p>}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl px-4 py-3 text-sm text-green-800 border border-green-100">
              We currently serve <strong>Waterloo, Kitchener, Cambridge, and Guelph</strong>. Not sure? Submit anyway and we'll confirm.
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="font-display text-xl font-semibold text-stone-900 mb-2">Which services interest you?</h2>
            <p className="text-stone-500 text-sm mb-6">Select all that apply — we'll tailor your quote accordingly.</p>
            {errors.services && <p className="mb-4 text-sm text-red-600 bg-red-50 rounded-xl px-4 py-2">{errors.services}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggleService(s.slug)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-150 ${
                    data.selectedServices.includes(s.slug)
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-green-300'
                  }`}
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-sm font-medium">{s.name}</span>
                  {data.selectedServices.includes(s.slug) && (
                    <Check size={16} className="ml-auto text-green-600 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <h2 className="font-display text-xl font-semibold text-stone-900 mb-6">Property details</h2>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Approximate Lot Size</label>
              <select
                className={inputClass('lotSize')}
                value={data.lotSize}
                onChange={(e) => update('lotSize', e.target.value)}
              >
                <option value="">Select an option…</option>
                <option value="small">Small — under 3,000 sq ft</option>
                <option value="medium">Medium — 3,000–6,000 sq ft</option>
                <option value="large">Large — 6,000–10,000 sq ft</option>
                <option value="xlarge">Extra Large — over 10,000 sq ft</option>
                <option value="unsure">Not sure</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Gate / Backyard Access</label>
              <select
                className={inputClass('gateAccess')}
                value={data.gateAccess}
                onChange={(e) => update('gateAccess', e.target.value)}
              >
                <option value="">Select an option…</option>
                <option value="no-gate">No gate — open access</option>
                <option value="unlocked">Gate present, always unlocked</option>
                <option value="code">Gate with code or key (we'll coordinate)</option>
                <option value="no-backyard">No backyard service needed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Additional Notes</label>
              <textarea
                rows={4}
                className={inputClass('notes')}
                value={data.notes}
                onChange={(e) => update('notes', e.target.value)}
                placeholder="Anything we should know? Dogs in the yard, areas to avoid, specific requests…"
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-5">
            <h2 className="font-display text-xl font-semibold text-stone-900 mb-6">Contact & scheduling preferences</h2>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Contact Method</label>
              <div className="flex flex-wrap gap-3">
                {['Email', 'Phone', 'Text'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => update('contactMethod', method.toLowerCase())}
                    className={`px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
                      data.contactMethod === method.toLowerCase()
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-stone-200 text-stone-600 hover:border-green-300'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Start Date (approximate)</label>
              <input
                type="date"
                className={inputClass('preferredDate')}
                value={data.preferredDate}
                onChange={(e) => update('preferredDate', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Preferred Time Window</label>
              <div className="flex flex-wrap gap-3">
                {['Morning (7am–12pm)', 'Afternoon (12pm–5pm)', 'No preference'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => update('preferredTime', t)}
                    className={`px-4 py-2.5 rounded-full border-2 text-sm font-medium transition-all ${
                      data.preferredTime === t
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-stone-200 text-stone-600 hover:border-green-300'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div>
            <h2 className="font-display text-xl font-semibold text-stone-900 mb-6">Review your quote request</h2>
            <div className="space-y-4 text-sm">
              {[
                { label: 'Name', value: `${data.firstName} ${data.lastName}` },
                { label: 'Email', value: data.email },
                { label: 'Phone', value: data.phone },
                { label: 'Address', value: `${data.address}, ${data.city}, ${data.postalCode}` },
                { label: 'Services', value: data.selectedServices.map((s) => services.find((srv) => srv.slug === s)?.name).join(', ') || '—' },
                { label: 'Lot Size', value: data.lotSize || 'Not specified' },
                { label: 'Gate Access', value: data.gateAccess || 'Not specified' },
                { label: 'Contact Method', value: data.contactMethod },
                { label: 'Preferred Date', value: data.preferredDate || 'No preference' },
                { label: 'Time Window', value: data.preferredTime || 'No preference' },
                { label: 'Notes', value: data.notes || 'None' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 py-2 border-b border-stone-100">
                  <span className="text-stone-500 w-36 flex-shrink-0 font-medium">{label}</span>
                  <span className="text-stone-900">{value}</span>
                </div>
              ))}
            </div>
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        {step > 1 ? (
          <button
            onClick={back}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-stone-200 text-stone-700 font-medium text-sm hover:border-stone-300 transition-colors"
          >
            <ChevronLeft size={16} />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 6 ? (
          <button
            onClick={next}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors ml-auto"
          >
            Continue
            <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors ml-auto"
          >
            {status === 'loading' ? 'Submitting…' : 'Submit Quote Request'}
            <Check size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
