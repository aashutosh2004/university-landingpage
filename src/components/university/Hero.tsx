import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  onApplyNow: () => void;
  onCheckFees: () => void;
}

export const Hero = ({ title, tagline, description, heroImage, onApplyNow, onCheckFees }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-from to-hero-to" />
      
      {/* Hero Image Overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-medium">
            {tagline}
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={onApplyNow}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onCheckFees}
              className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20"
            >
              Check Course-wise Fees
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
