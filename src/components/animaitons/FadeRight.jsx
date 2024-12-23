"use client";
import { motion } from 'framer-motion';
import { useFmaosConfig } from '@/hooks/fmaos-config-provider';

const variants = (initialOffset) => ({
    hidden: { opacity: 0, x: -initialOffset },
    visible: { opacity: 1, x: 0 }
});

export default function FadeRight({ children, className, ...props }) {
    const { fmaosConfig } = useFmaosConfig();

    return (
        <motion.div
            className={className}
            variants={props.variants ?? variants(fmaosConfig.initialOffset)}
            initial={props.initial ?? "hidden"}
            whileInView={props.whileInView ?? "visible"}
            transition={props.transition ?? fmaosConfig.transition}
            viewport={props.viewport ?? fmaosConfig.viewport}
            {...props}
        >
            {children}
        </motion.div>
    );
}
