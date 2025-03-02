// ClientMovieWrapper.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ClientMovieWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}
