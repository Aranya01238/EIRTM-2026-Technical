import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Award,
  Lightbulb,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.9)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              EIRTM Technical 2026
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-secondary font-semibold">
              International Conference on Emerging Innovations in Research &
              Technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg mb-8 opacity-90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span
                  style={{
                    textShadow:
                      "0 0 10px hsl(45 90% 55%), 0 0 20px hsl(45 90% 55%), 0 0 30px hsl(45 90% 55%), 0 0 40px hsl(45 90% 55%)",
                    color: "hsl(45 90% 70%)",
                  }}
                >
                  21st-23rd April, 2026
                </span>
              </div>
              <div className="hidden sm:block">|</div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Kolkata, India</span>
              </div>
            </div>
            <p className="text-xl mb-10 opacity-95">
              Organized by Institute of Engineering & Management (IEM), Kolkata
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-gold"
              >
                <Link to="/submission">Submit Paper</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              >
                <Link to="/registration">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-muted">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">About EIRTM 2026</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8 leading-relaxed">
            The International Conference on Emerging Innovations in Research,
            Technology, and Management (EIRTM 2026) is a premier forum for
            researchers, scientists, engineers, and industry professionals to
            present their latest findings and innovations.
          </p>
          <p className="text-lg text-center mb-8 leading-relaxed">
            Organized in collaboration with Smart Society, EIRTM 2026 aims to
            bridge the gap between academia and industry, fostering meaningful
            connections and promoting the exchange of cutting-edge research in
            various domains including Artificial Intelligence, IoT, Robotics,
            Sustainable Technology, and Management.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <Card className="p-8 text-center card-hover border-t-4 border-t-primary">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Participation</h3>
            <p className="text-muted-foreground">
              Connect with researchers and professionals from around the world
            </p>
          </Card>

          <Card className="p-8 text-center card-hover border-t-4 border-t-primary">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Publications</h3>
            <p className="text-muted-foreground">
              Publish in indexed conference proceedings and reputed journals
            </p>
          </Card>

          <Card className="p-8 text-center card-hover border-t-4 border-t-primary">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Keynotes</h3>
            <p className="text-muted-foreground">
              Learn from industry leaders and renowned academicians
            </p>
          </Card>
        </div>
      </section>

      {/* Research Tracks */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-primary mb-4">Research Tracks</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EIRTM 2026 welcomes original research contributions in diverse
            domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Artificial Intelligence & Machine Learning",
            "Internet of Things & Smart Systems",
            "Robotics & Automation",
            "Sustainable Technology & Green Energy",
            "Data Science & Big Data",
            "Cybersecurity & Blockchain",
            "Cloud Computing & Edge Computing",
            "Healthcare Technology",
          ].map((track, index) => (
            <Card
              key={index}
              className="p-6 card-hover border-l-4 border-l-secondary"
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="font-semibold">{track}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="btn-primary">
            <Link to="/call-for-papers">View Full Call for Papers</Link>
          </Button>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-container bg-gradient-hero text-white">
        <div className="text-center mb-12">
          <h2 className="mb-4">Important Dates</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-secondary" />
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                textShadow:
                  "0 0 10px hsl(45 90% 55%), 0 0 20px hsl(45 90% 55%), 0 0 30px hsl(45 90% 55%), 0 0 40px hsl(45 90% 55%)",
                color: "hsl(45 90% 70%)",
              }}
            >
              Coming Soon
            </h3>
            <p className="text-lg opacity-90">Paper Submission Deadline</p>
          </Card>

          <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-secondary" />
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                textShadow:
                  "0 0 10px hsl(45 90% 55%), 0 0 20px hsl(45 90% 55%), 0 0 30px hsl(45 90% 55%), 0 0 40px hsl(45 90% 55%)",
                color: "hsl(45 90% 70%)",
              }}
            >
              Coming Soon
            </h3>
            <p className="text-lg opacity-90">Notification of Acceptance</p>
          </Card>

          <Card className="p-8 text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <Calendar className="h-12 w-12 mx-auto mb-4 text-secondary" />
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                textShadow:
                  "0 0 10px hsl(45 90% 55%), 0 0 20px hsl(45 90% 55%), 0 0 30px hsl(45 90% 55%), 0 0 40px hsl(45 90% 55%)",
                color: "hsl(45 90% 70%)",
              }}
            >
              Coming Soon
            </h3>
            <p className="text-lg opacity-90">Camera-Ready Submission</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-primary mb-6">Join Us at EIRTM 2026</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Be part of this prestigious conference and contribute to the
            advancement of research & technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/submission">Submit Your Paper</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
