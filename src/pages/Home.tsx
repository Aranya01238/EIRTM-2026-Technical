import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, BookOpen, Award, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/image.jpg";

const importantDates = [
  { label: "Full Paper Submission", date: "10th November, 2025" },
  { label: "Acceptance Notification", date: "10th December, 2025" },
  { label: "Registration", date: "20th March, 2026" },
  { label: "Presentation Submission", date: "20th March, 2026" },
  { label: "Conference On", date: "21st – 23rd April, 2026" },
];

const tracks = [
  "Cognitive Systems & Cognitive AI",
  "IoT & Data Science",
  "Information Technology & Software Systems",
  "Mobile Communication & Networking",
  "Artificial Intelligence & Machine Learning",
  "Robotics and its Applications",
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-[#0f172a] font-sans">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center min-h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.50), rgba(255,255,255,0.9)), url(${heroBg})`,
        }}
      >
        <motion.div
          className="max-w-5xl mx-auto px-6 py-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]">
            ICECIT 2026
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold text-sky-700">
            International Conference on Emerging Computing & Innovative
            Technologies
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg mb-8 text-[#1e293b]">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-500" />
              <span className="font-medium">21st – 23rd April, 2026</span>
            </div>
            <div className="hidden sm:block text-sky-400 font-light">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-cyan-500" />
              <span className="font-medium">Kolkata, India</span>
            </div>
          </div>
          <p className="text-lg mb-10 text-slate-700">
            Organized by{" "}
            <span className="font-semibold text-sky-600">
              Institute of Engineering & Management (IEM)
            </span>
            , Kolkata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-500 hover:to-cyan-600 text-white font-semibold text-lg px-8 py-6 shadow-md hover:shadow-[0_0_20px_#38bdf8] transition-transform hover:scale-105"
            >
              <Link to="/submission">Submit Paper</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-sky-500 text-sky-700 hover:bg-sky-500 hover:text-white text-lg px-8 py-6 transition-transform hover:scale-105"
            >
              <Link to="/registration">Register Now</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          About ICECIT 2026
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto mb-10 rounded"></div>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed text-[#1e293b] font-medium">
          The International Conference on Emerging Computing and Innovative
          Technologies (ICECIT 2026) provides a global platform to exchange
          ideas and discoveries across domains like AI, IoT, Data Science, and
          Robotics — uniting academia, research, and industry in shaping the
          digital future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="h-8 w-8 text-sky-600" />,
              title: "Global Collaboration",
              desc: "Engage with leading minds and innovators from across the world.",
            },
            {
              icon: <BookOpen className="h-8 w-8 text-sky-600" />,
              title: "Indexed Publications",
              desc: "Publish your work in high-impact, peer-reviewed conference proceedings.",
            },
            {
              icon: <Award className="h-8 w-8 text-sky-600" />,
              title: "Keynote Speakers",
              desc: "Gain insights from pioneers in technology, AI, and innovation.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 text-center border-2 border-cyan-100 bg-white hover:shadow-[0_0_25px_#38bdf8] rounded-xl transition-all">
                <div className="mb-4 flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-sky-600">
                  {card.title}
                </h3>
                <p className="text-[#334155] font-medium leading-relaxed">
                  {card.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          Conference Tracks
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mb-10 rounded"></div>
        <p className="text-[#1e293b] text-lg mb-12 max-w-3xl mx-auto font-medium">
          ICECIT 2026 welcomes original, impactful research contributions under
          the following thematic domains:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {tracks.map((track, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Card className="p-6 flex items-center gap-3 border-l-4 border-l-sky-400 bg-white hover:bg-cyan-50 rounded-lg transition-all shadow-sm hover:shadow-[0_0_15px_#06b6d4]">
                <Cpu className="h-6 w-6 text-sky-500 flex-shrink-0" />
                <p className="font-semibold text-[#0f172a] text-left">
                  {track}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
          Important Dates
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 mx-auto mb-10 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {importantDates.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Card className="p-8 bg-white border border-cyan-200 rounded-xl text-center hover:shadow-[0_0_25px_#38bdf8]">
                <Calendar className="h-10 w-10 text-sky-600 mx-auto mb-3" />
                <h3 className="text-xl font-semibold text-sky-700 mb-1">
                  {item.label}
                </h3>
                <p className="text-[#334155] font-medium">{item.date}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 mb-6">
          Join ICECIT 2026
        </h2>
        <p className="text-[#1e293b] text-lg mb-10 max-w-3xl mx-auto font-medium">
          Join an international gathering of innovators shaping the next era of
          computing, data science, and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-sky-500 hover:to-cyan-600 text-white font-semibold px-8 py-6 shadow-md hover:shadow-[0_0_20px_#06b6d4] transition-transform hover:scale-105"
          >
            <Link to="/submission">Submit Paper</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-sky-500 text-sky-700 hover:bg-sky-500 hover:text-white px-8 py-6 transition-transform hover:scale-105"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
