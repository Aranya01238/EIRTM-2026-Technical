import { Card } from "@/components/ui/card";
import { Mic, Award, Building2 } from "lucide-react";

interface Speaker {
  name: string;
  designation: string;
  affiliation: string;
  topic: string;
  bio: string;
}

const KeynoteSpeakers = () => {
  const speakers: Speaker[] = [
    {
      name: "Prof. Dr. John Anderson",
      designation: "Professor of Artificial Intelligence",
      affiliation: "Massachusetts Institute of Technology (MIT), USA",
      topic: "The Future of AI: Ethics, Innovation, and Society",
      bio: "Prof. Anderson is a leading researcher in artificial intelligence with over 25 years of experience. He has published more than 200 papers and holds numerous patents in machine learning and neural networks.",
    },
    {
      name: "Dr. Sarah Chen",
      designation: "Chief Technology Officer",
      affiliation: "Global Tech Innovations, Singapore",
      topic: "IoT Revolution: Transforming Industries through Connected Systems",
      bio: "Dr. Chen is a pioneer in IoT architecture and has led the development of smart city solutions deployed in over 50 cities worldwide. She is a recipient of the IEEE Innovation Award.",
    },
    {
      name: "Prof. Rajesh Kumar",
      designation: "Director, Advanced Robotics Lab",
      affiliation: "Indian Institute of Technology (IIT) Bombay, India",
      topic: "Robotics and Automation: Shaping the Industrial Future",
      bio: "Prof. Kumar has made significant contributions to the field of robotics and automation. His research focuses on collaborative robots and has been instrumental in advancing manufacturing technologies.",
    },
    {
      name: "Dr. Maria Rodriguez",
      designation: "Head of Research",
      affiliation: "European Center for Sustainable Technology, Germany",
      topic: "Green Technology: Innovations for a Sustainable Tomorrow",
      bio: "Dr. Rodriguez is an internationally recognized expert in renewable energy and sustainable technology. Her work on energy storage systems has received multiple awards and is implemented globally.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Keynote Speakers</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EIRTM 2025 is honored to host distinguished speakers from leading institutions and
            organizations worldwide. Learn from their expertise and insights.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className={`p-8 card-hover border-t-4 ${
                index % 2 === 0 ? "border-t-primary" : "border-t-secondary"
              }`}
            >
              {/* Speaker Icon/Placeholder */}
              <div className="bg-gradient-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Mic className="h-12 w-12 text-white" />
              </div>

              {/* Speaker Name and Title */}
              <div className="text-center mb-4">
                <h2 className="text-2xl font-bold mb-2">{speaker.name}</h2>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                  <Award className="h-4 w-4" />
                  <p className="font-semibold">{speaker.designation}</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <p>{speaker.affiliation}</p>
                </div>
              </div>

              {/* Talk Topic */}
              <div className="bg-muted p-4 rounded-lg mb-4">
                <h3 className="font-bold text-sm text-muted-foreground mb-2">KEYNOTE TOPIC:</h3>
                <p className="text-lg font-semibold text-primary">{speaker.topic}</p>
              </div>

              {/* Bio */}
              <div>
                <h3 className="font-bold text-sm text-muted-foreground mb-2">BIOGRAPHY:</h3>
                <p className="text-muted-foreground leading-relaxed">{speaker.bio}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* More Speakers Coming Soon */}
        <Card className="p-12 text-center bg-gradient-hero text-white">
          <h2 className="text-3xl font-bold mb-4">More Speakers Coming Soon!</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We are finalizing our lineup of distinguished speakers. Check back regularly for
            updates on additional keynote speakers and special sessions.
          </p>
        </Card>

        {/* Speaking Opportunity */}
        <Card className="p-8 mt-12 bg-muted border-l-4 border-l-secondary">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Interested in Speaking at EIRTM 2025?
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            We welcome proposals for keynote speeches, panel discussions, and special sessions from
            industry leaders and academic experts.
          </p>
          <p className="text-muted-foreground">
            Contact us at:{" "}
            <a
              href="mailto:speakers@eirtm2025.org"
              className="text-primary hover:underline font-semibold"
            >
              speakers@eirtm2025.org
            </a>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
