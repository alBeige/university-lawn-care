import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="font-display text-4xl font-bold text-stone-900 mb-4">Page Not Found</h1>
        <p className="text-stone-600 mb-8">
          Looks like this page went on vacation. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/services" className="btn-secondary">View Services</Link>
        </div>
      </div>
    </div>
  )
}
