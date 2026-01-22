'use client';
import { ReactNode } from 'react';
import { motion, Variants } from 'motion/react';
import React, { ComponentType } from 'react';

export type PresetType =
  | 'fade'
  | 'slide'
  | 'scale'
  | 'blur'
  | 'blur-slide'
  | 'zoom'
  | 'flip'
  | 'bounce'
  | 'rotate'
  | 'swing';

export type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: keyof React.JSX.IntrinsicElements | ComponentType<unknown>;
  asChild?: keyof React.JSX.IntrinsicElements | ComponentType<unknown>;
};

const defaultContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: 'blur(4px)' },
    visible: { filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: 'spring', stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: 'spring', stiffness: 300, damping: 8 },
    },
  },
};

const addDefaultVariants = (variants: Variants) => ({
  hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
  visible: { ...defaultItemVariants.visible, ...variants.visible },
});

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = 'div',
  asChild = 'div',
}: AnimatedGroupProps) {
  const selectedVariants = {
    item: addDefaultVariants(preset ? presetVariants[preset] : {}),
    container: addDefaultVariants(defaultContainerVariants),
  };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  // Get the motion component - default to div if not a string or invalid
  // Components are memoized to avoid recreation on each render
  const MotionComponent = React.useMemo(() => {
    if (typeof as === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = (motion as any)[as];
      return component || motion.div;
    }
    if (as) {
      // @react-compiler-disable-next-line
      return motion(as as ComponentType<unknown>);
    }
    return motion.div;
  }, [as]);

  const MotionChild = React.useMemo(() => {
    if (typeof asChild === 'string') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = (motion as any)[asChild];
      return component || motion.div;
    }
    if (asChild) {
      // @react-compiler-disable-next-line
      return motion(asChild as ComponentType<unknown>);
    }
    return motion.div;
  }, [asChild]);

  // Memoized components are safe to use - they don't recreate on each render
  const Component = MotionComponent as typeof motion.div;
  const Child = MotionChild as typeof motion.div;

  return (
    <Component
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <Child key={index} variants={itemVariants}>
          {child}
        </Child>
      ))}
    </Component>
  );
}

export { AnimatedGroup };
