'use client';

import { motion } from 'framer-motion';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RevealText({ text, className = '', delay = 0 }: RevealTextProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block mr-[0.28em] ${className}`}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.1,
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}
