import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Contact Us</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about EIRTM 2025? We're here to help. Reach out to us through any of
            the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="p-8 border-t-4 border-t-primary">
            <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your inquiry about?"
                />
              </div>

              <div>
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full btn-primary">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 border-t-4 border-t-secondary">
              <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:info@eirtm2025.org"
                        className="hover:text-primary transition-colors"
                      >
                        info@eirtm2025.org
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:support@eirtm2025.org"
                        className="hover:text-primary transition-colors"
                      >
                        support@eirtm2025.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 XX XXXX XXXX</p>
                    <p className="text-muted-foreground">+91 XX XXXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Institute of Engineering & Management<br />
                      Salt Lake City, Sector V<br />
                      Kolkata - 700091<br />
                      West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Specific Queries */}
            <Card className="p-8 bg-muted">
              <h3 className="font-bold text-xl mb-4 text-primary">Specific Queries</h3>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Paper Submission:</strong>{" "}
                  <a
                    href="mailto:submission@eirtm2025.org"
                    className="text-primary hover:underline"
                  >
                    submission@eirtm2025.org
                  </a>
                </p>
                <p>
                  <strong>Registration:</strong>{" "}
                  <a
                    href="mailto:registration@eirtm2025.org"
                    className="text-primary hover:underline"
                  >
                    registration@eirtm2025.org
                  </a>
                </p>
                <p>
                  <strong>Sponsorship:</strong>{" "}
                  <a
                    href="mailto:sponsorship@eirtm2025.org"
                    className="text-primary hover:underline"
                  >
                    sponsorship@eirtm2025.org
                  </a>
                </p>
                <p>
                  <strong>Technical Support:</strong>{" "}
                  <a
                    href="mailto:technical@eirtm2025.org"
                    className="text-primary hover:underline"
                  >
                    technical@eirtm2025.org
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Map */}
        <Card className="p-8 border-t-4 border-t-primary">
          <h2 className="text-2xl font-bold mb-6 text-primary">Location</h2>
          <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-30" />
              <p className="text-muted-foreground">
                Interactive map will be embedded here
                <br />
                <span className="text-sm">(IEM Kolkata Campus)</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
