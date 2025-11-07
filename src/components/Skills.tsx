import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    "Programming": ["Python", "C++", "PyTorch", "JAX"],
    "Research Areas": [
      "Computational Robotics",
      "Differentiable Simulation",
      "Physics-Based Learning",
      "Representation Learning"
    ],
    "Languages": [
      "English (C2)",
      "German (Native)",
      "Chinese (Fluent)",
      "Dutch (Fluent)",
      "French (Good)"
    ]
  };

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Skills & Expertise</h2>
        
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
