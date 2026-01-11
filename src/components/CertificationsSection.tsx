import { useEffect, useRef, useState } from 'react';

interface Certification {
  name: string;
  issuer: string;
  delay: number;
  image?: string;
}

const certifications: Certification[] = [
  { name: 'Codestream Hackathon Winner', issuer: 'NRCM', delay: 100, image: '/images/c.png' },
  { name: 'Backend Development', issuer: 'Sunstone AceAcademy', delay: 300, image: '/images/backend.png' },
  { name: 'Version Control', issuer: 'Sunstone AceAcademy', delay: 400, image: '/images/versioncontrol.png' },
  { name: 'Linkedin Marketing', issuer: 'Sunstone AceAcademy', delay: 400, image: '/images/linkedin.png' },
  { name: 'Python ', issuer: 'Infosy', delay: 400, image: '/images/python.png' },
  { name: 'Walmart USA Advanced Software Engineering Virtual Experience Program', issuer: 'Walmart Forage', delay: 500, image: '/images/forage.png' },
  { name: 'young trucks ', issuer: 'naukri', delay: 400, image: '/images/young turcks.jpeg' },
  { name: 'Tech competion', issuer: 'Sunstone', delay: 400, image: '/images/tech sunstone.png' },
  { name: 'Intern Web Development', issuer: 'Acmegrade', delay: 200, image: '/images/intern.png' },
  { name: 'MAIIH', issuer: 'Microsoft AI Innovators Hub', delay: 200, image: '/images/MAIIH.jpeg' },


];

const CertificationCard = ({ cert, isVisible }: { cert: Certification; isVisible: boolean }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div
      className={`flex justify-center items-center p-4 transition-all duration-700 cursor-pointer
        ${isVisible ? 'opacity-100 translate-x-0' : '-translate-x-16 opacity-0'}`}
      style={{ transitionDelay: `${cert.delay}ms` }}
      onClick={() => setIsZoomed(!isZoomed)}
    >
      {cert.image && (
        <div className="relative w-60 h-45 flex items-center justify-center bg-white rounded-xl">
          {/* Stacked squares effect */}
          <div className="absolute top-4 left-3 w-full h-full bg-black/20 rounded-md rotate-2" />
          <div className="absolute -top-4 -left-3 w-full h-full bg-black/40 rounded-md rotate-1" />

          <img
            src={cert.image}
            alt={cert.name}
            className={`relative w-full h-full object-contain rounded-md transition-transform duration-500 ${isZoomed ? 'scale-125 z-60' : 'scale-150'
              }`}
            style={{ zIndex: isZoomed ? 2000 : 'auto' }}
          />
        </div>
      )}
    </div>
  );
};

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating expertise in development, cloud, and AI technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee gap-6">
            {[...certifications, ...certifications].map((cert, index) => (
              <CertificationCard
                key={`${cert.name}-${index}`}
                cert={cert}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>


        {/* Bottom CTA */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-muted-foreground text-sm font-mono">
            Continuously learning and growing in the tech ecosystem
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
