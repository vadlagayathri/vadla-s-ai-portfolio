import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'Java', issuer: 'Frontlines EduTech' },
  { name: 'Python Essential Training', issuer: 'LinkedIn Learning' },
  { name: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn' },
  { name: 'Machine Learning with Python', issuer: 'IBM SkillBuild' },
];

const Certifications = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label inline-flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Credentials
              <span className="w-8 h-px bg-primary" />
            </span>
            <h2 className="section-title">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="hero-card p-5 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
