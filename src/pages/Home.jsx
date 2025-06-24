import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Icons from "@/components/socialMediaIcons";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16 lg:space-y-20">
     
      <div className="relative min-h-screen h-screen">
        <img
          src="/assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full sm:object-cover object-center z-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60 z-10" /> 
        <section className="relative z-20 text-white text-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 flex flex-col justify-center items-center h-full">
          <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-medium bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm">
            Empowering Brands
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 max-w-4xl leading-tight">
            Smart Marketing Solutions for Modern Brands
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            At Yellow Mountain, we blend strategy with creativity to deliver
            marketing that works.
          </p>
          <Link to="/contact" className="text-black">
            <Button 
              size="lg" 
              className="w-full sm:w-auto cursor-pointer bg-yellow-300 hover:bg-yellow-500 text-black min-h-[44px] px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold"
            >
              Get Started
            </Button>
          </Link>
        </section>
      </div>

      {/* About Section - Fixed Mobile Text Visibility */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <img 
              src="/assets/house.png" 
              alt="Yellow Mountain Office"
              className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0 rounded-lg shadow-lg" 
              loading="lazy" 
            />
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-center lg:text-left">
              At Yellow Mountain, we're dedicated to revolutionizing the way marketing approach in industries.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              With years of experience and a passion for helping others succeed, yellow Mountain leads our team of expert marketing PR and analysts. We're here to help you achieve your business goals and make your brand stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Responsive Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          <Card className="border-none shadow-lg hover:scale-105 transition-transform hover:bg-yellow-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/assets/portfolio.jpg" 
                  alt="Portfolio Marketing"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover" 
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
                Customized Portfolio Marketing
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Our expert team creates tailored marketing strategies to meet
                your financial goals and expand into new clients.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:scale-105 transition-transform hover:bg-yellow-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/assets/Algorithmic.jpg" 
                  alt="Algorithmic Solutions"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover" 
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
                Algorithmic Marketing Solutions
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                We use real-time market data and smart algorithms to uncover and
                act on profitable sales opportunities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:scale-105 transition-transform hover:bg-yellow-300">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/assets/analysis.jpg" 
                  alt="Market Analysis"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover" 
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">
                24/7 Market Analysis and Support
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Our analysts monitor global markets continuously, offering
                timely insights and support when you need it.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insights Section - Responsive Cards */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12">
          Insights and Analysis
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Market Trends and Analysis of business",
              img: "/assets/market-trends.jpg",
              desc: "In today's fast-paced digital landscape, businesses are navigating major shifts in technology, consumer behavior, and market dynamics. Key trends include widespread adoption of AI and automation, rising demand for personalized experiences, and growing emphasis on sustainability. The market continues to expand, especially in cloud-based and e-commerce sectors. Customers are more informed and expect seamless, secure, and value-driven experiences.",
            },
            {
              title: "Risk Management and Strategy",
              img: "/assets/risk-management.jpg",
              desc: "Effective marketing requires careful risk management to protect brand reputation, ensure message accuracy, and comply with advertising standards. At Yellow Mountain, we use advanced analytics and machine learning to identify and mitigate risks, optimize campaigns, and deliver targeted, personalized messages that resonate with customers. Our team of experts stays up-to-date with the latest industry trends and best practices to ensure our clients' success. By analyzing consumer behavior and market trends, we proactively adjust strategies to mitigate risks and capitalize on new opportunities",
            },
            {
              title: "Reaching new heights of Marketing",
              img: "/assets/reaching-heights.jpg",
              desc: "Our marketing strategies are designed to elevate your brand visibility and connect you with the right audience. By leveraging targeted campaigns, data-driven insights, and multi-channel engagement, we help increase sales and accelerate growth across diverse sectors including business ventures, real estate, and consultancies. Through personalized messaging and optimized lead generation, we ensure your offerings reach potential clients effectively, turning prospects into loyal customers.",
            },
          ].map((step, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:scale-105 transition-transform hover:bg-yellow-300">
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={step.img} 
                    alt={step.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover" 
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section - Responsive Process Steps */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Step 1",
              subtitle: "Consultation",
              img: "/assets/consultation.jpg",
              desc: "Our consultation process is the foundation for a successful marketing partnership. We take the time to deeply understand your brand, vision, target audience, and long-term goals. This collaborative approach allows us to uncover what truly sets your business apart and how to position it effectively in the market.",
            },
            {
              title: "Step 2",
              subtitle: "Strategy & Execution",
              img: "/assets/stratergy-execution.jpg",
              desc: "We craft and execute a tailored marketing plan that aligns with your business goals and objectives. Our process begins with a deep dive into your brand, market position, and competitive landscape. From there, we identify key opportunities and challenges, and build a strategic roadmap designed to maximize your ROI.",
            },
            {
              title: "Step 3",
              subtitle: "Scaling Up",
              img: "/assets/scaling.jpg",
              desc: "Scaling is not a one-time event—it's a continuous, data-driven process. Once your marketing strategy is in motion, we focus on optimizing every aspect to fuel sustainable growth. Through ongoing analysis, performance tracking, and market insights, we refine your campaigns and identify new opportunities for expansion.",
            },
          ].map((step, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:scale-105 transition-transform hover:bg-yellow-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
                  {step.title}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">
                  {step.subtitle}
                </h3>
                <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={step.img} 
                    alt={step.subtitle}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover" 
                    loading="lazy" 
                  />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Responsive Cards */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {[
            {
              name: "Madhu Kori",
              role: "CEO, TeksQuilt",
              quote:
                "Yellow Mountain transformed our growth trajectory and improved our reach to new customers. Their team is brilliant and deeply analytical and strategic!",
            },
            {
              name: "Ajay konyala",
              role: "Partner, Restaurant Chain (Biryanipot)",
              quote:
                "We saw a 40% increase in conversions in just 3 months. Highly recommend!",
            },
            {
              name: "Vaishnavi",
              role: "Marketing Director, CMO, Data Solutions",
              quote:
                "Truly strategic partners. They understand digital and human behavior perfectly, we have diversified with them now and created new footprints in the best locations.",
            },
          ].map((item, idx) => (
            <article key={idx} className="p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform hover:bg-yellow-300 rounded-xl bg-white">
              <blockquote className="italic text-sm sm:text-base mb-4 sm:mb-6">
                "{item.quote}"
              </blockquote>
              <div className="font-semibold text-sm sm:text-base">{item.name}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{item.role}</div>
            </article>
          ))}
        </div>
      </section>

      
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">F.A.Q.</h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
            Find answers to commonly asked questions about our services and marketing strategies.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <details className="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-md group">
            <summary className="cursor-pointer font-semibold text-base sm:text-lg lg:text-xl flex justify-between items-center">
              How do your Portfolio Marketing services work?
              <span className="text-primary transform group-open:rotate-45 transition-transform duration-200 text-xl sm:text-2xl">+</span>
            </summary>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              At Yellow Mountain, our portfolio marketing services are tailored to meet the unique needs and objectives of each client. We begin by conducting a thorough assessment of your financial goals, risk tolerance, and investment preferences...
            </p>
          </details>

          <details className="border rounded-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-md group">
            <summary className="cursor-pointer font-semibold text-base sm:text-lg lg:text-xl flex justify-between items-center">
              How can I access your 24/7 market analysis and support?
              <span className="text-primary transform group-open:rotate-45 transition-transform duration-200 text-xl sm:text-2xl">+</span>
            </summary>
            <p className="mt-3 sm:mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Accessing our 24/7 support is easy. As a client, you'll have access to our online platform for market updates, insights, and analyst access via email, phone, or live chat. Whether you need help with trades or market insights, our experts are here around the clock.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section - Responsive Call-to-Action */}
      <section className="bg-primary text-white text-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 rounded-xl mx-4 sm:mx-6 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          Let's Build Something Great Together
        </h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
          Book your free consultation today and discover how our innovative
          marketing can elevate your brand.
        </p>
        <Link to="/contact" className="text-primary">
          <Button 
            size="lg" 
            className="w-full sm:w-auto cursor-pointer bg-yellow-300 text-black hover:bg-yellow-500 min-h-[44px] px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold mb-6 sm:mb-8"
          >
            Schedule a Call
          </Button>
        </Link>
        <div className="flex justify-center">
          <Icons />
        </div>
      </section>
    </div>
  );
}
