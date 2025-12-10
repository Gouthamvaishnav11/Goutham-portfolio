import Navigation from '@/components/Navigation';
import ParticleField from '@/components/ParticleField';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import SummarySection from '@/components/SummarySection';
import LocationSection from '@/components/LocationSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated particle background */}
      <ParticleField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <SummarySection />
        <LocationSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
