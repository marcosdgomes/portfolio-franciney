"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function LawyerContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simular envio para endpoint (substituir pela URL real)
      const response = await fetch('https://workflows.cloud.dmcitsolutions.com/webhook/francineyfreitas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          service: formData.service,
          source: 'Lawyer Landing Page',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Direito Trabalhista',
    'Direito Civil',
    'Direito Empresarial',
    'Família e Sucessões',
    'Outros'
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 99999-9999",
      href: "tel:+5511999999999"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@advocacia.com.br",
      href: "mailto:contato@advocacia.com.br"
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Av. Paulista, 1000 - São Paulo/SP",
      href: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact-form" className="py-20 bg-white">
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
              Solicite seu Atendimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco e receba uma consulta jurídica personalizada. 
              Nossa equipe está pronta para ajudá-lo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="p-6 bg-white border-gray-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-t-lg -m-6 mb-6 p-6">
                  <CardTitle className="text-2xl text-slate-900 font-bold">
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-orange-50 transition-colors group border border-gray-200"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 rounded-lg bg-orange-100 text-orange-600 group-hover:scale-110 transition-transform">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-base">{info.label}</p>
                        <p className="text-gray-700 font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
                <CardContent>
                  <h3 className="text-xl font-bold mb-4">
                    Por que escolher nosso escritório?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">Atendimento personalizado e humanizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">Honorários transparentes e justos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">Experiência comprovada em diversas áreas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">Compromisso com resultados eficazes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-white border-gray-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-t-lg -m-6 mb-6 p-6">
                  <CardTitle className="text-2xl text-slate-900 font-bold">
                    Formulário de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-white text-gray-900 placeholder-gray-500"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-white text-gray-900 placeholder-gray-500"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-white text-gray-900 placeholder-gray-500"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-slate-900 mb-2">
                        Área de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                      >
                        <option value="">Selecione uma área</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full min-h-[120px] border-gray-300 focus:border-orange-500 focus:ring-orange-500 bg-white text-gray-900 placeholder-gray-500"
                        placeholder="Descreva brevemente sua situação jurídica..."
                      />
                    </div>

                    {/* Submit Status */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 bg-green-100 text-green-800 rounded-lg"
                      >
                        <CheckCircle className="h-5 w-5" />
                        <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 bg-red-100 text-red-800 rounded-lg"
                      >
                        <AlertCircle className="h-5 w-5" />
                        <span>Erro ao enviar mensagem. Tente novamente.</span>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="h-5 w-5" />
                          Solicitar Atendimento
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
