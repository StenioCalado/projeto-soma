# 🦋 Projeto SOMA

**Segurança • Orientação • Monitoramento • Apoio**

O **Projeto SOMA** é uma plataforma digital desenvolvida com foco na orientação e no apoio a mulheres em situação de violência doméstica.

A proposta do projeto é facilitar o acesso a informações, canais oficiais de atendimento e serviços da rede de proteção, utilizando uma interface simples, discreta, acessível e responsiva.

> Este projeto está sendo desenvolvido como um MVP acadêmico.

---

## 📱 Sobre o projeto

Mulheres em situação de violência doméstica podem enfrentar dificuldades para identificar o tipo de violência sofrida, compreender seus direitos ou saber qual serviço procurar.

O SOMA busca reduzir essas barreiras oferecendo uma experiência centralizada de orientação.

A plataforma permite:

- conhecer diferentes tipos de violência;
- identificar sinais de situações abusivas;
- consultar canais oficiais de atendimento;
- acessar rapidamente opções de emergência;
- visualizar serviços da rede de apoio;
- consultar conteúdos educativos;
- acessar orientações sobre segurança digital;
- visualizar informações territoriais por meio do módulo de mapa;
- utilizar o aplicativo em diferentes tamanhos de tela.

O SOMA **não recebe, registra ou armazena denúncias**.

Quando necessário, a plataforma direciona o usuário para canais e serviços oficiais.

---

# 🎯 Objetivo

Criar uma plataforma mobile e web que permita orientar mulheres em situação de violência doméstica de forma:

- simples;
- segura;
- acessível;
- discreta;
- responsiva;
- centralizada.

O objetivo é reduzir a dificuldade de encontrar informações e facilitar o acesso à rede oficial de proteção.

---

# 🌎 ODS relacionadas

O projeto está relacionado principalmente aos seguintes Objetivos de Desenvolvimento Sustentável:

### ODS 5 — Igualdade de Gênero

Promover a igualdade de gênero e contribuir para o enfrentamento da violência contra mulheres.

### ODS 16 — Paz, Justiça e Instituições Eficazes

Facilitar o acesso a instituições e serviços públicos de proteção e justiça.

### ODS 10 — Redução das Desigualdades

A acessibilidade e a simplificação das informações também buscam reduzir barreiras de acesso aos serviços públicos.

---

# 🛠️ Tecnologias utilizadas

O projeto utiliza:

| Tecnologia | Utilização |
|---|---|
| TypeScript | Linguagem principal |
| React Native | Desenvolvimento da interface |
| Expo | Plataforma de desenvolvimento e build |
| Expo Router | Navegação entre telas |
| React Native Gesture Handler | Arraste e pinça no mapa (API legada `Gesture.*`) |
| Reanimated / Worklets | Dependências nativas de animação e execução compatíveis com o SDK |
| React Native Web | Execução no navegador |
| AsyncStorage | Persistência de preferências locais |
| Expo Vector Icons | Ícones da interface |
| Expo Linear Gradient | Gradientes visuais |
| React Native SVG | Desenho do mapa de calor |
| Expo Location | Botão "Usar minha localização" (só no aparelho) |
| Safe Area Context | Adaptação às áreas seguras dos dispositivos |
| EAS Build | Compilação do aplicativo Android |
| EAS Hosting | Publicação da versão Web/PWA |
| Git | Versionamento |
| GitHub | Repositório e colaboração |

Atualmente o projeto utiliza o **Expo SDK 58**.

Versões declaradas no `package.json` (intervalos de dependência, não garantia de que toda instalação resolva exatamente o mesmo patch):

| Pacote | Versão declarada |
| --- | --- |
| `expo` | `^58.0.17` |
| `expo-router` | `~58.0.25` |
| `react` / `react-dom` | `19.3.0` |
| `react-native` | `0.88.0` |
| `typescript` | `~6.0.3` |
| `react-native-web` | `^0.21.4` |
| `react-native-svg` | `15.16.0` |
| `react-native-gesture-handler` | `~3.3.0` |
| `expo-location` | `~58.0.18` |
| `@react-native-async-storage/async-storage` | `2.2.0` |
| `@expo/vector-icons` | `^15.0.2` |
| `react-native-safe-area-context` | `~5.10.1` |
| `react-native-reanimated` | `4.7.1` |
| `react-native-worklets` | `0.13.0` |
| `expo-linear-gradient` | `~58.0.3` |

`MapaInterativo.tsx` usa `Gesture.Pan()`, `Gesture.Pinch()` e `Gesture.Simultaneous()`: essa API legada ainda está exportada na versão 3.3.0 instalada, mas está marcada como obsoleta. A nova API 3 usa hooks; uma migração exigiria tarefa própria e validação por plataforma. Consulte o [guia oficial de migração do Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/guides/upgrading-to-3/).

## 🏛️ Arquitetura de software

Na versão atual, o SOMA é classificado, **quanto ao gênero arquitetural**, como um **Sistema Interativo**, pois sua operação é orientada às ações das pessoas usuárias e ao feedback de interface.

Seu **estilo arquitetural predominante** é **monolítico no frontend**: a interface, a navegação e o processamento local são distribuídos como uma aplicação multiplataforma, sem backend de negócio ou banco de dados remoto próprios. A implementação é **modularizada por componentes reutilizáveis**, com separação lógica de responsabilidades entre telas/rotas, componentes, hooks/utilitários e dados locais. Essa organização **não constitui uma arquitetura em camadas estrita**, porque há acessos diretos aos dados e parte da lógica reside em telas e componentes.

O preparo das bases estatísticas utiliza um **pipeline ETL em lote inspirado em Pipe-and-Filter**: scripts geram arquivos agregados para o aplicativo consumir localmente. Esse pipeline de construção de dados não é um microsserviço e não funciona continuamente durante a utilização.

**Drivers arquiteturais prioritários:** privacidade e segurança da usuária, usabilidade, acessibilidade, compatibilidade Android/iOS/web, confiabilidade das informações territoriais, desempenho de interação e baixo custo de operação.

**Decisões e limites relevantes:** o SOMA não recebe denúncias nem aciona instituições automaticamente; os mapas apresentam estatísticas públicas agregadas e não preveem risco individual; a saída rápida reduz a exposição visual, mas não apaga o histórico do navegador nem garante ocultação total.

A análise completa de gênero, estilo, componentes, diagramas, drivers, requisitos não funcionais, trade-offs, riscos, validação e decisões arquiteturais está em [`docs/arquitetura-software.md`](docs/arquitetura-software.md), tomando como baseline o merge do **PR #3** em **08/11/2026** (commit `f243aeda`).

---

# 📦 Plataformas

O SOMA foi estruturado para funcionar em múltiplas plataformas.

### Android

Disponível através de builds geradas pelo EAS Build.

```bash
npx eas-cli@latest build --platform android --profile preview
```

A configuração atual gera um **APK de distribuição interna**, permitindo instalação direta em dispositivos Android.

---

### iOS

Durante o desenvolvimento pode ser executado através do **Expo Go**.

Também é possível utilizar a versão Web/PWA instalada na Tela de Início do iPhone.

---

### Web

A aplicação pode ser exportada através de:

```bash
npx expo export --platform web
```

A versão web pode ser publicada utilizando:

```bash
npx eas-cli@latest deploy --prod
```

---

### PWA / Web App

O SOMA possui estrutura para instalação como Web App.

No iPhone:

```text
Safari
→ Compartilhar
→ Adicionar à Tela de Início
→ Abrir como App da Web
```

A estrutura da PWA está localizada em:

```text
public/
├── manifest.json
├── icon-192.png
├── icon-512.png
├── apple-touch-icon.png
└── tempo.html
```

O manifest e os metadados de `src/app/+html.tsx` dão suporte à experiência Web App. Não há service worker implementado nesta versão; instalação na tela inicial não equivale a funcionamento offline integral, e o comportamento por navegador ainda exige validação.

---

# 🚀 Como executar o projeto

## Pré-requisitos

Antes de iniciar, instale:

- Node.js
- npm
- Git
- VS Code ou outra IDE
- Expo Go, caso queira testar em dispositivo físico

Versão utilizada durante o desenvolvimento:

```text
Node.js 22+
```

Verifique:

```bash
node --version
```

```bash
npm --version
```

```bash
git --version
```

---

# 📥 Clonando o projeto

Clone o repositório:

```bash
git clone https://github.com/StenioCalado/projeto-soma.git soma
```

Entre na pasta:

```bash
cd soma
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando

Inicie o Expo:

```bash
npx expo start
```

O terminal exibirá um QR Code e opções de execução.

---

## 🌐 Web

Pressione:

```text
w
```

ou execute:

```bash
npx expo start --web
```

### Publicação web principal — EAS Hosting

A versão web principal do projeto SOMA é publicada pelo **EAS Hosting** em:

**https://projetosoma.expo.app**

Os comandos de exportação e publicação estão descritos na seção **Build Web** mais abaixo. Publicar alterações em produção exige autorização explícita da equipe; realizar um merge no GitHub, por si só, não equivale a executar um novo deploy.

### GitHub Pages — alternativa de publicação (histórico do fork)

O repositório mantém `scripts/publicar-github-pages.sh` e a configuração opcional `SOMA_BASE_URL` em `app.config.js` para exportação em subcaminhos. Esse mecanismo foi incorporado a partir do trabalho realizado em um fork de colaboração e **não representa a hospedagem web principal** do projeto.

A URL histórica `https://akathigas.github.io/projeto-soma/` pertence ao fork de colaboração e **não é atualizada automaticamente** por merges feitos no repositório `StenioCalado/projeto-soma`.

**Atenção:** o script possui parâmetros próprios de destino e sua configuração padrão pode não corresponder ao repositório/domínio esperado. Antes de executá-lo, conferir a remote do Git, `SOMA_PAGES_REMOTO`, `SOMA_PAGES_BRANCH`, `SOMA_PAGES_URL` e `SOMA_BASE_URL`. Não executar esse script como parte de um ajuste documental, nem publicar sem autorização.

---

## 📱 Expo Go

Abra o Expo Go no celular e escaneie o QR Code.

Se o dispositivo não conseguir acessar o servidor pela rede local:

```bash
npx expo start --tunnel
```

Para limpar o cache:

```bash
npx expo start --clear
```

ou:

```bash
npx expo start --tunnel --clear
```

---

# 📂 Estrutura do projeto

Estrutura simplificada:

```text
soma/
│
├── assets/
│   └── images/
│       ├── logo-soma.png
│       ├── icon-soma.png
│       └── adaptive-icon-soma.png
│
├── public/
│   ├── manifest.json
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   └── tempo.html
│
├── docs/
│   ├── arquitetura-software.md
│   ├── integracao-zip-navegacao.md
│   ├── migracao-sdk58.md
│   └── publicacao-2026-10-23.md
│
├── scripts/
│   ├── mapa-calor/            → preparação prévia das bases, insumos e metodologia
│   ├── publicar-github-pages.sh
│   └── reset-project.js
│
├── src/
│   │
│   ├── app/
│   │   ├── conteudo/
│   │   │   └── [id].tsx
│   │   │
│   │   ├── _layout.tsx
│   │   ├── +html.tsx
│   │   ├── index.tsx
│   │   ├── onboarding.tsx
│   │   ├── home.tsx
│   │   ├── tipos-violencia.tsx
│   │   ├── denunciar.tsx
│   │   ├── rede-apoio.tsx
│   │   ├── emergencia.tsx
│   │   ├── explorar.tsx
│   │   ├── mapa.tsx
│   │   ├── mais.tsx
│   │   └── configuracoes.tsx
│   │
│   ├── components/
│   │   ├── HomeShortcutCard.tsx
│   │   ├── QuickExitButton.tsx
│   │   ├── AppText.tsx
│   │   ├── AppSafeArea.tsx
│   │   ├── AppSafeArea.web.tsx
│   │   ├── BottomNavigation.tsx
│   │   ├── PageNavigation.tsx
│   │   ├── MapaDestaque.tsx
│   │   ├── ServicosNoMapa.tsx
│   │   ├── MapaInterativo.tsx
│   │   ├── MapPath.tsx
│   │   ├── MapPath.web.tsx
│   │   ├── MapPath.types.ts
│   │   ├── MapaCalorSP.tsx
│   │   ├── MapaCalorCapital.tsx
│   │   ├── MapaCalorDelegacias.tsx
│   │   └── PainelDelegacias.tsx
│   │
│   ├── constants/
│   │   ├── storage.ts
│   │   └── theme.ts
│   │
│   ├── data/
│   │   ├── canaisDenuncia.ts
│   │   ├── conteudos.ts
│   │   ├── servicosApoio.ts
│   │   ├── tiposViolencia.ts
│   │   └── mapaCalor/          → dados do mapa e dos serviços da Rede de Apoio
│   │
│   ├── hooks/
│   │   └── useResponsiveLayout.ts
│   │
│   └── utils/
│       ├── abrirLink.ts        → abre links externos e trata falhas
│       ├── alerta.ts           → avisos que funcionam também na web
│       ├── areaDoPonto.ts
│       ├── quickExit.ts
│       └── voltar.ts           → retorno contextual; Home quando não há tela anterior
│
├── app.config.js
├── app.json
├── eas.json
├── eslint.config.js
├── package.json
├── package-lock.json
├── tsconfig.json
├── AGENTS.md
└── README.md
```

Os componentes de mapa, navegação, escala de texto e áreas seguras acima já estão integrados. `src/utils/voltar.ts` usa `router.back()` quando `router.canGoBack()` é verdadeiro; caso contrário, usa `router.replace('/home')`. O botão **Início** de `PageNavigation` vai diretamente à Home.

---

# 🧭 Navegação

A navegação é feita através do **Expo Router**.

Os arquivos de tela dentro de:

```text
src/app/
```

definem rotas. Há arquivos especiais: `_layout.tsx` compõe o layout compartilhado e `+html.tsx` define o documento HTML da web; eles não são telas de navegação.

Exemplo:

```text
src/app/home.tsx
```

gera:

```text
/home
```

Enquanto:

```text
src/app/emergencia.tsx
```

gera:

```text
/emergencia
```

---

# 📄 Rotas dinâmicas

Os conteúdos educativos utilizam uma rota dinâmica.

Arquivo:

```text
src/app/conteudo/[id].tsx
```

Exemplos:

```text
/conteudo/seguranca-digital
/conteudo/medida-protetiva
/conteudo/ajudar-outra-pessoa
```

Os conteúdos são definidos em:

```text
src/data/conteudos.ts
```

Isso evita a criação de uma página diferente para cada conteúdo.

Cada conteúdo é escrito em **blocos** (parágrafos, subtítulos e listas) e traz a lista de **fontes** oficiais, que aparece no fim da tela. Os textos sobre direitos e procedimentos (Lei Maria da Penha, Lei 14.550/2023, Ligue 180, SAMU) foram escritos a partir de fontes consultadas em outubro de 2026. Antes de mudar um desses textos, confira a fonte de novo e peça a validação do orientador.

---

# 📱 Telas implementadas

Atualmente estão disponíveis:

### Splash Screen

Tela inicial com identidade visual do SOMA.

Existe também uma splash nativa configurada através do:

```text
expo-splash-screen
```

Isso permite que a identidade visual seja exibida antes mesmo do carregamento completo do React Native.

---

### Onboarding

Apresentação inicial das principais funcionalidades.

Possui a opção:

```text
Não mostrar esta tela novamente
```

A preferência é armazenada localmente através de:

```text
AsyncStorage
```

Chave utilizada:

```text
@soma:hide-onboarding
```

---

### Home

Tela principal da aplicação.

No topo, logo abaixo da boas-vindas, fica o cartão em destaque **Mapa de São Paulo** (`MapaDestaque`), o caminho principal para encontrar atendimento perto de você. O mesmo cartão aparece em **Canais** e na **Rede de Apoio**.

Contém atalhos para:

- Tipos de Violência;
- Como denunciar;
- Mapa;
- Rede de Apoio;
- Emergência;
- Mais.

O botão **Emergência** possui destaque visual próprio.

---

### Tipos de Violência

Apresenta informações sobre:

- violência física;
- violência psicológica;
- violência sexual;
- violência patrimonial;
- violência moral;
- violência vicária.

---

### Como buscar ajuda

Centraliza diferentes canais de atendimento.

A tela começa com o cartão **Mapa de São Paulo** e reúne:

- Ligue 180;
- Polícia Militar — 190;
- Rede de apoio (lista de delegacias, casas da mulher, hospitais e defensorias);
- Web Denúncia (canal online do Estado de São Paulo).

O SOMA apenas direciona o usuário para esses canais.

---

### Emergência

Tela simplificada destinada a situações de risco imediato.

Permite abrir diretamente a chamada para:

```text
190   Polícia Militar (perigo imediato)
192   SAMU (urgência médica: pessoa ferida ou passando mal)
180   Orientação e atendimento à mulher
```

O SOMA não realiza despacho policial nem envia pedidos de socorro.

---

### Saída rápida

Botão **Sair**, fixo no canto superior direito de todas as telas (exceto a splash).

Busca reduzir a exposição visual do SOMA caso outra pessoa se aproxime; não garante ocultação total nem remoção de rastros.

Ao ser acionado, o SOMA é substituído por uma página neutra de previsão do tempo:

| Plataforma | Comportamento |
|---|---|
| Web / PWA | Troca a aba atual por uma "máscara" do próprio site (`public/tempo.html`): previsão do tempo de São Paulo, sem nome, cores nem ícone do SOMA. Não abre o Google nem outra aba, e funciona também com o SOMA salvo na tela inicial |
| Web / PWA | Atalho pelo teclado: tecla **Esc** |
| Android | Volta o app para a Home, abre a página neutra no navegador e fecha o app |
| iOS | Volta o app para a Home e abre a página neutra no navegador |

Arquivos:

```text
src/components/QuickExitButton.tsx   → botão e atalho Esc
src/utils/quickExit.ts               → lógica de saída e endereços neutros
public/tempo.html                    → página "máscara" da web
```

A máscara mostra a previsão de São Paulo pela [Open-Meteo](https://open-meteo.com/) (dados públicos, sem chave); a localização da pessoa não é pedida nem enviada. Sem internet, ela mostra só "Não foi possível atualizar a previsão agora", sem números inventados. No Android e no iOS, a página neutra continua sendo a pesquisa da constante `QUICK_EXIT_URL`.

A neutralidade refere-se à aparência visível: os comentários HTML de `public/tempo.html` ainda citam SOMA e podem ser inspecionados no código-fonte. O domínio, o histórico e serviços externos também podem revelar contexto de uso; não há garantia de anonimato.

Limitação: a saída rápida não apaga o histórico do navegador. Na web, a máscara substitui só a página atual: o botão "voltar" do navegador pode levar a telas do SOMA abertas antes. Orientações sobre como limpar o histórico podem ser incluídas nos conteúdos de segurança digital.

---

### Menu inferior

Menu fixo na parte de baixo de todas as telas (exceto a splash e o onboarding), com **Home**, **Explorar**, **Mapa** e **Canais**. O item da tela atual fica destacado; os conteúdos educativos (`/conteudo/...`) destacam **Explorar**.

O menu fica fora da área de rolagem: o conteúdo de cada tela rola acima dele, sem ficar escondido.

A troca entre Home, Explorar, Mapa e Canais usa `router.replace()`. Tocar no item ativo dentro de um artigo também abre a página principal da seção. Artigos e telas secundárias mantêm o retorno contextual pelo botão **Voltar**; o botão **Início** abre a Home diretamente.

Tipos de violência e artigos destacam Explorar; Rede de Apoio e Emergência destacam Canais; Mais e Configurações destacam Home. O layout reserva espaço para a saída rápida e respeita as áreas seguras do sistema, sem sobrepor os botões de navegação.

Arquivos:

```text
src/components/BottomNavigation.tsx   → menu inferior
src/components/PageNavigation.tsx     → Voltar e Início nas telas internas
src/app/_layout.tsx                   → exibe o menu abaixo das telas
```

---

### Rede de Apoio

Lista os serviços da **cidade de São Paulo**, com os mesmos dados que aparecem como ícones no mapa (`src/data/mapaCalor/servicosMulherSP.ts`):

- Delegacias de Defesa da Mulher;
- Casa da Mulher Brasileira, Casas da Mulher e Centros de Defesa e Convivência da Mulher (CDCMs);
- hospitais de referência para violência sexual;
- Defensoria Pública (incluindo o NUDEM).

Cada serviço mostra endereço, horário e telefone, com os botões **Ligar** e **Ver no mapa**. Quando o serviço tem coordenadas cadastradas, o mapa abre aproximado no ponto escolhido; serviços sem coordenadas não geram marcador. A tela tem busca por nome, bairro ou rua, filtros por tipo e o botão **Mostrar mais**.

Fontes: Prefeitura de São Paulo (SMDHC) e Defensoria Pública do Estado de São Paulo, consultadas em setembro e outubro de 2026. As posições no mapa são aproximadas (OpenStreetMap), e a Casa da Mulher Maria de Lourdes Rodrigues está sem posição porque a fonte não trouxe uma localização.

---

### Explorar

Central de conteúdos educativos.

Possui:

- pesquisa por título, resumo ou categoria;
- cartões com identificação da categoria (sem filtro separado por categoria);
- navegação para artigos;
- acesso aos canais de ajuda.

---

### Mais

Centraliza funcionalidades secundárias do aplicativo.

Contém:

- segurança digital;
- orientação para ajudar outra pessoa;
- tipos de violência;
- rede de apoio;
- configurações;
- informações sobre o SOMA;
- informações de privacidade.

---

### Configurações

Tela destinada às preferências do aplicativo.

Atualmente implementado:

- visualizar novamente o onboarding;
- mostrar onboarding na próxima abertura;
- **tamanho do texto** (Normal, Grande ou Muito grande), com um exemplo na própria tela;
- limpar preferências locais (também volta o texto ao tamanho Normal).

O tamanho do texto vale para todas as telas e fica salvo só no aparelho. Para isso, as telas usam o componente `Text` de `src/components/AppText.tsx`, e não o `Text` do `react-native`. Texto novo deve importar de lá:

```tsx
import { Text } from '../components/AppText';
```

Funcionalidades previstas: alto contraste, modo discreto e notificações discretas (o app ainda não envia notificações). Os itens "Em breve" foram tirados da tela e ficam no roadmap.

---

### Mapa

Tela do **Mapa de São Paulo** do SOMA (detalhes na seção abaixo). Ela abre na aba **Cidade de São Paulo**, o mapa mais detalhado, com os ícones dos serviços.

Chegando pelo botão **Ver no mapa** da Rede de Apoio (`/mapa?servico=<id>`), o mapa já abre aproximado no serviço escolhido, com o cartão dele aberto.

Também mantém o atalho para buscar Delegacias da Mulher no Google Maps e o acesso à Rede de Apoio.

---

# 🗺️ Mapa de Calor

A tela tem dois mapas, escolhidos no topo: **Cidade de São Paulo** (o principal, aberto por padrão) e **Estado de SP**. Os dois usam apenas **dados públicos e agregados** e o mesmo componente de mapa (`MapaInterativo`).

As fontes públicas são obtidas e processadas previamente pelos procedimentos de `scripts/mapa-calor/`; os resultados são distribuídos em `src/data/mapaCalor/` e consultados localmente. Não há integração estatística em tempo real, sincronização automática com SSP/Sinesp ou backend próprio. A atualização dessas bases depende de nova preparação dos dados e distribuição do aplicativo/site. A consulta meteorológica da página neutra de saída rápida é uma requisição externa separada, sem relação com os indicadores do mapa.

## Estado de SP

Mostra as **vítimas de feminicídio por município do Estado de São Paulo, de 2019 a 2023**.

- mapa dos 645 municípios paulistas, colorido em cinco faixas;
- dois modos: **taxa por 100 mil habitantes** (média anual) e **número de vítimas**;
- toque em um município para ver vítimas, taxa, população e comparação com a média do estado (0,40);
- busca de município pelo nome, com aproximação no mapa;
- visão do estado inteiro ou da capital e região;
- lista dos municípios com mais vítimas;
- explicação de como ler o mapa e as fontes dos dados.

| Dado | Fonte |
|---|---|
| Feminicídios por município | Ministério da Justiça e Segurança Pública — Sinesp VDE (via pacote BrazilCrime 0.2.1) |
| População por município | Estimativas do Ministério da Saúde/RIPSA (DATASUS) |
| Contornos dos municípios | Malha municipal do IBGE (simplificada) |

## Cidade de São Paulo

Mostra **mulheres vítimas de violência por distrito do Município de São Paulo, em 2024**, somando todos os tipos de violência registrados (física, psicológica, moral, sexual e patrimonial — de ameaça e lesão corporal a estupro e feminicídio).

- mapa dos 96 distritos, colorido em cinco faixas (uma delas marca a média dos distritos, 212,78);
- toque em um distrito para ver o nome e o coeficiente; o cartão mostra subprefeitura, coeficiente, posição entre os 96 distritos e comparação com a média;
- busca de distrito pelo nome, com aproximação no mapa;
- visão da cidade inteira ou do centro;
- lista dos distritos com os maiores coeficientes;
- notas de leitura (subnotificação, contagem pelo local do crime, ocorrências sem localização) e fontes na tela.

| Dado | Fonte |
|---|---|
| Violência contra a mulher por distrito (ano-base 2024) | Mapa da Desigualdade 2025 — Rede Nossa São Paulo e Instituto Cidades Sustentáveis, lançado em junho de 2026 (na imprensa, "Mapa da Desigualdade 2026"). Fontes originais: SSP-SP e Fundação Seade |
| Contornos dos distritos | Prefeitura de São Paulo — GeoSampa (simplificados) |

**Cálculo (feito pela fonte):** número de mulheres vítimas de violência no distrito ÷ população feminina de 20 a 59 anos do distrito × 10 mil. As ocorrências são contadas pelo distrito onde o crime aconteceu. Os valores são os publicados, sem recálculo; o script confere a média (212,78), o menor valor (Vila Andrade, 103,35) e o maior (Sé, 772,15).

### Relatório por área (Cidade de São Paulo)

Na aba **Cidade de São Paulo**, o botão **Relatório por área** mostra os dados da própria SSP-SP por **área de delegacia** (93 áreas que cobrem a cidade inteira), de janeiro de 2024 a agosto de 2026.

- busca por bairro, distrito, estação de metrô ou trem, parque, estádio, hospital, universidade ou número da delegacia, com nomes alternativos (por exemplo, "estádio do Palmeiras" acha o Nubank Parque, antigo Allianz Parque); um distrito aponta para a área que cobre a maior parte dele;
- botão **Usar minha localização**: o app descobre a área no próprio aparelho, sem enviar nem salvar a localização;
- **ícones dos serviços no mapa**, com os mesmos ícones da Rede de Apoio: Delegacias da Mulher, centros de referência (Casa da Mulher Brasileira, Casas da Mulher e CDCMs), hospitais de referência para violência sexual e unidades da Defensoria Pública. Os ícones aparecem quando o mapa é aproximado; tocar em um ícone mostra endereço, horário e telefone. O filtro **Mostrar no mapa** liga e desliga cada tipo (com a quantidade de cada um) e permite mostrar ou esconder todos. Marcadores, filtros e cartões de serviços também estão implementados no mapa por distrito por meio de `ServicosNoMapa.tsx`;
- **pino vermelho do lugar buscado ou da localização solicitada**, no relatório por área: entra na legenda ("Lugar buscado: nome" ou "Sua localização"), e tocar nele mostra o nome do lugar e sua área de delegacia. A etiqueta da área se afasta do pino para não cobri-lo. A busca de lugares e o botão de localização pertencem a `PainelDelegacias`; a busca do mapa por distrito é pelo nome do distrito;
- mapa das áreas, colorido pelo número de mulheres vítimas em 2025;
- relatório da área: **total de mulheres vítimas e crimes por tipo** (ameaça, lesão corporal, injúria, perseguição, descumprimento de medida protetiva etc.), **evolução** de 2024 a 2026 e **comparação com a média** das 93 áreas;
- **onde buscar atendimento perto dali**: os três serviços mais próximos (Delegacias da Mulher, Casa da Mulher Brasileira, Casas da Mulher, CDCMs), com endereço, horário e telefone, além dos serviços 24 horas, da Defensoria Pública e dos telefones 180 e 190;
- aviso dentro de cada relatório: estupro, feminicídio e tentativa de homicídio não aparecem na lista da área porque a SSP não publica esses números por delegacia; o aviso mostra os totais da cidade no ano escolhido;
- notas de leitura e fontes na tela.

O relatório **não diz se um lugar é seguro ou perigoso**: mostra boletins registrados, com as ressalvas (subnotificação, contagem pelo local do fato, número de vítimas e não taxa). Contagens de 1 a 4 aparecem como "menos de 5".

| Dado | Fonte |
|---|---|
| Vítimas e tipos de crime por área | SSP-SP — base de dados Violência Contra a Mulher (dados a partir de 2024), conferida mês a mês com o painel da SSP |
| Áreas das delegacias | CEM/USP — Distritos e Delegacias Policiais 2021 (fonte original SSP-SP) |
| Serviços de apoio | Prefeitura de São Paulo — Secretaria Municipal de Direitos Humanos e Cidadania |
| Lugares da busca | OpenStreetMap (© contribuidores do OpenStreetMap, licença ODbL) |

O passo a passo, os cálculos e as limitações dos dois mapas estão em `scripts/mapa-calor/README.md`.

**Escopo exato da `main` após o PR #3:** o mapa estadual disponibiliza feminicídios por município de **2019 a 2023**; a capital apresenta violência contra a mulher por **96 distritos (ano-base 2024)** e relatório por **93 áreas de delegacia (2024 a agosto de 2026)**. A série adicional de violência contra a mulher por município do estado em **2023**, encontrada em outro fork (`violenciaMulherSP2023.ts`), **não está presente nesta versão oficial**. Os indicadores usam unidades estatísticas, populações de referência e metodologias diferentes; não devem ser comparados como se medissem o mesmo fenômeno.

Arquivos:

```text
src/app/mapa.tsx                              → tela (alternância Estado / Cidade)
src/components/MapaInterativo.tsx            → mapa genérico: zoom, arraste, pinça e etiqueta ao tocar
src/components/MapaCalorSP.tsx               → mapa do estado (municípios)
src/components/MapaCalorCapital.tsx          → mapa da cidade (distritos)
src/components/MapaCalorDelegacias.tsx       → mapa das áreas de delegacia, busca e serviços próximos
src/components/PainelDelegacias.tsx          → relatório por área
src/components/ServicosNoMapa.tsx            → ícones dos serviços no mapa, legenda e cartão
src/data/mapaCalor/feminicidioSP.ts           → números por município e fontes
src/data/mapaCalor/municipiosSP.ts            → contornos dos municípios
src/data/mapaCalor/violenciaMulherCapital.ts  → números por distrito e fontes
src/data/mapaCalor/distritosSP.ts             → contornos dos distritos
src/data/mapaCalor/delegaciasSP.ts            → contornos das áreas de delegacia
src/data/mapaCalor/violenciaDelegacias.ts     → números da SSP por área, ano e tipo
src/data/mapaCalor/servicosMulherSP.ts        → serviços de apoio (delegacias, centros, saúde e Defensoria)
src/data/mapaCalor/distritoParaDelegacia.ts   → distritos × áreas de delegacia
src/data/mapaCalor/lugaresSP.ts               → lugares conhecidos para a busca (OpenStreetMap)
src/utils/areaDoPonto.ts                      → descobre a área de delegacia de uma coordenada, no aparelho
scripts/mapa-calor/                           → scripts, dados de origem e documentação
```

### Princípios

O mapa não:

- apresenta localização individual de vítimas;
- exibe endereços específicos de ocorrências;
- utiliza relatos de usuários como pontos públicos;
- indica que uma região é individualmente segura ou perigosa.

Os nomes das áreas não ficam escritos sobre o mapa: aparecem só na etiqueta, ao tocar. A etiqueta tem um botão **×** para fechá-la sem fechar o relatório; ela volta ao tocar de novo em uma área. Vale para o mapa do estado e para os da cidade.

### Limitações dos indicadores e recursos existentes

- Estado: na base do Sinesp, os registros de estupro de SP não têm município, por isso o mapa do estado mostra apenas feminicídio.
- Cidade: o indicador do Mapa da Desigualdade junta todos os tipos de violência em um único número; a separação por tipo está no relatório por área (dados da SSP).
- Cidade: 33,5% das ocorrências usadas pela fonte não tinham localização e ficaram de fora.
- Relatório por área: feminicídio e estupro não vêm por delegacia na base da SSP; aparecem só como totais da cidade.
- A exibição de serviços da rede de apoio já existe nos mapas da capital, com marcadores, filtros por categoria e cartões (`ServicosNoMapa.tsx`). A conferência periódica de telefones, horários e posições continua pendente; o recurso não constitui atendimento em tempo real.

---

# 📐 Responsividade

A aplicação possui uma estrutura de responsividade centralizada em:

```text
src/hooks/useResponsiveLayout.ts
```

Os principais breakpoints utilizados são:

```text
< 350px
Celulares extremamente compactos

< 390px
Celulares compactos

390px – 767px
Celulares

768px – 1179px
Tablets

>= 1180px
Desktop
```

A interface utiliza principalmente:

```text
flex
flexWrap
width: 100%
maxWidth
minHeight
useWindowDimensions
```

em vez de depender exclusivamente de dimensões fixas.

---

# 📱 Safe Area

Nas plataformas nativas, `AppSafeArea.tsx` utiliza:

```text
react-native-safe-area-context
```

Na web, `AppSafeArea.web.tsx` usa CSS `env(safe-area-inset-*)`, em conjunto com `viewport-fit=cover` no HTML. Essas implementações reservam espaço para as áreas do sistema; os cenários abaixo ainda precisam de validação detalhada em aparelhos físicos.

Exemplos:

### Android com navegação por botões

```text
SOMA
─────────────
Menu do SOMA
─────────────
◀   ●   ■
```

### Android com gestos

```text
SOMA
─────────────
Menu do SOMA
      ─
```

### iPhone

O layout nativo usa o inset inferior para acomodar a área do indicador Home; a validação detalhada por dispositivo permanece pendente.

Dessa forma não é necessário detectar manualmente se o usuário utiliza gestos ou botões de navegação.

---

# 🎨 Identidade visual

Paleta principal:

```text
Roxo principal
#3D1E45

Roxo escuro
#28152F

Rosa
#CF879E

Rosa claro
#E8C8CA

Lavanda
#BBA8CC

Fundo
#FFFDF1
```

As cores estão centralizadas em:

```text
src/constants/theme.ts
```

---

# 🦋 Identidade do aplicativo

Os principais assets estão em:

```text
assets/images/
```

### Logo

```text
logo-soma.png
```

Utilizada dentro do aplicativo e na Splash Screen.

### Ícone padrão

```text
icon-soma.png
```

### Adaptive Icon Android

```text
adaptive-icon-soma.png
```

O Adaptive Icon permite que launchers Android apliquem diferentes formatos ao ícone sem cortar a identidade principal.

---

# 💾 Persistência local

Preferências simples são armazenadas utilizando:

```text
@react-native-async-storage/async-storage
```

Chaves utilizadas:

```text
@soma:hide-onboarding   exibição do onboarding
@soma:text-scale        tamanho do texto (grande ou muito-grande; ausente = normal)
```

Nenhum banco de dados foi implementado nesta etapa.

---

# 🗄️ Backend

O MVP atual **não possui backend**.

Dados utilizados nas telas são armazenados localmente em arquivos TypeScript.

Exemplo:

```text
src/data/
```

Uma futura evolução poderá utilizar:

```text
Node.js
TypeScript
API REST
PostgreSQL
```

caso seja necessário oferecer persistência remota ou consulta dinâmica por API própria. Isso é uma possibilidade futura, distinta do processamento prévio de fontes públicas já existente.

---

# 🔐 Privacidade

O SOMA foi pensado para minimizar a coleta de informações sensíveis.

Entre os princípios do projeto estão:

- evitar armazenamento desnecessário de dados pessoais;
- evitar armazenamento de denúncias;
- utilizar canais oficiais;
- reduzir rastros desnecessários;
- priorizar segurança e discrição;
- fornecer informações claras antes de redirecionamentos.

---

# ♿ Acessibilidade

O projeto considera requisitos como:

- linguagem simples;
- botões com áreas de toque adequadas;
- textos legíveis;
- contraste;
- navegação simplificada;
- interface responsiva;
- papéis e rótulos para leitores de tela (`accessibilityRole` e `accessibilityLabel`) nos botões, links, títulos, caixa de seleção e campos de busca das telas;
- três escalas já implementadas em `AppText.tsx`: Normal (1×), Grande (1,15×) e Muito grande (1,3×), selecionáveis em Configurações e persistidas localmente; o `TextScaleProvider` aplica a escolha aos textos que usam esse componente;
- estados acessíveis declarados com `accessibilityState` e atributos como `aria-selected`, `aria-checked` e `aria-disabled` nos controles correspondentes;
- modo de alto contraste planejado.

Ainda falta testar com leitores de tela reais (TalkBack e VoiceOver).

---

# 🌐 Build Web

Para gerar a versão web:

```bash
npx expo export --platform web
```

O resultado será criado em:

```text
dist/
```

Para publicar através do EAS Hosting:

```bash
npx eas-cli@latest deploy --prod
```

---

# 🤖 Build Android

O projeto utiliza EAS Build.

Arquivo:

```text
eas.json
```

Para gerar um APK de preview:

```bash
npx eas-cli@latest build --platform android --profile preview
```

Esse APK pode ser instalado diretamente em dispositivos Android.

---

# 📲 Atualizações

Existem diferentes tipos de atualização.

### Web / PWA

Alterações podem ser publicadas utilizando:

```bash
npx expo export --platform web
npx eas-cli@latest deploy --prod
```

A URL de produção permanece a mesma.

### Android

Mudanças que afetam o código nativo podem exigir uma nova build.

Não há EAS Update configurado nesta versão. A distribuição de alterações de JavaScript ou dos dados incorporados para um APK já instalado também depende da geração e instalação de um APK atualizado; publicar o site não atualiza automaticamente o aplicativo Android.

```bash
npx eas-cli@latest build --platform android --profile preview
```

O uso de **EAS Update** poderá ser configurado futuramente para atualizações compatíveis sem necessidade de gerar um novo APK.

---

# 🌿 Estratégia de branches

A branch:

```text
main
```

deve conter a versão estável do projeto.

Não desenvolver diretamente na `main`.

Antes de iniciar uma funcionalidade:

```bash
git checkout main
```

Atualize:

```bash
git pull origin main
```

Crie uma branch:

```bash
git checkout -b feat/nome-da-funcionalidade
```

Exemplo:

```bash
git checkout -b feat/mapa-calor
```

---

# 💾 Commit

Depois de desenvolver:

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "feat: implementa funcionalidade"
```

Primeiro push da branch:

```bash
git push -u origin feat/nome-da-funcionalidade
```

Depois abra um **Pull Request** no GitHub:

```text
feat/nome-da-funcionalidade
              ↓
             main
```

---

# 📝 Padrão de commits

Preferencialmente utilizar mensagens simples seguindo Conventional Commits.

### Nova funcionalidade

```bash
git commit -m "feat: implementa mapa de calor"
```

### Correção

```bash
git commit -m "fix: corrige responsividade da home"
```

### Refatoração

```bash
git commit -m "refactor: reorganiza componentes"
```

### Documentação

```bash
git commit -m "docs: atualiza README"
```

### Estilo

```bash
git commit -m "style: ajusta espaçamento dos cards"
```

---

# 🔄 Mantendo sua branch atualizada

Enquanto estiver desenvolvendo, outras alterações podem entrar na `main`.

Atualize primeiro:

```bash
git checkout main
git pull origin main
```

Depois retorne à sua branch:

```bash
git checkout feat/minha-feature
```

E integre a versão atual da main conforme a estratégia definida pelo grupo.

---

# 🧪 Testes recomendados

Antes de abrir um Pull Request, testar:

### Web

Viewports recomendados:

```text
320px
360px
390px
430px
768px
1024px
1366px
1920px
```

### Mobile

Quando possível:

- Android com navegação por gestos;
- Android com navegação por botões;
- iPhone;
- dispositivo com tela menor;
- dispositivo com tela maior.

### Fluxos

Validar pelo menos:

```text
Splash
→ Onboarding
→ Home
→ Tipos de Violência

Home
→ Como denunciar

Home
→ Emergência

Home
→ Rede de Apoio

Home
→ Explorar
→ Conteúdo

Home
→ Mais
→ Configurações

Home
→ Mapa
```

---

# ⚠️ Dados e validação

### Validações da implementação atual

Os relatórios em `docs/integracao-zip-navegacao.md`, `docs/migracao-sdk58.md` e `docs/publicacao-2026-10-23.md` registram verificações de TypeScript, lint, exportações e fluxos no navegador, além da conclusão de uma build Android de pré-visualização e da publicação web em **23/10/2026**. Esses registros são evidências históricas do trabalho realizado e **não comprovam, por si sós, que uma nova build ou um novo deploy tenha sido executado após o merge de 08/11/2026**.

A validação detalhada em dispositivos Android físicos, incluindo navegação por gestos/três botões e permissões, além de testes com TalkBack/VoiceOver, deve ser registrada separadamente quando executada. Não classificar as plataformas como homologadas integralmente apenas porque os artefatos foram gerados ou a versão web carregou.

A exibição de contagens de 1 a 4 como **“menos de 5”** é uma regra de apresentação; ela **não garante** que os valores exatos tenham sido suprimidos dos arquivos de dados distribuídos. Essa limitação precisa ser considerada em avaliações de privacidade.

Essa regra está implementada em `PainelDelegacias.tsx` (`MINIMO_EXIBIDO = 5`), não de forma global: o mapa estadual (`MapaCalorSP.tsx`) e seu cartão de município mostram contagens exatas, inclusive de 1 a 4. Não interpretar o mascaramento do relatório como supressão dos números nos mapas ou nos datasets.

Os serviços da Rede de Apoio e os ícones do mapa usam endereços e telefones de páginas oficiais da Prefeitura de São Paulo e da Defensoria Pública, consultadas em setembro e outubro de 2026. As posições no mapa são aproximadas.

Os conteúdos educativos foram escritos a partir de fontes oficiais, que aparecem no fim de cada conteúdo.

Mesmo assim, o SOMA continua sendo um protótipo acadêmico. Antes de qualquer uso fora desse contexto:

- confirmar endereços, horários e telefones dos serviços;
- validar os conteúdos com profissionais da área;
- revisar tudo de novo quando as fontes forem atualizadas.

---

# 🔮 Roadmap

### Funcionalidades implementadas

Os itens abaixo estão presentes no código; isso não significa homologação de todos os cenários de uso.

- [x] Mapas de feminicídios por município, indicadores por distrito e relatório por área de delegacia (`MapaInterativo`, `MapaCalorSP`, `MapaCalorCapital`, `MapaCalorDelegacias` e `PainelDelegacias`);
- [x] preparação prévia de fontes públicas em lote e consulta dos arquivos agregados locais, sem atualização estatística em tempo real;
- [x] serviços nos mapas da capital com marcadores, filtros e cartões (`ServicosNoMapa`), além da lista de serviços próximos no relatório;
- [x] Rede de Apoio com busca, filtros, ligação e acesso ao mapa;
- [x] mapa da capital como visão inicial e atalhos `MapaDestaque` na Home, em Canais e na Rede de Apoio;
- [x] conteúdos educativos com fontes e pesquisa por título, resumo ou categoria;
- [x] acesso ao discador para 190, 192 (SAMU) e 180;
- [x] navegação inferior global, seção ativa, Voltar contextual e Início direto;
- [x] três escalas de texto com persistência local, rótulos/papéis acessíveis e áreas seguras por plataforma;
- [x] saída rápida e página neutra na web, com as limitações de histórico descritas acima;
- [x] preferências de onboarding e limpeza das preferências locais.

### Validações pendentes

- [ ] Conferir periodicamente telefones, horários, endereços e posições dos serviços;
- [ ] validar os conteúdos com profissionais da área e revisar suas fontes;
- [ ] testar TalkBack e VoiceOver, contraste, legibilidade e tamanho de fonte do sistema;
- [ ] validar o APK em Android físico, incluindo Voltar, gestos/três botões, permissões e falhas de localização;
- [ ] ampliar os testes em diferentes dispositivos e navegadores, incluindo instalação e limites offline do Web App;
- [ ] avaliar saída rápida, histórico, multitarefa, falhas de rede e valores pequenos nos datasets distribuídos.

### Evoluções futuras

- [ ] Modo discreto (além da saída rápida já implementada);
- [ ] modo de alto contraste;
- [ ] notificações discretas, caso o recurso seja aprovado — não há envio de notificações nesta versão;
- [ ] melhorias de segurança digital além do conteúdo orientativo existente;
- [ ] configuração de EAS Update para atualizações compatíveis;
- [ ] refinamento da PWA/Web App, sem prometer funcionamento offline integral na implementação atual.

---

# 🚨 Aviso importante

O Projeto SOMA é uma plataforma de orientação.

Ele **não substitui serviços policiais, jurídicos, médicos ou de emergência**.

Em situações de perigo imediato, devem ser utilizados os canais oficiais de emergência.

No Brasil:

```text
Polícia Militar
190
```

Para orientação e atendimento à mulher:

```text
Ligue 180
```

---

# 👥 Equipe

Projeto desenvolvido como atividade acadêmica.

Os integrantes da equipe podem ser adicionados nesta seção:

```text
Nome — função / área
Nome — função / área
Nome — função / área
```

---

# 📌 Status

### Recursos implementados no código

MVP navegável em Expo SDK 58, mapas do estado e da capital, relatório por área, serviços no mapa e Rede de Apoio, conteúdos educativos, navegação persistente, saída rápida, três escalas de texto e layout responsivo. Manifest e metadados para Web App estão presentes; isso não comprova suporte offline integral.

### Artefatos e execuções registrados

| Evidência histórica | Situação documentada | Limite |
| --- | --- | --- |
| Site web no EAS Hosting | Publicação em 23/10/2026 | Não comprova novo deploy após o merge do PR #3 |
| APK Android de preview | Build concluída em 23/10/2026 | Geração do APK não equivale a validação em aparelho físico |
| Expo Go no iPhone | Usuário confirmou funcionamento com túnel | Não equivale a build iOS distribuída nem homologação integral |
| Web exportada e fluxos no navegador | Verificações registradas em `docs/` | Não cobrem todos os dispositivos, navegadores ou recursos de acessibilidade |

### Validação ainda pendente

Permanecem as verificações detalhadas de Android físico, leitores de tela, permissões, saída rápida, instalação Web App e revisão dos dados de atendimento e conteúdos, conforme o roadmap. Nenhuma plataforma é classificada aqui como integralmente homologada.

> **Nota de versão:** a baseline funcional é o merge do PR #3 (`f243aeda`). Recursos presentes, artefatos gerados e validações são evidências distintas. Este PR documental não executa nova build, deploy ou certificação de segurança/acessibilidade. Consulte [`docs/arquitetura-software.md`](docs/arquitetura-software.md) e os relatórios históricos em `docs/`.

---

# 🦋 SOMA

> **Segurança, Orientação, Monitoramento e Apoio**

Tecnologia utilizada como instrumento para facilitar o acesso à informação, orientação e rede de proteção.
