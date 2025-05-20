import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-5 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-blue-700">SecureRemit</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href="#features" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                Pricing
              </Link>
              <Link href="#support" className="text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors">
                Support
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="/login" 
                className="px-4 py-2 text-sm font-medium text-gray-800 hover:text-blue-700 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md text-gray-800 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}