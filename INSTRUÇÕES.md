# 🚀 Instruções para Executar o Portfólio

## Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

## Passos para Executar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar em Modo Desenvolvimento
```bash
npm run dev
```

### 3. Acessar o Portfólio
- **Português**: http://localhost:3000
- **Inglês**: http://localhost:3000/eng

## 🎨 Funcionalidades Implementadas

### ✅ Todas as Funcionalidades Solicitadas

1. **✅ Next.js com Tailwind CSS, shadcn/ui, Radix UI e Framer Motion**
2. **✅ Design responsivo para todos os dispositivos**
3. **✅ Animações personalizadas com Framer Motion**
4. **✅ Ícones personalizados (Lucide React)**
5. **✅ Otimizado para SEO**
6. **✅ Modo claro (#fafafa) e escuro (#000000)**
7. **✅ Elementos inspirados no site do Next.js**
8. **✅ Suporte para Português e Inglês com mudança de URL (/eng)**
9. **✅ Dados completos do currículo**
10. **✅ Formulário de contato com webhook**
11. **✅ Botão para LinkedIn**
12. **✅ Cards dinâmicos e elementos atraentes**

## 📱 Seções do Portfólio

### 🏠 Home (Hero)
- Nome e título profissional
- Resumo profissional
- Informações de contato em cards
- Botões de ação (Contato e LinkedIn)
- Animações de entrada e hover

### 👨‍💼 Sobre Mim
- Descrição profissional completa
- Habilidades principais com barras de progresso
- Formação acadêmica
- Certificações

### 💼 Experiência Profissional
- Timeline das experiências
- Descrições detalhadas
- Tecnologias utilizadas
- Principais conquistas

### 🛠️ Habilidades Técnicas
- Categorias organizadas (Frontend, UI/UX, Automação, SEO, QA, Outros)
- Barras de progresso animadas
- Badges de tecnologias
- Competências adicionais

### 📧 Contato
- Formulário funcional com webhook
- Informações de contato
- Status de envio (sucesso/erro)
- Validação de campos

## 🎨 Design e Animações

### Cores
- **Modo Claro**: Background #fafafa
- **Modo Escuro**: Background #000000
- **Gradientes**: Primary to Secondary
- **Acentos**: Cores vibrantes para elementos interativos

### Animações
- **Entrada**: Fade in com movimento vertical
- **Hover**: Scale e transformações suaves
- **Scroll**: Animações baseadas em viewport
- **Loading**: Spinners e transições
- **Floating**: Elementos flutuantes no background

## 🌐 Internacionalização

### Português (Padrão)
- URL: `/`
- Idioma: `pt`
- Conteúdo em português

### Inglês
- URL: `/eng`
- Idioma: `en`
- Conteúdo traduzido

### Mudança de Idioma
- Switch na navegação
- Mudança automática de URL
- Persistência da escolha

## 📧 Formulário de Contato

### Webhook Configurado
```
https://workflows.cloud.dmcitsolutions.com/webhook-test/francineyfreitas
```

### Campos
- Nome completo (obrigatório)
- E-mail (obrigatório)
- Mensagem (obrigatório)

### Funcionalidades
- Validação em tempo real
- Status de envio
- Reset do formulário após sucesso
- Tratamento de erros

## 🔧 Personalização

### Alterar Cores
Edite `tailwind.config.js` e `app/globals.css`

### Alterar Conteúdo
Edite `lib/i18n.ts` para traduções

### Alterar Webhook
Edite `components/Contact.tsx`

### Adicionar Seções
Crie novos componentes e importe em `app/page.tsx`

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório
2. Deploy automático

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

### Outros
```bash
npm run build
npm start
```

## 📱 Teste de Responsividade

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large: 1440px+

### Teste em Dispositivos
- Chrome DevTools
- Dispositivos móveis reais
- Tablets
- Diferentes resoluções

## 🎯 SEO Otimizado

### Meta Tags
- Title personalizado
- Description otimizada
- Keywords relevantes
- Open Graph completo
- Twitter Cards

### Performance
- Lazy loading
- Otimização de imagens
- Minificação
- Core Web Vitals

## 🐛 Solução de Problemas

### Erro de Dependências
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erro de Build
```bash
npm run build
```

### Erro de TypeScript
```bash
npx tsc --noEmit
```

## 📞 Suporte

Para dúvidas ou problemas:
- Email: francineysfreitas@gmail.com
- LinkedIn: [Franciney Freitas](https://linkedin.com/in/francineyfreitas)

---

**Desenvolvido com ❤️ por Franciney Sales de Freitas**
