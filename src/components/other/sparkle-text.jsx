"use client"
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

const SparkleText = ({ text, className }) => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const animate = (star) => {
        star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
        star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

        star.style.animation = "none";
        star.offsetHeight;
        star.style.animation = "";
    };

    // useEffect(() => {
    //     let index = 0;
    //     const interval = 1000;

    //     const animateInterval = (star) => setInterval(() => animate(star), interval);

    //     const stars = document.getElementsByClassName("magic-star");

    //     for (const star of stars) {
    //         setTimeout(() => {
    //             animate(star);
    //             animateInterval(star);
    //         }, index++ * (interval / 3));
    //     }

    //     // Cleanup intervals on component unmount
    //     return () => {
    //         for (const star of stars) {
    //             clearInterval(animateInterval(star));
    //         }
    //     };
    // }, []); // Empty dependency array to run the effect only once on mount

    /* -- ↓↓↓ If you want the sparkle effect to only occur on hover, replace the above useEffect with this code ↓↓↓ -- */

    useEffect(() => {
      const magic = document.querySelector(".magic");

      const animateInterval = (star) => setInterval(() => animate(star), 1000);

      const stars = document.getElementsByClassName("magic-star");
      const timeouts = [];
      const intervals = [];

      const onMouseEnter = () => {
        let index = 1;
        for (const star of stars) {
          timeouts.push(setTimeout(() => {
            animate(star);
            intervals.push(animateInterval(star));
          }, index++ * 300));
        }
      };

      const onMouseLeave = () => {
        for (const t of timeouts) clearTimeout(t);
        for (const i of intervals) clearInterval(i);
      };

      magic.addEventListener("mouseenter", onMouseEnter);
      magic.addEventListener("mouseleave", onMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        magic.removeEventListener("mouseenter", onMouseEnter);
        magic.removeEventListener("mouseleave", onMouseLeave);
      };
    }, [animate]);

    return (
        <span className={cn('sparkle-text',className)} id='sparkle-text'>
            <span className="magic">
                <span className="magic-star">
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span className="magic-star">
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span className="magic-star">
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span className="magic-text">{text}</span>
            </span>
        </span>
    );
};

export default SparkleText;
