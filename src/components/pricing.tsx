
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with WhatsApp.",
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      { text: "1 WhatsApp Business Number", available: true },
      { text: "Up to 1,000 messages per month", available: true },
      { text: "Message Templates", available: true },
      { text: "Basic inbox management", available: true },
      { text: "AI Chatbot (coming soon)", available: false },
      { text: "Basic Analytics (coming soon)", available: false },
      { text: "Email support", available: true },
    ],
    cta: "Get Early Access",
    highlight: false,
    badge: "Early Access",
  },
  {
    name: "Professional",
    description: "For growing businesses that need more advanced features.",
    monthlyPrice: 79,
    yearlyPrice: 65,
    features: [
      { text: "3 WhatsApp Business Numbers", available: true },
      { text: "Up to 5,000 messages per month", available: true },
      { text: "Advanced Message Templates", available: true },
      { text: "Team inbox with 3 users (coming soon)", available: false },
      { text: "Advanced AI chatbot (coming soon)", available: false },
      { text: "Broadcast campaigns (coming soon)", available: false },
      { text: "Advanced analytics (coming soon)", available: false },
      { text: "Priority support", available: true },
    ],
    cta: "Get Early Access",
    highlight: true,
    badge: "Early Access",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations with complex needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    customPrice: "Custom",
    features: [
      { text: "Unlimited WhatsApp Business Numbers", available: true },
      { text: "Unlimited messages", available: true },
      { text: "Custom Templates", available: true },
      { text: "Unlimited team inbox users (coming soon)", available: false },
      { text: "Custom AI chatbot development (coming soon)", available: false },
      { text: "Advanced broadcast campaigns (coming soon)", available: false },
      { text: "Custom analytics & reporting (coming soon)", available: false },
      { text: "Enterprise integrations (coming soon)", available: false },
      { text: "Dedicated account manager", available: true },
      { text: "24/7 premium support", available: true },
    ],
    cta: "Contact Sales",
    highlight: false,
    badge: "Custom Solution",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
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

  function handleToggle() {
    setIsYearly(!isYearly);
  }

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
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
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80 mb-8"
          >
            Choose the plan that works best for your business needs. Get early
            access to our platform and be among the first to experience new
            features as they launch.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-3 mt-8"
          >
            <span
              className={cn(
                "text-sm font-medium",
                !isYearly ? "text-foreground" : "text-foreground/60"
              )}
            >
              Monthly
            </span>
            <button
              onClick={handleToggle}
              className={cn(
                "relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isYearly ? "bg-primary" : "bg-input"
              )}
            >
              <span
                className={cn(
                  "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
                  isYearly ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <div className="flex items-center space-x-1">
              <span
                className={cn(
                  "text-sm font-medium",
                  isYearly ? "text-foreground" : "text-foreground/60"
                )}
              >
                Yearly
              </span>
              <span className="inline-block px-2 py-0.5 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                Save 20%
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "rounded-xl p-8 transition-all duration-300 relative",
                plan.highlight
                  ? "bg-card border-2 border-primary shadow-xl transform md:scale-105"
                  : "bg-card border border-border shadow-md"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="px-3 py-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.badge && (
                <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded-full text-xs font-medium mb-4">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-foreground/70 mb-6">{plan.description}</p>

              <div className="mb-6">
                {plan.customPrice ? (
                  <span className="text-4xl font-bold">{plan.customPrice}</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-foreground/70">/month</span>
                    {isYearly && (
                      <div className="text-sm text-primary font-medium mt-1">
                        Billed annually
                      </div>
                    )}
                  </>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-5 h-5 ${
                        feature.available ? "text-primary" : "text-amber-500"
                      } mr-3 flex-shrink-0 mt-0.5`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 rounded-md font-medium transition-colors",
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-card rounded-xl p-8 max-w-3xl mx-auto border border-border shadow-md"
        >
          <h3 className="text-xl font-bold mb-4">Need a custom solution?</h3>
          <p className="text-foreground/80 mb-6">
            Contact our sales team to discuss your specific requirements and get
            a tailored plan for your business. We&apos;re constantly adding new
            features and would love to hear your feedback!
          </p>
          <Link href="https://calendly.com/rudragupta-pixeltechnology/30min" target="_blank" rel="noopener noreferrer">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
            Contact Sales
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
