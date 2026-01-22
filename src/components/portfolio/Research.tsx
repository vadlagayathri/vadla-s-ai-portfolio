import { FileText, FlaskConical } from 'lucide-react';

const researchPapers = [
  {
    title: 'Multi-Task Deep Learning Framework for Retinal Disease Diagnosis',
    status: 'Completed',
    description:
      'Developed a shared encoder CNN architecture for simultaneous diagnosis of multiple retinal diseases from fundus images. The framework improves generalization across disease types while reducing computational redundancy.',
    contributions: [
      'Designed shared encoder architecture',
      'Implemented multi-disease classification',
      'Improved generalization and reduced redundancy',
    ],
    tags: ['Deep Learning', 'Medical Imaging', 'Multi-Task Learning'],
  },
  {
    title: 'Causality-Driven Fairness Auditing of AI Recruitment Systems',
    status: 'Ongoing Research',
    description:
      'Investigating the application of causal inference methods to detect and explain bias in AI-powered recruitment tools. Utilizing counterfactual reasoning to provide transparent and interpretable fairness evaluations.',
    contributions: [
      'Applying causal inference frameworks',
      'Generating counterfactual explanations',
      'Evaluating ethical AI compliance',
    ],
    tags: ['AI Ethics', 'Causal Inference', 'Fairness', 'Explainability'],
  },
];

const Research = () => {
  return (
    <section id="research" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <span className="section-label flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Academic Work
          </span>
          <h2 className="section-title">Research</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Research projects focusing on applied deep learning, medical imaging, and ethical AI systems.
          </p>

          <div className="space-y-8">
            {researchPapers.map((paper, index) => (
              <div
                key={paper.title}
                className="hero-card p-6 md:p-8 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {paper.status === 'Ongoing Research' ? (
                      <FlaskConical className="h-6 w-6 text-primary" />
                    ) : (
                      <FileText className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {paper.title}
                      </h3>
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          paper.status === 'Ongoing Research'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-secondary text-muted-foreground'
                        }`}
                      >
                        {paper.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{paper.description}</p>
                  </div>
                </div>

                <div className="ml-0 md:ml-16 mt-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Contributions</h4>
                  <ul className="space-y-2 mb-4">
                    {paper.contributions.map((contribution, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {contribution}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {paper.tags.map((tag) => (
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

export default Research;
