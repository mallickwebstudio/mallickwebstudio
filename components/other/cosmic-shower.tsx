"use client";

import { useEffect, useState } from "react";

export default function CosmicShower() {
  const STAR_COUNT = 300;
  const METEOR_COUNT = 15;

  const [stars, setStars] = useState<
    { left: number; top: number; opacity: number }[]
  >([]);

  const [meteors, setMeteors] = useState<
    { leftPercent: number; top: number; duration: number }[]
  >([]);

  useEffect(() => {
    // Now safe: runs only in browser
    const width = window.innerWidth;
    const height = window.innerHeight;

    const generatedStars = Array.from({ length: STAR_COUNT }).map(() => ({
      left: Math.random() * width,
      top: Math.random() * height,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    const generatedMeteors = Array.from({ length: METEOR_COUNT }).map(() => ({
      leftPercent: Math.random() * 90 + 9,
      top: Math.random() * 250 + 50,
      duration: Math.random() * 7 + 3,
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(generatedStars);
    setMeteors(generatedMeteors);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-linear-to-b from-background to-secondary">
      {/* ⭐ Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-px h-px dark:bg-foreground"
          style={{
            left: star.left,
            top: star.top,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* ☄️ Meteors */}
      {meteors.map((m, i) => (
        <div
          key={i}
          className="absolute h-px w-[300px] -rotate-45 bg-linear-to-r from-foreground to-background"
          style={{
            top: m.top,
            left: `${m.leftPercent}%`,
            animation: `meteor ${m.duration}s linear infinite`,
          }}
        >
          <div className="absolute w-1 h-[5px] rounded-full -mt-0.5 bg-foreground shadow-[0_0_15px_3px_white]" />
        </div>
      ))}

      <style jsx>{`
        @keyframes meteor {
          0% {
            opacity: 1;
            margin-top: -300px;
            margin-right: -300px;
          }
          12% {
            opacity: 0;
          }
          15% {
            margin-top: 300px;
            margin-left: -600px;
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
