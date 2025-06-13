import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { IconMail, IconMapPin } from "@tabler/icons-react";
import config from "@/config";

// Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  message: z.string().min(1, "Please enter your message"),
});

type FormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form data submitted:", data);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
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
            Get in Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/80"
          >
            Have questions or ready to transform your WhatsApp business communication? Our team is here to help.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            {isSubmitSuccessful ? (
              <div className="bg-primary/10 border border-primary rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-foreground/80 mb-6">
                  Your message has been received. Our team will get back to you shortly.
                </p>
                <button
                  onClick={() => reset()}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 rounded-md border border-input bg-background ${errors.name ? 'border-red-500' : 'border-input'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 border-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-md border bg-background ${errors.email ? 'border-red-500' : 'border-input'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 border-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    {...register("company")}
                    id="company"
                    type="text"
                    className={`w-full px-4 py-3 rounded-md border border-input bg-background ${errors.company ? 'border-red-500' : 'border-input'}`}
                    placeholder="Your Company"
                    />
                    {errors.company && (
                    <p className="text-red-500 border-red-500 text-sm mt-1">
                      {errors.company.message}
                    </p>
                  )}
                    
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    id="message"
                    className={`w-full px-4 py-3 rounded-md border border-input bg-background ${errors.message ? 'border-red-500' : 'border-input'} resize-none`}
                    rows={5}
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 rounded-md font-medium transition-colors",
                    isSubmitting
                      ? "bg-primary/70 text-primary-foreground cursor-not-allowed"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-foreground/80 mb-6">
                Whether you need a demo, have a question, or want to discuss custom solutions, we&apos;re here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4">
                  <IconMail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-foreground/80">
                    <a href={`mailto:${config.email}`}>{config.email}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4">
                  <IconMapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/80">{config.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <p className="text-foreground/80">
                Monday - Friday: 9:00 AM - 6:00 PM (IST)
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
