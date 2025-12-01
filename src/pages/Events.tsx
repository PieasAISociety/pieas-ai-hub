import { Sparkles, Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventGallery } from "@/components/EventGallery";
import workshopImg from "@/assets/events/workshop-1.jpg";
import hackathonImg from "@/assets/events/hackathon-1.jpg";
import panelImg from "@/assets/events/panel-1.jpg";
import networkingImg from "@/assets/events/networking-1.jpg";
import awardsImg from "@/assets/events/awards-1.jpg";
import showcaseImg from "@/assets/events/showcase-1.jpg";

const orientAI = {
  title: "Orient AI 2024",
  tagline: "Annual AI Innovation Summit",
  date: "Coming Soon",
  description: "Our flagship event bringing together AI enthusiasts, researchers, and industry experts for a celebration of innovation and learning.",
  highlights: [
    "Expert Speaker Sessions",
    "AI Project Showcases",
    "Hackathon Competition",
    "Networking Opportunities",
    "Industry Insights",
    "Awards & Recognition",
  ],
};

const pastEvents = [
  {
    title: "AI Workshop Series",
    date: "November 2024",
    type: "Workshop",
    participants: "60+",
  },
  {
    title: "Tech Talk: Future of AI",
    date: "October 2024",
    type: "Seminar",
    participants: "100+",
  },
  {
    title: "ML Competition",
    date: "September 2024",
    type: "Competition",
    participants: "45+",
  },
  {
    title: "AI Ethics Panel Discussion",
    date: "August 2024",
    type: "Panel",
    participants: "80+",
  },
];

const eventPhotos = [
  { url: workshopImg, title: "AI Workshop Series", date: "November 2024" },
  { url: hackathonImg, title: "ML Hackathon Competition", date: "September 2024" },
  { url: panelImg, title: "Tech Talk Panel Discussion", date: "October 2024" },
  { url: networkingImg, title: "Networking Session", date: "August 2024" },
  { url: awardsImg, title: "Awards Ceremony", date: "September 2024" },
  { url: showcaseImg, title: "Project Showcase Exhibition", date: "November 2024" },
];

const Events = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 circuit-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">What's Happening</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              Our <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join us in exploring the frontiers of artificial intelligence
            </p>
          </div>
        </div>
      </section>

      {/* Orient AI - Flagship Event */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 via-card to-background border-primary glow-cyan overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative">
                <CardHeader className="text-center pb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4 mx-auto animate-glow-pulse">
                    <Trophy className="h-10 w-10 text-primary" />
                  </div>
                  <Badge className="mb-4 bg-primary text-primary-foreground mx-auto">
                    Annual Flagship Event
                  </Badge>
                  <CardTitle className="text-4xl md:text-5xl font-orbitron mb-2">
                    {orientAI.title}
                  </CardTitle>
                  <p className="text-xl text-muted-foreground">{orientAI.tagline}</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-center text-lg max-w-2xl mx-auto">
                    {orientAI.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg backdrop-blur">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium">{orientAI.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg backdrop-blur">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Venue</p>
                        <p className="font-medium">PIEAS Auditorium</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg backdrop-blur">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Expected</p>
                        <p className="font-medium">200+ Attendees</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-orbitron font-bold mb-4 text-center">Event Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {orientAI.highlights.map((highlight) => (
                        <div 
                          key={highlight}
                          className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center pt-4">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground glow-primary">
                      Register Interest
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-primary text-foreground hover:bg-primary/10">
                      View Past Editions
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.title}
                className="bg-card border-border hover:border-primary transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {event.type}
                  </Badge>
                  <CardTitle className="text-lg font-orbitron">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.participants} Participants</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
              Event <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-muted-foreground">
              Relive the moments from our recent events and workshops
            </p>
          </div>
          <div className="max-w-7xl mx-auto">
            <EventGallery images={eventPhotos} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
