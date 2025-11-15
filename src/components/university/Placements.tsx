import { Building2, TrendingUp } from "lucide-react";

interface PlacementsProps {
  placements: {
    averagePackage: string;
    highestPackage: string;
    recruiters: string[];
  };
}

export const Placements = ({ placements }: PlacementsProps) => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Placement Highlights
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Our students are recruited by leading companies across industries
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-card p-8 rounded-xl border border-border text-center">
            <TrendingUp className="h-12 w-12 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">
              {placements.averagePackage}
            </div>
            <div className="text-muted-foreground">Average Package</div>
          </div>
          
          <div className="bg-card p-8 rounded-xl border border-border text-center">
            <Building2 className="h-12 w-12 text-secondary mx-auto mb-4" />
            <div className="text-3xl font-bold text-primary mb-2">
              {placements.highestPackage}
            </div>
            <div className="text-muted-foreground">Highest Package</div>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-xl border border-border">
          <h3 className="text-xl font-semibold mb-6 text-center">Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placements.recruiters.map((recruiter, index) => (
              <div 
                key={index}
                className="bg-background p-4 rounded-lg text-center border border-border hover:border-secondary transition-colors"
              >
                <span className="font-medium">{recruiter}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
