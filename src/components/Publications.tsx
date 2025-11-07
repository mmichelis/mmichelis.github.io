import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Publication {
  year: string;
  title: string;
  authors: string;
  venue: string;
  link?: string;
}

const Publications = () => {
  const journals: Publication[] = [
    {
      year: "2024",
      title: "Sim-to-Real of Soft Robots With Learned Residual Physics",
      authors: "Gao, J.*, Michelis, M.Y.*, Spielberg, A. and Katzschmann, R.K.",
      venue: "IEEE Robotics and Automation Letters, 9(10), pp.8523-8530"
    },
    {
      year: "2022",
      title: "An Overview of Soft Robotics",
      authors: "Yasa, O., Toshimitsu, Y., Michelis, M.Y., Jones, L.S., Filippi, M., Buchner, T. and Katzschmann, R.K.",
      venue: "Annual Review of Control, Robotics, and Autonomous Systems, 6"
    },
    {
      year: "2022",
      title: "Sim-to-real for soft robots using differentiable FEM: Recipes for meshing, damping, and actuation",
      authors: "Dubied, M., Michelis, M.Y., Spielberg, A. and Katzschmann, R.K.",
      venue: "IEEE Robotics and Automation Letters, 7(2), pp.5015-5022"
    }
  ];

  const conferences: Publication[] = [
    {
      year: "2024",
      title: "Beyond Regular Grids: Fourier-Based Neural Operators on Arbitrary Domains",
      authors: "Lingsch, L., Michelis, M.Y., de Bezenac, E., Perera, S.M., Katzschmann, R., and Mishra, S.",
      venue: "International Conference on Machine Learning (ICML)"
    },
    {
      year: "2023",
      title: "Aquarium: A Fully Differentiable Fluid-Structure Interaction Solver for Robotics Applications",
      authors: "Lee, J.H., Michelis, M.Y., Katzschmann, R. and Manchester, Z.",
      venue: "IEEE International Conference on Robotics and Automation (ICRA)"
    },
    {
      year: "2022",
      title: "Planar Modeling and Sim-to-Real of a Tethered Multimaterial Soft Swimmer Driven by Peano-HASELs",
      authors: "Gravert, S.D.*, Michelis, M.Y.*, Rogler, S., Tscholl, D., Buchner, T. and Katzschmann, R.K.",
      venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
    },
    {
      year: "2022",
      title: "Fast aquatic swimmer optimization with differentiable projective dynamics and neural network hydrodynamic models",
      authors: "Nava, E., Zhang, J.Z., Michelis, M.Y., Du, T., Ma, P., Grewe, B.F., Matusik, W. and Katzschmann, R.K.",
      venue: "International Conference on Machine Learning (ICML)"
    },
    {
      year: "2021",
      title: "On linear interpolation in the latent space of deep generative models",
      authors: "Michelis, M.Y. and Becker, Q.",
      venue: "Spotlight Presentation in Geometrical and Topological Representation Learning Workshop at ICLR"
    }
  ];

  const PublicationCard = ({ pub }: { pub: Publication }) => (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-semibold">
            {pub.year.slice(2)}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg mb-2 text-foreground leading-tight">
            {pub.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {pub.authors}
          </p>
          <p className="text-sm text-accent font-medium">
            {pub.venue}
          </p>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="publications" className="py-20 px-6 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary">Publications</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Journal Articles</h3>
          <div className="space-y-4">
            {journals.map((pub, idx) => (
              <PublicationCard key={idx} pub={pub} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Conference Papers</h3>
          <div className="space-y-4">
            {conferences.map((pub, idx) => (
              <PublicationCard key={idx} pub={pub} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
