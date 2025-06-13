import Head from "next/head";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function TermsConditions() {
  const faqs = [
    {
      title: "Who Can Use Triochat",
      content: (
        <p>
          You must be at least 18 years old to use Triochat. If you create an account,
          you must give us correct and up-to-date information. You are responsible for
          everything that happens with your account, so keep your password safe.
        </p>
      ),
    },
    {
      title: "How You Can Use Triochat",
      content: (
        <p>
          Triochat is made to help people and businesses communicate better.
          You agree to use Triochat only for legal and honest purposes.
          Please do not use Triochat for anything illegal, harmful, or misleading.
 
        </p>
      ),
    },
    {
      title: "Payments and Plans",
      content: (
        <p>
          Some features of Triochat may cost money. If you choose a paid plan,
          you agree to pay the fees on time. These payments are usually not
          refundable. If you do not pay, we may pause or stop your access to those features.
        </p>
      )
    },
    {
      title: "Your Content",
      content: (
        <p>
          You own the messages, files, and information you share on Triochat. We do not claim
          ownership. However, by using Triochat, you give us permission to
          use your content so we can run and improve the service. You
          are responsible for making sure your content does not break any laws.
        </p>
      ),
    },
    {
      title: "Privacy",
      content: (
        <p>
          We care about your privacy. Our Privacy Policy explains how we
          collect and use your information. Please read it to understand
          what happens with your data.
          </p>
      ),
    },
    {
      title: "Using Other Services",
      content: (
        <p>
          Triochat may connect with other apps or services. If you use
          these, you must also follow their rules. We are not responsible
          for what happens on other apps or services.
        </p>
      ),
    },
    {
      title: "What You Cannot Do",
      content: (
        <ul className="list-disc pl-5">
          <li>Do not try to break, hack, or damage Triochat.</li>
          <li>Do not copy or use our software in ways we did not allow.</li>
          <li>Do not send viruses, spam, or harmful content.</li>
          <li>Do not use Triochat to hurt or trick others.</li>
        
          </ul>
      ),
    },
    {
      title: "Ending Your Use",
      content: (
        <p>
          You can stop using Triochat at any time. We may stop your access
          if you break these rules or use Triochat in a harmful way. Some
          parts of these terms still apply even after you stop using Triochat.
        </p>
      ),
    },
    {
      title: "No Guarantees",
      content: (
        <p>
          We try our best to keep Triochat working well,
          but we cannot promise it will always be perfect or
          available. We are not responsible for any losses or
          damages that happen from using Triochat.
 
        </p>
      ),
    },
    
    
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Terms of Use - TrioChat</title>
        <meta name="description" content="TrioChat terms of service and conditions for users and stakeholders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <header className="bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg rounded-b-xl border-b-4 border-blue-400">
          <div className="max-w-4xl mx-auto px-4 py-12 flex items-center justify-center">
            <h1
              className="text-4xl sm:text-4xl font-semi-bold text-center text-blue-800 dark:text-blue-200 tracking-wide pb-2 border-b-4 border-blue-300 w-half max-w-2xl mx-auto"
            >
              Terms of Use
            </h1>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 font-sans">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            {/* Introduction */}
            <div className="mb-8 space-y-6 ">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                This website is owned and operated by Pixel Technologies Pvt. Ltd.
                (hereinafter referred to as “PixelTech”). Please read these Terms
                of Use and the TrioChat Privacy Policy carefully before using any
                part of the TrioChat website or platform (the “Site,” which includes
                all content, services, chat interfaces, APIs, and features available
                under the domain triochat.com and its subdomains). These ToS and the
                Privacy Policy collectively form legally binding agreements
                (the “Agreements”) between you and TrioChat. By accessing or using
                the Site, whether as a registered user or a visitor, you acknowledge
                that you have read, understood, and agree to be legally bound by
                these Agreements. If you do not accept or understand these terms,
                please do not use the Site or any of its services. TrioChat reserves
                the right to revise these ToS at any time without prior notice. Any
                changes will become effective immediately upon being posted to this page,
                along with an updated effective date. Continued access or use of the Site
                after any such modifications constitutes your acceptance of the revised
                ToS on a forward-looking basis. We encourage you to review this page
                periodically to stay informed about the most current version.
 
              </p>
            </div>

            {/* FAQs / Terms Sections */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-3 text-left font-medium bg-transparent text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded"
                  >
                    <span>{faq.title}</span>
                    <span className="ml-2 text-xl text-gray-400">{openIndex === index ? <HiChevronUp /> : <HiChevronDown />}</span>
                  </button>
                  {openIndex === index && (
                    <div className="pl-4 pr-2 pb-3 pt-1 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded">
                      {faq.content}
                    </div>
                  )}
                  {index !== faqs.length - 1 && (
                    <hr className="my-2 border-gray-200 dark:border-gray-700" />
                  )}
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have questions about these Terms, please email us at{' '}
                <a href="mailto:privacy@triochat.io" className="text-blue-600 hover:text-blue-800 underline">support@triochat.io</a>.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                <address className="text-gray-700 dark:text-gray-300 not-italic">
                  <strong>TrioChat</strong><br />
                 India
                </address>
              </div>
            </div>
          </div>
        </main>

      <Footer />
      </div>
    </>
  );
}
