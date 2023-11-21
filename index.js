const studentPortfolioTemplate = {
    personalInfo: {
      name: "",
      gender: "",
      dateOfBirth: "",
      grade: 0,
      school: "",
      contactInfo: {
        email: "",
        phone: "",
        address: ""
      },
      profileIcon: "", // URL or reference to profile icon
      profileBackground: "" // URL or reference to profile background
    },
    academicAchievements: {
      GPA: 0,
      honorsClasses: [],
      awards: [],
      testScores: {
        SAT: 0,
        ACT: 0
      },
      coursesTaken: []
    },
    extracurricularActivities: {
      sports: [],
      performingArts: [],
      clubsAndOrganizations: [],
      leadershipRoles: [],
      otherActivities: []
    },
    communityService: {
      totalHours: 0,
      activities: []
    },
    projects: [],
    internships: [],
    skills: [],
    references: [],
    certifications: [],
    languages: [],
    portfolioLinks: {
      linkedIn: "",
      personalWebsite: "",
      otherLinks: []
    },
    collegeOfChoice: "",
    currentEducationLevel: "", 
    jobExperience: [],
    goals: [], 
    recommendations: [],
  };


  const initialQuestions = [
    "What is your full name?", //// input
    "What is the name of your school?", /// input
    "When is your date of birth? (MM/DD/YYYY)", /// data picker
    "Which grade are you currently in?", //// number input
    "What is your gender?", // drop down into input
    "Do you know your current GPA? If yes, what is it?" //// number input
  ];
  
  // Example usage of the template:
  const defaultStudentPortfolio = { ...studentPortfolioTemplate };
  
  // Now `defaultStudentPortfolio` contains the default structure with empty fields.
  console.log(defaultStudentPortfolio);
  console.log(initialQuestions);
  