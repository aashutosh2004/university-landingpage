// Mock API endpoints returning JSON data

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

// Simple JSON response
export const getUniversitiesList = async (): Promise<ApiResponse<string[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: [
          "Stellar Institute of Technology",
          "Apex University of Management"
        ],
        timestamp: new Date().toISOString()
      });
    }, 500);
  });
};

// Nested JSON response
export const getUniversityDetails = async (id: number): Promise<ApiResponse<{
  id: number;
  name: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
    website: string;
  };
  programs: {
    undergraduate: string[];
    postgraduate: string[];
  };
  accreditation: string[];
}>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const universities = [
        {
          id: 1,
          name: "Stellar Institute of Technology",
          location: {
            city: "Bangalore",
            state: "Karnataka",
            country: "India"
          },
          contact: {
            email: "admissions@stellar.edu",
            phone: "+91-80-12345678",
            website: "https://stellar.edu"
          },
          programs: {
            undergraduate: ["B.Tech Computer Science", "B.Sc Data Science"],
            postgraduate: ["M.Tech AI & ML", "MBA Business Analytics"]
          },
          accreditation: ["NAAC A++", "NBA", "AICTE"]
        },
        {
          id: 2,
          name: "Apex University of Management",
          location: {
            city: "Mumbai",
            state: "Maharashtra",
            country: "India"
          },
          contact: {
            email: "info@apexu.edu",
            phone: "+91-22-87654321",
            website: "https://apexu.edu"
          },
          programs: {
            undergraduate: ["BBA Marketing", "BBA Digital Marketing"],
            postgraduate: ["MBA Finance", "Executive MBA"]
          },
          accreditation: ["NAAC A+", "AACSB", "AICTE"]
        }
      ];

      const university = universities.find(u => u.id === id) || universities[0];
      
      resolve({
        success: true,
        data: university,
        timestamp: new Date().toISOString()
      });
    }, 500);
  });
};

// Course fees API
export const getCourseFees = async (): Promise<ApiResponse<{
  university: string;
  courses: {
    name: string;
    duration: string;
    annualFee: number;
    currency: string;
  }[];
}[]>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: [
          {
            university: "Stellar Institute of Technology",
            courses: [
              {
                name: "B.Tech Computer Science",
                duration: "4 Years",
                annualFee: 275000,
                currency: "INR"
              },
              {
                name: "MBA (Business Analytics)",
                duration: "2 Years",
                annualFee: 450000,
                currency: "INR"
              }
            ]
          },
          {
            university: "Apex University of Management",
            courses: [
              {
                name: "BBA (Marketing)",
                duration: "3 Years",
                annualFee: 175000,
                currency: "INR"
              },
              {
                name: "MBA (Finance)",
                duration: "2 Years",
                annualFee: 575000,
                currency: "INR"
              }
            ]
          }
        ],
        timestamp: new Date().toISOString()
      });
    }, 500);
  });
};

// Stats API
export const getUniversityStats = async (): Promise<ApiResponse<{
  totalStudents: number;
  placementRate: number;
  averagePackage: number;
  topRecruiters: string[];
}>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          totalStudents: 20500,
          placementRate: 93.5,
          averagePackage: 885000,
          topRecruiters: [
            "Google",
            "Microsoft",
            "Amazon",
            "McKinsey",
            "Goldman Sachs"
          ]
        },
        timestamp: new Date().toISOString()
      });
    }, 500);
  });
};
