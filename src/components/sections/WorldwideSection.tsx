import Image from 'next/image';

export default function WorldwideSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Send & Receive Worldwide</h2>
          <p className="text-lg text-gray-600">
            Our global network enables seamless transfers to over 150 countries with competitive rates and multiple payout options.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/img (2).png"
              alt="World map showing supported countries"
              width={1000}
              height={500}
              className="w-full h-auto rounded-xl"
            />
            
            {/* Country flags - these would be positioned absolutely over the map */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              {['🇺🇸', '🇬🇧', '🇪🇺', '🇨🇦', '🇦🇺', '🇯🇵', '🇮🇳', '🇧🇷'].map((flag, index) => (
                <span key={index} className="text-2xl">{flag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          {[
            { label: 'Supported Countries', value: '150+' },
            { label: 'Local Currencies', value: '50+' },
            { label: 'Payout Methods', value: '10+' },
            { label: 'Average Fee', value: '0.5%' }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <p className="text-3xl font-bold text-blue-700 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
