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
        <title>Escritório de Advocacia São Paulo | Advogados Especializados | Consulta Gratuita</title>
        <meta 
          name="description" 
          content="Escritório de advocacia em São Paulo com 15+ anos de experiência. Especialistas em Direito Trabalhista, Civil, Empresarial e Família. Mais de 500 casos resolvidos. Consulta gratuita disponível." 
        />
        <meta name="keywords" content="advogado são paulo, escritório advocacia, direito trabalhista, direito civil, direito empresarial, direito família, sucessões, consultoria jurídica, advogado especializado, processo judicial, defesa direitos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Escritório de Advocacia & Associados" />
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Escritório de Advocacia São Paulo | Advogados Especializados" />
        <meta property="og:description" content="15+ anos de experiência em Direito Trabalhista, Civil, Empresarial e Família. Mais de 500 casos resolvidos. Consulta gratuita disponível." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://francineyfreitas.com/landing-pages/lawyer" />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2017/10/05/20/49/office-2820890_1280.jpg" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:site_name" content="Escritório de Advocacia & Associados" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Escritório de Advocacia São Paulo | Advogados Especializados" />
        <meta name="twitter:description" content="15+ anos de experiência em Direito Trabalhista, Civil, Empresarial e Família. Mais de 500 casos resolvidos." />
        <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2017/10/05/20/49/office-2820890_1280.jpg" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <link rel="canonical" href="https://francineyfreitas.com/landing-pages/lawyer" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Escritório de Advocacia & Associados",
              "description": "Escritório de advocacia especializado em Direito Trabalhista, Civil, Empresarial e Família com mais de 15 anos de experiência.",
              "url": "https://francineyfreitas.com/landing-pages/lawyer",
              "telephone": "+55-11-99999-9999",
              "email": "contato@advocacia.com.br",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Paulista, 1000",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "areaServed": "BR",
              "serviceType": ["Direito Trabalhista", "Direito Civil", "Direito Empresarial", "Família e Sucessões"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços Jurídicos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Direito Trabalhista"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Direito Civil"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Direito Empresarial"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Família e Sucessões"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              }
            })
          }}
        />
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
          message="Olá! Gostaria de agendar uma consulta jurídica. Podem me ajudar?"
        />
      </div>
    </>
  );
}
