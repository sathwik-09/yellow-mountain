import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="text-center py-20 px-6 bg-gray-50">
        <span className="inline-block mb-3 text-sm font-medium text-primary bg-primary/10 px-4 py-1 rounded-full">
          Empowering Brands
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smart Marketing Solutions for Modern Brands
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          At Yellow Mountain, we blend strategy with creativity to deliver
          marketing that works.
        </p>
        <Link to="/contact" className="text-primary">
          <Button size="lg" className="cursor-pointer">
            Get Started
          </Button>
        </Link>
      </section>

      <section className="px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-none">
            <CardContent className="p-6 text-center border-none shadow-none">
              <h3 className="text-2xl font-semibold mb-2">
                Customized Portfolio Marketing
              </h3>
              <p className="text-muted-foreground text-xl">
                Our expert team creates tailored marketing strategies to meet
                your financial goals and expand into new clients.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none">
            <CardContent className="p-6 text-center border-none shadow-none">
              <h3 className="text-2xl font-semibold mb-2">
                Algorithmic Marketing Solutions
              </h3>
              <p className="text-muted-foreground text-xl">
                We use real-time market data and smart algorithms to uncover and
                act on profitable sales opportunities.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none">
            <CardContent className="p-6 text-center border-none shadow-none">
              <h3 className="text-2xl font-semibold mb-2">
                24/7 Market Analysis and Support
              </h3>
              <p className="text-muted-foreground text-xl">
                Our analysts monitor global markets continuously, offering
                timely insights and support when you need it.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-12 text-center">
        <h3 className="text-xl font-bold mb-8">
          Trusted by forward-thinking brands
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-10">
          <img src="/assets/ezynest.svg" alt="EzyNest" className="h-15" />
          <img src="/assets/teksquilt.png" alt="TeksQuilt" className="h-15" />
          <img
            src="/assets/OMV-america.png"
            alt="OMV America"
            className="h-15"
          />
          <img src="/assets/YBR Infra.png" alt="YBR Infra" className="h-15" />
          <img
            src="/assets/Vaarahi-Infra.png"
            alt="Vaarahi Infra"
            className="h-20"
          />
          <img src="/assets/SuperPill.png" alt="SuperPill" className="h-15" />
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Step 1",
              subtitle: "Consultation",
              desc: "Our consultation process is the foundation for a successful marketing partnership. We take the time to deeply understand your brand, vision, target audience, and long-term goals. This collaborative approach allows us to uncover what truly sets your business apart and how to position it effectively in the market.",
            },
            {
              title: "Step 2",
              subtitle: "Strategy & Execution",
              desc: "We craft and execute a tailored marketing plan that aligns with your business goals and objectives. Our process begins with a deep dive into your brand, market position, and competitive landscape. From there, we identify key opportunities and challenges, and build a strategic roadmap designed to maximize your ROI.",
            },
            {
              title: "Step 3",
              subtitle: "Scaling Up",
              desc: "Scaling is not a one-time event—it’s a continuous, data-driven process. Once your marketing strategy is in motion, we focus on optimizing every aspect to fuel sustainable growth. Through ongoing analysis, performance tracking, and market insights, we refine your campaigns and identify new opportunities for expansion.",
            },
          ].map((step, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="text-5xl font-bold text-primary mb-2">
                  {step.title}
                </div>
                <h3 className="text-xl font-semibold mb-2 pt-3">
                  {step.subtitle}
                </h3>
                <p className="text-muted-foreground pt-3">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              role: "CMO, FinTech Co.",
              quote:
                "Yellow Mountain transformed our growth trajectory. Their team is brilliant!",
            },
            {
              name: "David Lee",
              role: "Founder, EcomX",
              quote:
                "We saw a 40% increase in conversions in just 3 months. Highly recommend!",
            },
            {
              name: "Aisha Patel",
              role: "Marketing Director, EduCorp",
              quote:
                "Truly strategic partners. They understand digital and human behavior perfectly.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="p-6">
              <blockquote className="italic text-muted-foreground mb-4">
                “{item.quote}”
              </blockquote>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-muted-foreground">{item.role}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white text-center py-20 px-6 rounded-xl mx-6">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="mb-6 text-lg max-w-xl mx-auto">
          Book your free consultation today and discover how our innovative
          marketing can elevate your brand.
        </p>
        <Link to="/contact" className="text-primary">
          <Button variant="secondary" size="lg" className="cursor-pointer">
            Schedule a Call
          </Button>
        </Link>
      </section>
    </div>
  );
}
