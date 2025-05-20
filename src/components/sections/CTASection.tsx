import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
            Ready to Experience Instant Global Remittance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Sign up today and start sending money globally with lower fees and instant transfers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-700 bg-white rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
