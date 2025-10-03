"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function LawyerFooter() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const quickLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre Nós", href: "#" },
    { name: "Contato", href: "#contact-form" }
  ];

  const services = [
    "Direito Trabalhista",
    "Direito Civil",
    "Direito Empresarial",
    "Família e Sucessões"
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
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg-Sex: 8h às 18h",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500 rounded-full">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Advocacia & Associados</h3>
                  <p className="text-sm text-gray-400">Defendendo seus direitos</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Mais de 15 anos de experiência em diversas áreas do direito, 
                oferecendo soluções jurídicas personalizadas e resultados comprovados.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <info.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm font-medium">{info.label}</p>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-gray-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Advocacia & Associados. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
