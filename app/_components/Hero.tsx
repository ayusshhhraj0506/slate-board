'use client';
import Link from 'next/link';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  Pencil,
  PenTool,
  Ruler,
  BookOpen,
  Calculator,
  Type,
  Shapes,
  StickyNote,
  GraduationCap,
  MousePointer2,
  FileText,
  Compass,
} from 'lucide-react';
import { HeroSvg } from './HeroSvg';

function Hero() {
  const iconVariants: Variants = {
    animate: (custom: number) => ({
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4 + Math.random() * 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeIn',
        delay: custom * 1,
      },
    }),
  };

  return (
    <>
      <section className="lg:grid lg:h-screen lg:place-content-center overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none z-0">

          <motion.div
            custom={0}
            variants={iconVariants}
            animate="animate"
            className="absolute top-[5%] left-[5%] sm:left-[10%] text-orange-500 opacity-80"
          >
            <Pencil size={40} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            custom={1}
            variants={iconVariants}
            animate="animate"
            className="absolute top-[8%] left-[45%] text-blue-400 opacity-70 hidden lg:block"
          >
            <Ruler size={48} strokeWidth={1.5} />
          </motion.div>

          {/* Keep on Mobile: Top Right Corner */}
          <motion.div
            custom={2}
            variants={iconVariants}
            animate="animate"
            className="absolute top-[5%] right-[5%] sm:right-[15%] text-yellow-400 opacity-70"
          >
            <Shapes size={38} strokeWidth={1.5} />
          </motion.div>

          {/* Left Edge */}
          <motion.div
            custom={3}
            variants={iconVariants}
            animate="animate"
            className="absolute top-[35%] left-[2%] text-green-400 opacity-80 hidden lg:block"
          >
            <Calculator size={42} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            custom={4}
            variants={iconVariants}
            animate="animate"
            className="absolute bottom-[35%] left-[3%] text-purple-400 opacity-70 hidden lg:block"
          >
            <BookOpen size={48} strokeWidth={1.5} />
          </motion.div>

          {/* Right Edge */}
          <motion.div
            custom={5}
            variants={iconVariants}
            animate="animate"
            className="absolute top-[30%] right-[3%] text-pink-400 opacity-60 hidden lg:block"
          >
            <Type size={36} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            custom={6}
            variants={iconVariants}
            animate="animate"
            className="absolute bottom-[40%] right-[5%] text-cyan-400 opacity-70 hidden lg:block"
          >
            <PenTool size={40} strokeWidth={1.5} />
          </motion.div>

          {/* Bottom Edge */}
          {/* Keep on Mobile: Bottom Left Corner */}
          <motion.div
            custom={7}
            variants={iconVariants}
            animate="animate"
            className="absolute bottom-[2%] left-[5%] sm:bottom-[8%] sm:left-[20%] text-red-400 opacity-50"
          >
            <StickyNote size={38} strokeWidth={1.5} />
          </motion.div>

          {/* Keep on Mobile: Bottom Right Corner */}
          <motion.div
            custom={8}
            variants={iconVariants}
            animate="animate"
            className="absolute bottom-[2%] right-[5%] sm:bottom-[5%] sm:right-[25%] text-indigo-400 opacity-60"
          >
            <GraduationCap size={44} strokeWidth={1.5} />
          </motion.div>

          {/* Near Center Top/Bottom Gaps - Hidden on Mobile */}
          <motion.div
            custom={9}
            variants={iconVariants}
            animate="animate"
            className="absolute top-[12%] right-[35%] text-emerald-400 opacity-70 hidden lg:block"
          >
            <Compass size={36} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            custom={10}
            variants={iconVariants}
            animate="animate"
            className="absolute bottom-[12%] left-[40%] text-teal-400 opacity-70 hidden lg:block"
          >
            <FileText size={36} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            custom={11}
            variants={iconVariants}
            animate="animate"
            className="absolute top-[20%] left-[25%] text-rose-400 opacity-70 hidden lg:block"
          >
            <MousePointer2 size={36} strokeWidth={1.5} />
          </motion.div>
        </div>

        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-4 lg:px-8 lg:py-32 relative z-10">
          <div className="max-w-prose text-left">
            <div className="max-w-4xl -mt-10 mx-auto px-2">
              <h1 className="text-4xl font-bold sm:text-6xl text-white tracking-tight leading-tight font-mono">
                A Better{' '}
                <span className="bg-orange-600 text-white px-2 rounded-xl">
                  Workspace
                </span>{' '}
                for Better{' '}
                <span className="bg-orange-600 text-white px-2 rounded-xl">
                  Thinking
                </span>
              </h1>
            </div>
            <p className="mt-4 font-mono text-sm text-pretty sm:text-lg text-neutral-400">
              Slateboard brings whiteboard freedom and structured documentation
              together, so your ideas stay clear, organized, and ready to move
              forward.
            </p>

            <div className="mt-4 font-mono flex gap-4 sm:mt-6">
              <Link
                className="inline-block rounded-xl border border-orange-600 bg-orange-600 px-5 py-3 font-medium text-white  transition-colors hover:bg-orange-500"
                href="/dashboard"
              >
                Get Started
              </Link>

              <a
                className="inline-block rounded-xl border border-orange-600 px-5 py-3 font-medium text-neutral-100 transition-colors"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <HeroSvg />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
