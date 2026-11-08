# AGENTS.md — Projeto SOMA

> Instruções para agentes de desenvolvimento (incluindo Codex) que trabalhem neste repositório. Este arquivo complementa o `README.md`, o `package.json` e o código-fonte. **O código efetivamente presente na branch de trabalho prevalece sobre descrições históricas.**

## 1. Contexto e missão

- **Projeto:** SOMA — **Segurança, Orientação, Monitoramento e Apoio**.
- **Repositório:** `StenioCalado/projeto-soma`; branch estável: `main`.
- **Natureza:** MVP acadêmico, multiplataforma, com foco inicial no estado de São Paulo (Brasil), voltado à orientação sobre violência doméstica e acesso à rede oficial de proteção.
- **Propósito:** facilitar a identificação de sinais de violência, a consulta de informações educativas e o acesso a canais oficiais de ajuda, com linguagem clara, acessibilidade, discrição e privacidade.
- **ODS de referência:** ODS 5 (Igualdade de Gênero), ODS 16 (Paz, Justiça e Instituições Eficazes) e ODS 10 (Redução das Desigualdades).

**Limite fundamental:** o SOMA **não é um canal oficial de denúncias**, não recebe nem registra denúncias, não despacha polícia, não oferece atendimento humano em tempo real e não substitui orientação jurídica, policial, médica ou psicológica. Nunca produza interface, conteúdo ou mensagem que dê a entender o contrário.

## 2. Leia antes de alterar código

1. Leia o `README.md` e examine os arquivos reais afetados pela tarefa.
2. Verifique o `package.json`, `app.json`, `eas.json` e o `tsconfig.json` antes de mudar dependências, versões, build ou configuração.
3. **Expo HAS CHANGED:** antes de escrever código dependente das APIs do Expo, consulte a documentação **da versão efetivamente instalada**. Na base examinada, o projeto usa **Expo SDK 58**: <https://docs.expo.dev/versions/v58.0.0/>. Se a versão mudar, consulte a documentação correspondente; não aplique exemplos de outras versões sem verificar compatibilidade.
4. Considere os arquivos de dados locais e componentes existentes como fonte de verdade para nomes, tipos, rotas e padrões de implementação.
5. Diferencie explicitamente **funcionalidade implementada**, **protótipo/demonstração** e **funcionalidade planejada**. Não apresente itens do roadmap como concluídos.

## 3. Stack e arquitetura atual

- **TypeScript** com configuração estrita, **React 19**, **React Native**, **Expo SDK 58** e **Expo Router**.
- **React Native Web** para navegadores e experiência instalável de Web App/PWA.
- **AsyncStorage** apenas para pequenas preferências locais (por exemplo, onboarding); não há backend nem banco de dados implementado nesta etapa.
- **EAS Build** para APK Android de pré-visualização; **EAS Hosting** para publicação web.
- Arquitetura atual: **monólito frontend multiplataforma, modularizado por componentes e responsabilidades**, com navegação baseada em rotas e **separação lógica parcial de apresentação, processamento e dados locais**. Gênero: **Sistema Interativo**. A arquitetura **não é Layered Architecture estrita**: telas e componentes podem consumir dados diretamente. Não descreva o sistema como MVC, Clean Architecture, microsserviços ou cliente-servidor com backend de aplicação próprio.
- Referência arquitetural: [`docs/arquitetura-software.md`](docs/arquitetura-software.md). Não confunda a arquitetura do aplicativo em execução com o **pipeline de preparação de dados em lote** (scripts Python/JavaScript executados antes do build).

Diretórios principais:

| Caminho | Responsabilidade |
| --- | --- |
| `src/app/` | Telas, navegação, layout raiz e rotas Expo Router |
| `src/app/conteudo/[id].tsx` | Rota dinâmica dos conteúdos educativos |
| `src/components/` | Componentes de interface reutilizáveis |
| `src/data/` | Conteúdos educativos e outros dados locais |
| `src/data/mapaCalor/` | Estatísticas públicas agregadas, geometrias e referências territoriais consumidas no dispositivo |
| `scripts/mapa-calor/` | Scripts e insumos de processamento e geração dos dados antes do build |
| `src/components/MapaInterativo.tsx` | Interação e renderização do mapa SVG |
| `src/components/PainelDelegacias.tsx` | Relatório territorial e recursos de busca/localização |
| `src/components/BottomNavigation.tsx` / `src/components/PageNavigation.tsx` | Navegação principal e retorno contextual |
| `src/components/AppText.tsx` / `src/components/AppSafeArea*.tsx` | Escala global de texto e áreas seguras por plataforma |
| `src/components/QuickExitButton.tsx` / `src/utils/quickExit.ts` | Saída rápida com limitações próprias de cada plataforma |
| `src/hooks/useResponsiveLayout.ts` | Breakpoints, dimensões e safe areas |
| `src/constants/theme.ts` | Paleta de cores da identidade visual |
| `assets/images/` | Logo, ícones do aplicativo e outros assets |
| `public/` | Manifest, ícones e recursos estáticos para web/PWA |
| `src/app/+html.tsx` | Metadados e estrutura HTML da versão web |
| `app.json` / `eas.json` | Configuração Expo e perfis de build |

Mantenha a estrutura atual quando suficiente. Prefira extrair lógica repetida para componentes/hooks em vez de copiar código em várias telas. Não crie backend, serviços externos, autenticação ou novas dependências sem necessidade justificada e autorização de escopo.

## 4. Regras obrigatórias de produto e segurança

### Canais oficiais

- **190:** emergência policial no Brasil. Um botão pode iniciar a discagem pelo sistema operacional; **isso não significa que o SOMA realizou o atendimento ou enviou um pedido de socorro**.
- **180:** Central de Atendimento à Mulher; orientação e encaminhamento por canal oficial.
- Outros recursos (como delegacias, Defensoria, serviços de saúde e canais de denúncia do estado de São Paulo) devem ser verificados em fontes oficiais antes de alterar links, números, horários, cobertura territorial ou instruções.
- Ao abrir serviços externos, apresente o contexto adequado e trate falhas de abertura. Não invente integrações com polícia, justiça, DOL, CRM ou serviços governamentais.
- Mensagens em situações sensíveis devem ser objetivas, respeitosas, não culpabilizantes e sem promessas de proteção imediata pelo aplicativo.

### Privacidade e exposição

- Adote **minimização de dados**: não peça nem persista relatos, endereço exato da vítima, localização contínua, documentos pessoais ou histórico de violência sem requisito explícito e análise de segurança.
- Não introduza telemetria, analytics, publicidade, rastreamento, notificações sensíveis ou armazenamento remoto silenciosamente.
- Não registre em `console`, logs, erros, URLs ou eventos informações potencialmente sensíveis.
- A **saída rápida** já existe (`QuickExitButton` e `quickExit`), mas **não apaga o histórico do navegador**, não garante ocultação em multitarefa e não constitui modo invisível. **Modo discreto, notificações discretas e alto contraste** não devem ser tratados como concluídos quando estiverem apenas no roadmap.
- Antes de criar funcionalidades de segurança, avalie riscos reais de exposição, comportamento em segundo plano, histórico de navegação e limitações por plataforma. Não prometa invisibilidade ou proteção absoluta.

### Mapa de calor

- O mapa estatístico **já está implementado** em `src/app/mapa.tsx` e nos componentes `MapaInterativo`, `MapaCalorSP`, `MapaCalorCapital`, `MapaCalorDelegacias` e `PainelDelegacias`. É uma visualização **descritiva** de dados públicos agregados, **não** predição de risco pessoal.
- **Estado de São Paulo:** feminicídios por município (645 municípios, período de **2019 a 2023**) com total e taxa média anual por 100 mil habitantes. Fonte indicada no projeto: Sinesp e estimativas populacionais DATASUS/RIPSA.
- **Capital — distritos:** indicador de violência contra a mulher por **96 distritos**, ano-base **2024**, derivado do Mapa da Desigualdade.
- **Capital — áreas de delegacia:** relatório de **93 áreas**, com registros da SSP-SP de **janeiro de 2024 a agosto de 2026**; 2026 é **parcial**, e o comparativo utiliza 2025 como último ano completo.
- Os scripts em `scripts/mapa-calor/` geram os arquivos importados da pasta `src/data/mapaCalor/`. **Não altere arquivos gerados à mão**, nem misture vítimas, ocorrências, coeficientes ou territórios com denominadores distintos. Consulte `scripts/mapa-calor/README.md` antes de mexer em cálculos.
- **Não existe nesta `main` a camada de violência contra a mulher por município em 2023** presente em outra versão/fork (`violenciaMulherSP2023.ts`); não a documente como entregue sem integrá-la e validá-la.
- Nunca exiba pontos individuais de ocorrência, endereços de vítimas, relatos privados ou marcadores que aparentem identificar vítimas. Serviços de atendimento podem ter localizações públicas verificadas.
- Não infira risco individual, nem rotule um lugar como seguramente “seguro”/“perigoso”; ausência de registro não significa ausência de violência.
- Registre **fonte, período, região, unidade estatística, denominador, atualização e limitações**. Avalie subnotificação, diferenças entre fontes e células com poucos registros.
- Algumas contagens de **1 a 4** são apresentadas como “menos de 5” **na interface**, mas os dados numéricos exatos podem permanecer nos arquivos distribuídos. Não trate isso como anonimização ou supressão efetiva do dataset sem modificação e verificação do processo de geração.

## 5. Identidade visual e experiência

Paleta oficial — consulte sempre `src/constants/theme.ts`:

| Token | Valor |
| --- | --- |
| `primary` | `#3D1E45` |
| `primaryDark` | `#28152F` |
| `pink` | `#CF879E` |
| `lightPink` | `#E8C8CA` |
| `lavender` | `#BBA8CC` |
| `background` | `#FFFDF1` |
| `text` | `#302B30` |

- Preserve a identidade do SOMA (borboleta/logo e linguagem visual acolhedora) e o destaque da ação **Emergência**.
- Priorize legibilidade, hierarquia, áreas de toque confortáveis, contraste adequado e rótulos acessíveis (`accessibilityLabel`, funções e estados quando pertinentes).
- Use linguagem simples em português brasileiro; evite termos jurídicos sem explicação e textos que possam soar acusatórios ou alarmistas.
- Não altere deliberadamente a identidade visual global em uma tarefa de correção pontual.

## 6. Responsividade e compatibilidade

Use `useResponsiveLayout.ts` como referência; não espalhe novos números mágicos pelos componentes.

| Faixa | Interpretação atual |
| --- | --- |
| `< 350px` | Celular muito compacto |
| `< 390px` | Celular compacto |
| `< 768px` | Celular |
| `768–1179px` | Tablet |
| `>= 1180px` | Desktop |
| Altura `< 740px` | Tela baixa |

- Compatibilidade prioritária: **Android**, **iPhone/iOS via Expo Go ou Web App**, **web desktop** e **tablet**.
- Use os componentes `AppSafeArea` existentes: insets nativos por `react-native-safe-area-context` e implementação web compatível com CSS `env(safe-area-inset-*)`. Teste Android com **três botões** e com **gestos**, além da área do indicador Home no iPhone.
- Prefira `flex`, `flexWrap`, limites de largura e conteúdo rolável a alturas fixas que cortem botões/textos.
- Considere tamanho de fonte do sistema e teclados; não esconda ações essenciais fora da área visível.
- Código exclusivo de navegador deve ficar em arquivo `.web.tsx` ou ter proteção por plataforma; preserve as variantes `MapPath.tsx` / `MapPath.web.tsx`. Não use APIs DOM em código nativo sem alternativa.

## 7. Navegação — estado implementado após o PR #3

- `src/app/_layout.tsx` utiliza `Stack` dentro de um layout compartilhado; `BottomNavigation` permanece fora da área de rolagem e é exibida em telas internas pertinentes, **não** em splash (`/`) ou onboarding (`/onboarding`).
- O menu oferece **Home, Explorar, Mapa e Canais**, indica a seção ativa e utiliza `router.replace()` nas trocas principais para reduzir empilhamentos desnecessários.
- `PageNavigation` oferece **Voltar** contextual e acesso direto a **Início**; artigos e páginas secundárias mantêm a navegação apropriada.
- `QuickExitButton`, `TextScaleProvider` e `AppSafeArea` fazem parte da composição global. Há registros de validação no navegador e de build em `docs/`, mas não suponha que todos os cenários em dispositivos físicos foram testados.

Ao alterar a navegação, mantenha essas garantias, preserve deep links, preferência de onboarding, acessibilidade, safe areas, ação de emergência e evite regressão com retorno do Android e telas menores. Teste: Home → Explorar → artigo → Canais → Mapa → Home, além do retorno direto à Home. Não marque um teste como executado sem evidência.

## 8. Fluxos e arquivos que não devem regredir

- **Splash:** `src/app/_layout.tsx`, `src/app/index.tsx` e plugin `expo-splash-screen` em `app.json`.
- **Onboarding:** opção “Não mostrar esta tela novamente”; chave local `@soma:hide-onboarding`. Não altere a semântica da preferência sem necessidade.
- **Home:** atalhos para tipos de violência, ajuda/denúncia, mapa, rede de apoio, emergência e mais.
- **Conteúdo educativo:** rota `/conteudo/[id]`, alimentada pelos dados locais.
- **Emergência:** acessibilidade e acesso claro aos canais oficiais, sem promessa de acionamento automático.
- **Configurações:** preservar o ajuste de tamanho de texto implementado e distinguir os controles em funcionamento daqueles marcados “Em breve”.
- **Mapa:** preservar modos/legendas, geometrias SVG, busca de localidades, relatórios por área, links de serviços e indicação de períodos das fontes.
- **Dados estatísticos:** preservar as validações de agregação do pipeline. Não tratar arquivos de saída do gerador como fonte primária nem alterar totais arbitrariamente.
- **Privacidade:** nunca apresentar a saída rápida como garantia de apagar histórico; não transmitir localização territorial calculada localmente a serviços externos sem autorização explícita.
- **Web/PWA:** preserve `public/`, `src/app/+html.tsx`, `web.output = static` e as adaptações de hidratação do Expo SDK 58.
- **Ícones:** mantenha nomes e caminhos existentes em `app.json`, especialmente `icon-soma.png` e `adaptive-icon-soma.png`.

## 9. Dependências, ferramentas e validação

Use o gerenciador npm e preserve `package-lock.json`. Prefira instalar pacotes compatíveis via `npx expo install <pacote>` quando envolver módulos Expo/React Native. Nunca atualize SDK ou versões principais incidentalmente.

Comandos de referência (execute conforme o ambiente e reporte erros reais):

```bash
npm ci
npx tsc --noEmit
npx expo-doctor@latest
npx expo start
npx expo start --web
npx expo start --tunnel
npx expo export --platform web
```

- Execute `npm run lint` quando viável (`expo lint` está configurado). Não declare que há suíte automatizada quando ela não estiver versionada. Consulte `docs/migracao-sdk58.md` para as verificações registradas historicamente.
- Para mudanças de interface, valide no mínimo telas pequenas (~320/360/390px), celulares maiores, tablet e desktop, além de navegação por gestos/botões no Android quando possível.
- Para funcionalidades sensíveis, teste também falha de conexão, serviços externos indisponíveis, textos longos e retorno de navegação.
- Antes de finalizar, execute as verificações viáveis (`tsc`, export web, inspeção de diff) e informe **quais foram executadas**, **quais falharam** e **quais não puderam ser executadas**. Não alegue sucesso sem evidência.
- Não execute builds EAS, publicações, deploys de produção ou operações potencialmente custosas sem solicitação explícita.

## 10. Git, branches e Pull Requests

- **`main` é a base estável.** Para funcionalidades e refatorações, trabalhe em uma branch curta a partir da `main` atualizada, como `feat/acessibilidade-mapa` ou `fix/ajuste-safe-area`. As melhorias de mapa e navegação global já foram integradas pelo **PR #3** e não devem ser reapresentadas como pendentes.
- Use **Conventional Commits**: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`; descreva objetivamente o que mudou.
- Faça mudanças mínimas relacionadas à tarefa; não misture refatorações sem relação ou formatação massiva.
- Abra PR com **contexto, alterações, validações realizadas, limitações e screenshots quando pertinentes**. Não faça merge automaticamente sem pedido explícito.
- **Não force-push, não reescreva histórico da `main`, não apague branches ou arquivos relevantes** sem solicitação.
- Não inclua tokens, senhas, credenciais Expo/EAS, arquivos `.env` ou segredos em commits, logs ou descrições de PR.
- Trabalhe somente neste repositório, a menos que haja autorização explícita para acessar outro.

## 11. EAS, distribuição e publicação

- Android de teste: `npx eas-cli@latest build --platform android --profile preview` usa a configuração de APK interno em `eas.json`.
- Web de produção: `npx expo export --platform web` seguido de `npx eas-cli@latest deploy --prod`, **somente com aprovação explícita**.
- Atualização web não é igual a build nativa; adição de módulos nativos geralmente exige reconstruir o aplicativo.
- Não presuma que **EAS Update** já esteja configurado; verifique antes de sugerir OTA como operação disponível.
- Não modifique automaticamente certificados, identificadores Android/iOS, projeto EAS, credenciais, domínio de produção ou scripts de CI/CD.
- O endereço web principal documentado é `https://projetosoma.expo.app` (EAS Hosting). Existe script **opcional** para GitHub Pages com configurações e endereços históricos do fork; não o execute nem altere o destino sem autorização explícita.
- Não prometa funcionamento offline integral: a PWA e eventuais serviços externos dependem da implementação concreta.

## 12. Como responder ao finalizar uma tarefa

Entregue um resumo conciso e verificável com:

1. **O que mudou** e por quê.
2. **Arquivos alterados** e eventuais decisões arquiteturais.
3. **Comandos/testes realizados**, resultados e limitações.
4. **Riscos/pendências**, sobretudo de segurança, privacidade, acessibilidade e conteúdo oficial.
5. **Branch, commit e PR**, se realmente criados. Nunca invente links ou afirme push/deploy que não aconteceu.
- Atualização correspondente em `README.md` e `docs/arquitetura-software.md` quando uma mudança alterar decisões arquiteturais, mapas, fontes ou limitações do produto.

Se houver ambiguidade, prefira a menor implementação segura, coerente com o MVP existente, e registre a suposição. Faça perguntas somente quando a decisão exigir informação essencial ausente ou autorização para uma ação sensível.
