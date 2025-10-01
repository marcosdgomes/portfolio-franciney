"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >

          {/* Main Content */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-foreground tracking-tight"
          >
            <span className="block">Franciney</span>
            <span className="block">Freitas</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium"
          >
            {t.hero.subtitle}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed md:leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          >
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 text-center">
                <Mail className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium">francineysfreitas@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 text-center">
                <MapPin className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium">Cascavel - PR</p>
              </CardContent>
            </Card>

            <a
              href="https://www.linkedin.com/in/franciney-freitas-098410173/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Linkedin className="h-6 w-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium">Franciney Freitas</p>
                </CardContent>
              </Card>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="modern"
              size="lg"
              className="group px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ x: 2 }}
              >
                {t.hero.cta}
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-sm"
                >
                  ↗
                </motion.div>
              </motion.span>
            </Button>

            <Button
              variant="modern"
              size="lg"
              className="group px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/franciney-freitas-098410173/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                {t.hero.linkedin}
                <span className="text-sm opacity-60">↗</span>
              </a>
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
