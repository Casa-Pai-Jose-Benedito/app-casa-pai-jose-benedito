# Casa Pai José Benedito - Sistema de Gestão

Sistema web completo para gestão da Casa Pai José Benedito, desenvolvido com respeito às tradições afro-brasileiras e compliance LGPD.

## 🏗️ Status do Projeto

### ✅ Fase 1: Fundação (EM ANDAMENTO)
- [x] Setup Next.js 14 + TypeScript + Tailwind CSS
- [x] Estrutura de pastas feature-driven
- [x] Schema Prisma completo com hierarquia espiritual
- [x] Types TypeScript para todo o sistema
- [x] Configuração de cores no Tailwind
- [x] Validações Zod para segurança de dados
- [ ] Sistema de autenticação NextAuth.js v5
- [ ] Sistema básico de roles e permissões
- [ ] LGPD compliance framework
- [ ] Design system culturalmente apropriado

### ⏳ Fase 2: Core Features (PENDENTE)
- [ ] CRUD completo de usuários com hierarquia
- [ ] Sistema granular de permissões para filhos da casa
- [ ] Gestão completa de eventos (3 categorias)
- [ ] Sistema de reserva com detecção de conflitos
- [ ] Check-in básico
- [ ] Testes de segurança e validação

### ⏳ Fase 3: Features Avançadas (PENDENTE)
- [ ] Check-in real-time com WebSocket
- [ ] Suporte offline com sincronização
- [ ] Feed da comunidade com interações
- [ ] Sistema de reuniões e pautas
- [ ] Otimizações de performance
- [ ] Responsividade mobile

### ⏳ Fase 4: Deploy e Refinamento (PENDENTE)
- [ ] Deploy na Vercel com banco PostgreSQL
- [ ] Configuração de monitoramento
- [ ] Testes de carga com 1000+ usuários
- [ ] Treinamento da equipe administrativa
- [ ] Documentação completa
- [ ] Onboarding da comunidade

## 🛠️ Stack Tecnológica

- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS V4
- **Backend**: Next.js API Routes + Express.js
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: NextAuth.js v5 (Auth.js)
- **Authorization**: CASL para permissões granulares
- **State**: Zustand (3KB)
- **Real-time**: Socket.io
- **Cache**: Redis
- **Email**: Resend
- **Deploy**: Vercel + Neon/Supabase PostgreSQL

## 🏛️ Hierarquia Espiritual

1. **Pai/Mãe de Santo** - Acesso total ao sistema
2. **Pais Menores** - Acesso elevado, podem gerenciar filhos
3. **Filhos da Casa** - Permissões granulares configuráveis
4. **Assistência** - Acesso limitado a eventos públicos

## 📊 Categorias de Eventos

1. **Giras** - Cerimônias tradicionais com entidades espirituais
2. **Cerimônias** - Cerimônias gerais da casa
3. **Reserva de Espaço** - Reservas individuais/grupo (5min a vários dias)

## 🎨 Design Cultural

O sistema utiliza cores e simbolismos de acordo com a identidade visual da casa e as tradições:
- **Cores dos Orixás**: Paleta específica para cada entidade
- **Hierarquia Visual**: Cores diferentes para cada nível
- **Mobile-first**: Focado na comunidade que acessa via celulares

## 🔒 Segurança & Compliance

- **LGPD**: Compliance completo com consentimentos rastreados
- **Autenticação**: Email + verificação obrigatória
- **Autorização**: RBAC + permissões granulares
- **Auditoria**: Log completo de ações administrativas
- **Privacidade**: Proteção dos dados da comunidade

## 🚀 Instalação e Setup

```bash
# Clone o repositório
git clone https://github.com/Casa-Pai-Jose-Benedito/sistema-gestao.git

# Instale as dependências
npm install

# Configure o ambiente
cp .env.example .env.local

# Configure o banco de dados
npx prisma migrate dev

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📝 Commits

Seguimos Conventional Commits v1.0 com escopo e em inglês:

```
feat(auth): add login system
fix(events): update time zone to adjust for time conflict
docs(readme): update project status
```

## 🤝 Contribuição

Este é um projeto desenvolvido com respeito às tradições afro-brasileiras. Toda decisão técnica deve considerar o impacto na comunidade religiosa e compliance total com LGPD.
