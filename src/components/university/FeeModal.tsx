import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Course } from "@/data/universityData";
import { IndianRupee } from "lucide-react";

interface FeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  universityName: string;
}

export const FeeModal = ({ isOpen, onClose, courses, universityName }: FeeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Course-wise Fee Structure</DialogTitle>
          <p className="text-muted-foreground">{universityName}</p>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg">{course.name}</h3>
                  <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-secondary font-semibold">
                    <IndianRupee className="h-4 w-4" />
                    <span>{course.feeRange}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">per year</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Eligibility: {course.eligibility}
              </p>
            </div>
          ))}
          
          <div className="bg-muted p-4 rounded-lg mt-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Fees mentioned are indicative and may vary. Additional charges for 
              hostel, transportation, and other facilities are not included. 
              Scholarships available for eligible students.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
