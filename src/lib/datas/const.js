
// ==============================================
// Common

import SparkleText from "@/components/other/sparkle-text";
import { BadgeDollarSign, ChevronsUp, MonitorSmartphone, PencilRuler, ScanSearch, Sparkles, User, Wrench, HandCoins, GaugeCircle, BugOff, FilePlus, ArrowUpAZ, Layers2, Badge, Fullscreen, CircleSlash, RefreshCw, AlignVerticalSpaceAround, File, ImageIcon, } from "lucide-react";
import Link from "next/link";

// ==============================================
export const navigationLinks = [
  {
    title: "Home",
    href: "/",
    varient: "ghost"
  },
  {
    title: "About",
    href: "/about",
    varient: "ghost"
  },
  {
    title: "Services",
    href: "/services",
    varient: "ghost"
  },
  {
    title: "Pricing",
    href: "/#pricing",
    varient: "ghost"
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    varient: "ghost"
  },
  {
    title: "Contact Me",
    href: "/contact",
    varient: ""
  }
]

export const projectsData = [
  // {
  //   title: "Nova Cart",
  //   description: "Discover sustainable style and connect with us for exclusive offers and updates.",
  //   link: "https://wds-novacart.vercel.app",
  //   concept: ["NextJS", "Sanity.io", "stripe-payment", "ShadcnUI"],
  //   imageUrl: "/images/projects/novacart.png",
  // },
  // {
  //   title: "Regal Estate",
  //   description: "Experience the epitome of luxury with our meticulously crafted estate website, offering seamless navigation and stunning visuals.",
  //   link: "https://wds-regalestate.vercel.app",
  //   concept: ["NextJS", "Sanity.io", "Headless-CMS", "ShadcnUI"],
  //   imageUrl: "/images/projects/regalestate.png",
  // },
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
export const services = [
  {
    slug: "website-design-and-development",
    icon: <PencilRuler className="size-8 group-hover:text-primary" />,
    heading: <>Website <SparkleText text="Desing" /> & <SparkleText text="Development" /></>,
    title: "Website Design & Development",
    pageTitle: <>Websites <SparkleText text="built"/> & <SparkleText text="designed" /> for <SparkleText text="success"/></>,
    description: "Jumpstart and establish your brand with your first website or get your existing website redesigned/updated.",
    href: "/services/website-design-and-development",
    benefits: [
      {
        icon: <User className="size-8 group-hover:text-primary" />,
        title: "User-Experience Focused",
        description: "We design websites that prioritize user experience, ensuring easy navigation to help achieve your business goals.",
      },
      {
        icon: <BadgeDollarSign className="size-8 group-hover:text-primary" />,
        title: "Conversion Optimized",
        description: "Our organized CTAs encourage visitors to convert into customers, making your website a powerful business tool.",
      },
      {
        icon: <MonitorSmartphone className="size-8 group-hover:text-primary" />,
        title: "Mobile Optimized",
        description: "With over 58% of users viewing websites on their phones, we ensure every page is fully responsive as a standard.",
      },
      {
        icon: <ScanSearch className="size-8 group-hover:text-primary" />,
        title: "Search Engine Optimized",
        description: "Our sites follow best SEO practices, including metadata, proper markup, sitemaps, image names, accessibility, and more to enhance your ranking.",
      },
      {
        icon: <Sparkles className="size-8 group-hover:text-primary" />,
        title: "Beautifully Designed",
        description: "Your website will be uniquely designed to reflect your brand's style, including custom fonts, icons, colors, and more.",
      },
      {
        icon: <GaugeCircle className="size-8 group-hover:text-primary" />,
        title: "Speed Optimized",
        description: "Developed with performance in mind, your site will be optimized for speed, ensuring no loss of customers due to slow loading times.",
      },
      {
        icon: <HandCoins className="size-8 group-hover:text-primary" />,
        title: "One-Stop-Shop Support",
        description: "We offer ongoing support, just an email away for any website assistance you need. Quick changes are often free, and we provide affordable rates for larger updates.",
      },
    ]
  },
  {
    slug: "website-update",
    icon: <Wrench className="size-8 group-hover:text-primary" />,
    heading: <>Website <SparkleText text="Updates" /></>,
    title: "Website Update",
    pageTitle: <><SparkleText text="Feeling aged?"/> time to <SparkleText text="upgrade"/></>,
    description: "Anything from Website Updates, Bug Fixes, Content changes, or additions of any kind.",
    href: "/services/website-update",
    benefits: [
      {
        icon: <Wrench className="size-8 group-hover:text-primary" />,
        title: "Re-Designed Overhauls",
        description: "Transform an outdated website with a fresh, modern redesign.",
      },
      {
        icon: <BugOff className="size-8 group-hover:text-primary" />,
        title: "Bug Fixes",
        description: "Resolve any bugs or issues your website may be experiencing.",
      },
      {
        icon: <FilePlus className="size-8 group-hover:text-primary" />,
        title: "Add New Pages & Posts",
        description: "Add new posts or custom-designed, responsive pages to your website.",
      },
      {
        icon: <ArrowUpAZ className="size-8 group-hover:text-primary" />,
        title: "Text & Content Updates",
        description: "Keep your website current with updated text and images.",
      },
      {
        icon: <Layers2 className="size-8 group-hover:text-primary" />,
        title: "Maintenance",
        description: "Perform essential maintenance, including plugin updates, backups, and bug fixes.",
      },
      {
        icon: <Badge className="size-8 group-hover:text-primary" />,
        title: "Malware Cleanup",
        description: "Remove malware from your site, eliminating unwanted redirects, ads, and spam pages.",
      },
    ]
  },
  {
    slug: "speed-optimization",
    icon: <ChevronsUp className="size-8 group-hover:text-primary" />,
    heading: <>Speed <SparkleText text="Optimization" /></>,
    title: "Speed Optimization",
    pageTitle: <>Let <SparkleText text="Google Rank"/> You</>,
    description: "Get your website loading faster. A slow site can easily loose visitors and customers.",
    href: "/services/speed-optimization",
    benefits: [
      {
        icon: <ImageIcon className="size-8 group-hover:text-primary" />,
        title: "Media Compression",
        description: "Compress media files to save kilobytes and improve load times on your website.",
      },
      {
        icon: <Fullscreen className="size-8 group-hover:text-primary" />,
        title: "Image Resizing",
        description: "Optimize image sizes to maintain necessary quality without blurriness, reducing file sizes.",
      },
      {
        icon: <CircleSlash className="size-8 group-hover:text-primary" />,
        title: "Disable Unnecessary Assets",
        description: "Remove unnecessary files from your site to reduce load times and enhance speed.",
      },
      {
        icon: <RefreshCw className="size-8 group-hover:text-primary" />,
        title: "Loading JS Asynchronously",
        description: "Load JavaScript files simultaneously with other files to avoid delays in loading.",
      },
      {
        icon: <AlignVerticalSpaceAround className="size-8 group-hover:text-primary" />,
        title: "Minifying CSS & JS",
        description: "Compress CSS and JavaScript files to reduce their size and improve load speeds.",
      },
      {
        icon: <File className="size-8 group-hover:text-primary" />,
        title: "Simplifying Pages",
        description: "Eliminate unnecessary page elements to reduce file weight and speed up your site.",
      },
    ]
  },
];

export const faqs = [
  {
    id: "faq1",
    question: "Can we negotiate price?",
    answerJSX: (
      <div>
        It depends on the project. If your project deviates from our standard pricing system, then &quot;Yes&quot;, we can. To find out exactly how much your project will cost please <Link className="text-link" href="/contact"> contact me</Link> for a quote.
      </div>
    )
  },
  {
    id: "faq2",
    question: "What is your hourly/day rate?",
    answer: "My day rate is $70 - $100 (USD) and $15 - $25 (USD) per hour depending on the complexity and scope of the project.."
  },
  {
    id: "faq3",
    question: "How will we communicate during our project?",
    answer: "I usually prefer asynchronous communication through email, Slack, or WhatsApp (commonly preferred). For meetings or day-to-day discussions, I often use Google Meet (commonly preferred). For project management, I like to use Notion, but I’m flexible and can adapt to your preferred project management tool if you’re part of an agency or larger organization."
  },
  {
    id: "faq4",
    question: "Will you collaborate with other freelancers?",
    answer: "I am more than happy to work alongside designers, copywriters, marketers, graphic designers or any other kind of freelancer you have working on your project. To learn how I like to communicate during projects, please read the question above."
  },
  {
    id: "faq5",
    question: "Will you work for agencies?",
    answer: "If you run an agency that needs help with an upcoming project I would love to know more. Please note that I am only interested in projects that are using React, Next.js and Sanity. To discuss further please email salmanmallick3216@gmail.com."
  },
]

export const pricing = [
  {
    id: "standardPricing",
    title: "Essential",
    description: "Beautifully design website with customization and basic features.",
    benefits: [
      {
        id: "s1",
        feature: "Beautifully Designed Website",
      },
      {
        id: "s2",
        feature: "Static Website",
      },
      {
        id: "s3",
        feature: "Great User Experience",
      },
      {
        id: "s4",
        feature: "All Device Accessible",
      },
      {
        id: "s5",
        feature: "SEO-Ready",
      },
      {
        id: "s6",
        feature: "Basic Speed Optimization",
      },
      {
        id: "s7",
        feature: "Upto 4 pages + essential pages",
      },
    ],
    additionalFeature: "+$100 / Additional Website Page",
    price: 1000,
    offer: true,
    offerName: "New Year Fresh Start",
    offerPrice: 250,
  },
  {
    id: "advancePricing",
    title: "Premium",
    description: "Beautifully design website with customization (copywriting Included).",
    benefits: [
      {
        id: "a1",
        feature: "Every thing in Essential +",
      },
      {
        id: "a2",
        feature: "Website Copywriting",
      },
      {
        id: "a4",
        feature: "Easy to Edit & Manage Website",
      },
      {
        id: "a6",
        feature: "SEO-Optimized",
      },
      {
        id: "a7",
        feature: "Conversion Optimization",
      },
      {
        id: "a8",
        feature: "Upto 6 pages + essential pages",
      },
    ],
    additionalFeature: "+$100 / Additional Website Page",
    price: 2000,
    offer: true,
    offerName: "New Year Fresh Start",
    offerPrice: 500,
  },
  {
    id: "ecommercePricing",
    title: "E-Commerce",
    description: "A beautifull website Designed to make you sales online.",
    benefits: [
      {
        id: "e1",
        feature: "Every thing in Essential +",
      },
      {
        id: "e2",
        feature: "Website Copywriting",
      },
      {
        id: "e4",
        feature: "Easy to Edit & Manage Website",
      },
      {
        id: "e6",
        feature: "SEO-Optimized",
      },
      {
        id: "e7",
        feature: "Conversion Optimization",
      },
      {
        id: "e8",
        feature: "Current Data Uploaded",
      },
      {
        id: "e9",
        feature: "Upto 6 pages + essential pages",
      },
    ],
    additionalFeature: "+$100 / Additional Website Page",
    price: 8000,
    offer: true,
    offerName: "New Year Fresh Start",
    offerPrice: 2000,
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
    title: "Content",
    description: "Developing compelling content, including copywriting and multimedia assets, while optimizing for search engines.",
    includes: [
      "Copywritting",
      "Photos & Videos",
      "Search Enging Optimisation (SEO)"
    ]
  },
  {
    phase: 4,
    title: "Design",
    description: "Crafting wireframes, visual aesthetics, and user experience elements to align with the project's goals and user needs.",
    includes: [
      "Wireframe Models",
      "Visual Style",
      "Usability, UI, UX"
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
