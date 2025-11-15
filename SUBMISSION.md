# University Landing Pages - Technical Assessment Submission

## 📋 Project Overview

This project includes two fully functional single-page landing pages for private universities with integrated lead forms, responsive design, and working APIs.

## 🔗 Live URLs

**Landing Pages:**
- Landing Page 1 (Stellar Institute): `/university-1`
- Landing Page 2 (Apex University): `/university-2`
- Home Page: `/`
- API Documentation: `/api-demo`

## ✅ Completed Requirements

### 1. Two Landing Pages (LP-1 & LP-2)
- ✅ **Stellar Institute of Technology** - Technology-focused university
- ✅ **Apex University of Management** - Management-focused university

### 2. Landing Page Content
Each page includes:
- ✅ University information (Overview, Courses, Fees, Placements, Facilities)
- ✅ Hero section with clear CTAs
- ✅ Statistics showcase
- ✅ Features grid with icons
- ✅ Course listings with fee information
- ✅ Placement highlights with top recruiters
- ✅ Professional design with smooth animations

### 3. CTAs Implementation
- ✅ **"Check Course-wise Fees"** - Opens modal with dynamic fee data from courses array
- ✅ **"Download Brochure"** - Triggers toast notification (ready for actual file download)
- ✅ **"Apply Now"** - Scrolls to lead form section

### 4. Lead Form Fields
All required fields implemented with validation:
- ✅ Full Name (min 2 chars, max 100, letters only)
- ✅ Email (valid email format, max 255 chars)
- ✅ Phone Number (10-digit Indian format, starts with 6-9)
- ✅ State (dropdown with all Indian states)
- ✅ Course Interested (dropdown populated from university courses)
- ✅ Intake Year (2025, 2026)
- ✅ Consent Checkbox (required)

### 5. Form Behavior
- ✅ Posts data to Pipedream endpoint (webhook URL: `https://eo3v0ikhm2t0s74.m.pipedream.net`)
- ✅ Success/error messages via toast notifications (no page refresh)
- ✅ Form validation with zod schema
- ✅ Loading states during submission
- ✅ Includes university name and timestamp in submission

### 6. Responsive Design
- ✅ Fully responsive on mobile (320px+)
- ✅ Tablet optimized (768px+)
- ✅ Desktop enhanced (1024px+)
- ✅ Tested on multiple screen sizes

### 7. Modal Implementation
- ✅ "Check Course-wise Fees" opens modal
- ✅ Dynamic fee data from course array
- ✅ Shows all courses with:
  - Course name and duration
  - Annual fee range
  - Eligibility criteria
  - Additional notes about fees

### 8. APIs
Created working mock APIs that return JSON:

**Simple JSON APIs:**
- ✅ `getUniversitiesList()` - Returns array of university names
- ✅ `getUniversityStats()` - Returns statistics data

**Nested JSON APIs:**
- ✅ `getUniversityDetails(id)` - Returns detailed university info with nested objects:
  - Location (city, state, country)
  - Contact (email, phone, website)
  - Programs (undergraduate, postgraduate arrays)
  - Accreditation array
- ✅ `getCourseFees()` - Returns course fees with nested university and course data

All APIs accessible via `/api-demo` page with interactive testing interface.

## 🎨 Design System

**Color Palette:**
- Primary: Deep indigo (#1a2b5c) - Trust and authority
- Secondary: Vibrant teal (#3ab8a0) - Innovation
- Accent: Coral (#ff6b5b) - Action and engagement
- Background: Light neutral (#f8f9fb)

**Features:**
- Professional university-themed design
- Smooth animations and transitions
- Card-based layouts
- Gradient hero sections
- Consistent spacing and typography
- Accessible color contrast

## 🛠 Technology Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS with custom design tokens
- **UI Components:** Shadcn/ui
- **Form Handling:** React Hook Form + Zod validation
- **Routing:** React Router v6
- **Icons:** Lucide React
- **State Management:** React Query

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## 🔐 Security & Validation

- Client-side validation with zod schema
- Input sanitization (trim, max length)
- Phone number regex validation for Indian format
- Email format validation
- Required field enforcement
- HTTPS ready (SSL supported)

## 🚀 Deployment

The application is deployed on Lovable platform with:
- ✅ SSL/HTTPS enabled
- ✅ Responsive on all devices
- ✅ Production-ready build
- ✅ Fast loading times
- ✅ SEO optimized meta tags

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   └── university/            # University-specific components
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── Features.tsx
│       ├── Courses.tsx
│       ├── Placements.tsx
│       ├── LeadForm.tsx
│       └── FeeModal.tsx
├── data/
│   └── universityData.ts      # University data and types
├── api/
│   └── mockApi.ts             # Working API endpoints
├── pages/
│   ├── Index.tsx              # Home page
│   ├── University1.tsx        # LP-1
│   ├── University2.tsx        # LP-2
│   └── ApiDemo.tsx            # API documentation
└── App.tsx                     # Main app with routing
```

## 🎯 Key Features

1. **Professional Design** - Modern, trustworthy university branding
2. **Full Validation** - Comprehensive form validation with user-friendly error messages
3. **Smooth UX** - No page reloads, loading states, toast notifications
4. **Reusable Components** - DRY principles with shared components
5. **Type Safety** - Full TypeScript implementation
6. **Working APIs** - Interactive API testing page
7. **SEO Ready** - Proper meta tags and semantic HTML
8. **Accessible** - ARIA labels and keyboard navigation support

## 📝 Form Integration Notes

**Pipedream Webhook URL:** `https://eo3v0ikhm2t0s74.m.pipedream.net`

The form posts the following data structure:
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "state": "string",
  "course": "string",
  "intakeYear": "string",
  "consent": boolean,
  "university": "string",
  "timestamp": "ISO 8601 string"
}
```

## 🧪 Testing Checklist

- ✅ All form fields validate correctly
- ✅ Form submission to Pipedream works
- ✅ Modals open and close properly
- ✅ Responsive on mobile, tablet, desktop
- ✅ All navigation links work
- ✅ Toast notifications display correctly
- ✅ APIs return proper JSON
- ✅ Loading states show during async operations
- ✅ No console errors

## 📊 API Response Examples

**Simple JSON (Universities List):**
```json
{
  "success": true,
  "data": ["Stellar Institute of Technology", "Apex University of Management"],
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

**Nested JSON (University Details):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Stellar Institute of Technology",
    "location": {
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    },
    "contact": {
      "email": "admissions@stellar.edu",
      "phone": "+91-80-12345678"
    }
  },
  "timestamp": "2025-01-15T10:30:00.000Z"
}
```

## 🎓 Submission Deliverables

1. **Landing Page URLs:**
   - University 1: [Your deployed URL]/university-1
   - University 2: [Your deployed URL]/university-2

2. **API Demo URL:**
   - [Your deployed URL]/api-demo

3. **Source Code:**
   - Available in project repository
   - Well-documented and organized

## 💡 Additional Notes

- All components are fully reusable and type-safe
- Design system is defined in `src/index.css` and `tailwind.config.ts`
- Easy to add more universities by extending the data file
- Pipedream webhook can be replaced with any backend endpoint
- Ready for production deployment
