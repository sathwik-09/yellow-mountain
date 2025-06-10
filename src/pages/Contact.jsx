import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [result, setResult] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        setSubmitted(true);
      } else {
        setResult(data.message || "Submission failed, please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="min-h-screen px-6 py-20 space-y-20">
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Connect</h1>
        <p className="text-muted-foreground text-lg">
          Have questions, a project in mind, or just want to say hello? We'd love to hear from you.
        </p>
      </section>

      <section className="max-w-3xl mx-auto w-full">
        <Card className="bg-white border border-gray-300 shadow-xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            {submitted ? (
              <div className="text-center text-green-600 text-xl font-semibold">
                ✅ Thank you! Your message was sent successfully. We'll get back to you soon.
              </div>
            ) : (
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <Input name="first_name" type="text" placeholder="First Name" className="p-5" required />
                  <Input name="last_name" type="text" placeholder="Last Name" className="p-5" />
                </div>
                <Input name="email" type="email" placeholder="Email Address" className="p-5" required />
                <Input name="contact" type="number" placeholder="Contact Number" className="p-5" required />
                <Input name="subject" type="text" placeholder="Subject" className="p-5" />
                <Textarea name="message" placeholder="Your message..." className="p-5" rows={6} required />
                <Button type="submit" size="lg" className="w-full cursor-pointer">
                  Send Message
                </Button>
                {result && (
                  <p className="text-sm text-gray-500 text-center">{result}</p>
                )}
              </form>
            )}
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
