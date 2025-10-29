import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Upload, FileText, AlertCircle } from "lucide-react";

const Submission = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-primary mb-4">Paper Submission</h1>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Submit your research paper through our online submission system.
            Please read the guidelines carefully before submission.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="p-6 mb-12 bg-secondary/10 border-l-4 border-l-secondary">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Important Notice</h3>
              <p className="text-muted-foreground">
                Submission deadline:{" "}
                <strong className="text-foreground">Comming Soon</strong>. Late
                submissions will not be accepted. Please ensure your paper meets
                all formatting requirements before submission.
              </p>
            </div>
          </div>
        </Card>

        {/* Submission Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Submission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center card-hover">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-bold mb-2">Prepare Paper</h3>
              <p className="text-sm text-muted-foreground">
                Format your paper according to IEEE conference template
              </p>
            </Card>

            <Card className="p-6 text-center card-hover">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-bold mb-2">Register on EasyChair</h3>
              <p className="text-sm text-muted-foreground">
                Create an account on the EasyChair submission system
              </p>
            </Card>

            <Card className="p-6 text-center card-hover">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-bold mb-2">Submit Paper</h3>
              <p className="text-sm text-muted-foreground">
                Upload your PDF and fill in required metadata
              </p>
            </Card>

            <Card className="p-6 text-center card-hover">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-bold mb-2">Track Status</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your submission status and reviewer comments
              </p>
            </Card>
          </div>
        </div>

        {/* Submission Checklist */}
        <Card className="p-8 mb-12 border-t-4 border-t-primary">
          <div className="flex items-start gap-4 mb-6">
            <CheckCircle2 className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-2 text-primary">
                Pre-Submission Checklist
              </h2>
              <p className="text-muted-foreground">
                Please verify all items before submitting your paper
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              "Paper follows IEEE conference format (two-column, 10pt Times New Roman)",
              "Page count is within limits (8-10 pages for full papers, 4-6 for short papers)",
              "Title is concise and descriptive (maximum 15 words)",
              "Abstract is between 150-250 words",
              "4-6 keywords are provided",
              "All sections are complete (Introduction, Literature Review, Methodology, Results, Conclusion)",
              "All figures and tables are clear and properly captioned",
              "References follow IEEE citation style",
              "All references are cited in the text",
              "Paper has been proofread for grammar and spelling",
              "File is in PDF format with embedded fonts",
              "File size is under 10 MB",
              "Paper is original and not under consideration elsewhere",
              "All co-authors have reviewed and approved the submission",
              "Contact details of corresponding author are correct",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-muted rounded-lg transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Technical Requirements */}
        <Card className="p-8 mb-12 bg-muted">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="h-10 w-10 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-2 text-primary">
                Technical Requirements
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-3">Document Format</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>File Format: PDF only</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Maximum File Size: 10 MB</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Paper Size: US Letter (8.5" × 11")</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Fonts: Embedded and subset</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-3">Content Requirements</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Language: English</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Full Papers: 8-10 pages</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Short Papers: 4-6 pages</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-secondary">•</span>
                  <span>Plagiarism: Must be below 15%</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* EasyChair Submission */}
        <Card className="p-8 mb-12 bg-gradient-primary text-white">
          <div className="text-center">
            <Upload className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Submit?</h2>
            <p className="text-lg mb-6 opacity-90">
              Use our EasyChair submission system to submit your paper
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Submit via EasyChair
            </Button>
            <p className="mt-4 text-sm opacity-75">
              (You will be redirected to the EasyChair submission portal)
            </p>
          </div>
        </Card>

        {/* Review Process */}
        <Card className="p-8 border-t-4 border-t-secondary">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Review Process
          </h2>
          <div className="space-y-4 text-lg">
            <div className="flex gap-3">
              <span className="text-secondary font-bold">1.</span>
              <div>
                <strong>Initial Screening:</strong> Papers are checked for
                formatting compliance and plagiarism
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">2.</span>
              <div>
                <strong>Double-Blind Review:</strong> Each paper is reviewed by
                at least 2 independent reviewers
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">3.</span>
              <div>
                <strong>Review Period:</strong> Review process typically takes
                2-3 weeks
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">4.</span>
              <div>
                <strong>Decision Notification:</strong> Authors are notified via
                email with reviewer comments
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-secondary font-bold">5.</span>
              <div>
                <strong>Camera-Ready Submission:</strong> Accepted papers must
                be revised based on reviewer feedback
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Submission;
