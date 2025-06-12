import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Business Growth Marketing",
    img: "/assets/business-growth-strategy.jpg",
    description:
      "Strategic marketing solutions focused on helping businesses build strong brand identities, attract ideal customers, and drive sustainable growth.",
    details: [
      "Brand Strategy & Positioning",
      "Market Research & Competitor Analysis",
      "Lead Generation Campaigns",
      "SEO & Digital Advertising",
      "Social Media Strategy & Management",
    ],
  },
  {
    id: 2,
    title: "IT Solutions",
    img: "/assets/IT-solutions.jpg",
    description:
      "Targeted marketing services crafted specifically for IT and tech firms to enhance visibility, generate qualified leads, and drive client acquisition.",
    details: [
      "B2B Marketing for Tech Firms",
      "Cloud Migration",
      "Website Optimization & User Experience",
      "Cybersecurity",
      "Technical SEO & Paid Search",
    ],
  },
  {
    id: 3,
    title: "Product Development",
    img: "/assets/product-dev.jpg",
    description:
      "Complete marketing support to ensure your product reaches the right audience, makes a strong impact at launch, and remains competitive in the market.",
    details: [
      "Financial Planning",
      "Product Positioning & Messaging",
      "Competitive & Market Analysis",
      "Go-To-Market Strategy",
      "Brand Identity & UI Strategy",
    ],
  },
];

export default function Services() {
  return (
    <div className="py-16 bg-yellow-50">
      
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive services designed to meet your business goals and needs.
        </p>
      </div>

      
      <div className="space-y-24 px-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
           
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.details.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs px-2 py-1 mt-1">
                      {i + 1}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="cursor-pointer">Learn More</Button>
              </Link>
            </div>

          
            <div className="w-full">
              <img
                src={service.img}
                alt={service.title}
                className="rounded-xl shadow-md w-full h-auto max-h-[400px] object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

     
      <div className="mt-32 text-center px-6">
        <h2 className="text-3xl font-bold">
          Ready to take your business to the next level?
        </h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto">
          Our expert team is ready to help you achieve your business goals.
        </p>
        <div className="mt-6">
          <Link to="/contact">
            <Button size="lg" className="px-8 cursor-pointer">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
