import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white pt-12 pb-8 md:pt-24 md:pb-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Headline, subtext, buttons, stats */}
        <div className="flex-1 flex flex-col items-start max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Global Remittances,<br />
            Instantly &amp; Securely.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Seamlessly access borderless remittance with ultra-low fees, fast transfers, and enterprise-grade security. Send money anywhere, anytime, with total peace of mind.
          </p>
          <div className="flex flex-row gap-4 mb-6">
            <Link
              href="/signup"
              className="inline-block px-6 py-3 bg-blue-700 text-white font-semibold rounded-md shadow hover:bg-blue-800 transition"
            >
              Early Signup
            </Link>
            <Link
              href="/demo"
              className="inline-block px-6 py-3 bg-white border border-blue-700 text-blue-700 font-semibold rounded-md shadow hover:bg-blue-50 transition"
            >
              See Demo
            </Link>
          </div>
          {/* Stats row */}
          <div className="flex flex-row flex-wrap gap-6 text-sm text-gray-500 font-medium">
            <div className="flex items-center">⚡ Instant Transfers</div>
            <div className="flex items-center">🌍 24 Countries Supported</div>
            <div className="flex items-center">🔒 Top-tier Security</div>
          </div>
        </div>
        {/* Right: Phone/dashboard mockup */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/herosectionimage.png"
            alt="App dashboard mockup"
            width={500}
            height={400}
            className="w-full max-w-md h-auto rounded-xl shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
