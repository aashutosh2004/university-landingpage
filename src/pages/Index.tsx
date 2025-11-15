import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, Code2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-hero-from to-hero-to p-4">
      <div className="text-center max-w-3xl">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
            <GraduationCap className="h-10 w-10 text-secondary-foreground" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
          University Portal
        </h1>
        <p className="text-xl text-primary-foreground/90 mb-12">
          Explore top private universities and find the perfect program for your future
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link to="/university-1">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
              <h2 className="text-2xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                Stellar Institute of Technology
              </h2>
              <p className="text-muted-foreground mb-4">
                Innovation Meets Excellence
              </p>
              <Button 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Link>
          
          <Link to="/university-2">
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
              <h2 className="text-2xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                Apex University of Management
              </h2>
              <p className="text-muted-foreground mb-4">
                Shaping Tomorrow's Business Leaders
              </p>
              <Button 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Link>
        </div>
        
        <Link to="/api-demo">
          <Button 
            variant="outline" 
            size="lg"
            className="mb-6 bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20"
          >
            <Code2 className="mr-2 h-5 w-5" />
            View API Documentation
          </Button>
        </Link>
        
        <p className="text-primary-foreground/70 text-sm">
          Secure SSL-enabled platform • Mobile & Desktop Responsive
        </p>
      </div>
    </div>
  );
};

export default Index;
