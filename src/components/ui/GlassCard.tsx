import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useSettingsStore } from '../../store';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  className?: string;
}

export function GlassCard({ children, hoverEffect = false, className, ...props }: GlassCardProps) {
  const { animations } = useSettingsStore();

  return (
    <motion.div
      className={cn(
        'glass-card rounded-3xl p-6 relative overflow-hidden',
        hoverEffect && 'glass-card-hover cursor-pointer',
        className
      )}
      whileHover={animations && hoverEffect ? { scale: 1.02, y: -5 } : undefined}
      whileTap={animations && hoverEffect ? { scale: 0.98 } : undefined}
      initial={animations ? { opacity: 0, y: 20 } : undefined}
      animate={animations ? { opacity: 1, y: 0 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
