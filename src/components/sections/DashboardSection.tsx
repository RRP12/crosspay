import Image from 'next/image';
import Link from 'next/link';

export default function DashboardSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text and checklist */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Unified Dashboard & Mobile App</h2>
            <p className="text-lg text-gray-600 mb-6">
              Manage your remittances in one place with a comprehensive dashboard and mobile app that provides full transparency and control.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                'Real-time transaction tracking and history',
                'Multiple currency wallets and exchange',
                'Recipient management with saved contacts',
                'Detailed fee breakdown and savings calculator',
                'Secure authentication and notifications'
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link
              href="/demo"
              className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-md shadow hover:bg-blue-800 transition"
            >
              View Live Demo
            </Link>
          </div>
          
          {/* Right side: Dashboard/Mobile mockup */}
          <div className="flex justify-center">
            <Image
              src="/img (1).png"
              alt="Dashboard and mobile app interface"
              width={500}
              height={600}
              className="w-full max-w-lg h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
