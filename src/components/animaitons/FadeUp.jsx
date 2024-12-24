"use client"
import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function FadeUp({
  children,
  tag: Tag = "div",
  className,
  once = true,
  animateOn = "whileInView",
  variants = defaultVariants,
  viewport = { once },
  ...props
}) {
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...{ [animateOn]: "visible" }}
      variants={variants}
      viewport={animateOn === "whileInView" ? viewport : undefined}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
