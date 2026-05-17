# 👓 D'Griffe Connect - App Cliente

**D'Griffe Connect** é um aplicativo mobile de e-commerce óptico e joalheria com RA, Scanner de IA e entrega expressa para a região de Capão da Canoa.

## 🎯 Visão Geral

O app oferece uma experiência premium de compra de óculos de grau, óculos de sol e joias com:
- **Feed Personalizado** baseado em clima local
- **Provador Virtual com RA** para experimentar armações
- **Scanner de Receita com IA** para leitura automática de graus
- **Entrega Expressa** em até 2 horas para condomínios
- **Retirada na Loja** física

## 🏗️ Arquitetura do Projeto

```
dgriffe-connect/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/            # Telas do app
│   ├── navigation/         # Configuração de navegação
│   ├── services/           # Chamadas de API e lógica de negócio
│   ├── hooks/              # Custom hooks
│   ├── context/            # Context API (Estado global)
│   ├── utils/              # Funções auxiliares
│   ├── assets/             # Imagens, ícones, fontes
│   └── App.tsx             # Componente raiz
├── app.json                # Configuração do Expo
├── package.json            # Dependências
├── tsconfig.json           # Configuração TypeScript
└── README.md               # Este arquivo
```

## 🚀 Tecnologias

- **React Native** com Expo
- **TypeScript** para type safety
- **React Navigation** para roteamento
- **Axios** para requisições HTTP
- **React Query** para cache de dados
- **NativeWind** para styling com Tailwind CSS
- **Lottie** para animações
- **Zustand** para gerenciamento de estado
- **Expo Camera** para Scanner e RA

## 📋 Fases de Desenvolvimento

### Fase 1️⃣: Setup e Tela Inicial (Atual)
- [ ] Estrutura do projeto ✅
- [ ] Sistema de navegação
- [ ] Tela Inicial (Feed Personalizado)
- [ ] Categorias Rápidas

### Fase 2️⃣: Vitrine Inteligente
- [ ] Listagem de Produtos
- [ ] Filtros e Buscas
- [ ] Detalhes do Produto

### Fase 3️⃣: Configurador de Óculos
- [ ] Scanner de Receita (IA)
- [ ] Provador Virtual (RA)
- [ ] Recomendação de Lentes
- [ ] Carrinho Unificado

### Fase 4️⃣: Checkout e Perfil
- [ ] Carrinho de Compras
- [ ] Checkout
- [ ] Seleção de Entrega
- [ ] Perfil do Usuário
- [ ] Central de Saúde Visual

## 🔌 APIs de Terceiros Planejadas

- **OpenWeather API** - Clima de Capão da Canoa
- **Google Maps API** - Geolocalização e rotas
- **WhatsApp Business API** - Notificações
- **Stripe/PagSeguro** - Pagamentos
- **AWS Rekognition** - Leitura de Receita (IA)
- **ARKit/ARCore** - Realidade Aumentada

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/guilhermelopesdacruz3-del/dgriffe-connect.git
cd dgriffe-connect

# Instale as dependências
npm install

# Inicie o projeto com Expo
npx expo start
```

## 🏃 Como Rodar

```bash
# Desenvolvimento
npx expo start

# iOS
npx expo start --ios

# Android
npx expo start --android

# Web
npx expo start --web
```

## 📱 Estrutura de Pastas Explicada

### `/src/components`
Componentes reutilizáveis como botões, cards, inputs etc.

### `/src/screens`
Cada arquivo = uma tela do app (HomeScreen, ProductScreen, etc.)

### `/src/navigation`
Configuração de tabs, stack e drawer navigation

### `/src/services`
Funções para chamar APIs e lógica de negócio

### `/src/context`
Context API para compartilhar estado (usuário, carrinho, etc.)

### `/src/hooks`
Custom hooks para lógica reutilizável

### `/src/utils`
Funções auxiliares e constantes

### `/src/assets`
Imagens, ícones SVG e fontes customizadas

## 🔐 Variáveis de Ambiente

Copie `.env.example` para `.env`:

```bash
cp .env.example .env
```

Preencha com suas chaves:

```
EXPO_PUBLIC_API_BASE_URL=http://localhost:3000
EXPO_PUBLIC_OPENWEATHER_API_KEY=xxx
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=xxx
EXPO_PUBLIC_STRIPE_PUBLIC_KEY=xxx
EXPO_PUBLIC_WHATSAPP_API_KEY=xxx
```

## 📝 Convenções de Código

- **Componentes:** PascalCase (`HomeScreen.tsx`)
- **Arquivos:** camelCase ou kebab-case (`useAuth.ts`, `auth-service.ts`)
- **Variáveis:** camelCase
- **Constantes:** UPPER_SNAKE_CASE
- **Tipos/Interfaces:** PascalCase (`IProduct`, `UserContextType`)

## 🤝 Contribuição

1. Crie uma branch: `git checkout -b feature/sua-feature`
2. Commit: `git commit -m "feat: descrição"`
3. Push: `git push origin feature/sua-feature`
4. Abra um Pull Request

## 📄 Licença

Proprietário - D'Griffe Connect © 2026

---

**Desenvolvido com ❤️ para melhorar a experiência de compra de óculos no litoral.**
