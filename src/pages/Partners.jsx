import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Partners() {
  const ITlogos = [
    {
      src: "/assets/ezynest.svg",
      alt: "EzyNest",
      title: "EzyNest",
      href: "https://www.ezynest.com/",
    },
    {
      src: "/assets/teksquilt.png",
      alt: "TeksQuilt",
      title: "TeksQuilt",
      href: "https://www.teksquilt.com/",
    },
    {
      src: "/assets/OMV-america.png",
      alt: "OMV America",
      title: "OMV America",
      href: "https://www.omvamerica.com/",
    },
    {
      src: "/assets/shswift.png",
      alt: "SHSwift",
      title: "SHSwift",
      href: "https://shswift-mk3vp2moo9u7p56p.builder-preview.com/",
    },
  ];

  const RealEstateLogos = [
    {
      src: "/assets/Vaarahi-Infra.png",
      alt: "Vaarahi Infra",
      title: "Vaarahi Infra",
    },
    { src: "/assets/YBR Infra.png", alt: "YBR Infra", title: "YBR Infra" },
    {
      src: "/assets/Ira-Enclave.png",
      alt: "Ira Enclave",
      title: "Ira Enclave",
    },
  ];

  const otherLogos = [
    {
      src: "/assets/SuperPill.png",
      alt: "SuperPill",
      title: "SuperPill",
      href: "https://www.superpill.com/",
    },
    {
      src: "/assets/sapta-vahana.png",
      alt: "Sapta Vahana",
      title: "Sapta Vahana",
    },
  ];

  const renderLogos = (logos) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-10 mt-8">
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="bg-white hover:shadow-md transition-shadow dark:bg-neutral-900">
            <CardContent className="flex items-center justify-center h-28 p-6">
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noreferrer">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-16 w-full object-contain"
                    loading="lazy"
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-16 w-full object-contain"
                  loading="lazy"
                />
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  const Section = ({ title, description, children }) => (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg mb-12">
          {description}
        </p>
        {children}
      </div>
    </section>
  );

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-neutral-900">
      <Section
        title="Our Trusted IT Partners"
        description="We collaborate with industry-leading IT firms to deliver cutting-edge software solutions, ensuring excellence in every digital experience we build."
      >
        {renderLogos(ITlogos)}
      </Section>

      <Section
        title="Real Estate Collaborators"
        description="From luxury infrastructure to sustainable communities, our real estate partners are shaping the future of modern living."
      >
        {renderLogos(RealEstateLogos)}
      </Section>

      <Section
        title="Innovative Ventures & Startups"
        description="We proudly support ambitious startups and visionary products, helping them scale fast and build reliable tech foundations."
      >
        {renderLogos(otherLogos)}
      </Section>
    </div>
  );
}
