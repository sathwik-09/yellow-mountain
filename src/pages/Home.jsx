import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 px-6 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Smart Marketing Solutions for Modern Brands
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          At Yellow Mountain, we blend strategy with creativity to deliver marketing that works.
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      <section className="px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Growth Strategy</h3>
              <p className="text-muted-foreground">
                Data-driven strategies tailored to your brand goals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Creative Branding</h3>
              <p className="text-muted-foreground">
                We design experiences that connect with your audience.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Campaign Execution</h3>
              <p className="text-muted-foreground">
                From launch to scale — flawless execution every step.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-primary text-white text-center py-16 px-6 rounded-xl mx-6">
        <h2 className="text-3xl font-bold mb-4">Ready to grow your brand?</h2>
        <p className="mb-6 text-lg">
          Partner with us and take your marketing to the next level.
        </p>
        <Button variant="secondary" size="lg">Contact Us</Button>
      </section>
    </div>
  );
}
