import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, BarChart3, Rocket } from "lucide-react";

const about = [
  {
    id: 1,
    title: "Professional Expertise",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    description:
      "Our team has a proven track record of helping businesses grow with decades of experience in marketing and business development.",
  },
  {
    id: 2,
    title: "Strategic Thinking",
    icon: <Lightbulb className="w-6 h-6 text-primary" />,
    description:
      "We use data-driven strategies and advanced analytics to guide smart decision-making and long-term growth.",
  },
  {
    id: 3,
    title: "Innovative Approach",
    icon: <Rocket className="w-6 h-6 text-primary" />,
    description:
      "We're committed to staying ahead of the curve—constantly exploring fresh, innovative ways to help our clients succeed.",
  },
];

export default function AboutSection() {
  return (
    <div className="bg-white">
      <section className="container max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">About Us</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-lg leading-relaxed">
            With deep experience and a steadfast passion for success, our team of channel partners and analysts excels in guiding businesses forward. We lead with commitment, clarity, and a dedication to delivering outstanding results.
          </CardContent>
        </Card>
      </section>

      <section className="container max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {about.map((item) => (
          <Card
            key={item.id}
            className="group transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            <CardHeader className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4 text-sm text-muted-foreground">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Our mission is to help businesses grow by offering powerful, data-backed marketing solutions. We constantly evolve and innovate, ensuring every client stays ahead in a fast-moving market.
            </p>
          </div>
          <Card className="bg-white border shadow-sm p-6">
            <CardDescription className="text-lg italic text-muted-foreground">
              “We are committed to staying ahead of the curve — always exploring, always improving — to offer the very best to our clients.”
            </CardDescription>
          </Card>
        </div>
      </section>
    </div>
  );
}
