import { useState } from "react";
import { Hero } from "@/components/university/Hero";
import { Stats } from "@/components/university/Stats";
import { Features } from "@/components/university/Features";
import { Courses } from "@/components/university/Courses";
import { Placements } from "@/components/university/Placements";
import { LeadForm } from "@/components/university/LeadForm";
import { FeeModal } from "@/components/university/FeeModal";
import { university2Data } from "@/data/universityData";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const University2 = () => {
  const [showFeeModal, setShowFeeModal] = useState(false);
  const { toast } = useToast();
  
  const scrollToForm = () => {
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download Started",
      description: "Your brochure is being prepared for download.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="h-4 w-4" />
            <span className="font-semibold">Back</span>
          </Link>
          <h1 className="text-xl font-bold">{university2Data.name}</h1>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleDownloadBrochure}
          >
            <Download className="h-4 w-4 mr-2" />
            Brochure
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <Hero
          title={university2Data.name}
          tagline={university2Data.tagline}
          description={university2Data.heroDescription}
          heroImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000"
          onApplyNow={scrollToForm}
          onCheckFees={() => setShowFeeModal(true)}
        />
      </div>

      {/* Stats */}
      <Stats stats={university2Data.stats} />

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Us</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            {university2Data.overview}
          </p>
        </div>
      </section>

      {/* Features */}
      <Features features={university2Data.features} />

      {/* Courses */}
      <Courses courses={university2Data.courses} onApplyNow={scrollToForm} />

      {/* Placements */}
      <Placements placements={university2Data.placements} />

      {/* Application Form */}
      <section id="apply-form" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <LeadForm 
            courses={university2Data.courses.map(c => c.name)}
            universityName={university2Data.name}
          />
        </div>
      </section>

      {/* Fee Modal */}
      <FeeModal
        isOpen={showFeeModal}
        onClose={() => setShowFeeModal(false)}
        courses={university2Data.courses}
        universityName={university2Data.name}
      />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 {university2Data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default University2;
