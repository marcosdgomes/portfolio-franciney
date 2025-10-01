"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Zap, 
  Search, 
  TestTube, 
  Settings,
  React as ReactIcon,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  Shield,
  GitBranch
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: t.skills.frontend,
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, icon: ReactIcon },
        { name: "Next.js", level: 88, icon: Globe },
        { name: "TypeScript", level: 85, icon: Code },
        { name: "JavaScript", level: 92, icon: Code },
        { name: "Vite", level: 80, icon: Zap },
        { name: "WordPress", level: 92, icon: Globe },
      ]
    },
    {
      title: t.skills.ui,
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Tailwind CSS", level: 95, icon: Palette },
        { name: "shadcn/ui", level: 88, icon: Palette },
        { name: "Radix UI", level: 85, icon: Palette },
        { name: "Design Responsivo", level: 92, icon: Smartphone },
        { name: "Figma", level: 80, icon: Palette },
        { name: "Canva", level: 85, icon: Palette },
      ]
    },
    {
      title: t.skills.automation,
      icon: Zap,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "n8n", level: 85, icon: Zap },
        { name: "APIs", level: 88, icon: Settings },
        { name: "ClickUp", level: 80, icon: Settings },
        { name: "SendPulse", level: 82, icon: Zap },
        { name: "Mailchimp", level: 85, icon: Zap },
        { name: "Webhooks", level: 80, icon: Zap },
      ]
    },
    {
      title: t.skills.seo,
      icon: Search,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "SEO On-page", level: 90, icon: Search },
        { name: "Google Ads", level: 85, icon: BarChart3 },
        { name: "E-mail Marketing", level: 88, icon: Zap },
        { name: "Google Analytics", level: 87, icon: BarChart3 },
        { name: "Microsoft Clarity", level: 80, icon: BarChart3 },
        { name: "Meta Business Suite", level: 82, icon: BarChart3 },
      ]
    },
    {
      title: t.skills.quality,
      icon: TestTube,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Cypress", level: 88, icon: TestTube },
        { name: "GitHub Actions", level: 85, icon: GitBranch },
        { name: "QA", level: 90, icon: TestTube },
        { name: "Segurança da Informação", level: 82, icon: Shield },
        { name: "Testes Automatizados", level: 87, icon: TestTube },
        { name: "CI/CD", level: 80, icon: GitBranch },
      ]
    },
    {
      title: t.skills.other,
      icon: Settings,
      color: "from-gray-500 to-slate-500",
      skills: [
        { name: "Git", level: 90, icon: GitBranch },
        { name: "PostgreSQL", level: 80, icon: Database },
        { name: "Supabase", level: 85, icon: Database },
        { name: "Node.js", level: 82, icon: Code },
        { name: t.skills.technologies.projectManagement, level: 88, icon: Settings },
        { name: "Scrum", level: 85, icon: Settings },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.skills.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              {t.skills.description}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:border-primary/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <skill.icon className="h-4 w-4 text-primary group-hover/skill:scale-110 transition-transform" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent>
                <h3 className="text-2xl font-bold mb-6 text-center">{t.skills.additionalSkills}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Automação de Processos",
                    "Integração de Sistemas",
                    "Desenvolvimento Full Stack",
                    "Arquitetura de Software",
                    "Metodologias Ágeis",
                    "Liderança de Equipes",
                    "Comunicação Técnica",
                    "Resolução de Problemas",
                    "Pensamento Analítico",
                    "Aprendizado Contínuo",
                    "Trabalho Remoto",
                    "Colaboração Interdisciplinar"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="px-4 py-2 text-sm hover:bg-primary hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
