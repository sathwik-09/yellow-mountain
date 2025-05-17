import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const services = [
  {
    id: 1,
    title: "Business Consulting",
    description: "Strategic advisory services to help optimize your business operations and drive growth.",
    details: [
      "Market Analysis",
      "Strategic Planning",
      "Process Optimization",
      "Growth Strategy",
      "Cost Reduction"
    ]
  },
  {
    id: 2,
    title: "IT Solutions",
    description: "Cutting-edge technology solutions to streamline operations and enhance security.",
    details: [
      "Software Development",
      "Cloud Migration",
      "IT Infrastructure",
      "Cybersecurity",
      "Digital Transformation"
    ]
  },
  {
    id: 3,
    title: "Financial Services",
    description: "Comprehensive financial management and advisory services for businesses of all sizes.",
    details: [
      "Financial Planning",
      "Investment Strategies",
      "Risk Management",
      "Tax Planning",
      "Wealth Management"
    ]
  }
];

function Services() {
  return (
    <div className="py-16">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive services designed to meet your business goals and needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4 space-y-2">
              {service.details.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    {index + 1}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
              <div className="pt-4">
                <Button className="w-full">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center px-4">
        <h2 className="text-3xl font-bold">Ready to take your business to the next level?</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Our expert team is ready to help you achieve your business goals.
        </p>
        <div className="mt-6">
          <Button size="lg" className="px-8">
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;
