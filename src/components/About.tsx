const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-primary">About</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a PhD student at the ETH AI Center, working on multiphysics surrogate models 
            for robotic co-optimization. My research focuses on developing differentiable simulation 
            frameworks and physics-based deep learning methods for soft robotics applications.
          </p>
          <p>
            With a background in Robotics, Cognition, and Intelligence from TUM, and exchange 
            experiences at EPFL and Tsinghua University, I bring a multidisciplinary approach 
            to computational robotics research. My work combines machine learning, physics simulation, 
            and optimization to advance the field of soft robotics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
