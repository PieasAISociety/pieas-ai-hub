import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const upcomingBootcamp = {
  title: "AI & Machine Learning Bootcamp 2024",
  date: "December 2024",
  duration: "6 Weeks",
  location: "PIEAS Campus",
  participants: "50+ Students",
  status: "Registrations Open",
  topics: ["Python Fundamentals", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Projects"],
};

const pastBootcamps = [
  {
    title: "Introduction to AI & ML",
    date: "Spring 2024",
    participants: "45 Students",
    topics: ["Python Basics", "ML Algorithms", "Neural Networks"],
  },
  {
    title: "Advanced Deep Learning",
    date: "Fall 2023",
    participants: "38 Students",
    topics: ["CNNs", "RNNs", "GANs", "Transfer Learning"],
  },
  {
    title: "AI Fundamentals Workshop",
    date: "Spring 2023",
    participants: "52 Students",
    topics: ["AI Basics", "Data Science", "ML Projects"],
  },
];

const Bootcamps = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 circuit-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Training Programs</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              AI <span className="text-primary">Bootcamps</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Intensive hands-on training programs to master AI and Machine Learning
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Bootcamp */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary text-primary-foreground">Upcoming</Badge>
            <Card className="bg-gradient-to-br from-card to-secondary border-primary/50 glow-cyan">
              <CardHeader>
                <CardTitle className="text-3xl font-orbitron">{upcomingBootcamp.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Start Date</p>
                      <p className="font-medium">{upcomingBootcamp.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{upcomingBootcamp.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{upcomingBootcamp.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Capacity</p>
                      <p className="font-medium">{upcomingBootcamp.participants}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-orbitron font-bold mb-3">Topics Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {upcomingBootcamp.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="bg-secondary text-foreground">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground glow-primary">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Bootcamps */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-orbitron font-bold mb-12 text-center">Previous Bootcamps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pastBootcamps.map((bootcamp, index) => (
              <Card 
                key={bootcamp.title}
                className="bg-card border-border hover:border-primary transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-orbitron">{bootcamp.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{bootcamp.date}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{bootcamp.participants}</span>
                  </div>
                  <div className="space-y-2">
                    {bootcamp.topics.map((topic) => (
                      <Badge key={topic} variant="outline" className="mr-2">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bootcamps;
