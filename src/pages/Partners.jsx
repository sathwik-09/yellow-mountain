import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const partners = [
  {
    id: 1,
    name: "Partner 1",
    logo: "/logos/partner1.svg",
    description: "partner 1.",
    website: "https://www.partner1.com",
    email: "partner1@gmail.com",
    location: "HYD",
    since: "2023",
  },
  {
    id: 2,
    name: "partner 2",
    logo: "/logos/partner2.svg",
    description: "partner 2.",
    website: "https://www.partner2.com",
    email: "partner2@gmail.com",
    location: "HYD",
    since: "2023",
  },
  {
    id: 3,
    name: "partner 3",
    logo: "/logos/partner3.svg",
    description: "partner 3.",
    website: "https://www.partner3.com",
    email: "partner3@gmail.com",
    location: "HYD",
    since: "2023",
  },
];

export default function Partners() {
  return (
    <div className="bg-white">
      <section className="container max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <Card className="border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-bold">
              Our Partners
            </CardTitle>
          </CardHeader>
          <Separator/>
          <CardContent className="text-muted-foreground text-lg leading-relaxed">
            With deep experience and a steadfast passion for success, our team
            of channel partners and analysts excels in guiding businesses
            forward. We lead with commitment, clarity, and a dedication to
            delivering outstanding results.
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {partners.map((partner) => (
            <Card
              key={partner.id}
              className="hover:shadow-xl transition-shadow p-4"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-10 w-10 object-contain"
                  />
                  <div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {partner.type}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2 space-y-2 text-left text-sm text-muted-foreground">
                <p>{partner.description}</p>
                <p>
                  <strong>Location:</strong> {partner.location}
                </p>
                <p>
                  <strong>Partner Since:</strong> {partner.since}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium inline-block mt-2"
                >
                  Visit Website →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
