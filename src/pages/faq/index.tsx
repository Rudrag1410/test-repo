import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@tabler/icons-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const FAQSection = () => {

  const faqs = [
    {
      question: "What is TrioChat?",
      answer:
        "TrioChat is an evolving WhatsApp Business platform that helps businesses connect with customers and drive growth through messaging. We currently offer messaging and template features, with AI chatbots, team inbox, broadcast campaigns, and analytics coming soon.",
    },
    {
      question: "What features are currently available?",
      answer:
        "Currently, we offer WhatsApp messaging capabilities and message templates. You can send and receive messages through our platform and create reusable templates for consistent communication. We're actively developing additional features that will be released soon.",
    },
    {
      question: "When will additional features be available?",
      answer:
        "We're actively developing our platform with new features launching regularly. AI chatbots, team inbox, broadcast campaigns, and analytics are on our roadmap for the coming months. Early access users will be the first to try these features as they become available.",
    },
    {
      question: "How do I get started with TrioChat?",
      answer:
        "Getting started with TrioChat is simple. Sign up for early access, connect your WhatsApp Business account, and start engaging with your customers right away. Our team will guide you through the setup process and provide resources to help you get the most out of our platform.",
    },
    {
      question: "Do I need a WhatsApp Business account to use TrioChat?",
      answer:
        "Yes, you need a WhatsApp Business account to use TrioChat. If you don't have one yet, we can help you apply for one through our platform. The approval process typically takes 24-48 hours.",
    },
    {
      question: "How does TrioChat's pricing work?",
      answer:
        "TrioChat offers flexible pricing plans based on your business needs. We have three main tiers: Starter, Professional, and Enterprise. All plans include our currently available features, with access to new capabilities as they launch. As an early access user, you'll receive special pricing and priority access to new features.",
    },
    {
      question: "What kind of support does TrioChat offer?",
      answer:
        "We offer multiple support channels including email and live chat. Our knowledge base is constantly growing with detailed guides and tutorials. Enterprise customers receive a dedicated account manager and priority support.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer early access to our platform with a free trial period so you can experience the currently available features and be among the first to try new features as they launch. No credit card is required to get started.",
    },
  ];


    const [openItem, setOpenItem] = useState<number | null>(null);
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

    const toggleItem = (index: number) => {
      setOpenItem(openItem === index ? null : index);
    };

    return (
      <section id="faq" className="py-20 md:py-32 bg-background">
        <Header />
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80"
            >
              Have questions about TrioChat? Find quick answers to common queries
              below.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto divide-y divide-border"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants} className="py-5">
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div
                    className={cn(
                      "flex-shrink-0 ml-4 p-1 rounded-full transition-transform duration-300",
                      openItem === index ? "rotate-180" : ""
                    )}
                  >
                    <IconChevronDown className="w-5 h-5 text-primary" />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openItem === index ? "auto" : 0,
                    opacity: openItem === index ? 1 : 0,
                    marginTop: openItem === index ? "1rem" : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-foreground/80">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12 pb-4">
            <p className="text-lg mb-6">
              Still have questions about our early access program or upcoming
              features?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3  bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      <Footer />
      </section>
    );
  }


export default FAQSection;
