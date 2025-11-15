import { Course } from "@/data/universityData";
import { Button } from "@/components/ui/button";
import { Clock, IndianRupee, GraduationCap } from "lucide-react";

interface CoursesProps {
  courses: Course[];
  onApplyNow: () => void;
}

export const Courses = ({ courses, onApplyNow }: CoursesProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Popular Programs
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Explore our range of industry-aligned programs designed to shape your future
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {course.name}
              </h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-secondary" />
                  <span className="text-sm">Duration: {course.duration}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <IndianRupee className="h-4 w-4 mr-2 text-secondary" />
                  <span className="text-sm">Annual Fee: {course.feeRange}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <GraduationCap className="h-4 w-4 mr-2 text-secondary" />
                  <span className="text-sm">Eligibility: {course.eligibility}</span>
                </div>
              </div>
              
              <Button 
                onClick={onApplyNow}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
