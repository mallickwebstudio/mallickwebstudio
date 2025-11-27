import { ReactNode } from "react";
// -------------------------------
// Navigation Links
// -------------------------------
export interface NavigationLink {
    title: string;
    href: string;
    varient?: string; // keeping your original spelling
}

// -------------------------------
// Projects Data
// -------------------------------
export interface ProjectItem {
    title: string;
    description: string;
    link: string;
    concept: string[];
    imageUrl: string;
}

// -------------------------------
// Budget Data
// -------------------------------
export interface BudgetItem {
    id: string;
    title: string;
    value: string;
}


// -------------------------------
// Services
// -------------------------------
export interface ServiceBenefit {
    icon: ReactNode;
    title: string | ReactNode; // allow SparkleText
    description: string;
}

export interface ServiceItem {
    slug: string;
    icon: ReactNode;
    heading: ReactNode;
    title: string | ReactNode;     // FIXED — you were passing JSX
    pageTitle: ReactNode;
    description: string;
    href: string;
    benefits: ServiceBenefit[];
}

// -------------------------------
// FAQItem
// -------------------------------
export interface FAQItem {
    id: string;
    question: string;
    answer: string | ReactNode;       // for plain text answers
}


// -------------------------------
// Pricing
// -------------------------------
export interface PricingBenefit {
    id: string;
    feature: string;
}

export interface PricingItem {
    id: string;
    title: string;
    description: string;
    benefits: PricingBenefit[];
    additionalFeature: string;
    price: number;
    offer: boolean;
    offerName: string;
    offerPrice: number;
}


// -------------------------------
// Project Phases
// -------------------------------
export interface ProjectPhase {
    phase: number;
    slug: string;
    title: string;
    description: string;
    includes: string[];
}
