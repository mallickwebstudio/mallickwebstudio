
export const siteConfig = {
    name: "mallickwebstudio",
    title: "MallickWebStudio - Fullstack Development Services",
    description: "Your trusted partner for building powerful and scalable fullstack websites with Next.js.",
    url: "https://mallickwebstudio.com",
    baseUrl: "https://mallickwebstudio.com",
    ogImage: "https://mallickwebstudio.com/og.jpg",
    links: {
        instagram: "https://instagram.com/mallickwebstudio_",
        github: "https://github.com/mallickwebstudio/",
    },
    owner: "Salman Mallick"
}

// ===================================================
// // Main Pages
// ===================================================
export const siteMd = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [
        "Website Developer",
        "Website Designer",
        "Website SEO",
        "Website Upgrade",
    ],
    authors: [
        {
            name: siteConfig.owner,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.owner,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@mallickwebstudio",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

export const aboutMd = {
    title: "About",
    description: "Discover the story behind MallickWebStudio, where expertise meets innovation in fullstack development services.",
}

export const serviceMd = {
    title: "Services",
    description: "Explore the comprehensive range of services offered by MallickWebStudio, specializing in cutting-edge Next.js development.",
}

export const portfolioMd = {
    title: "Portfolio",
    description: "Browse through an array of impressive projects crafted by MallickWebStudio, showcasing excellence in Next.js development.",
}

export const contactMd = {
    title: "Contact",
    description: "Connect with MallickWebStudio to discuss inquiries, collaborations, or consultations for your next web project.",
}

// ===================================================
// // Additional Pages
// ===================================================

export const hireMd = {
    title: "Hire",
    description: "Engage MallickWebStudio for your upcoming fullstack web development endeavor, turning your concepts into reality.",
}

export const creditMd = {
    title: "Credits",
    description: "Acknowledgments and attributions for the resources, tools, and technologies employed in MallickWebStudio's projects.",
}

export const privacyPolicyMd = {
    title: "Privacy Policy",
    description: "Review the privacy policy of MallickWebStudio, detailing our commitment to safeguarding your personal information.",
}

// ========================================
// // Service Subpages
// ========================================
export const WDDSMd = {
    title: "Website Design and Development",
    description: "Elevate your online presence with bespoke website design and development services provided by Salman Mallick, operating under the brand name MallickWebStudio.",
}
export const WUSMd = {
    title: "Website Update Service",
    description: "Revitalize your existing website with seamless updates and enhancements by Salman Mallick, operating under the brand name MallickWebStudio.",
}
export const SOSMd = {
    title: "Speed Optimization",
    description: "Enhance your website's performance and user experience with expert speed optimization services by Salman Mallick, operating under the brand name MallickWebStudio.",
}
