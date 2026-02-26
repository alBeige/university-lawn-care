import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'University Lawn Care terms of service — the terms governing your use of our website and services.',
}

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-8 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold text-stone-900 mb-2">Terms of Service</h1>
          <p className="text-stone-500 text-sm">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-stone-700 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing our website or booking our services, you agree to these Terms of Service. If you do not agree, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">2. Services</h2>
              <p>
                University Lawn Care provides residential lawn care and property maintenance services in Waterloo Region. All services are subject to a formal quote and confirmation. We reserve the right to decline service requests at our discretion.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">3. Quotes and Pricing</h2>
              <p>
                Quotes are valid for 14 days from the date of issue. Final pricing may vary if property conditions differ materially from what was described. Any changes will be communicated before additional work is performed.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">4. Cancellations and Rescheduling</h2>
              <p>
                You may cancel or reschedule any single visit with at least 24 hours' notice at no charge. Cancellations with less than 24 hours' notice may be subject to a service fee. Seasonal contract cancellations are subject to the terms outlined in the contract.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">5. Customer Responsibilities</h2>
              <p>Customers are responsible for:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Providing accurate property information at the time of quoting</li>
                <li>Ensuring clear access to all areas that require service</li>
                <li>Notifying us of any hazards, obstacles, or underground utilities</li>
                <li>Keeping pets secured during service visits</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">6. Liability</h2>
              <p>
                University Lawn Care carries commercial liability insurance. In the event of property damage caused by our crew, please notify us within 48 hours. Our liability is limited to the direct cost of repair or replacement of damaged property.
              </p>
              <p className="mt-3">
                We are not responsible for pre-existing property damage, damage resulting from unmarked underground utilities or objects, or outcomes resulting from inaccurate property information provided by the customer.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">7. Payment</h2>
              <p>
                Payment is due within 14 days of invoice. Accepted methods include e-transfer, credit card, and cheque. Late payments may be subject to interest charges of 2% per month.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">8. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">9. Contact</h2>
              <p>
                For questions about these terms, contact us at hello@universitylawncare.ca or (519) 123-4567.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
