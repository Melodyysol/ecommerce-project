import React from "react";
import { motion, useReducedMotion } from "motion/react";

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const reduce = useReducedMotion();

  const variants = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  return (
    <motion.div
      className="page"
      initial={reduce ? undefined : "initial"}
      animate={reduce ? undefined : "animate"}
      exit={reduce ? undefined : "exit"}
      variants={variants}
      transition={{ duration: 0.32, ease: [0.22, 0.9, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Page;
