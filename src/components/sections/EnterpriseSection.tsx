import Image from 'next/image';
import Link from 'next/link';

export default function EnterpriseSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text and features */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Enterprise Ready</h2>
            <p className="text-lg text-gray-600 mb-6">
              Powerful solutions for businesses with high-volume international payment needs, custom integrations, and enterprise-grade security.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">API integrations for seamless workflows</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-700 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Dedicated enterprise support</span>
              </li>
            </ul>
            
            <Link
              href="/enterprise"
              className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-md shadow hover:bg-blue-800 transition"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Right side: Dashboard analytics mockup */}
          <div className="flex justify-center">
            <Image
              src="/herosection1.png"
              alt="Enterprise dashboard analytics"
              width={500}
              height={400}
              className="w-full max-w-lg h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
