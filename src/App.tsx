import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  BrainCircuit,
  Code2,
  Globe,
  Smartphone,
  Sparkles,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Hexagon,
  ChevronRight,
  Layers,
  Rocket,
  Users,
  Shield,
  Award,
  BarChart,
  Zap,
  MessageSquare,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur"></div>
                <Hexagon className="h-8 w-8 text-primary relative" />
              </div>
              <span className="text-xl font-bold">Moniteqauls</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <Button variant="ghost">Services</Button>
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Portfolio</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Log In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background z-0" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Innovating the Future</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Transform Your Vision Into
                <div className="text-primary mt-2">Digital Reality</div>
              </h1>
              <p className="text-xl text-muted-foreground">
                We craft innovative solutions across Web, AI, IoT, and Mobile platforms
                to help businesses thrive in the digital age.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "10+", label: "Experts" },
                  { number: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Digital Innovation"
                className="rounded-xl shadow-2xl relative"
              />
              <div className="absolute -bottom-8 -left-8 bg-background rounded-lg shadow-xl p-4 flex items-center space-x-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Award Winning</div>
                  <div className="text-sm text-muted-foreground">Top Tech Company 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
            <Layers className="w-4 h-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Empowering Your Digital Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with strategic thinking to deliver
            exceptional results for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "Fast Development",
              description: "Rapid development and deployment using modern technologies",
            },
            {
              icon: Shield,
              title: "Secure Solutions",
              description: "Enterprise-grade security for all our applications",
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Dedicated specialists for every aspect of your project",
            },
            {
              icon: BarChart,
              title: "Scalable Systems",
              description: "Build for growth with scalable architecture",
            },
            {
              icon: Zap,
              title: "High Performance",
              description: "Optimized solutions for maximum efficiency",
            },
            {
              icon: MessageSquare,
              title: "24/7 Support",
              description: "Round-the-clock technical support and maintenance",
            },
          ].map((feature) => (
            <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <Code2 className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Comprehensive Digital Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end services to transform your business in the digital age
            </p>
          </div>
          <Tabs defaultValue="web" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="web" className="space-x-2">
                <Globe className="w-4 h-4" />
                <span>Web Development</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="space-x-2">
                <BrainCircuit className="w-4 h-4" />
                <span>AI Solutions</span>
              </TabsTrigger>
              <TabsTrigger value="iot" className="space-x-2">
                <Cpu className="w-4 h-4" />
                <span>IoT Systems</span>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="space-x-2">
                <Smartphone className="w-4 h-4" />
                <span>Mobile Apps</span>
              </TabsTrigger>
            </TabsList>
            {[
              {
                value: "web",
                title: "Web Development",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
                features: [
                  "Custom Web Applications",
                  "E-commerce Solutions",
                  "Progressive Web Apps",
                  "API Development",
                  "Cloud Integration",
                ],
              },
              {
                value: "ai",
                title: "AI Solutions",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
                features: [
                  "Machine Learning Models",
                  "Natural Language Processing",
                  "Computer Vision",
                  "Predictive Analytics",
                  "AI Integration Services",
                ],
              },
              {
                value: "iot",
                title: "IoT Systems",
                image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
                features: [
                  "Smart Device Integration",
                  "Industrial IoT Solutions",
                  "Real-time Monitoring",
                  "Sensor Networks",
                  "IoT Data Analytics",
                ],
              },
              {
                value: "mobile",
                title: "Mobile Development",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
                features: [
                  "iOS Development",
                  "Android Development",
                  "Cross-platform Apps",
                  "Mobile UI/UX Design",
                  "App Store Optimization",
                ],
              },
            ].map((service) => (
              <TabsContent key={service.value} value={service.value} className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <ul className="space-y-4">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center space-x-3">
                              <div className="bg-primary/10 p-1.5 rounded-full">
                                <CheckCircle2 className="w-4 h-4 text-primary" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="group">
                          Learn More
                          <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl blur-xl" />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="rounded-xl shadow-lg relative"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team of experts to discuss your project
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-full">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Globe className="w-5 h-5" />
                        <span>www.Moniteqauls.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <MessageSquare className="w-5 h-5" />
                        <span>contact@Moniteqauls.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-muted-foreground">
                        <Smartphone className="w-5 h-5" />
                        <span>+216 20512214</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Project Type</Label>
                    <Input id="subject" placeholder="Web Development, AI, IoT, etc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                  <Button className="w-full group">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary/5 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur"></div>
                  <Hexagon className="h-8 w-8 text-primary relative" />
                </div>
                <span className="text-xl font-bold">Moniteqauls</span>
              </div>
              <p className="text-muted-foreground">
                Transforming businesses through innovative digital solutions.
              </p>
            </div>
            {[
              {
                title: "Services",
                links: ["Web Development", "AI Solutions", "IoT Systems", "Mobile Apps"],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Blog", "Press"],
              },
              {
                title: "Resources",
                links: ["Documentation", "Support", "Terms", "Privacy"],
              },
            ].map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary">
                        {link}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Moniteqauls. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">Terms</Button>
              <Button variant="ghost" size="sm">Privacy</Button>
              <Button variant="ghost" size="sm">Cookies</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;