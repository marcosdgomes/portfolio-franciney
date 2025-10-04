"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export default function LawyerTestimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Excelente atendimento! Resolveram meu caso trabalhista de forma rápida e eficiente. Recomendo para todos que precisam de um advogado competente.",
      rating: 5,
      case: "Direito Trabalhista"
    },
    {
      name: "João Santos",
      role: "Executivo",
      content: "Profissionais muito competentes e dedicados. Me ajudaram com questões empresariais complexas e sempre mantiveram a transparência total.",
      rating: 5,
      case: "Direito Empresarial"
    },
    {
      name: "Ana Costa",
      role: "Mãe",
      content: "Durante meu divórcio, me deram todo o suporte necessário. Foram sensíveis, profissionais e conseguiram um acordo justo para mim e meus filhos.",
      rating: 5,
      case: "Direito de Família"
    },
    {
      name: "Carlos Oliveira",
      role: "Aposentado",
      content: "Questão de herança resolvida com maestria. A equipe foi muito atenciosa e explicou todo o processo de forma clara. Muito satisfeito!",
      rating: 5,
      case: "Sucessões"
    },
    {
      name: "Patricia Lima",
      role: "Funcionária Pública",
      content: "Processo trabalhista ganho! A dedicação e competência da equipe fizeram toda a diferença. Indico com certeza para quem precisar.",
      rating: 5,
      case: "Direito Trabalhista"
    },
    {
      name: "Roberto Ferreira",
      role: "Empresário",
      content: "Recuperação judicial conduzida com excelência. Salvamos nossa empresa graças ao trabalho competente e estratégico da equipe.",
      rating: 5,
      case: "Direito Empresarial"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 500 casos resolvidos com sucesso e clientes satisfeitos
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:border-orange-500/50 bg-white border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <div className="relative mb-4">
                      <Quote className="h-8 w-8 text-orange-500 opacity-20 absolute -top-2 -left-2" />
                      <p className="text-gray-800 italic relative z-10 leading-relaxed">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-slate-900 text-base">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-700 font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
                            {testimonial.case}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Confiança e Resultados Comprovados
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                    <div className="text-gray-600">Casos Resolvidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                    <div className="text-gray-600">Taxa de Sucesso</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
