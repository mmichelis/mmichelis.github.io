import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const Experience = () => {
  const education = [
    {
      period: "Jun 2022 - Present",
      institution: "ETH Zürich",
      title: "PhD at ETH AI Center",
      description: "Thesis: Multiphysics Surrogate Models for Robotic Co-Optimization"
    },
    {
      period: "Oct 2019 - Nov 2021",
      institution: "Technical University of Munich",
      title: "Master in Robotics, Cognition, Intelligence",
      description: "Thesis: Physics-Based Deep Learning with Application to Soft Robot Control"
    },
    {
      period: "Mar 2021 - Nov 2021",
      institution: "ETH Zürich",
      title: "Master's Thesis at Soft Robotics Laboratory"
    },
    {
      period: "Sep 2020 - Mar 2021",
      institution: "EPFL",
      title: "Exchange Student"
    },
    {
      period: "Oct 2015 - Sep 2019",
      institution: "Technical University of Munich",
      title: "Bachelor of Science in Engineering Science",
      description: "Specialization in Computer Science, Thesis: Unsupervised Deep Learning for Liquids"
    }
  ];

  const work = [
    {
      period: "Apr 2019 - Sep 2019",
      company: "Technical University of Munich",
      title: "Tutor for 'Discrete Probability Theory'"
    },
    {
      period: "Sep 2018 - Nov 2018",
      company: "Kratzer Automation AG",
      title: "Software Developer"
    },
    {
      period: "Apr 2018 - Jun 2018",
      company: "Technical University of Munich",
      title: "Research Intern in Reservoir Computing"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <Card key={idx} className="p-5 hover:shadow-md transition-shadow">
                  <div className="text-sm text-accent font-medium mb-2">{edu.period}</div>
                  <div className="font-semibold text-foreground mb-1">{edu.title}</div>
                  <div className="text-sm text-muted-foreground mb-2">{edu.institution}</div>
                  {edu.description && (
                    <div className="text-sm text-muted-foreground italic">{edu.description}</div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold text-foreground">Work</h3>
            </div>
            <div className="space-y-4">
              {work.map((job, idx) => (
                <Card key={idx} className="p-5 hover:shadow-md transition-shadow">
                  <div className="text-sm text-accent font-medium mb-2">{job.period}</div>
                  <div className="font-semibold text-foreground mb-1">{job.title}</div>
                  <div className="text-sm text-muted-foreground">{job.company}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
