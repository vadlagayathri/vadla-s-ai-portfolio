import { Code, Brain, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    skills: ['Machine Learning', 'Deep Learning', 'Artificial Intelligence', 'Generative AI'],
  },
  {
    title: 'Frameworks & Tools',
    icon: Wrench,
    skills: ['Scikit-learn', 'FastAPI', 'Streamlit', 'MySQL'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Problem-solving', 'Teamwork', 'Communication'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="section-label inline-flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Technical Expertise
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="hero-card p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </div>
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
