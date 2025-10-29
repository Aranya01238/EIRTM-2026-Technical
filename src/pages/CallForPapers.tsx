import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Target, Zap } from "lucide-react";

const CallForPapers = () => {
  const tracks = [
    {
      category: "Artificial Intelligence & Machine Learning",
      topics: [
        "Deep Learning and Neural Networks",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics and Explainability",
      ],
    },
    {
      category: "Internet of Things & Smart Systems",
      topics: [
        "IoT Architectures and Protocols",
        "Smart Cities and Infrastructure",
        "Industrial IoT",
        "Wearable and Embedded Systems",
        "Edge Computing for IoT",
      ],
    },
    {
      category: "Robotics & Automation",
      topics: [
        "Autonomous Systems",
        "Human-Robot Interaction",
        "Swarm Robotics",
        "Industrial Automation",
        "Soft Robotics and Bio-inspired Systems",
      ],
    },
    {
      category: "Sustainable Technology & Green Energy",
      topics: [
        "Renewable Energy Systems",
        "Energy Storage Solutions",
        "Smart Grid Technologies",
        "Environmental Monitoring",
        "Sustainable Manufacturing",
      ],
    },
    {
      category: "Data Science & Big Data",
      topics: [
        "Data Mining and Analytics",
        "Predictive Modeling",
        "Data Visualization",
        "Cloud-based Data Processing",
        "Real-time Analytics",
      ],
    },
    {
      category: "Cybersecurity & Blockchain",
      topics: [
        "Network Security",
        "Cryptography",
        "Blockchain Applications",
        "Privacy-Preserving Technologies",
        "Threat Detection and Response",
      ],
    },
    {
      category: "Cloud Computing & Edge Computing",
      topics: [
        "Cloud Architecture and Services",
        "Serverless Computing",
        "Edge AI",
        "Distributed Systems",
        "Cloud Security",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Call for Papers</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            EIRTM 2026 invites original, unpublished research papers,
            work-in-progress reports, and case studies from researchers,
            academicians, and industry professionals.
          </p>
        </div>

        {/* Submission Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 text-center card-hover border-t-4 border-t-primary">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Full Papers</h3>
            <p className="text-muted-foreground">
              8-10 pages presenting complete research with results and analysis
            </p>
          </Card>

          <Card className="p-8 text-center card-hover border-t-4 border-t-secondary">
            <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Short Papers</h3>
            <p className="text-muted-foreground">
              4-6 pages for work-in-progress or preliminary research findings
            </p>
          </Card>

          <Card className="p-8 text-center card-hover border-t-4 border-t-primary">
            <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Industry Papers</h3>
            <p className="text-muted-foreground">
              4-8 pages describing practical applications and case studies
            </p>
          </Card>
        </div>

        {/* Research Tracks */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Research Tracks
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <Card key={index} className="p-6 card-hover">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-start gap-2">
                  <span className="text-secondary">{index + 1}.</span>
                  {track.category}
                </h3>
                <ul className="space-y-2">
                  {track.topics.map((topic, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-secondary mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Submission Guidelines */}
        <Card className="p-8 mb-12 bg-muted">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Submission Guidelines
          </h2>
          <div className="space-y-4 text-lg">
            <div className="flex gap-3">
              <span className="text-secondary font-bold">•</span>
              <p>
                All submissions must be{" "}
                <strong>original and unpublished</strong> work not under
                consideration elsewhere
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">•</span>
              <p>
                Papers must be written in <strong>English</strong> and follow
                the IEEE conference format
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">•</span>
              <p>
                Submissions should be made through the{" "}
                <strong>EasyChair system</strong>
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">•</span>
              <p>
                All papers will undergo a{" "}
                <strong>double-blind peer review</strong> process
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">•</span>
              <p>
                At least one author of an accepted paper must{" "}
                <strong>register and present</strong> at the conference
              </p>
            </div>
          </div>
        </Card>

        {/* Important Dates */}
        <Card className="p-8 mb-12 bg-gradient-primary text-white">
          <h2 className="text-3xl font-bold mb-6">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-semibold">Paper Submission Deadline:</span>
              <span className="text-secondary-light">Comming Soon</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-semibold">Notification of Acceptance:</span>
              <span className="text-secondary-light">Comming Soon</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-semibold">Camera-Ready Submission:</span>
              <span className="text-secondary-light">Comming Soon</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/20 pb-3">
              <span className="font-semibold">Early Bird Registration:</span>
              <span className="text-secondary-light">Comming Soon</span>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">
            Ready to Submit Your Paper?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/submission">Submit Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/publication">View Publication Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
