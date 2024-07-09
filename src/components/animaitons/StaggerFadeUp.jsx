"use client";
import { motion } from 'framer-motion';
import { useFmaosConfig } from '@/components/providers/FmaosConfigProvider';

// Parent animation configuration
const parentVariants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { delayChildren: 0.1, staggerChildren: 0.3 },
    },
};

// Children animation configuration
const childrenVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};

export function StaggerFadeUpParent({ children, className, ...props }) {
    const { fmaosConfig } = useFmaosConfig();

    return (
        <motion.div
            className={className}
            variants={props.variants ?? parentVariants}
            initial={props.initial ?? "initial"}
            whileInView={props.whileInView ?? "animate"}
            transition={props.transition ?? fmaosConfig.transition}
            viewport={props.viewport ?? fmaosConfig.viewport}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function StaggerFadeUpChildren({ children, className, ...props }) {
    const { fmaosConfig } = useFmaosConfig();

    return (
        <motion.div
            className={className}
            variants={props.variants ?? childrenVariants}
            initial={props.initial ?? "initial"}
            whileInView={props.whileInView ?? "animate"}
            transition={props.transition ?? fmaosConfig.transition}
            viewport={props.viewport ?? fmaosConfig.viewport}
            {...props}
        >
            {children}
        </motion.div>
    );
}
