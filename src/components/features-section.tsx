

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  IconDeviceMobile,
  IconMessage,
  IconBrandWhatsapp,
  IconRobot,
  IconChartBar,
  IconTemplate,
} from "@tabler/icons-react";
import { PlatformDemoPlaceholder } from "./placeholder-images";

const features = [
  {
    icon: IconMessage,
    title: "Messaging",
    description:
      "Send and receive WhatsApp messages in a unified inbox. Engage with your customers effortlessly on their preferred channel.",
    color: "bg-green-500/10 text-green-500",
    available: true,
  },
  {
    icon: IconTemplate,
    title: "Message Templates",
    description:
      "Create and manage reusable WhatsApp templates for consistent communication and faster responses.",
    color: "bg-blue-500/10 text-blue-500",
    available: true,
  },
  {
    icon: IconBrandWhatsapp,
    title: "WhatsApp Business API",
    description:
      "Connect with customers on their preferred channel with verified business accounts and official templates.",
    color: "bg-green-500/10 text-green-500",
    available: true,
  },
  {
    icon: IconDeviceMobile,
    title: "Broadcast Campaigns",
    description:
      "Send personalized messages to targeted segments with rich media, buttons, and interactive templates.",
    color: "bg-orange-500/10 text-orange-500",
    available: true,
  },
  {
    icon: IconRobot,
    title: "AI Chatbots",
    description:
      "Build no-code intelligent bots that qualify leads, answer FAQs, and route conversations to the right team.",
    color: "bg-violet-500/10 text-violet-500",
    available: false,
  },

  {
    icon: IconChartBar,
    title: "Analytics Dashboard",
    description:
      "Track conversation metrics, team performance, and campaign results with detailed reports.",
    color: "bg-primary/10 text-primary",
    available: false,
  },
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="features" className="py-20 md:py-32 bg-background">
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
            All-in-one WhatsApp Business Platform
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80 mb-8"
          >
            Everything you need to convert leads, engage customers, and grow
            your business on WhatsApp.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Available Now</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-amber-500 rounded-full"></span>
              <span>Coming Soon</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-card rounded-xl shadow-sm border ${
                feature.available
                  ? "border-border"
                  : "border-amber-200 dark:border-amber-800"
              } p-6 hover:shadow-md transition-shadow relative group overflow-hidden`}
            >
              {!feature.available && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-block py-1 px-2 text-xs font-medium bg-amber-500 text-white rounded-md">
                    Coming Soon
                  </span>
                </div>
              )}
              <div
                className={`rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.color}`}
              >
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>

              {!feature.available && (
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                  <span className="text-sm font-medium text-primary">
                    Stay tuned for updates!
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Streamline Your WhatsApp Business Operations
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Our platform simplifies managing WhatsApp conversations at scale,
              automating routine tasks, and delivering personalized customer
              experiences.
            </p>
            <ul className="space-y-4">
              {[
                {
                  text: "Send and respond to messages in a unified inbox",
                  available: true,
                },
                {
                  text: "Use templates for consistent communication",
                  available: true,
                },
                {
                  text: "Automate lead qualification and routing",
                  available: true,
                },
                {
                  text: "Send personalized broadcasts to segmented audiences",
                  available: true,
                },
                {
                  text: "Track and improve conversation metrics",
                  available: true,
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5 ${
                        item.available ? "text-primary" : "text-amber-500"
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="flex items-center">
                    {item.text}
                    {!item.available && (
                      <span className="ml-2 text-xs px-1.5 py-0.5 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100 rounded">
                        Soon
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

              <div className="relative border border-border rounded-xl overflow-hidden shadow-2xl animate-float-slow">
                <PlatformDemoPlaceholder />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
