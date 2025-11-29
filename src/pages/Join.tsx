import { UserPlus, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const benefits = [
  "Access to exclusive AI workshops and bootcamps",
  "Networking with industry professionals",
  "Hands-on experience with cutting-edge AI technologies",
  "Opportunity to work on real-world projects",
  "Certificate of participation",
  "Career guidance and mentorship",
];

const requirements = [
  "Must be a PIEAS student",
  "Passion for AI and Machine Learning",
  "Basic programming knowledge (preferred)",
  "Commitment to attend regular sessions",
];

const Join = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 circuit-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
              <UserPlus className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Become a Member</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-orbitron font-bold mb-6">
              Join <span className="text-primary">PAIS</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Be part of Pakistan's leading AI community and shape the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron">Why Join Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {requirements.map((requirement) => (
                    <li key={requirement} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card border-primary glow-cyan">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-center">
                  Membership Application
                </CardTitle>
                <p className="text-center text-muted-foreground">
                  Fill out the form below to apply for membership
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required 
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@pieas.edu.pk" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rollNumber">Roll Number</Label>
                    <Input 
                      id="rollNumber" 
                      placeholder="2021-CS-123" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input 
                      id="department" 
                      placeholder="Computer Science" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Year of Study</Label>
                    <Input 
                      id="year" 
                      placeholder="3rd Year" 
                      required 
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Why do you want to join PAIS?</Label>
                    <Textarea 
                      id="interest" 
                      placeholder="Tell us about your interest in AI and what you hope to achieve..." 
                      required 
                      className="bg-background min-h-32"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Previous AI/ML Experience (Optional)</Label>
                    <Textarea 
                      id="experience" 
                      placeholder="Share any relevant projects, courses, or experience..." 
                      className="bg-background"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                  >
                    Submit Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
