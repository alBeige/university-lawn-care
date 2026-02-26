import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'University Lawn Care privacy policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  const date = 'January 1, 2024'

  return (
    <>
      <section className="pt-28 pb-8 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-stone-900 mb-2">Privacy Policy</h1>
          <p className="text-stone-500 text-sm">Last updated: {date}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-stone max-w-none">
          <div className="space-y-8 text-stone-700 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">1. Introduction</h2>
              <p>
                University Lawn Care (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and how we protect it when you interact with our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">2. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li><strong>Contact information</strong> — your name, email address, phone number, and mailing address when you submit a quote request or contact form.</li>
                <li><strong>Property information</strong> — address, lot size, and access details you provide in service requests.</li>
                <li><strong>Usage data</strong> — pages visited, time spent, and referral sources collected via analytics tools (no personally identifiable information).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">3. How We Use Your Information</h2>
              <p>We use the information you provide to:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Respond to your quote requests and inquiries</li>
                <li>Schedule and deliver lawn care services</li>
                <li>Send invoices and service-related communications</li>
                <li>Improve our website and service offerings</li>
              </ul>
              <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">4. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide services and comply with our legal obligations. You may request deletion of your data at any time by contacting us at hello@universitylawncare.ca.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">5. Security</h2>
              <p>
                We implement reasonable administrative and technical safeguards to protect your information. No method of data transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">6. Your Rights</h2>
              <p>
                Under applicable Canadian privacy law (PIPEDA), you have the right to access, correct, or request deletion of your personal data. To exercise any of these rights, contact us at hello@universitylawncare.ca.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">7. Contact</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:<br />
                <strong>Email:</strong> hello@universitylawncare.ca<br />
                <strong>Phone:</strong> (519) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
