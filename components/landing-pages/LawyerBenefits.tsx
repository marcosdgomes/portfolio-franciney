"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Users, 
  Shield, 
  Award, 
  Phone, 
  CheckCircle,
  Star,
  TrendingUp
} from 'lucide-react';

export default function LawyerBenefits() {
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

  const benefits = [
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Resposta em até 24 horas para consultas urgentes",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Advogados experientes em cada área do direito",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Confiança e Transparência",
      description: "Honorários claros e comunicação transparente",
      color: "text-purple-500"
    },
    {
      icon: Award,
      title: "Resultados Comprovados",
      description: "Mais de 500 casos resolvidos com sucesso",
      color: "text-orange-500"
    },
    {
      icon: Phone,
      title: "Suporte 24/7",
      description: "Disponibilidade para emergências jurídicas",
      color: "text-red-500"
    },
    {
      icon: CheckCircle,
      title: "Garantia de Qualidade",
      description: "Compromisso com a excelência em cada processo",
      color: "text-indigo-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Casos Resolvidos", icon: Star },
    { number: "15+", label: "Anos de Experiência", icon: Award },
    { number: "98%", label: "Taxa de Sucesso", icon: TrendingUp },
    { number: "24h", label: "Tempo de Resposta", icon: Clock }
  ];

  return (
    <section className="py-20 bg-white">
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
              Por que escolher nosso escritório?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa experiência e compromisso com a excelência fazem a diferença 
              na defesa dos seus direitos e interesses.
            </p>
            
            {/* Professional Image */}
            <div className="mt-8 max-w-2xl mx-auto">
              <img
                src="https://cdn.pixabay.com/photo/2022/06/21/04/37/family-law-solicitors-7275099_1280.jpg"
                alt="Equipe de advogados especializados em direito de família - Escritório de Advocacia"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="p-6 rounded-2xl border border-gray-200 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group-hover:bg-orange-50">
                  <div className={`w-12 h-12 ${benefit.color} bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Números que comprovam nossa excelência
                </h3>
                <p className="text-xl text-gray-300">
                  Resultados reais para clientes satisfeitos
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-orange-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
