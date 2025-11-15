import { 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Globe, 
  Award, 
  Users,
  TrendingUp,
  Users2,
  Target,
  BookOpen,
  Network,
  Lightbulb,
  LucideIcon
} from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Building2,
  Briefcase,
  Globe,
  Award,
  Users,
  TrendingUp,
  Users2,
  Target,
  BookOpen,
  Network,
  Lightbulb
};

export const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="py-20 bg-feature">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose Us?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Discover what makes us the preferred choice for thousands of students
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || GraduationCap;
            return (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
