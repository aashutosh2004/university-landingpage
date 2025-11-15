export interface Course {
  name: string;
  duration: string;
  feeRange: string;
  eligibility: string;
}

export interface UniversityData {
  name: string;
  tagline: string;
  heroDescription: string;
  overview: string;
  courses: Course[];
  stats: {
    students: string;
    placement: string;
    courses: string;
    faculty: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  placements: {
    averagePackage: string;
    highestPackage: string;
    recruiters: string[];
  };
}

export const university1Data: UniversityData = {
  name: "Stellar Institute of Technology",
  tagline: "Innovation Meets Excellence",
  heroDescription: "Empowering future leaders with cutting-edge education and world-class infrastructure.",
  overview: "Stellar Institute of Technology is a premier private university dedicated to fostering innovation, research, and holistic development. With state-of-the-art facilities and industry-aligned curriculum, we prepare students for global challenges.",
  courses: [
    {
      name: "B.Tech Computer Science",
      duration: "4 Years",
      feeRange: "₹2,50,000 - ₹3,00,000",
      eligibility: "10+2 with 60% in PCM"
    },
    {
      name: "MBA (Business Analytics)",
      duration: "2 Years",
      feeRange: "₹4,00,000 - ₹5,00,000",
      eligibility: "Graduate with 50% marks"
    },
    {
      name: "B.Sc Data Science",
      duration: "3 Years",
      feeRange: "₹1,80,000 - ₹2,20,000",
      eligibility: "10+2 with 55% in PCM"
    },
    {
      name: "M.Tech AI & ML",
      duration: "2 Years",
      feeRange: "₹3,50,000 - ₹4,20,000",
      eligibility: "B.Tech with 60% marks"
    }
  ],
  stats: {
    students: "12,000+",
    placement: "95%",
    courses: "50+",
    faculty: "500+"
  },
  features: [
    {
      icon: "GraduationCap",
      title: "World-Class Faculty",
      description: "Learn from industry experts and renowned academicians"
    },
    {
      icon: "Building2",
      title: "Modern Infrastructure",
      description: "State-of-the-art labs, libraries, and smart classrooms"
    },
    {
      icon: "Briefcase",
      title: "Industry Partnerships",
      description: "Collaborations with top companies for internships and placements"
    },
    {
      icon: "Globe",
      title: "Global Exposure",
      description: "International exchange programs and global certifications"
    },
    {
      icon: "Award",
      title: "Research Excellence",
      description: "Cutting-edge research facilities and funding opportunities"
    },
    {
      icon: "Users",
      title: "Vibrant Campus Life",
      description: "50+ clubs, sports facilities, and cultural events"
    }
  ],
  placements: {
    averagePackage: "₹8.5 LPA",
    highestPackage: "₹45 LPA",
    recruiters: ["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Deloitte", "Accenture"]
  }
};

export const university2Data: UniversityData = {
  name: "Apex University of Management",
  tagline: "Shaping Tomorrow's Business Leaders",
  heroDescription: "Transform your career with industry-focused programs and unparalleled networking opportunities.",
  overview: "Apex University of Management stands at the forefront of business education, offering comprehensive programs that blend theoretical knowledge with practical insights. Our curriculum is designed in collaboration with industry leaders.",
  courses: [
    {
      name: "BBA (Marketing)",
      duration: "3 Years",
      feeRange: "₹1,50,000 - ₹2,00,000",
      eligibility: "10+2 with 50% marks"
    },
    {
      name: "MBA (Finance)",
      duration: "2 Years",
      feeRange: "₹5,00,000 - ₹6,50,000",
      eligibility: "Graduate with 50% marks"
    },
    {
      name: "BBA (Digital Marketing)",
      duration: "3 Years",
      feeRange: "₹1,80,000 - ₹2,40,000",
      eligibility: "10+2 with 50% marks"
    },
    {
      name: "Executive MBA",
      duration: "1 Year",
      feeRange: "₹8,00,000 - ₹10,00,000",
      eligibility: "Graduate with 3 years work experience"
    }
  ],
  stats: {
    students: "8,500+",
    placement: "92%",
    courses: "35+",
    faculty: "350+"
  },
  features: [
    {
      icon: "TrendingUp",
      title: "Industry-Aligned Curriculum",
      description: "Programs designed with input from Fortune 500 companies"
    },
    {
      icon: "Users2",
      title: "Expert Mentorship",
      description: "One-on-one guidance from business leaders and entrepreneurs"
    },
    {
      icon: "Target",
      title: "Placement Support",
      description: "Dedicated career services and interview preparation"
    },
    {
      icon: "BookOpen",
      title: "Case-Based Learning",
      description: "Real-world case studies from leading organizations"
    },
    {
      icon: "Network",
      title: "Alumni Network",
      description: "15,000+ alumni across 50+ countries"
    },
    {
      icon: "Lightbulb",
      title: "Entrepreneurship Cell",
      description: "Incubation support and funding for startup ideas"
    }
  ],
  placements: {
    averagePackage: "₹9.2 LPA",
    highestPackage: "₹38 LPA",
    recruiters: ["ICICI", "HDFC", "McKinsey", "BCG", "Ernst & Young", "PwC", "KPMG", "Goldman Sachs"]
  }
};

export const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export const intakeYears = ["2025", "2026"];
