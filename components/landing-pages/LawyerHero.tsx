"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Scale, ArrowRight, Phone, Mail } from 'lucide-react';

export default function LawyerHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500 rounded-full">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <span className="text-lg font-semibold text-orange-400">
                  Escritório de Advocacia
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Defendendo seus direitos com{' '}
                <span className="text-orange-400">ética e excelência</span>
              </h1>

              <h2 className="text-xl text-gray-300 mb-8 leading-relaxed font-medium">
                Mais de 15 anos de experiência em diversas áreas do direito, 
                oferecendo soluções jurídicas personalizadas e resultados comprovados.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                  onClick={() => {
                    const formSection = document.getElementById('contact-form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Fale com um Advogado
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>

                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Nossos Serviços
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-sm text-gray-300">Casos Resolvidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">15+</div>
                  <div className="text-sm text-gray-300">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">98%</div>
                  <div className="text-sm text-gray-300">Taxa de Sucesso</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Professional Image */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://cdn.pixabay.com/photo/2022/08/14/01/46/lawyer-7384762_1280.jpg"
                    alt="Advogado profissional em escritório moderno - Escritório de Advocacia São Paulo"
                    width={600}
                    height={384}
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
