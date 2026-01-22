import { MapPin, GraduationCap, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const interests = [
    'Applied Artificial Intelligence',
    'Machine Learning Systems',
    'AI Fairness & Ethics',
    'Research-driven Problem Solving',
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <span className="section-label flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Get to know me
            </span>
            <h2 className="section-title">About Me</h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am pursuing a B.Tech in Computer Science Engineering with a specialization in 
                Artificial Intelligence. My academic journey has equipped me with a strong foundation 
                in programming languages like Java, Python, and SQL, along with practical expertise 
                in Machine Learning and Deep Learning.
              </p>
              <p>
                Through internships and research projects, I have gained hands-on experience in 
                applied ML, backend API development, and building ML-driven interfaces. I am passionate 
                about creating AI systems that are not only technically sound but also fair, transparent, 
                and impactful in real-world applications.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Kurnool, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="hero-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science Engineering</p>
                  <p className="text-sm text-primary">Specialization in Artificial Intelligence</p>
                </div>
              </div>
            </div>

            {/* Interests Card */}
            <div className="hero-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground mb-3">Interest Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1.5 text-sm bg-secondary rounded-full text-muted-foreground border border-border"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Card */}
            <div className="hero-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Current Focus</h3>
                  <p className="text-muted-foreground">
                    Building reliable, transparent, and ethical AI systems through research and applied projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
