import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    quote:
      "TrioChat has completely transformed how we engage with customers. We've increased lead conversion by 78% and improved response times by 92%.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "GlobalTech Solutions",
    avatar: "S",
    avatarColor: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
    stats: [
      { label: "Increase in lead generation", value: "78%" },
      { label: "Faster response times", value: "92%" },
      { label: "Higher customer satisfaction", value: "45%" },
    ],
  },
  {
    quote:
      "Implementing TrioChat's WhatsApp automation has streamlined our entire sales process. Our sales team can now focus on high-value conversations instead of mundane tasks.",
    author: "David Rodriguez",
    position: "Sales Operations Manager",
    company: "Veridian Dynamics",
    avatar: "D",
    avatarColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    stats: [
      { label: "Growth in sales pipeline", value: "63%" },
      { label: "Improvement in team productivity", value: "50%" },
      { label: "Increase in conversion rate", value: "31%" },
    ],
  },
  {
    quote:
      "The AI chatbots built on TrioChat have revolutionized our customer support. We're handling 3x more inquiries without expanding our team and maintaining our high quality standards.",
    author: "Michelle Chen",
    position: "Customer Success Lead",
    company: "NexGen Retail",
    avatar: "M",
    avatarColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    stats: [
      { label: "More inquiries handled", value: "3x" },
      { label: "Reduction in response time", value: "68%" },
      { label: "Cost savings", value: "42%" },
    ],
  },
];

export function Testimonials() {
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
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6"
          >
            Trusted by Leading Businesses
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-foreground/80"
          >
            See how companies are using TrioChat to transform their WhatsApp
            business operations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card rounded-xl shadow-sm border border-border overflow-hidden flex flex-col"
              >
                <div className="p-5 flex-1">
                  <div className="flex items-center text-primary mb-4">
                    <IconQuote className="h-5 w-5 mr-2" />
                    <span className="text-primary text-sm">
                      What clients say
                    </span>
                  </div>

                  <p className="text-foreground mb-5 text-sm sm:text-base">
                    {testimonial.quote}
                  </p>

                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full ${testimonial.avatarColor} flex items-center justify-center mr-3`}
                    >
                      <span className="font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-foreground/70">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto border-t border-border">
                  <div className="grid grid-cols-3 divide-x divide-border">
                    {testimonial.stats.map((stat, i) => (
                      <div key={i} className="text-center p-3 md:p-4">
                        <p className="text-lg md:text-xl font-bold text-primary mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs text-foreground/70 line-clamp-2">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 md:mt-20"
        >
       {/* <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 items-center"
          >
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="flex justify-center">
                <div className="h-8 w-20 bg-muted/30 rounded flex items-center justify-center">
                  <span className="text-foreground/50 font-medium text-xs">
                    LOGO {index}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>  */}
        </motion.div> 
      </div>
    </section>
  );
}
