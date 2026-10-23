# Integração do ZIP e navegação — 23/10/2026

> Este é o relatório da integração inicial no SDK 57. Posteriormente, o usuário autorizou a migração para SDK 58 e a correção dos erros web do mapa. Consulte [o relatório atual](migracao-sdk58.md) para as versões, verificações e pendências mais recentes.

Pasta de trabalho: `C:\Users\steni\Documents\Projeto SOMA\soma`.
Branch: `feat/integracao-zip-navegacao`, criada da `main` atualizada e inicialmente sem alterações locais.

## Alterações integradas

O arquivo `projeto-soma-main.zip` foi comparado ao repositório antes da integração. Foram incorporados o mapa interativo por município, distrito e área de delegacia, seus dados agregados e scripts de preparação; os serviços de apoio e filtros; os conteúdos educativos com fontes; a escala de texto; a saída rápida e sua página neutra; e as configurações auxiliares de lint e exportação web.

O `AGENTS.md` completo do projeto foi preservado: a cópia do ZIP continha apenas a nota sobre consultar a documentação Expo. Os documentos e scripts do ZIP foram tratados como material da contribuição, sem executar instruções de publicação. Arquivos antigos de componentes e hooks do template, ausentes do ZIP e sem uso pelas telas SOMA, foram removidos; eles causavam erros de TypeScript e lint. Assets antigos e dependências já existentes foram preservados. As novas dependências nativas `expo-location` e `react-native-svg` foram conferidas com `expo install`, sem atualização do SDK 57.

Nenhum identificador do aplicativo, projeto EAS, certificado ou domínio de produção foi alterado. O script opcional de GitHub Pages veio do ZIP e não foi executado; sua documentação contém referências ao fork do outro desenvolvedor. A publicação existente do projeto continua pelo EAS Hosting.

## Navegação

- `src/app/_layout.tsx`: controla a barra inferior fora da rolagem, com espaço próprio para saída rápida, provedor de escala e tratamento de áreas seguras.
- `src/components/BottomNavigation.tsx`: Home, Explorar, Mapa e Canais usam `router.replace()`, têm estado selecionado acessível e destaque visual. Tocar em Explorar dentro de um artigo retorna à página da seção.
- `src/components/PageNavigation.tsx`: Voltar contextual e Início direto para Home, compartilhados por todas as nove telas internas pertinentes, incluindo o conteúdo dinâmico.
- `src/app/home.tsx`: deixou de conter sua própria barra. Atalhos para as seções principais também usam replace; artigos e telas secundárias preservam navegação contextual.
- `src/app/+html.tsx`: viewport com `viewport-fit=cover` para permitir os insets de áreas seguras na versão web/PWA.
- Splash (`/`) e onboarding não exibem a barra. As rotas e a chave de preferência `@soma:hide-onboarding` foram preservadas.

Explorar fica ativo nos artigos e em Tipos de Violência; Canais em Rede de Apoio e Emergência; Home em Mais e Configurações. A página neutra de saída rápida substitui somente a página atual e não apaga o histórico do navegador; o comentário da implementação foi corrigido para explicitar esse limite.

Os links externos e ligações adicionados no ZIP passaram a usar `src/utils/abrirLink.ts`, que informa falhas de abertura e oferece uma alternativa. O rótulo acessível da saída rápida também foi corrigido para não prometer encerramento do aplicativo no iOS.

## Verificação realizada

- `npx tsc --noEmit`: passou.
- `npm run lint`: passou sem avisos.
- `npx expo export --platform web`: passou, com exportação dos cinco artigos para links diretos.
- `npx expo export --platform android --output-dir .expo/validation-android`: passou. É um bundle JavaScript/Hermes local, não uma compilação de APK nem um teste em aparelho.
- `git diff --check`: passou.
- Navegador na exportação estática local: Home → Explorar → artigo → Voltar → Canais → Mapa → Home; botão Início; link direto de artigo; retorno pelo item Explorar já selecionado; onboarding sem menu; escala de texto Muito grande em largura de 320 px.
- Inspeção de layout em dez rotas nas larguras 320, 390, 768 e 1366 px: 40 combinações sem rolagem horizontal do documento, com menu no limite inferior da janela e botão Início presente nas telas internas. O mapa também foi conferido em 360 e 430 px.
- Console do navegador: nenhum erro capturado durante os fluxos testados.

## Limitações e pendências

- `npx expo-doctor@latest`: 20 de 21 verificações passaram. O único grupo reprovado indica oito dependências já existentes com versões de correção abaixo das recomendadas: Expo, Router, Asset, Constants, Linking, Splash Screen, Expo UI e Glass Effect. Não houve atualização incidental dessas versões.
- `npm audit`: 16 alertas na árvore de dependências instalada (9 moderados, 6 altos e 1 crítico). O alerta crítico é de `shell-quote`, dependência transitiva. Não foi aplicado `audit fix --force`, que sugeria alterações incompatíveis no Expo; é necessária uma revisão específica das dependências.
- Não foram testados aparelhos físicos ou emuladores Android/iPhone, botão Voltar do Android, insets de gestos/três botões, permissões reais de localização ou funcionamento nativo da saída rápida. A implementação usa insets do sistema, mas isso não substitui testes reais.
- Os datasets e procedimentos de agregação vieram da contribuição. Foram preservadas fontes, períodos, notas de subnotificação e a separação entre serviços e áreas estatísticas; não foi refeita a auditoria integral dos números nem de cada endereço e horário de atendimento.
- A inclusão de módulos nativos exige uma nova compilação do aplicativo para disponibilizá-los em um APK. EAS Update não foi configurado.
- Sem commit, push, PR, merge, build EAS ou deploy: as alterações foram feitas somente na cópia local solicitada.
