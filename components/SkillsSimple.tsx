"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SkillsSimple() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight">
              {t.skills.title}
            </h2>
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              {t.skills.description}
            </p>
          </motion.div>

          {/* Simple Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t.skills.frontend}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">React, Next.js, TypeScript, JavaScript, Vite, WordPress</p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t.skills.ui}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tailwind CSS, shadcn/ui, Radix UI, Design Responsivo, Figma, Canva</p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t.skills.automation}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">n8n, APIs, ClickUp, SendPulse, Mailchimp, Webhooks</p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t.skills.seo}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">SEO On-page, Google Ads, E-mail Marketing, Google Analytics</p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t.skills.quality}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t.skills.technologies.cypress}, {t.skills.technologies.githubActions}, {t.skills.technologies.qa}, {t.skills.technologies.informationSecurity}</p>
              </CardContent>
            </Card>

            <Card className="h-full hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{t.skills.other}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Git, PostgreSQL, Supabase, Node.js, {t.skills.technologies.projectManagement}, Scrum</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

