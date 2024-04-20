
// ==============================================
// Common
// ==============================================
export const siteConfig = {
  siteTitle: "webdevsalmann - Freelance Fullstack Website Developer (Based in India)",
  siteName: "webdevsalmann",
  siteDescription: "I specialize in creating websites for startups and local businesses to help them thrive on their business journey.",
}

export const navigationLinks = [
  {
    title: "Home",
    path: "/",
    varient: "ghost"
  },
  {
    title: "About Me",
    path: "/about",
    varient: "ghost"
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    varient: "ghost"
  },
  {
    title: "Contact Me",
    path: "/contact",
    varient: ""
  }
]

export const projectsData = [
  {
    title: "Regal Estate",
    description: "Experience the epitome of luxury with our meticulously crafted estate website, offering seamless navigation and stunning visuals.",
    link: "https://wds-regalestate.vercel.app",
    concept: ["NextJS", "Sanity.io", "Headless-CMS", "ShadcnUI"],
    imageUrl: "/images/projects/regalestate.png",
  },
  {
    title: "BugBuster",
    description: "Say goodbye to pesky pests with our comprehensive pest control service website, designed to ensure a pest-free environment for your home or business.",
    link: "https://wds-bugbuster.vercel.app",
    concept: ["NextJS", "ShadcnUI"],
    imageUrl: "/images/projects/bugbuster.png",
  },
  {
    title: "Foodie",
    description: "Indulge your palate with a culinary journey through our restaurant website, showcasing tantalizing dishes and a delightful dining experience.",
    link: "https://wds-foodie.vercel.app",
    concept: ["NextJS"],
    imageUrl: "/images/projects/foodie.jpg",
  },
  {
    title: "Zenflex",
    description: "Elevate your fitness journey with our dynamic gym website, empowering you with cutting-edge resources and personalized training options.",
    link: "https://wds-zenflex.vercel.app",
    concept: ["NextJS", "API"],
    imageUrl: "/images/projects/zenflex.jpg",
  },
  {
    title: "Cofeco",
    description: "Immerse yourself in the aroma of freshly brewed coffee with our captivating coffee shop website, promising a cozy retreat for coffee enthusiasts.",
    link: "https://wds-cofeco.vercel.app",
    concept: ["NextJS", "Shadcn-UI"],
    imageUrl: "/images/projects/cofeco.jpg",
  },
  {
    title: "Blog",
    description: "Dive into a world of captivating content with our engaging blog website, offering a diverse array of topics to spark your curiosity.",
    link: "https://wds-blog.netlify.app",
    concept: ["ReactJS", "Mock API", "API handling"],
    imageUrl: "/images/projects/blog.png",
  },
  {
    title: "Freeapi",
    description: "Explore a treasure trove of humor and wisdom with our versatile website, delivering random jokes, advice, quotes, and much more at your fingertips.",
    link: "https://wds-freeapi.netlify.app",
    concept: ["ReactJS", "Content APIs"],
    imageUrl: "/images/projects/freeapi.png",
  },
  {
    title: "TaskManager",
    description: "Streamline your productivity with our intuitive task manager app, revolutionizing the way you organize and prioritize your daily tasks.",
    link: "https://wds-taskmanager.netlify.app",
    concept: ["Vanilla JS", "Local Storage", "JS OOP"],
    imageUrl: "/images/projects/taskmanager.png",
  },
  {
    title: "AtendEase",
    description: "Seamlessly track your attended lectures and stay organized with our user-friendly platform, simplifying your educational journey.",
    link: "https://atendease.netlify.app",
    concept: ["ReactJS", "Local Storage"],
    imageUrl: "/images/projects/atendease.png",
  },
];

export const budgetData = [
  {
    id: "bd1",
    title: "Less Than $100",
    value: "lessthan $100",
  },
  {
    id: "bd2",
    title: "Standard Website",
    value: "Standard Website",
  },
  {
    id: "bd3",
    title: "Advanced Website",
    value: "Advanced Website",
  },
]
// ==============================================
// Home Page
// ==============================================

export const faqs = [
  {
    id: "faq1",
    question: "How much will my project cost?",
    answers: "It depends on the project and your requirements. Do you need a landing page developed for an upcoming marketing campaign or a fully featured, multi-page website that is integrated with a headless CMS? To find out exactly how much your project will cost please contact me for a quote."
  },
  {
    id: "faq2",
    question: "What is your hourly/day rate?",
    answers: "My day rate is $40 (USD) or $5 per hour."
  },
  {
    id: "faq3",
    question: "How will we communicate during our project?",
    answers: "I typically prefer to communicate asynchronously during projects using email and Slack for day-to-day conversations/meetings and for project management I like to use Asana, Trello or Notion (or whichever project management tool you prefer if part of an agency or larger corporation)."
  },
  {
    id: "faq4",
    question: "Will you collaborate with other freelancers?",
    answers: "I am more than happy to work alongside designers, copywriters, marketers, graphic designers or any other kind of freelancer you have working on your project. To learn how I like to communicate during projects, please read the question above."
  },
]

export const pricingFeatures = [
  {
    id: "pf1",
    category: "Design",
    features: [
      "Professional Website Design",
      "Mobile/Desktop Responsive Design",
      "Multiple Page Design Concept",
      "Graphic Design Upload (Provided by Client)",
      "Home Page Sections (Hero, Featured Products, About Us, Services Showcase, Testimonials, Call-to-Action, Contact Form/Information, Footer, as per client requirement)",
    ]
  },
  {
    id: "pf2",
    category: "Functionality",
    features: [
      "Fully Functional Frontend / Backend",
      "Smooth Integration of Third-Party Services",
      "Contact Form for Easy Communication",
      "Enquiry Form Submission for Lead Generation",
      "Blog for Thought Leadership",
      "SSL Implementation for Secure Browsing",
      "CMS (Content Management System) for Easy Content Updates",
      "Manage Page/Image/Content Flexibility",
    ]
  },
  {
    id: "pf3",
    category: "Performance",
    features: [
      "Fast Loading Speed",
      "Server Setup for Reliable Hosting",
      "DNS Management for Seamless Domain Control",
      "SEO Tool Implementation for Better Visibility",
      "Full Google Admin Configuration for Enhanced Performance",
      "Development Revisions for Continuous Improvement",
    ]
  },
  {
    id: "pf4",
    category: "User Experience",
    features: [
      "YouTube Video Embedding (Provided by client)",
      "Social Media Link Integration for Enhanced Reach",
      "1 Hour Training Post Delivery for Self-Management",
      "Testimonials for Building Credibility",
    ]
  },
  {
    id: "pf4",
    category: "Content",
    features: [
      "Content Upload Service for Quick Start",
      "Pages - 3-4 for Structured Information Flow",
    ]
  }
];

export const pricing = [
  {
    id: "standardPricing",
    title: "Standard Website",
    description: "A website with limited design customization and basic features.",
    benefits: [
      {
        id: "swb1",
        feature: "Beautifully Designed Website",
      },
      {
        id: "swb2",
        feature: "Static Website",
      },
      {
        id: "swb3",
        feature: "Great User Experience",
      },
      {
        id: "swb4",
        feature: "All Device Accessible",
      },
      {
        id: "swb5",
        feature: "SEO-Ready",
      },
      {
        id: "swb6",
        feature: "Basic Speed Optimization",
      },
      {
        id: "swb7",
        feature: "Upto 5 pages",
      },
    ],
    additionalFeature: "Plus $30/per Extra Website Page",
    price: 150
  },
  {
    id: "advancePricing",
    title: "Advanced Website",
    description: "A website with a lot of design customization with more advanced features.",
    benefits: [
      {
        id: "awb1",
        feature: "Beautifully Designed Website",
      },
      {
        id: "awb2",
        feature: "Dynamic Website",
      },
      {
        id: "awb3",
        feature: "Great User Experience",
      },
      {
        id: "awb4",
        feature: "Easy to Edit & Manage Website",
      },
      {
        id: "awb5",
        feature: "All Device Accessible",
      },
      {
        id: "awb6",
        feature: "SEO-Optimized",
      },
      {
        id: "awb7",
        feature: "Advanced Speed Optimization",
      },
      {
        id: "awb8",
        feature: "Upto 5 pages",
      },
    ],
    additionalFeature: "Plus $30/per Extra Website Page",
    price: 300
  }
]

// ==============================================
// About Page
// ==============================================
export const porjectPhases = [
  {
    phase: 1,
    title: "Ananylsis",
    description: "Understanding the project's objectives, target audience, and purpose to lay the foundation for strategic decision-making.",
    includes: [
      "Website Purpose",
      "Website Goals",
      "Target Audience"
    ]
  },
  {
    phase: 2,
    title: "Planning",
    description: "Creating a blueprint for the project including sitemap, structure, and technology stack to ensure smooth execution.",
    includes: [
      "Sitemap",
      "Website Structure",
      "Technology Used"
    ]
  },
  {
    phase: 3,
    title: "Design",
    description: "Crafting wireframes, visual aesthetics, and user experience elements to align with the project's goals and user needs.",
    includes: [
      "Wireframe Models",
      "Visual Style",
      "Usability, UI, UX"
    ]
  },
  {
    phase: 4,
    title: "Content",
    description: "Developing compelling content, including copywriting and multimedia assets, while optimizing for search engines.",
    includes: [
      "Copywritting",
      "Photos & Videos",
      "Search Enging Optimisation (SEO)"
    ]
  },
  {
    phase: 5,
    title: "Development",
    description: "Building the website using modern technologies like Next.js and Sanity, focusing on functionality and responsiveness.",
    includes: [
      "HTML, CSS, JS - Coding",
      "Database",
      "Responsive Design"
    ]
  },
  {
    phase: 6,
    title: "Testing",
    description: "Conducting rigorous tests to ensure technical functionality, browser compatibility, and user satisfaction.",
    includes: [
      "Technical Test",
      "Browser Compatibility",
      "Does it fulfill its purpose"
    ]
  },
  {
    phase: 7,
    title: "Deployment",
    description: "Implementing monitoring systems, addressing bugs, and establishing maintenance protocols for a successful launch and ongoing operation.",
    includes: [
      "Monitoring",
      "Bug Fixes",
      "Maintainence"
    ]
  },
]

// ==============================================
// Portfolio Page
// ==============================================