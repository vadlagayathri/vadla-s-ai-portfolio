import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Vadla Gayathri,
              <br />
              <span className="text-gradient">AI & ML Engineer</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Computer Science Engineering (AI) student with hands-on experience in machine learning,
              deep learning, and research-oriented projects. Interested in building reliable,
              transparent, and real-world AI systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/1Ij3qTxdM46ladseyq8zx4N51ugmCvrbq/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-primary hover:bg-primary/5"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Picture Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-primary/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border border-primary/20 rounded-full" />
              
              {/* Profile Picture Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://i.postimg.cc/9QMr0LSY/Whats-App-Image-2026-01-28-at-10-46-13-AM.jpg"
                  alt="Vadla Gayathri - AI & ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-wider uppercase">Scroll down</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
