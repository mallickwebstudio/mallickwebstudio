import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function smoothScroll(section) {
  document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}