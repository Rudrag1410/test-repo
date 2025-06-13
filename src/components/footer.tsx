import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  
} from "@tabler/icons-react";
import config from "@/config";

const footerLinks = [
 
  {
    title: "Resources",
    links: [
      { label: "Features", href: "/#features" },
      
    
      { label: "Careers", href: "https://www.linkedin.com/company/pixel-tech-in/" },
    
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "#contact" },
      
      
      
    ],
  },
];

export function Footer() {
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
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Company info */}
          <motion.div variants={itemVariants} className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold text-primary">TrioChat</h2>
            </Link>
            <p className="text-foreground/80 mb-6 max-w-xs">
              Transform your WhatsApp business communication with AI-powered
              messaging solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <IconMail className="w-5 h-5 text-primary mr-3" />
                <span>{config.email}</span>
              </div>
              {/* <div className="flex items-center">
                <IconPhone className="w-5 h-5 text-primary mr-3" />
                <span>{config.phone}</span>
              </div> */}
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://app.triochat.io"
                className="text-foreground/60 hover:text-primary"
                aria-label="Twitter"
              >
                <IconBrandTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://app.triochat.io"
                className="text-foreground/60 hover:text-primary"
                aria-label="Facebook"
              >
                <IconBrandFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://app.triochat.io"
                className="text-foreground/60 hover:text-primary"
                aria-label="Instagram"
              >
                <IconBrandInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://app.triochat.io"
                className="text-foreground/60 hover:text-primary"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column) => (
            <motion.div
              key={column.title}
              variants={itemVariants}
              className="col-span-1"
            >
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-foreground/60"
        >
          <p>© {new Date().getFullYear()} TrioChat. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
