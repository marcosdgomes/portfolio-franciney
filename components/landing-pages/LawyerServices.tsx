"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  Users, 
  Building, 
  Heart, 
  ArrowRight,
  Scale,
  Shield,
  FileText
} from 'lucide-react';

export default function LawyerServices() {
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

  const services = [
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos trabalhistas, rescisões, acordos e processos contra empregadores.",
      color: "from-blue-500 to-blue-600",
      features: ["Rescisão Indireta", "Horas Extras", "FGTS", "Férias Proporcionais"]
    },
    {
      icon: Users,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, danos morais e materiais, e questões patrimoniais.",
      color: "from-green-500 to-green-600",
      features: ["Contratos", "Danos Morais", "Responsabilidade Civil", "Patrimônio"]
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Constituição de empresas, contratos comerciais, recuperação judicial e falências.",
      color: "from-purple-500 to-purple-600",
      features: ["Constituição de Empresas", "Contratos Comerciais", "Recuperação Judicial", "Falências"]
    },
    {
      icon: Heart,
      title: "Família e Sucessões",
      description: "Divórcios, pensão alimentícia, guarda de filhos, inventários e testamentos.",
      color: "from-pink-500 to-pink-600",
      features: ["Divórcios", "Pensão Alimentícia", "Guarda de Filhos", "Inventários"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
              Nossas Especialidades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
              sempre com foco na defesa dos seus interesses.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group-hover:border-orange-500/50 bg-white border-gray-200">
                  <CardHeader className="text-center pb-4 bg-gradient-to-br from-slate-50 to-gray-100 rounded-t-lg">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 p-6">
                    <p className="text-gray-700 text-center leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-200 hover:scale-105"
                      onClick={() => {
                        const contactSection = document.getElementById('contact-form');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Saiba Mais
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-slate-900 to-blue-900 text-white overflow-hidden relative">
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://cdn.pixabay.com/photo/2017/10/05/20/49/office-2820890_1280.jpg"
                  alt="Escritório de advocacia moderno - Ambiente profissional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <CardContent className="text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-orange-500 rounded-full">
                    <Scale className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Consultoria Jurídica Personalizada
                </h3>
                <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                  Cada caso é único e merece atenção especializada. Nossa equipe de advogados 
                  experientes está pronta para analisar sua situação e oferecer a melhor estratégia jurídica.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <Shield className="h-6 w-6 text-orange-400" />
                    <span className="font-semibold">Confidencialidade</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="h-6 w-6 text-orange-400" />
                    <span className="font-semibold">Documentação Completa</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Scale className="h-6 w-6 text-orange-400" />
                    <span className="font-semibold">Ética Profissional</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
