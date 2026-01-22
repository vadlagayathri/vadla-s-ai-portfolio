import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AI Intern',
    company: 'Infosys Springboard',
    period: 'Recent',
    description: 'Dog Breed Classification and Info Generation Project',
    achievements: [
      'Built ML & DL models for image classification',
      'Designed a user-friendly web interface',
      'Achieved strong classification performance',
    ],
  },
  {
    title: 'AI Intern',
    company: 'Mirai School of Technology',
    period: 'Current',
    description: 'Working on real-world AI problem statements',
    achievements: [
      'Applying Python-based ML workflows',
      'Data preprocessing and experimentation',
      'Team collaboration on AI solutions',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <span className="section-label flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Professional Journey
          </span>
          <h2 className="section-title">Experience</h2>

          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>

                  {/* Content Card */}
                  <div className="hero-card p-6 hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
