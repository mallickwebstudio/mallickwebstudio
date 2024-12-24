"use client"
import { motion } from "framer-motion";

const defaultVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
};

export default function ZoomIn({
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
