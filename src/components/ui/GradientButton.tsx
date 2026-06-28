import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from './GlassCard';
import { useSettingsStore } from '../../store';

interface GradientButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GradientButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: GradientButtonProps) {
  const { animations, sound } = useSettingsStore();

  const baseStyles = 'relative overflow-hidden rounded-full font-semibold transition-all flex items-center justify-center gap-2';
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25',
    secondary: 'glass-card text-white hover:bg-white/10',
    danger: 'bg-red-500/80 text-white shadow-lg shadow-red-500/25',
    ghost: 'bg-transparent text-white hover:bg-white/5'
  };

  const playClickSound = () => {
    if (sound) {
      // Future: add sound logic
    }
  };

  return (
    <motion.button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      whileHover={animations ? { scale: 1.05 } : undefined}
      whileTap={animations ? { scale: 0.95 } : undefined}
      onClick={(e) => {
        playClickSound();
        if (props.onClick) props.onClick(e);
      }}
      {...props}
    >
      {children}
      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:animate-[shimmer_1.5s_infinite]" />
    </motion.button>
  );
}
