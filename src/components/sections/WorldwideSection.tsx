import Image from 'next/image';

export default function WorldwideSection() {
  const countries = [
    { flag: '🇺🇸', name: 'United States' },
    { flag: '🇳🇬', name: 'Nigeria' },
    { flag: '🇮🇳', name: 'India' },
    { flag: '🇵🇭', name: 'Philippines' },
    { flag: '🇬🇧', name: 'UK' },
    { flag: '🇧🇷', name: 'Brazil' },
    { flag: '🇵🇰', name: 'Pakistan' },
    { flag: '🇹🇷', name: 'Turkey' }
  ];
  
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-blue-800 mb-4">Send & Receive Worldwide</h2>
          <p className="text-gray-700 mb-6">
            SecureRemit supports over 190 countries with local fiat, stablecoin, and
            crypto rails. No matter where you are, your money moves instantly.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-lg">
            <Image
              src="/img (2).png"
              alt="World map showing supported countries"
              width={700}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <div 
              key={index} 
              className="flex items-center bg-white py-2 px-4 rounded-full shadow-sm"
            >
              <span className="mr-2">{country.flag}</span>
              <span className="text-sm font-medium text-gray-800">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
