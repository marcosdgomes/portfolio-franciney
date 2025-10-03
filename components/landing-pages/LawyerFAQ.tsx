"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function LawyerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      question: "Quanto custa uma consulta?",
      answer: "Nossas consultas têm valores acessíveis e transparentes. O valor varia conforme a complexidade do caso e a área do direito. Oferecemos consulta inicial gratuita para casos simples e valores especiais para primeiras consultas. Entre em contato para saber mais sobre nossos honorários."
    },
    {
      question: "Posso parcelar os honorários?",
      answer: "Sim! Entendemos que questões jurídicas podem surgir em momentos difíceis. Oferecemos planos de pagamento flexíveis e parcelamento dos honorários conforme a necessidade do cliente, sempre mantendo a transparência e clareza nos valores."
    },
    {
      question: "Quanto tempo leva um processo?",
      answer: "O tempo de duração de um processo varia conforme a complexidade do caso, a área do direito e o andamento no judiciário. Processos mais simples podem ser resolvidos em alguns meses, enquanto casos mais complexos podem levar anos. Nossa equipe sempre mantém o cliente informado sobre o andamento."
    },
    {
      question: "Vocês atendem casos em todo o Brasil?",
      answer: "Sim! Atendemos clientes em todo o território nacional. Com a tecnologia atual, realizamos consultas online, acompanhamento de processos à distância e mantemos comunicação constante com nossos clientes, independentemente da localização."
    },
    {
      question: "Como funciona o primeiro atendimento?",
      answer: "No primeiro atendimento, analisamos seu caso, explicamos as possibilidades jurídicas, estimamos o tempo e custos envolvidos, e apresentamos a melhor estratégia para sua situação. É um momento para você conhecer nossa equipe e esclarecer todas as dúvidas."
    },
    {
      question: "Vocês oferecem consultoria preventiva?",
      answer: "Sim! A consultoria preventiva é uma de nossas especialidades. Ajudamos empresas e pessoas físicas a evitar problemas jurídicos futuros através de análises contratuais, compliance, revisão de documentos e orientações sobre direitos e deveres."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <Card className="hover:shadow-lg transition-all duration-300 group-hover:border-orange-500/50 bg-white border-gray-200">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
                        {faq.question}
                      </h3>
                      <div className="ml-4 flex-shrink-0">
                        {openIndex === index ? (
                          <ChevronUp className="h-5 w-5 text-orange-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-600 group-hover:text-orange-500 transition-colors" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-200 pt-4">
                              <p className="text-gray-800 leading-relaxed font-medium">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Nossa equipe está pronta para esclarecer todas as suas questões. 
                  Entre em contato conosco para uma consulta personalizada.
                </p>
                <button
                  onClick={() => {
                    const formSection = document.getElementById('contact-form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Fale Conosco Agora
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
