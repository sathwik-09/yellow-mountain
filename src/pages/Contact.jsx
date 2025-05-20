import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
  
export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-20 bg-white space-y-20">
  
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Connect</h1>
        <p className="text-muted-foreground text-lg">
          Have questions, a project in mind, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      
      <section className="max-w-3xl mx-auto w-full">
        <Card className="bg-white border border-gray-400 shadow-xl ">
          <CardContent className="p-8 space-y-6">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" required />
                <Input type="text" placeholder="Last Name" required />
              </div>
              <Input type="email" placeholder="Email Address" required />
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your message..." rows={6} required />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-muted-foreground">
          <div>
            <h3 className="text-xl font-semibold text-black mb-1">Email</h3>
            <p>info@yellowmountain.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-1">Phone</h3>
            <p>+91 9573263944</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-1">Location</h3>
            <p>Yellow Mountain @ corporate office Thukkuguda, ORR 14 beside Devendra Vidyalaya school</p>
          </div>
        </div>
      </section>
    </div>
  );
}
