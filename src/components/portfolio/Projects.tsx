import { ExternalLink, Github, Brain, Database, Shield, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProjects = [
  {
    title: 'Dog Breed Classification System',
    description: 'Machine Learning & Deep Learning based image classification system with an intuitive user-facing interface.',
    tags: ['ML', 'Deep Learning', 'Image Classification', 'Python'],
    icon: Brain,
    highlights: ['Data preprocessing pipeline', 'High classification accuracy', 'User-friendly web interface'],
  },
  {
    title: 'Travel & Logistic Booking Automation',
    description: 'Core Java console application with MySQL integration for comprehensive travel booking management.',
    tags: ['Java', 'MySQL', 'Backend', 'Console App'],
    icon: Database,
    highlights: ['Authentication system', 'Journey planning & billing', 'Surge pricing logic'],
  },
  {
    title: 'AI Fairness Auditing of Recruitment Systems',
    description: 'Research project implementing causality-driven framework for bias analysis in AI recruitment tools.',
    tags: ['Research', 'AI Ethics', 'Causality', 'Fairness'],
    icon: Shield,
    highlights: ['Counterfactual explanations', 'Bias detection', 'Ethical AI evaluation'],
  },
];

const otherProjects = [
  {
    title: 'Pregnancy Risk Prediction System',
    description: 'ML-based health risk prediction with FastAPI backend and Streamlit frontend. Generates PDF reports for clinicians.',
    tags: ['ML', 'FastAPI', 'Streamlit', 'Healthcare'],
    icon: Heart,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="section-label inline-flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Portfolio
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my experience in machine learning, software development, and research.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="hero-card p-6 flex flex-col hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">Other Projects</h3>
          <div className="max-w-2xl mx-auto">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="hero-card p-6 flex items-start gap-4 hover:border-primary/40 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <project.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-display font-semibold text-foreground mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
