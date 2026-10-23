# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.


AGENTS.md — Projeto SOMA
Instruções para agentes de desenvolvimento (incluindo Codex) que trabalhem neste repositório. Este arquivo complementa o README.md, o package.json e o código-fonte. O código efetivamente presente na branch de trabalho prevalece sobre descrições históricas.

1. Contexto e missão
- Projeto: SOMA — Segurança, Orientação, Monitoramento e Apoio.
- Repositório: StenioCalado/projeto-soma; branch estável: main.
- Natureza: MVP acadêmico, multiplataforma, com foco inicial no estado de São Paulo (Brasil), voltado à orientação sobre violência doméstica e acesso à rede oficial de proteção.
- Propósito: facilitar a identificação de sinais de violência, a consulta de informações educativas e o acesso a canais oficiais de ajuda, com linguagem clara, acessibilidade, discrição e privacidade.
- ODS de referência: ODS 5 (Igualdade de Gênero), ODS 16 (Paz, Justiça e Instituições Eficazes) e ODS 10 (Redução das Desigualdades).
Limite fundamental: o SOMA não é um canal oficial de denúncias, não recebe nem registra denúncias, não despacha polícia, não oferece atendimento humano em tempo real e não substitui orientação jurídica, policial, médica ou psicológica. Nunca produza interface, conteúdo ou mensagem que dê a entender o contrário.
2. Leia antes de alterar código
1. Leia o README.md e examine os arquivos reais afetados pela tarefa.
2. Verifique o package.json, app.json, eas.json e o tsconfig.json antes de mudar dependências, versões, build ou configuração.
3. Expo HAS CHANGED: antes de escrever código dependente das APIs do Expo, consulte a documentação da versão efetivamente instalada. Na base examinada, o projeto usa Expo SDK 57: https://docs.expo.dev/versions/v57.0.0/. Se a versão mudar, consulte a documentação correspondente; não aplique exemplos de outras versões sem verificar compatibilidade.
4. Considere os arquivos de dados locais e componentes existentes como fonte de verdade para nomes, tipos, rotas e padrões de implementação.
5. Diferencie explicitamente funcionalidade implementada, protótipo/demonstração e funcionalidade planejada. Não apresente itens do roadmap como concluídos.
3. Stack e arquitetura atual
- TypeScript com configuração estrita, React 19, React Native, Expo SDK 57 e Expo Router.
- React Native Web para navegadores e experiência instalável de Web App/PWA.
- AsyncStorage apenas para pequenas preferências locais (por exemplo, onboarding); não há backend nem banco de dados implementado nesta etapa.
- EAS Build para APK Android de pré-visualização; EAS Hosting para publicação web.
- Arquitetura atual: frontend em camadas simples, baseado em componentes e rotas. Não descreva o sistema como MVC, Clean Architecture, microsserviços ou cliente-servidor com backend já existente.
Diretórios principais:
Caminho	Responsabilidade
src/app/	Telas, navegação, layout raiz e rotas Expo Router
src/app/conteudo/[id].tsx	Rota dinâmica dos conteúdos educativos
src/components/	Componentes de interface reutilizáveis
src/data/	Conteúdos e dados locais/demonstrativos
src/hooks/useResponsiveLayout.ts	Breakpoints, dimensões e safe areas
src/constants/theme.ts	Paleta de cores da identidade visual
assets/images/	Logo, ícones do aplicativo e outros assets
public/	Manifest, ícones e recursos estáticos para web/PWA
src/app/+html.tsx	Metadados e estrutura HTML da versão web
app.json / eas.json	Configuração Expo e perfis de build


Mantenha a estrutura atual quando suficiente. Prefira extrair lógica repetida para componentes/hooks em vez de copiar código em várias telas. Não crie backend, serviços externos, autenticação ou novas dependências sem necessidade justificada e autorização de escopo.
4. Regras obrigatórias de produto e segurança
Canais oficiais
- 190: emergência policial no Brasil. Um botão pode iniciar a discagem pelo sistema operacional; isso não significa que o SOMA realizou o atendimento ou enviou um pedido de socorro.
- 180: Central de Atendimento à Mulher; orientação e encaminhamento por canal oficial.
- Outros recursos (como delegacias, Defensoria, serviços de saúde e canais de denúncia do estado de São Paulo) devem ser verificados em fontes oficiais antes de alterar links, números, horários, cobertura territorial ou instruções.
- Ao abrir serviços externos, apresente o contexto adequado e trate falhas de abertura. Não invente integrações com polícia, justiça, DOL, CRM ou serviços governamentais.
- Mensagens em situações sensíveis devem ser objetivas, respeitosas, não culpabilizantes e sem promessas de proteção imediata pelo aplicativo.
Privacidade e exposição
- Adote minimização de dados: não peça nem persista relatos, endereço exato da vítima, localização contínua, documentos pessoais ou histórico de violência sem requisito explícito e análise de segurança.
- Não introduza telemetria, analytics, publicidade, rastreamento, notificações sensíveis ou armazenamento remoto silenciosamente.
- Não registre em console, logs, erros, URLs ou eventos informações potencialmente sensíveis.
- Não confunda recursos planejados de modo discreto, saída rápida, notificações discretas ou contraste elevado com recursos já implementados.
- Antes de criar funcionalidades de segurança, avalie riscos reais de exposição, comportamento em segundo plano, histórico de navegação e limitações por plataforma. Não prometa invisibilidade ou proteção absoluta.
Mapa de calor
- A tela src/app/mapa.tsx atualmente apresenta uma experiência demonstrativa, não um mapa de calor estatístico operacional.
- A evolução prevista é uma visualização territorial com dados públicos, oficiais, agregados e adequadamente contextualizados (por exemplo, bairro ou distrito, conforme a qualidade da fonte).
- Nunca mostre pontos individuais de ocorrência, localização de vítimas, endereços residenciais ou relatos privados.
- Não infira risco individual, não rotule um local como definitivamente “seguro”/“perigoso” e não interprete ausência de dados como ausência de violência.
- Registre fonte, período, abrangência, atualização, limitações e critério de agregação. Avalie risco de reidentificação em células com poucas ocorrências.
- Serviços oficiais de apoio podem ser apresentados em camada separada, após validação das informações.
5. Identidade visual e experiência
Paleta oficial — consulte sempre src/constants/theme.ts:
Token	Valor
primary	#3D1E45
primaryDark	#28152F
pink	#CF879E
lightPink	#E8C8CA
lavender	#BBA8CC
background	#FFFDF1
text	#302B30


- Preserve a identidade do SOMA (borboleta/logo e linguagem visual acolhedora) e o destaque da ação Emergência.
- Priorize legibilidade, hierarquia, áreas de toque confortáveis, contraste adequado e rótulos acessíveis (accessibilityLabel, funções e estados quando pertinentes).
- Use linguagem simples em português brasileiro; evite termos jurídicos sem explicação e textos que possam soar acusatórios ou alarmistas.
- Não altere deliberadamente a identidade visual global em uma tarefa de correção pontual.
6. Responsividade e compatibilidade
Use useResponsiveLayout.ts como referência; não espalhe novos números mágicos pelos componentes.
Faixa	Interpretação atual
< 350px	Celular muito compacto
< 390px	Celular compacto
< 768px	Celular
768–1179px	Tablet
>= 1180px	Desktop
Altura < 740px	Tela baixa


- Compatibilidade prioritária: Android, iPhone/iOS via Expo Go ou Web App, web desktop e tablet.
- Respeite safeTop, safeBottom e demais insets do react-native-safe-area-context; teste Android com três botões e com gestos, além da área do indicador Home no iPhone.
- Prefira flex, flexWrap, limites de largura e conteúdo rolável a alturas fixas que cortem botões/textos.
- Considere tamanho de fonte do sistema e teclados; não esconda ações essenciais fora da área visível.
- Código exclusivo de navegador (como iframe) deve estar protegido por condição de plataforma. Não use APIs DOM em código nativo sem uma alternativa.
7. Navegação — estado atual e melhoria pendente
Na base examinada, o src/app/_layout.tsx usa um Stack e a barra inferior Home / Explorar / Mapa / Canais está implementada dentro de src/app/home.tsx. Por isso ela desaparece em outras telas, e chamadas sucessivas a router.push() podem gerar um histórico de retorno longo. Esta deficiência ainda não está corrigida na main examinada.
Quando a tarefa for corrigir a navegação:
1. Centralize a barra em um layout/navegador compartilhado apropriado para o Expo Router, em vez de duplicá-la nas páginas. Pode usar um layout de tabs ou composição equivalente, conforme a arquitetura mais consistente com as rotas existentes.
2. Mantenha a barra visível nas telas internas pertinentes, inclusive em conteúdos de detalhe, sem sobreposição do conteúdo ou de barras do sistema.
3. Não exiba a barra na Splash Screen inicial (/) nem no onboarding (/onboarding).
4. Destaque a seção ativa e forneça rótulos/acessibilidade para os itens.
5. Evite empilhar repetidamente destinos de navegação principal: use semântica correta de abas/replace quando fizer sentido. Preserve Voltar contextual quando o usuário estiver lendo um detalhe, e ofereça retorno direto à Home sem múltiplos passos.
6. Preserve deep links, o caminho de onboarding, o botão de emergência e os atalhos existentes.
7. Teste navegação: Home → Explorar → conteúdo → Canais → Mapa → Home; tente também retorno do Android, navegação web e rotação/tamanhos de tela quando aplicável.
Não afirme que essa melhoria está pronta antes de verificá-la no código e nos testes.
8. Fluxos e arquivos que não devem regredir
- Splash: src/app/_layout.tsx, src/app/index.tsx e plugin expo-splash-screen em app.json.
- Onboarding: opção “Não mostrar esta tela novamente”; chave local @soma:hide-onboarding. Não altere a semântica da preferência sem necessidade.
- Home: atalhos para tipos de violência, ajuda/denúncia, mapa, rede de apoio, emergência e mais.
- Conteúdo educativo: rota /conteudo/[id], alimentada pelos dados locais.
- Emergência: acessibilidade e acesso claro aos canais oficiais, sem promessa de acionamento automático.
- Configurações: distinguir controles que funcionam daqueles marcados “Em breve”.
- Web/PWA: preserve public/, src/app/+html.tsx e configuração web.output = static.
- Ícones: mantenha nomes e caminhos existentes em app.json, especialmente icon-soma.png e adaptive-icon-soma.png.
9. Dependências, ferramentas e validação
Use o gerenciador npm e preserve package-lock.json. Prefira instalar pacotes compatíveis via npx expo install <pacote> quando envolver módulos Expo/React Native. Nunca atualize SDK ou versões principais incidentalmente.
Comandos de referência (execute conforme o ambiente e reporte erros reais):
npm ci
npx tsc --noEmit
npx expo-doctor@latest
npx expo start
npx expo start --web
npx expo start --tunnel
npx expo export --platform web
- npm run lint somente se o script estiver funcional no SDK/configuração da branch. Não declare que há suíte automatizada quando ela não existir.
- Para mudanças de interface, valide no mínimo telas pequenas (~320/360/390px), celulares maiores, tablet e desktop, além de navegação por gestos/botões no Android quando possível.
- Para funcionalidades sensíveis, teste também falha de conexão, serviços externos indisponíveis, textos longos e retorno de navegação.
- Antes de finalizar, execute as verificações viáveis (tsc, export web, inspeção de diff) e informe quais foram executadas, quais falharam e quais não puderam ser executadas. Não alegue sucesso sem evidência.
- Não execute builds EAS, publicações, deploys de produção ou operações potencialmente custosas sem solicitação explícita.
10. Git, branches e Pull Requests
- main é a base estável. Para funcionalidades e refatorações, trabalhe em uma branch curta a partir da main atualizada, como feat/mapa-calor, feat/navegacao-persistente ou fix/ajuste-safe-area.
- Use Conventional Commits: feat:, fix:, docs:, refactor:, test:, chore:; descreva objetivamente o que mudou.
- Faça mudanças mínimas relacionadas à tarefa; não misture refatorações sem relação ou formatação massiva.
- Abra PR com contexto, alterações, validações realizadas, limitações e screenshots quando pertinentes. Não faça merge automaticamente sem pedido explícito.
- Não force-push, não reescreva histórico da main, não apague branches ou arquivos relevantes sem solicitação.
- Não inclua tokens, senhas, credenciais Expo/EAS, arquivos .env ou segredos em commits, logs ou descrições de PR.
- Trabalhe somente neste repositório, a menos que haja autorização explícita para acessar outro.
11. EAS, distribuição e publicação
- Android de teste: npx eas-cli@latest build --platform android --profile preview usa a configuração de APK interno em eas.json.
- Web de produção: npx expo export --platform web seguido de npx eas-cli@latest deploy --prod, somente com aprovação explícita.
- Atualização web não é igual a build nativa; adição de módulos nativos geralmente exige reconstruir o aplicativo.
- Não presuma que EAS Update já esteja configurado; verifique antes de sugerir OTA como operação disponível.
- Não modifique automaticamente certificados, identificadores Android/iOS, projeto EAS, credenciais, domínio de produção ou scripts de CI/CD.
- Não prometa funcionamento offline integral: a PWA e eventuais serviços externos dependem da implementação concreta.
12. Como responder ao finalizar uma tarefa
Entregue um resumo conciso e verificável com:
1. O que mudou e por quê.
2. Arquivos alterados e eventuais decisões arquiteturais.
3. Comandos/testes realizados, resultados e limitações.
4. Riscos/pendências, sobretudo de segurança, privacidade, acessibilidade e conteúdo oficial.
5. Branch, commit e PR, se realmente criados. Nunca invente links ou afirme push/deploy que não aconteceu.
Se houver ambiguidade, prefira a menor implementação segura, coerente com o MVP existente, e registre a suposição. Faça perguntas somente quando a decisão exigir informação essencial ausente ou autorização para uma ação sensível.