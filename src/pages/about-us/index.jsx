import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Head from "next/head";
import Link from "next/link";
import { ChatDemo } from "@/components/chat-demo";
import {
  FaUsers,
  FaShieldAlt,
  FaBolt,
  FaHeart,
  FaBullseye,
} from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About-Us TrioChat</title>
        <meta
          name="description"
          content="TrioChat privacy policy and notices for students, employees, and other stakeholders"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <main className="mx-auto px-4 py-8 font-sans">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            {/* Hero Section */}
            <section
              className="border-l-4 border-blue-300 pl-2 rounded relative"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="relative z-10 py-1 flex items-center justify-center space-x-2 w-full">
                <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Welcome to TrioChat — Where Business Meets Simplicity.
                </h1>
                <Link
                  href="http://triochat.io"
                  className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded hover:bg-primary/90 transition whitespace-nowrap"
                >
                  Explore !!
                </Link>
              </div>
            </section>

            {/* Mission/Vision and Features Section - First and Full Width */}
            <section className="w-full p-12 px-4 md:px-20 bg-muted/30 dark:bg-gray-900 mt-12 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
              </div>

              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left p-6">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <FaUsers className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-3xl font-semibold font-sans text-gray-700 dark:text-gray-300">
                      Why TrioChat ?
                    </h2>
                  </div>

                  <p className="max-w-xl mx-auto lg:mx-0 text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    Triochat is a powerful communication platform built for
                    businesses to simplify and automate customer interactions
                    via WhatsApp. As a Meta Business Partner, Triochat enables
                    businesses to send template messages, manage customer chats,
                    schedule broadcasts, and create custom templates — all from
                    one centralized dashboard. Designed to be intuitive,
                    scalable, and secure, it serves as a reliable tool for
                    customer engagement, marketing, and support.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <FaBullseye className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          Our Mission
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          To make a modern, scalable communication solution
                          designed for businesses who want to make the most of
                          WhatsApp. We offer a suite of powerful tools to help
                          you connect, engage, and grow. As a Meta Business
                          Partner, we ensure reliable integration, compliance,
                          and performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Demo Section */}
                <div className="w-full lg:w-1/2">
                  <ChatDemo className="w-full max-w-4xl h-auto" />
                </div>
              </div>
            </section>

            {/* Features Section - Full Width */}
            <section className="w-full p-12 px-4 md:px-20 bg-muted/30 dark:bg-gray-900 mt-12 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-500 blur-3xl"></div>
              </div>

              <div className="max-w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
                {/* Features Grid - Full Width on Mobile */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FiMessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Effortless
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Empower your customer support and sales teams with
                      multi-agent chat support, intelligent assignment rules,
                      and a shared inbox. Say goodbye to chaos and hello to
                      organized, contextual conversations.
                    </p>
                  </div>

                  <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaBolt className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Fast
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Run targeted WhatsApp campaigns with our broadcast
                      feature. Whether you're promoting a sale, sending bulk
                      updates, or notifying users of important changes, TrioChat
                      handles it with scale and precision — while staying
                      compliant with WhatsApp policies.
                    </p>
                  </div>

                  <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaShieldAlt className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Secure
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      With TrioChat, your business stays fully aligned with Meta
                      messaging rules and best practices. We monitor compliance
                      in real time and help you avoid message rejections or
                      account blocks.
                    </p>
                  </div>

                  <div className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaHeart className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Flexible
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      TrioChat is designed to adapt to your operations, not the
                      other way around. Whether you are a small team handling
                      support or a large enterprise managing hundreds of
                      conversations daily, TrioChat gives you the tools and
                      customization you need to work your way.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-8 text-center">
              <h2 className="text-3xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Just a Click and Know More?
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore our programs and unlock your potential today.
              </p>
              <Link
                href="/#features"
                className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded shadow hover:bg-primary/90 transition"
              >
                Explore Programs
              </Link>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
