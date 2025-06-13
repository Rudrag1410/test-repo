import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { DashboardPlaceholder } from "./placeholder-images";
import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";

export function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 dark:opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 dark:opacity-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 md:gap-8 items-center"
        >
          {/* Text Content */}
          <div className="text-center md:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4 md:mb-6">
                <span className="mr-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  #1
                </span>
                WhatsApp Business Platform
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6"
            >
              <span>Go from </span>
              <span className="text-primary">sales</span>
              <span className="block md:inline whitespace-normal md:whitespace-nowrap">
                {" "}
                to deals on WhatsApp
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-foreground/80 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0"
            >
              Empower your sales and marketing teams to capture, qualify, and
              convert more leads, faster than ever before with TrioChat&apos;s
              messaging platform.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-muted/40 border border-border rounded-lg p-3 md:p-4 mb-6 md:mb-8 text-xs md:text-sm"
            >
              <div className="flex items-center mb-2">
                <span className="font-medium text-foreground mr-2">
                  Currently Available:
                </span>
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary rounded-full px-3 py-0.5 text-xs font-medium">
                  Messages
                </span>
                <span className="bg-primary/10 text-primary rounded-full px-3 py-0.5 text-xs font-medium">
                  Templates
                </span>
                <span className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 rounded-full px-3 py-0.5 text-xs font-medium flex items-center">
                  More Features Coming Soon
                  <IconChevronRight className="ml-0.5 h-3 w-3" />
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <Link
                href="https://app.triochat.io"
                className="px-6 py-2.5 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                Get Started Free
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://calendly.com/rudragupta-pixeltechnology/30min"
                className="px-6 py-2.5 text-sm font-medium text-foreground bg-secondary rounded-md hover:bg-secondary/80 transition-colors flex items-center justify-center"
              >
                Schedule Demo
                <IconChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-xs md:text-sm text-muted-foreground justify-center md:justify-start"
            >
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Easy setup in minutes</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Image/Mockup */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Dashboard mockup */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative z-10">
                  <DashboardPlaceholder />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
