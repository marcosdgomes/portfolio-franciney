"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Palette, Zap, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const [showAdditionalExperiences, setShowAdditionalExperiences] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const experiences = [
    {
      company: t.experience.konneqt.company,
      position: t.experience.konneqt.title,
      period: t.experience.konneqt.period,
      location: "Remoto",
      isCurrent: true,
      description: t.experience.konneqt.description,
      technologies: ["React", "Next.js", "WordPress", "Elementor", "n8n", "ClickUp", "Mailchimp", "SendPulse", "Tailwind CSS", "Figma", "Canva"],
      achievements: t.experience.konneqt.achievements,
      icon: Code,
      color: "from-blue-500 to-purple-600"
    },
    {
      company: t.experience.faturágil.company,
      position: t.experience.faturágil.title,
      period: t.experience.faturágil.period,
      location: "Remoto",
      isCurrent: false,
      description: t.experience.faturágil.description,
      technologies: ["Zoho", "SMTP", "PJBank", "APIs", "Google Meet", "Documentação Técnica"],
      achievements: t.experience.faturágil.achievements,
      icon: Briefcase,
      color: "from-green-500 to-teal-600"
    },
    {
      company: t.experience.freelancer.company,
      position: t.experience.freelancer.title,
      period: t.experience.freelancer.period,
      location: "Remoto",
      isCurrent: true,
      description: t.experience.freelancer.description,
      technologies: ["WordPress", "PHP", "JavaScript", "CSS", "Google Analytics", "Microsoft Clarity", "CyberPanel", "Meta Business Suite"],
      achievements: t.experience.freelancer.achievements,
      icon: Globe,
      color: "from-orange-500 to-red-600"
    }
  ];

  const additionalExperiences = [
    {
      company: t.experience.paguePouco.company,
      position: t.experience.paguePouco.title,
      period: t.experience.paguePouco.period,
      location: t.experience.paguePouco.location,
      isCurrent: false,
      description: t.experience.paguePouco.description,
      technologies: ["Gestão de Pessoas", "Controle de Estoque", "Relatórios de Vendas", "Planejamento Estratégico", "Melhoria Contínua"],
      achievements: t.experience.paguePouco.achievements,
      icon: Briefcase,
      color: "from-emerald-500 to-green-600"
    },
    {
      company: t.experience.recol.company,
      position: t.experience.recol.title,
      period: t.experience.recol.period,
      location: t.experience.recol.location,
      isCurrent: false,
      description: t.experience.recol.description,
      technologies: ["Auditoria de Processos", "Gestão da Qualidade", "PDCA", "5S", "Compliance", "Relatórios de Desempenho"],
      achievements: t.experience.recol.achievements,
      icon: Code,
      color: "from-indigo-500 to-blue-600"
    },
    {
      company: t.experience.liq.company,
      position: t.experience.liq.title,
      period: t.experience.liq.period,
      location: t.experience.liq.location,
      isCurrent: false,
      description: t.experience.liq.description,
      technologies: ["Gestão de Equipes", "Retenção de Clientes", "SAC", "Suporte Técnico", "Relatórios de Desempenho", "Atendimento Corporativo"],
      achievements: t.experience.liq.achievements,
      icon: Zap,
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="experience" className="py-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 text-foreground tracking-tight">
              {t.experience.title}
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background hidden md:block" />
                  
                  {/* Experience Card */}
                  <Card className="ml-0 md:ml-16 hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} text-white group-hover:scale-110 transition-transform`}>
                            <exp.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                              {exp.position}
                            </CardTitle>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                              <span className="font-semibold text-primary">{exp.company}</span>
                              {exp.isCurrent && (
                                <Badge variant="secondary" className="w-fit">
                                  {t.experience.current}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-primary" />
                          {t.experience.mainAchievements}
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Code className="h-4 w-4 text-primary" />
                          {t.experience.technologiesUsed}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="hover:bg-primary hover:text-white dark:hover:text-black transition-colors cursor-default"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Experiences Toggle Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAdditionalExperiences(!showAdditionalExperiences)}
              className="px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              {showAdditionalExperiences ? (
                <div className="flex items-center gap-2">
                  <ChevronUp className="h-5 w-5" />
                  {t.experience.showLess}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <ChevronDown className="h-5 w-5" />
                  {t.experience.additionalExperiences}
                </div>
              )}
            </Button>
          </motion.div>

          {/* Additional Experiences */}
          {showAdditionalExperiences && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-12"
            >
              <div className="relative">
                {/* Timeline Line for Additional Experiences */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

                {/* Additional Experience Cards */}
                <div className="space-y-12">
                  {additionalExperiences.map((exp, index) => (
                    <motion.div
                      key={`additional-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background hidden md:block" />
                      
                      {/* Experience Card */}
                      <Card className="ml-0 md:ml-16 hover:shadow-xl transition-all duration-300 group">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} text-white group-hover:scale-110 transition-transform`}>
                                <exp.icon className="h-6 w-6" />
                              </div>
                              <div>
                                <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                                  {exp.position}
                                </CardTitle>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                                  <span className="font-semibold text-primary">{exp.company}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {exp.period}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {exp.location}
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-primary" />
                              {t.experience.mainAchievements}
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                                  className="flex items-start gap-2"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Code className="h-4 w-4 text-primary" />
                              {t.experience.technologiesUsed}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: techIndex * 0.05 }}
                                  whileHover={{ scale: 1.05 }}
                                >
                                  <Badge 
                                    variant="outline" 
                                    className="hover:bg-primary hover:text-white dark:hover:text-black transition-colors cursor-default"
                                  >
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent>
                <h3 className="text-2xl font-bold mb-4">{t.experience.cta.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {t.experience.cta.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="modern"
                    size="lg"
                    className="px-8 py-3 font-semibold rounded-lg transition-all duration-200"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/franciney-freitas-098410173/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-5 w-5" />
                      {t.experience.cta.button}
                      <span className="text-sm opacity-60">↗</span>
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
