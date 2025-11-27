"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect } from "react";

interface SparkleTextProps {
  text: string | ReactNode;
  className?: string;
  textClassName?: string;
}

const rand = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = (star: HTMLElement) => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  void star.offsetHeight; // reflow
  star.style.animation = "";
};

const SparkleText = ({ text, className, textClassName }: SparkleTextProps) => {
  useEffect(() => {
    // Prevent SSR issues — ensure DOM exists
    if (typeof window === "undefined") return;

    const magic = document.querySelector(".magic") as HTMLElement | null;
    if (!magic) return;

    const stars = document.getElementsByClassName(
      "magic-star"
    ) as HTMLCollectionOf<HTMLElement>;

    const timeouts: number[] = [];
    const intervals: number[] = [];

    const animateInterval = (star: HTMLElement) =>
      window.setInterval(() => animate(star), 1000);

    const onMouseEnter = () => {
      let index = 1;

      for (const star of stars) {
        const timeoutId = window.setTimeout(() => {
          animate(star);
          intervals.push(animateInterval(star));
        }, index++ * 300);

        timeouts.push(timeoutId);
      }
    };

    const onMouseLeave = () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };

    magic.addEventListener("mouseenter", onMouseEnter);
    magic.addEventListener("mouseleave", onMouseLeave);

    return () => {
      magic.removeEventListener("mouseenter", onMouseEnter);
      magic.removeEventListener("mouseleave", onMouseLeave);
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, []); // ← NO animate dependency

  return (
    <span className={cn("sparkle-text", className)} id="sparkle-text">
      <span className="magic">
        {[...Array(3)].map((_, i) => (
          <span className="magic-star" key={i}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              <path d="M20 3v4" />
              <path d="M22 5h-4" />
              <path d="M4 17v2" />
              <path d="M5 18H3" />
            </svg>
          </span>
        ))}
        <span className={cn("magic-text", textClassName)}>{text}</span>
      </span>
    </span>
  );
};

export default SparkleText;
