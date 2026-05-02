'use client';

import { motion } from 'framer-motion';

interface ResidentialProject {
  name: string;
  detail: string;
}

export default function ResidentialRows({ projects }: { projects: ResidentialProject[] }) {
  return (
    <>
      {projects.map((item, i) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          className="group py-6 border-b border-gray-100 first:border-t cursor-default"
        >
          <p
            className="text-lg md:text-xl font-bold text-black tracking-wide group-hover:text-red-600 transition-colors duration-500"
            style={{ fontFamily: "'Clash Display', system-ui, sans-serif" }}
          >
            {item.name}
          </p>
          <p
            className="text-sm text-gray-500 mt-0 max-h-0 opacity-0 overflow-hidden
                       group-hover:max-h-[5rem] group-hover:opacity-100 group-hover:mt-2
                       transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          >
            {item.detail}
          </p>
        </motion.div>
      ))}
    </>
  );
}
