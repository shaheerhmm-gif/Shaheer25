export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const slideLeft = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export const slideRight = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

export const stagger = {
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export const springConfig = {
  type: 'spring',
  stiffness: 300,
  damping: 30
};

export const smoothTransition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1]
};
