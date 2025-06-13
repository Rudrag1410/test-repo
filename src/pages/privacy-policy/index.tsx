import Head from 'next/head';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const PrivacyPolicy = () =>{
  const faqs = [
  {
      title: "1.  Jurisdictional Scope",
      content: (
        <p>This Privacy Policy applies to users worldwide. However, specific rights and obligations may vary based on your country or region, including but not limited to the European Union (GDPR), United States (CCPA), United Kingdom (UK GDPR), and other applicable jurisdictions. Where required, we will comply with local data protection laws and provide additional notices as necessary. </p>
      ),
    },
    {
      title: "2. Information We Collect",
      content: (
        <ul className="list-disc pl-6">
  <li>Personal Information
    <ul>
      <li>Identifiers: Name, email address, phone number, username, and password.</li>
      <li>Contact Information: Mailing address, communication preferences.</li>
      <li>Account Details: Profile information, account settings.</li>
    </ul>
  </li>
  <li>Usage Data
    <ul>
      <li>Device Information: IP address, browser type, operating system, device identifiers.</li>
      <li>Log Data: Pages viewed, access times, referring website addresses, interactions with features.</li>
    </ul>
  </li>
  <li>Communications
    <ul>
      <li>Messages: Content of communications sent through TrioChat.</li>
      <li>Support Requests: Information provided when contacting customer support.</li>
    </ul>
  </li>
  <li>Cookies and Tracking Technologies
    <ul>
      <li>Cookies: We use cookies and similar technologies to collect information about your interactions with our Services for analytics and personalization.</li>
    </ul>
  </li>
</ul>

      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <ul className="list-disc pl-6">
          <li>Provide, operate, and maintain our Services.</li>
          <li>Improve, personalize, and expand our Services. </li>
          <li>Communicate with you, including for customer support and updates.</li>
          <li>Process transactions and manage your account.</li>
          <li>Monitor and analyze usage and trends to improve your experience.</li>
          <li>Enforce our terms, prevent fraud, and comply with legal obligations.</li>
        </ul>
      ),
    },
    {
      title: "4. Data Sharing and Disclosure",
      content: (
        <ul className="list-disc pl-6">
          <li>With Service Providers: As described above.</li>
          <li>For Legal Reasons: If required by law or to protect our rights, users, or others. </li>
          <li>Business Transfers: In connection with a merger, acquisition, or asset sale. </li>
          <li>With Your Consent: Where you have provided explicit permission.</li>
          <li>We do not sell your personal information to third parties.</li>
        </ul>
      ),
    },
    {
      title: "5. International Data Transfers ",
      content: "Your information may be transferred to, and maintained on, servers located outside your country of residence. We take appropriate safeguards to ensure your data is protected, including the use of Standard Contractual Clauses (SCCs) where applicable. "
    },
    {
      title: "6. Data Retention",
      content: "We retain your personal information only as long as necessary to fulfill the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements."
    },
    
    {
      title: "7. Your Rights",
      content: (
        <ul className="list-disc pl-6">
          <li> Access - Request access to your personal data. </li>
          <li>Correction: Request corrections to inaccurate or incomplete data. </li>
          <li>Deletion: Request deletion of your data. </li>
          <li>Restriction: Request restriction of processing. </li>
          <li>Portability: Request transfer of your data to another service.</li>
          <li>Objection: Object to certain processing activities.</li>
        <p>To exercise these rights, please contact us </p>

        </ul>
      ),
    },
    {
      title: "8. Children's Privacy",
      content: "Our Services are not intended for children under 13 (or under 16 in the EU/UK). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately. "
    },
    {
      title: "9. Security",
      content: "We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure."
    },
    {
      title: "10. Third-Party Services",
      content: (
        <div className="text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            We may share your information with third-party service providers to facilitate our Services, including but not limited to -
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Hosting Providers: For data storage and infrastructure.</li>
            <li>Analytics Providers: Such as Google Analytics, for usage insights.</li>
            <li>Payment Processors: To process transactions securely.</li>
            <li>Communication Tools: For sending emails or notifications.</li>
          </ul>
          <p>
            These third parties are authorized to use your personal information only as necessary to provide these services to us. We require all third-party service providers to adhere to strict data protection standards and not to use your information for their own marketing purposes.
          </p>
        </div>
      ),
    },
    {
      title: "11. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date. "
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Privacy Policy - TrioChat</title>
        <meta name="description" content="TrioChat privacy policy and notices for students, employees, and other stakeholders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <header className="bg-gradient-to-r from-blue-100 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg rounded-b-xl border-b-4 border-blue-400">
          <div className="max-w-4xl mx-auto px-4 py-12 flex items-center justify-center">
            <h1
              className="text-4xl sm:text-4xl font-bold text-center text-blue-800 dark:text-blue-200 tracking-wide pb-2 border-b-4 border-blue-300 w-half max-w-2xl mx-auto"
            >
              Privacy Policy
            </h1>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8 font-sans">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
            {/* Introduction */}
            <div className="mb-8 space-y-6 ">
              
              Welcome to TrioChat! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, website, and applications (collectively, the Services). Please read this policy carefully. By accessing or using our Services, you agree to the terms of this Privacy Policy. 
            </div>

            {/* FAQs */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between font-sans items-center p-4 text-left font-medium bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    {faq.title}
                    <span>{openIndex === index ? <HiChevronUp /> : <HiChevronDown />}</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 text-gray-700 dark:text-gray-300 border-t dark:border-gray-600 bg-white dark:bg-gray-800">
                      {faq.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Notices Sections */}
            

            {/* Important Note */}
            <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-600 rounded-md font-sans">
              <p className="text-gray-800 dark:text-gray-100 font-medium">
                As more than one of the above notices may apply to you depending upon the context in which your personal data is collected and processed, be sure to carefully read each applicable notice above so that you are fully informed.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Any questions, concerns, or complaints about the operation of these notices can be addressed to the Data Protection Officer at{' '}
                <a href="mailto:privacy@triochat.io" className="text-blue-600 hover:text-blue-800 underline">support@triochat.io</a>. In addition, you may also contact us at{' '}
                <a href="mailto:privacy@triochat.io" className="text-blue-600 hover:text-blue-800 underline">support@triochat.io</a> or the address below:
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

export default PrivacyPolicy;