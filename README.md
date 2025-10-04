# Portfólio - Franciney Sales de Freitas

Um portfólio moderno e responsivo desenvolvido com Next.js, Tailwind CSS, shadcn/ui, Radix UI e Framer Motion.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos
- **Radix UI** - Componentes acessíveis
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos

## ✨ Funcionalidades

- 🌐 **Internacionalização** - Suporte para Português e Inglês
- 🌙 **Modo Escuro/Claro** - Tema personalizado (#000000 / #fafafa)
- 📱 **Design Responsivo** - Otimizado para todos os dispositivos
- ⚡ **Performance** - Otimizado para SEO e Core Web Vitals
- 🎨 **Animações** - Transições suaves com Framer Motion
- 📧 **Formulário de Contato** - Integração com webhook
- 🔗 **Integração LinkedIn** - Botões de contato direto

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/francineyfreitas/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
portfolio/
├── app/                    # App Router do Next.js
│   ├── eng/               # Versão em inglês
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── Hero.tsx          # Seção principal
│   ├── About.tsx         # Sobre mim
│   ├── Experience.tsx    # Experiência profissional
│   ├── Skills.tsx        # Habilidades técnicas
│   ├── Contact.tsx       # Formulário de contato
│   ├── Navigation.tsx    # Navegação
│   └── Footer.tsx        # Rodapé
├── contexts/             # Contextos React
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
├── lib/                  # Utilitários
│   ├── utils.ts
│   └── i18n.ts          # Traduções
└── public/              # Arquivos estáticos
```

## 🎨 Personalização

### Cores do Tema
- **Modo Claro**: #fafafa (background)
- **Modo Escuro**: #000000 (background)
- **Cores Primárias**: Configuráveis no Tailwind CSS

### Traduções
As traduções estão localizadas em `lib/i18n.ts`. Para adicionar novos idiomas:

1. Adicione o idioma no objeto `translations`
2. Configure as rotas no `next.config.js`
3. Atualize o `LanguageContext.tsx`

### Formulário de Contato
O formulário está configurado para enviar dados para:
```
https://workflows.cloud.dmcitsolutions.com/webhook-test/francineyfreitas
```

Para alterar o webhook, edite o arquivo `components/Contact.tsx`.

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas
```bash
npm run build
npm start
```

## 📱 Responsividade

O portfólio é totalmente responsivo e otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## ⚡ Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Otimizado
- **SEO**: Meta tags completas
- **Acessibilidade**: WCAG 2.1 AA

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Franciney Sales de Freitas**
- LinkedIn: [Franciney Freitas](https://linkedin.com/in/francineyfreitas)
- Email: francineysfreitas@gmail.com
- Telefone: (68) 99246-1647

---

Desenvolvido com ❤️ por Franciney Sales de Freitas
