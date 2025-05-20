import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import DashboardSection from '@/components/sections/DashboardSection';
import WorldwideSection from '@/components/sections/WorldwideSection';
import SecuritySupportSection from '@/components/sections/SecuritySupportSection';
import EnterpriseSection from '@/components/sections/EnterpriseSection';
import CTASection from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardSection />
        <WorldwideSection />
        <SecuritySupportSection />
        <EnterpriseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
