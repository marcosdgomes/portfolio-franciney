"use client";

import React from 'react';
import Head from 'next/head';
import LawyerHero from '@/components/landing-pages/LawyerHero';
import LawyerServices from '@/components/landing-pages/LawyerServices';
import LawyerBenefits from '@/components/landing-pages/LawyerBenefits';
import LawyerTestimonials from '@/components/landing-pages/LawyerTestimonials';
import LawyerContactForm from '@/components/landing-pages/LawyerContactForm';
import LawyerFAQ from '@/components/landing-pages/LawyerFAQ';
import LawyerCTA from '@/components/landing-pages/LawyerCTA';
import LawyerFooter from '@/components/landing-pages/LawyerFooter';
import WhatsAppButton from '@/components/landing-pages/WhatsAppButton';

export default function LawyerLandingPage() {
  return (
    <>
      <Head>
        <title>Law Firm - Defending your rights with ethics and excellence</title>
        <meta 
          name="description" 
          content="Over 15 years of experience in various areas of law. We offer personalized legal solutions focused on results. Free consultation available." 
        />
        <meta name="keywords" content="lawyer, labor law, civil law, corporate law, family law, successions, legal consultation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Law Firm - Defending your rights" />
        <meta property="og:description" content="Over 15 years of experience in various areas of law. Personalized legal solutions and proven results." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Law Firm - Defending your rights" />
        <meta name="twitter:description" content="Over 15 years of experience in various areas of law. Personalized legal solutions and proven results." />
        <link rel="canonical" href="https://francineyfreitas.com/eng/landing-pages/lawyer" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <LawyerHero />

        {/* Services Section */}
        <LawyerServices />

        {/* Benefits Section */}
        <LawyerBenefits />

        {/* Testimonials Section */}
        <LawyerTestimonials />

        {/* Contact Form Section */}
        <LawyerContactForm />

        {/* FAQ Section */}
        <LawyerFAQ />

        {/* Final CTA Section */}
        <LawyerCTA />

        {/* Footer */}
        <LawyerFooter />
        
        {/* WhatsApp Button */}
        <WhatsAppButton 
          phoneNumber="5511999999999"
          message="Hello! I would like to schedule a legal consultation. Can you help me?"
        />
      </div>
    </>
  );
}
