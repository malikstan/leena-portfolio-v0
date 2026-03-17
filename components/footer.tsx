"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            Designed and coded with{" "}
            <Heart size={14} className="fill-red-500 text-red-500" /> by Leena
            Alotaibi
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
