import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-20">
      <div className="relative h-screen">
      <img
        src="/assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" /> 
      <section className="relative z-20 text-white text-center py-20 px-6 flex flex-col justify-center items-center h-full">
        <span className="inline-block mb-3 text-sm font-medium bg-white/20 px-4 py-1 rounded-full">
          Empowering Brands
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smart Marketing Solutions for Modern Brands
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-6">
          At Yellow Mountain, we blend strategy with creativity to deliver
          marketing that works.
        </p>
        <Link to="/contact" className="text-black">
          <Button size="lg" className="cursor-pointer bg-yellow-300 hover:bg-yellow-500 text-black">
            Get Started
          </Button>
        </Link>
      </section>
    </div>

      

      <section className="px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-none hover:scale-105 transition-transform hover:bg-yellow-300">
            <CardContent className="p-6 text-center border-none shadow-none">
              <img src="/assets/portfolio.jpg" className="p-2 w-200 h-70" loading="lazy"/>
              <h3 className="text-2xl font-semibold mb-2 p-2">
                Customized Portfolio Marketing
              </h3>
              <p className="text-muted-foreground text-xl">
                Our expert team creates tailored marketing strategies to meet
                your financial goals and expand into new clients.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none hover:scale-105 transition-transform hover:bg-yellow-300">
            <CardContent className="p-6 text-center border-none shadow-none">
              <img src="/assets/Algorithmic.jpg" className="p-2 w-200 h-70" loading="lazy"/>
              <h3 className="text-2xl font-semibold mb-2 p-2">
                Algorithmic Marketing Solutions
              </h3>
              <p className="text-muted-foreground text-xl">
                We use real-time market data and smart algorithms to uncover and
                act on profitable sales opportunities.
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-none hover:scale-105 transition-transform hover:bg-yellow-300">
            <CardContent className="p-6 text-center border-none shadow-none">
              <img src="/assets/analysis.jpg" className="p-2 w-200 h-70" loading="lazy"/>
              <h3 className="text-2xl font-semibold mb-2 p-2">
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

      <section className="py-10 px-6">
        <div> 
          <h2 className="text-3xl font-semibold text-center mb-10"> Insights and Analysis</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: "Market Trends and Analysis of business",
                img: "/assets/market-trends.jpg",
                desc: "In today’s fast-paced digital landscape, businesses are navigating major shifts in technology, consumer behavior, and market dynamics. Key trends include widespread adoption of AI and automation, rising demand for personalized experiences, and growing emphasis on sustainability. The market continues to expand, especially in cloud-based and e-commerce sectors. Customers are more informed and expect seamless, secure, and value-driven experiences.",
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
            <Card key={idx} className="border-none shadow-none hover:scale-105 transition-transform hover:bg-yellow-300">
              <CardContent className="p-6">
                <img src={step.img} className="w-full h-60 pb-2" loading="lazy"/>
                <div className="text-2xl font-bold text-primary pt-3">
                  {step.title}
                </div>
                <p className="text-muted-foreground pt-3">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </section>

      

      <section className=" py-1 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
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
              desc: "Scaling is not a one-time event—it’s a continuous, data-driven process. Once your marketing strategy is in motion, we focus on optimizing every aspect to fuel sustainable growth. Through ongoing analysis, performance tracking, and market insights, we refine your campaigns and identify new opportunities for expansion.",
            },
          ].map((step, idx) => (
            <Card key={idx} className="border-none shadow-none hover:scale-105 transition-transform hover:bg-yellow-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {step.title}
                </div>
                <h3 className="text-3xl font-semibold mb-2 pt-3">
                  {step.subtitle}
                </h3>
                <img src={step.img} className="w-full h-60 pb-2" loading="lazy" />
                <p className="text-muted-foreground pt-3">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white ">
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
            <Card key={idx} className="p-6 hover:scale-105 transition-transform hover:bg-yellow-300">
              <blockquote className="italic  mb-4">
                “{item.quote}”
              </blockquote>
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-muted-foreground">{item.role}</div>
            </Card>
          ))}
        </div>
      </section>

      <section class="w-full bg-white py-10 px-6 max-w-5xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-2">F.A.Q.</h2>
          <p class="text-muted-foreground text-lg max-w-xl mx-auto">
            Find answers to commonly asked questions about our services and marketing strategies.
          </p>
        </div>

        <div class="space-y-6">
          
          <details class="border rounded-lg p-4 transition-all duration-300 hover:shadow-md group">
            <summary class="cursor-pointer font-semibold text-xl flex justify-between items-center">
              How do your Portfolio Marketing services work?
              <span class="text-primary transform group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p class="mt-4 text-gray-700 leading-relaxed">
              At Yellow Mountain, our portfolio marketing services are tailored to meet the unique needs and objectives of each client. We begin by conducting a thorough assessment of your financial goals, risk tolerance, and investment preferences...
            </p>
          </details>

          
          <details class="border rounded-lg p-4 transition-all duration-300 hover:shadow-md group">
            <summary class="cursor-pointer font-semibold text-xl flex justify-between items-center">
              How can I access your 24/7 market analysis and support?
              <span class="text-primary transform group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p class="mt-4 text-gray-700 leading-relaxed">
              Accessing our 24/7 support is easy. As a client, you’ll have access to our online platform for market updates, insights, and analyst access via email, phone, or live chat. Whether you need help with trades or market insights, our experts are here around the clock.
            </p>
          </details>
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
          <Button size="lg" className="cursor-pointer bg-yellow-300 text-black hover:bg-yellow-500">
            Schedule a Call
          </Button>
        </Link>
      </section>
    </div>
  );
}
