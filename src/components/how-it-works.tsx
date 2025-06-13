

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import {
  IconBrandWhatsapp,
  IconMessage,
  IconTemplate,
  IconUsers,
  IconChartBar,
} from "@tabler/icons-react";

const steps = [
  {
    number: "01",
    title: "Connect WhatsApp",
    description:
      "Quickly connect your WhatsApp Business account and get verified to start engaging with your customers.",
    color: "from-blue-500 to-blue-600",
    icon: IconBrandWhatsapp,
    available: true,
  },
  {
    number: "02",
    title: "Manage Messages",
    description:
      "Send and receive WhatsApp messages in a unified inbox. Handle customer conversations efficiently in one place.",
    color: "from-green-500 to-green-600",
    icon: IconMessage,
    available: true,
  },
  {
    number: "03",
    title: "Create Templates",
    description:
      "Build reusable message templates to maintain consistent communication and respond faster to common inquiries.",
    color: "from-violet-500 to-violet-600",
    icon: IconTemplate,
    available: true,
  },
  {
    number: "04",
    title: "Collaborate as a Team",
    description:
      "Coming Soon: Manage all conversations in a shared inbox and assign them to the right team members.",
    color: "from-pink-500 to-pink-600",
    icon: IconUsers,
    available: false,
  },
  {
    number: "05",
    title: "Analyze & Optimize",
    description:
      "Coming Soon: Track key metrics and continuously improve your messaging strategy with detailed analytics.",
    color: "from-orange-500 to-orange-600",
    icon: IconChartBar,
    available: false,
  },
];

export function HowItWorks() {
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
    <section id="how-it-works"  className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          >
            How TrioChat Works
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80"
          >
            Get started in minutes and transform your customer messaging
            experience with our evolving platform.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          {/* Connect line */}
          <div className="absolute left-[32px] top-[64px] bottom-[150px] w-0.5 bg-gradient-to-b from-blue-500 to-orange-500 opacity-50 hidden md:block"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 md:mb-24 relative",
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="flex-shrink-0 z-10">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${step.color} shadow-lg relative`}
                >
                  {!step.available && (
                    <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                      Soon
                    </div>
                  )}
                  <step.icon className="w-6 h-6" />
                </div>
              </div>
              <div
                className={cn(
                  "bg-card shadow-md rounded-xl p-6 md:p-8 border border-border max-w-xl md:w-[500px]",
                  !step.available
                    ? "border-amber-200 dark:border-amber-800"
                    : "",
                  index % 2 === 1 ? "md:text-right" : ""
                )}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-sm font-medium ${
                      step.available ? "text-primary" : "text-amber-500"
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-8">
          <p className="mb-6 text-foreground/80">
            Early access to our platform and be the first to experience new
            features as they launch!
          </p>
          <a
            href="#signup"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-lg hover:bg-primary/90 transition-colors"
          >
            Get Started for Free
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
