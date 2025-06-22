import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, BarChart3, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const about = [
  {
    id: 1,
    title: "Professional Expertise",
    img: "/assets/expertise.jpg",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    description:
      "Our team has a proven track record of helping businesses grow with decades of experience in marketing and business development.",
  },
  {
    id: 2,
    title: "Strategic Thinking",
    img: "/assets/strategic-thinking.jpg",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    description:
      "We use data-driven strategies and advanced analytics to guide smart decision-making and long-term growth.",
  },
  {
    id: 3,
    title: "Innovative Approach",
    img: "/assets/innovative-approach.jpg",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    description:
      "We're committed to staying ahead of the curve—constantly exploring fresh, innovative ways to help our clients succeed.",
  },
];

export default function AboutSection() {
  return (
    <div className="relative bg-white">
      
      <img
        src="/assets/construction.jpg"
        alt="Background Illustration"
        className="absolute w-full h-full object-cover z-0"
        loading="lazy"
        decoding="async"
      />

      
      <div className="relative z-10">
        
        <section className="container max-w-4xl mx-auto px-6 py-24 text-center space-y-6">
          <Card className="border-none bg-transparent shadow-none">
            <CardHeader>
              <CardTitle className="text-4xl font-extrabold text-gray-900">
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              With deep experience and a passion for success, our team of channel partners and analysts excels in guiding businesses forward. We lead with commitment, clarity, and a dedication to delivering outstanding results.
            </CardContent>
          </Card>
        </section>

        <div className="motion-safe:animate-none">
        <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.map((item) => (
            <Card
              key={item.id}
              className="group bg-white border hover:shadow-xl transition-all hover:-translate-y-2 duration-300 rounded-xl overflow-hidden"
            >
              <CardHeader className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <Separator />
              <CardContent className="pt-4 text-lg leading-relaxed">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full aspect-video object-cover rounded-lg mb-3 motion-reduce:transition-none duration-300"
                  decoding="async"
                />
                {item.description}
              </CardContent>
            </Card>
          ))}
        </section>
        </div>

        
        <section className="bg-gray-50 py-20">
          <div className="container max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Our mission is simple: to empower marketing worldwide with the knowledge, tools, and support they need to thrive in the dynamic world of real estate, both online and offline.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                We believe in transparency, integrity, and a commitment to delivering results for our clients. At Yellow Mountain, our mission is straightforward yet impactful: to empower businesses and traders globally with the essential trifecta of <strong>knowledge, tools, and unwavering support</strong>, ensuring success in the ever-evolving realm of marketing and trading.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                Through our dedication to <strong>transparency</strong>, we foster trust and openness—giving business owners the clarity they need to make informed decisions. With <strong>integrity</strong> at our core, we uphold the highest ethical standards, nurturing lasting relationships built on honesty and respect.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Above all, our mission is fueled by a <strong>relentless passion</strong> to see our clients thrive—armed with the resources and guidance necessary to navigate the dynamic landscape of marketing with <strong>confidence and resilience</strong>.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/assets/business-growth.jpg"
                alt="Our mission at Yellow Mountain"
                className="rounded-xl shadow-md w-full h-auto max-h-[450px] object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </div>

     
      <section className="relative z-20 bg-primary text-white text-center py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl font-bold">
            Ready to Take Your Trading to the Next Level?
          </h2>
          <p className="text-lg">
            Don’t wait any longer to unleash your business potential – get started today and let us guide you toward lasting success.
          </p>
          <Link to="/contact" className="text-primary">
            <Button size="lg" className="font-semibold cursor-pointer bg-amber-300 hover:bg-yellow-500 text-black">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
