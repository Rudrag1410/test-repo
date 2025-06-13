

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  
  IconRobot,
  IconChartBar,
 
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export function ComingSoonBanner() {
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

  const features = [
   /* {
      name: "Broadcast Campaigns",
      description:
        "Send personalized messages to targeted segments with rich media, buttons, and interactive templates.",
      icon: IconDeviceMobile,
      time: "Q1 2024",
      color:
        "from-orange-500/30 to-amber-500/30 dark:from-orange-800/30 dark:to-amber-800/30",
    },
    
    {
      name: "Team Inbox",
      description:
        "Collaborate with your team by managing all conversations in a single shared inbox with assignments.",
      icon: IconUsers,
      time: "Q1 2024",
      color:
        "from-violet-500/30 to-purple-500/30 dark:from-violet-800/30 dark:to-purple-800/30",
    },
*/
    {
      name: "AI Chatbots",
      description:
        "Build intelligent bots that qualify leads, answer FAQs, and route conversations to the right team.",
      icon: IconRobot,
      time: "Q2 2025",
      color:
        "from-blue-500/30 to-indigo-500/30 dark:from-blue-800/30 dark:to-indigo-800/30",
    },
    
    {
      name: "Analytics Dashboard",
      description:
        "Track conversation metrics, team performance, and campaign results with detailed reports.",
      icon: IconChartBar,
      time: "Q2 2025",
      color:
        "from-green-500/30 to-emerald-500/30 dark:from-green-800/30 dark:to-emerald-800/30",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center py-1 px-4 rounded-full text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-800/30 dark:text-amber-300 mb-6"
          >
            <IconBrandWhatsapp className="h-4 w-4 mr-2" />
            Roadmap
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          >
            More Features Coming Soon
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-foreground/80 mb-6 max-w-xl mx-auto"
          >
            We&apos;re constantly working on new features to make your WhatsApp
            Business experience even better. Join our early access program to be
            the first to try them!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl shadow-md border border-border overflow-hidden group relative hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
              ></div>
              <div className="p-6 relative z-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center rounded-lg">
                      <feature.icon className="h-7 w-7 text-amber-500 dark:text-amber-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.name}
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center">
                      <span className="inline-block py-1 px-3 text-xs font-medium bg-amber-500 text-white rounded-full">
                        Coming {feature.time}
                      </span>
                      <span className="ml-3 text-sm text-primary font-medium">
                        Stay tuned for updates!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
