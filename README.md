# 🎮 NEON MEMORY

Um jogo de memória moderno e viciante e múltiplos modos de jogo.

![Neon Memory](https://img.shields.io/badge/Status-Ativo-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6)

## ✨ Funcionalidades

### 🎯 Modos de Jogo
- **Clássico**: Jogo tradicional de memória
- **Contra o Tempo**: Desafie seus reflexos com tempo limitado
- **Sequência Infinita**: Até onde sua memória consegue chegar?
- **Multiplayer**: Jogue online contra outros jogadores em tempo real

### 🎨 Visual e Design
- Interface neon cyberpunk moderna
- Animações fluidas e efeitos visuais impressionantes
- Design totalmente responsivo
- Modo escuro nativo
- Efeitos sonoros imersivos

### 🌐 Recursos Online
- Sistema de salas multiplayer em tempo real
- Sincronização automática entre jogadores
- Suporte a múltiplas salas simultâneas

## 🚀 Como Jogar

1. **Observe a sequência** de cores que aparece na tela
2. **Reproduza a sequência** clicando nos botões na ordem correta
3. **A cada rodada** uma nova cor é adicionada à sequência
4. **Continue** até errar ou completar o desafio!

### Controles
- **Mouse/Touch**: Clique nos botões coloridos
- **ESC**: Pausar o jogo
- **Space**: Pausar/Retomar

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS com sistema de design customizado
- **Backend**: Supabase (PostgreSQL + Realtime)
- **Build Tool**: Vite
- **Audio**: Web Audio API
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Estado**: React Hooks + Context API

## 🎨 Sistema de Design

O jogo utiliza um sistema de design neon customizado com:
- Cores vibrantes HSL
- Gradientes dinâmicos
- Animações CSS personalizadas
- Tokens semânticos no Tailwind
- Componentes reutilizáveis

## 📱 Compatibilidade

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablet (iPad, Android tablets)
- ✅ PWA Ready

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passo a passo

```bash
# Clone o repositório
git clone <sua-url-do-repo>

# Entre no diretório
cd neon-memory

# Instale as dependências
npm install

# Configure as variáveis de ambiente (opcional para multiplayer)
cp .env.example .env.local

# Execute o projeto
npm run dev
```

O jogo estará disponível em `http://localhost:5173`

## 🌐 Deploy

### Lovable (Recomendado)
1. Acesse [Lovable](https://lovable.dev)
2. Clique em "Publish" no editor
3. Seu jogo estará online instantaneamente!

### Vercel/Netlify
```bash
# Build para produção
npm run build

# A pasta 'dist' conterá os arquivos para deploy
```

## 🎮 Multiplayer Setup

Para ativar o modo multiplayer, você precisa:

1. **Conta Supabase**: Crie uma conta gratuita em [supabase.com](https://supabase.com)
2. **Configure as variáveis**:
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima
   ```
3. **Execute as migrations** do banco de dados (incluídas no projeto)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── game/           # Componentes do jogo principal
│   ├── multiplayer/    # Componentes do multiplayer
│   ├── ui/            # Componentes da interface
│   └── credits/       # Tela de créditos
├── hooks/             # Hooks customizados
├── types/             # Definições TypeScript
├── utils/             # Funções utilitárias
├── constants/         # Constantes do jogo
└── integrations/      # Integrações (Supabase)
```

## 🎯 Roadmap

- [ ] Sistema de pontuação global
- [ ] Torneios online
- [ ] Customização de temas
- [ ] Mais modos de jogo
- [ ] Sistema de conquistas
- [ ] Compartilhamento social

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
