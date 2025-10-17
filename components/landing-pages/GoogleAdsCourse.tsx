"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check, Clock, ArrowRight, Download, Shield, Target, TrendingUp, Zap, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function GoogleAdsCourse() {

  const modules = [
    {
      number: 1,
      title: "FUNDAMENTOS DO GOOGLE ADS",
      description: "Compreenda os conceitos essenciais e a estrutura por trás da maior plataforma de anúncios do mundo.",
      topics: [
        "Entendi como o Google Ads funciona",
        "Sei diferenciar os tipos de campanha", 
        "Sei identificar o momento ideal do cliente no funil",
        "Completei o exercício prático"
      ]
    },
    {
      number: 2,
      title: "ESTRUTURANDO SUA PRIMEIRA CAMPANHA",
      description: "Aprenda a configurar campanhas eficazes, segmentar seu público e escolher as palavras-chave certas.",
      topics: [
        "Conta criada e configurada corretamente",
        "Vinculação com o Google Analytics concluída",
        "Pesquisa de palavras-chave realizada",
        "Estrutura de campanha planejada",
        "Grupos de anúncios e anúncios criados",
        "Rastreamento de conversões ativado"
      ]
    },
    {
      number: 3,
      title: "CRIANDO ANÚNCIOS QUE VENDEM",
      description: "Desenvolva criativos irresistíveis e textos persuasivos para atrair e converter seus clientes ideais.",
      topics: [
        "Criei variações de títulos e descrições",
        "Configurei extensões de anúncio",
        "Entendi a estrutura básica de um anúncio",
        "Montei meu primeiro rascunho de campanha",
        "Aprendi a identificar boas práticas de copywriting"
      ]
    },
    {
      number: 4,
      title: "OTIMIZANDO E ANALISANDO RESULTADOS",
      description: "Domine as métricas e ferramentas de análise para otimizar suas campanhas e maximizar seu ROI.",
      topics: [
        "Entendo as métricas CPC, CTR, CPA e ROAS",
        "Sei ajustar palavras-chave e anúncios com base em desempenho",
        "Aprendi a gerar relatórios e acompanhar conversões",
        "Defini uma rotina semanal de otimização"
      ]
    },
    {
      number: 5,
      title: "ESTRATÉGIAS AVANÇADAS E ESCALABILIDADE",
      description: "Aprender técnicas avançadas para ampliar resultados, dominar remarketing, criar campanhas inteligentes e escalar orçamentos de forma segura e lucrativa.",
      topics: [
        "Remarketing e remarketing dinâmico",
        "Automação de campanhas",
        "Escalabilidade de orçamentos",
        "Campanhas inteligentes e machine learning",
        "Estratégias de expansão geográfica",
        "Otimização para diferentes dispositivos"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Aprenda do Zero",
      description: "Mesmo sem experiência anterior, você dominará o Google Ads"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Resultados Reais",
      description: "Estratégias comprovadas para gerar vendas e leads"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Anuncie com Segurança",
      description: "Evite erros caros e maximize seu investimento"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Aplicação Imediata",
      description: "Checklists e exercícios práticos para implementar hoje"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                <span className="mr-2">⭐</span>
                Curso Mais Vendido
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Google Ads
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Descomplicado 2.0
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Aprenda de forma prática e direta como criar campanhas que realmente vendem no Google Ads!
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  <span className="font-medium">5 módulos completos</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Timer className="h-5 w-5 mr-2 text-red-600" />
                  <span className="font-medium">Oferta válida até domingo</span>
                </div>
              </div>
              
              {/* Preço com desconto */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-3xl font-bold text-gray-500 line-through">R$ 79,90</span>
                    <span className="text-5xl font-bold text-red-600">R$ 19,90</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl">💥</span>
                    <span className="text-lg font-bold text-red-700">Promoção de Lançamento — por tempo limitado!</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Timer className="h-4 w-4" />
                    <span>Oferta válida até domingo</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://go.hotmart.com/T102437865L?dp=1', '_blank')}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Quero dominar o Google Ads agora
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.open('https://go.hotmart.com/T102437865L?dp=1', '_blank')}
                >
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Aprender a anunciar com segurança
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte completo
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <Image 
                  src="http://alonerd.com/wp-content/uploads/2025/10/1ad74c82-ef6a-4595-8e7f-5449a6c5d480.png"
                  alt="Franciney Freitas - Especialista em Google Ads"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que escolher nosso curso?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvido para quem deseja dominar anúncios pagos do zero, mesmo sem experiência anterior.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md h-full flex flex-col">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 flex-1">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore os módulos do nosso curso para dominar o Google Ads, do básico ao avançado.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {module.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        MÓDULO {module.number} - {module.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {module.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center text-gray-700">
                            <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Pronto para transformar seus resultados?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Aprenda a anunciar com segurança e lucrar mais com menos investimento.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white line-through opacity-70 mr-4">R$ 79,90</span>
                <span className="text-5xl font-bold text-yellow-400">R$ 19,90</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">💥</span>
                <span className="text-lg font-bold text-yellow-300">Promoção de Lançamento — por tempo limitado!</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6 text-blue-100">
                <Timer className="h-4 w-4" />
                <span>Oferta válida até domingo</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-400" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-400" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-400" />
                  <span>Suporte completo</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold shadow-2xl"
                onClick={() => window.open('https://go.hotmart.com/T102437865L?dp=1', '_blank')}
              >
                <ArrowRight className="h-6 w-6 mr-2" />
                Acessar o curso e começar hoje mesmo
              </Button>
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-xl font-bold shadow-2xl"
                onClick={() => window.open('https://go.hotmart.com/T102437865L?dp=1', '_blank')}
              >
                <Download className="h-6 w-6 mr-2" />
                Quero dominar o Google Ads agora
              </Button>
            </div>
            
            <p className="text-blue-100 mt-6 text-sm">
              Pagamento 100% seguro via Hotmart • Acesso liberado imediatamente
            </p>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
