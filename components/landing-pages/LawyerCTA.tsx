"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight, Clock, Shield } from 'lucide-react';

export default function LawyerCTA() {
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
              Não deixe seus direitos{' '}
              <span className="text-orange-400">para depois</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Cada dia que passa pode ser crucial para o seu caso. 
              Nossa equipe está pronta para defender seus interesses com agilidade e competência.
            </p>
          </motion.div>

          {/* Urgency Indicators */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-white">
              <Clock className="h-6 w-6 text-orange-400" />
              <span className="font-semibold">Atendimento 24h</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Shield className="h-6 w-6 text-orange-400" />
              <span className="font-semibold">Confidencialidade Total</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Phone className="h-6 w-6 text-orange-400" />
              <span className="font-semibold">Resposta Imediata</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-2xl"
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Phone className="h-6 w-6 mr-3" />
              Agende sua Consulta Agora
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-2xl"
              onClick={() => {
                window.open('https://wa.me/5511999999999', '_blank');
              }}
            >
              WhatsApp
            </Button>
          </motion.div>

          {/* Trust Elements */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Casos Resolvidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-sm text-gray-300">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
                <div className="text-sm text-gray-300">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">24h</div>
                <div className="text-sm text-gray-300">Tempo de Resposta</div>
              </div>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-lg text-gray-300 italic">
              "A justiça atrasada não é justiça. Conte conosco para defender seus direitos com agilidade e eficiência."
            </p>
            <p className="text-sm text-orange-400 font-semibold mt-2">
              - Equipe de Advogados Especializados
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
