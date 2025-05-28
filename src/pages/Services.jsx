import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Business Growth Marketing",
    description: "Strategic marketing solutions focused on helping businesses build strong brand identities, attract ideal customers, and drive sustainable growth",
    details: [
      "Brand Strategy & Positioning",
      "Market Research & Competitor Analysis",
      "Lead Generation Campaigns",
      "SEO & Digital Advertising",
      "Social Media Strategy & Management"
    ]
  },
  {
    id: 2,
    title: "IT Solutions",
    description: "Targeted marketing services crafted specifically for IT and tech firms to enhance visibility, generate qualified leads, and drive client acquisition.",
    details: [
      "B2B Marketing for Tech Firms",
      "Cloud Migration",
      "Website Optimization & User Experience",
      "Cybersecurity",
      "Technical SEO & Paid Search"
    ]
  },
  {
    id: 3,
    title: "Product Development",
    description: "Complete marketing support to ensure your product reaches the right audience, makes a strong impact at launch, and remains competitive in the market.",
    details: [
      "Financial Planning",
      "Product Positioning & Messaging",
      "Competitive & Market Analysis",
      "Go-To-Market Strategy",
      "Brand Identity & UI Strategy"
    ]
  }
];

function Services() {
  return (
    <div className="py-16">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive services designed to meet your business goals and needs.
        </p>
      </div>

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
                <Link to="/contact" className="text-primary">
                  <Button className="w-full cursor-pointer">Learn More</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    
      <div className="mt-24 text-center px-4">
        <h2 className="text-3xl font-bold">Ready to take your business to the next level?</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Our expert team is ready to help you achieve your business goals.
        </p>
        <div className="mt-6">
          <Link to="/contact" className="text-primary">
            <Button size="lg" className="px-8 cursor-pointer"> Contact Us Today</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
