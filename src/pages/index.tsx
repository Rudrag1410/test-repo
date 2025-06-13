import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ComingSoonBanner } from "@/components/coming-soon-banner";
import { FeaturesSection } from "@/components/features-section";

import { HowItWorks } from "@/components/how-it-works";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import Meta from "@/components/Meta";

export default function Home() {
  return (
    <>
      <Meta
        pageTitle="TrioChat - WhatsApp Business Messaging Platform"
        pageDescription="Go from sales to deals on WhatsApp with TrioChat"
        keyWords="WhatsApp Business, WhatsApp Marketing, WhatsApp Sales, WhatsApp Leads, WhatsApp Lead Generation, WhatsApp Lead Capture, WhatsApp Lead Nurturing, WhatsApp Lead Management, WhatsApp Lead Tracking, WhatsApp Lead Automation, WhatsApp Lead Scoring, WhatsApp Lead Segmentation, WhatsApp Lead Personalization, WhatsApp Lead Communication, WhatsApp Lead Engagement, WhatsApp Lead Conversion, WhatsApp Lead Retention, WhatsApp Lead Loyalty, WhatsApp Lead Referral, WhatsApp Lead Reward, WhatsApp Lead Promotion, WhatsApp Lead Discount, WhatsApp Lead Offer, WhatsApp Lead Coupon, WhatsApp Lead Voucher, WhatsApp Lead Gift, WhatsApp Lead Reward, WhatsApp Lead Promotion, WhatsApp Lead Discount, WhatsApp Lead Offer, WhatsApp Lead Coupon, WhatsApp Lead Voucher, WhatsApp Lead Gift"
      />

      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <ComingSoonBanner />
        <FeaturesSection />
        
        <HowItWorks />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
