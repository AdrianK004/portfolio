import { motion } from "framer-motion";

/**
 * Reusable scroll-reveal wrapper for consistent animations across the site.
 * Usage: <Reveal delay={0.1}>...</Reveal>
 */
const directions = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
  as = "div",
}) {
  const offset = directions[direction] ?? directions.up;
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
