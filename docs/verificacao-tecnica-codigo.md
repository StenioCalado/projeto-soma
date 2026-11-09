# Verificação técnica do código SOMA

Baseline: `main` em `4ee94af02616431c73b81796ddddf6ae8b685ebf`, após os merges dos PRs #3 e #4. Revisão somente documental e de comentários, em branch `docs/alinha-readme-e-documentacao`.

## Documento de referência e método

Documento confirmado pelo usuário: `SOMA_Documentacao_Tecnica_Atualizada.docx`, em Downloads, título “Projeto SOMA — Documentação técnica do código”, atualizado em 08/11/2026. SHA-256: `93635c63f7c799a98772930065fce1e25b92d5f01a93f5cc858001e7160a2c4d`. O arquivo foi aberto somente para leitura e não foi editado.

O pedido inicialmente mencionava SOMA_doc.md, ausente; o usuário identificou explicitamente o DOCX como a referência. A leitura textual incluiu os parágrafos e as células das tabelas (321 parágrafos), preservando a associação com os títulos. Os trechos de código foram comparados por lógica/conteúdo; quebras e indentação podem estar condensadas na extração OOXML. Não foi feita avaliação visual de paginação nem renderização do Word. As localizações no apêndice são dadas por seção e trecho literal, não por páginas não verificadas.

CONFERE significa correspondência da afirmação com o código ou com o registro histórico indicado; não comprova execução funcional. DIVERGE identifica uma diferença concreta; NÃO VERIFICADO delimita fatos externos/execução sem evidência. Cada confirmação técnica abaixo tem referência de arquivo e linha; para hashes/PRs, a prova primária são os metadados Git/GitHub.

## A. Matriz de verificação

| Item | Resultado | Evidência e ação |
| --- | --- | --- |
| a — versões listadas no pedido | CONFERE | Seção 2: as 11 versões declaradas correspondem ao package.json; ver tabela abaixo. [package.json:5](../package.json#L5). README complementado. O apêndice omite safe-area, Reanimated/Worklets e LinearGradient, entre dependências relevantes; inclusão sugerida em B. |
| b — FormaMapa | CONFERE | Seção 5.1: tipo reproduzido com id, nome, d, bbox, lx e ly. [src/components/MapaInterativo.tsx:27](../src/components/MapaInterativo.tsx#L27). Sem mudança de tipo. |
| b — zoomEm / gestos / 350 ms / memo / traço | CONFERE — seção 5.1 | [src/components/MapaInterativo.tsx:233](../src/components/MapaInterativo.tsx#L233); [src/components/MapaInterativo.tsx:252](../src/components/MapaInterativo.tsx#L252); [src/components/MapaInterativo.tsx:294](../src/components/MapaInterativo.tsx#L294); [src/components/MapaInterativo.tsx:215](../src/components/MapaInterativo.tsx#L215); [src/components/MapaInterativo.tsx:123](../src/components/MapaInterativo.tsx#L123); [src/components/MapaInterativo.tsx:136](../src/components/MapaInterativo.tsx#L136). O comparador também verifica formas e onSelect: comentário corrigido. A lógica de zoom do apêndice corresponde à atual. Acrescentada ressalva sobre API legada, sem afirmar incompatibilidade. |
| c — MapPath nativo/web | CONFERE — seção 5.1 | Nativo repassa props, incluindo onPress, a Path; web transforma onPress em onClick. [src/components/MapPath.tsx:6](../src/components/MapPath.tsx#L6); [src/components/MapPath.web.tsx:5](../src/components/MapPath.web.tsx#L5); [src/components/MapPath.types.ts:9](../src/components/MapPath.types.ts#L9). A descrição é correta; o wrapper nativo não declara um manipulador próprio, apenas repassa as props. |
| d — quickExit e página neutra | CONFERE como fluxo simplificado — seção 5.2 | Constantes e replace existem; SOMA aparece em comentários HTML; há fetch Open-Meteo. [src/utils/quickExit.ts:10](../src/utils/quickExit.ts#L10); [src/utils/quickExit.ts:18](../src/utils/quickExit.ts#L18); [src/utils/quickExit.ts:41](../src/utils/quickExit.ts#L41); [public/tempo.html:9](../public/tempo.html#L9); [public/tempo.html:104](../public/tempo.html#L104). O apêndice já reconhece os comentários HTML e limitações. Seu exemplo omite a declaração de QUICK_EXIT_URL e os tratamentos de erro; detalhamento sugerido em B. |
| e — árvore raiz e menu | CONFERE — seção 4 | O View que envolve Stack também está no trecho do documento. [src/app/_layout.tsx:72](../src/app/_layout.tsx#L72); [src/components/BottomNavigation.tsx:47](../src/components/BottomNavigation.tsx#L47); [src/components/BottomNavigation.tsx:60](../src/components/BottomNavigation.tsx#L60). ROTAS_SEM_MENU e ativo correspondem ao trecho simplificado; código real abaixo. |
| f — 190, 192/SAMU e 180 | CONFERE | [src/app/emergencia.tsx:160](../src/app/emergencia.tsx#L160); [src/app/emergencia.tsx:207](../src/app/emergencia.tsx#L207); [src/app/emergencia.tsx:255](../src/app/emergencia.tsx#L255). São ações de discagem, não envio de socorro pelo SOMA; nenhuma implementação necessária. |
| g — tabela de rotas do documento | CONFERE — seção 4 | As 12 rotas da tabela correspondem aos arquivos. Inventário real abaixo; [src/app/_layout.tsx:30](../src/app/_layout.tsx#L30), [src/app/+html.tsx:4](../src/app/+html.tsx#L4), [src/app/conteudo/[id].tsx:31](../src/app/conteudo/[id].tsx#L31). Layout e HTML não são telas. |
| h — MINIMO_EXIBIDO e contagens estaduais | CONFERE — seções 6.5, 6.6 e 8 | Só PainelDelegacias define MINIMO_EXIBIDO=5; estado mostra contagens exatas, inclusive 1–4. [src/components/PainelDelegacias.tsx:62](../src/components/PainelDelegacias.tsx#L62); [src/components/PainelDelegacias.tsx:76](../src/components/PainelDelegacias.tsx#L76); [src/components/MapaCalorSP.tsx:165](../src/components/MapaCalorSP.tsx#L165); [src/app/mapa.tsx:338](../src/app/mapa.tsx#L338). O apêndice já distingue relatório e estado; README e arquitetura receberam o mesmo esclarecimento. |
| i — 93 áreas, 96 distritos, 645 municípios, 1.209 lugares | CONFERE nos arquivos distribuídos | Contagem das entradas: 93/96/645/1209. [src/data/mapaCalor/delegaciasSP.ts:20](../src/data/mapaCalor/delegaciasSP.ts#L20); [src/data/mapaCalor/distritosSP.ts:16](../src/data/mapaCalor/distritosSP.ts#L16); [src/data/mapaCalor/municipiosSP.ts:17](../src/data/mapaCalor/municipiosSP.ts#L17); [src/data/mapaCalor/lugaresSP.ts:44](../src/data/mapaCalor/lugaresSP.ts#L44); [scripts/mapa-calor/README.md:146](../scripts/mapa-calor/README.md#L146). Sem execução de geradores. |
| i — 0,40, 920 e períodos | CONFERE nos metadados locais | [src/data/mapaCalor/feminicidioSP.ts:19](../src/data/mapaCalor/feminicidioSP.ts#L19); [src/data/mapaCalor/feminicidioSP.ts:23](../src/data/mapaCalor/feminicidioSP.ts#L23); [src/data/mapaCalor/violenciaDelegacias.ts:30](../src/data/mapaCalor/violenciaDelegacias.ts#L30); [scripts/mapa-calor/README.md:29](../scripts/mapa-calor/README.md#L29). Não houve auditoria externa dos registros individuais. |
| i — 36% com latitude/longitude | DIVERGE da leitura precisa do agregado | O README dos scripts diz isso, mas coordStatus contém 74.228 no distrito, 130.440 sem coordenada e 3.047 fora da cidade. [scripts/mapa-calor/README.md:87](../scripts/mapa-calor/README.md#L87); [scripts/mapa-calor/dados/ssp_violencia_mulher_capital_agregado.json:1](../scripts/mapa-calor/dados/ssp_violencia_mulher_capital_agregado.json#L1). Aproximadamente 36% é a categoria no distrito; não prova simples presença de coordenadas. Ressalva e sugestão na seção B; dataset intacto. |
| i — base de aproximadamente 309 MB | CONFERE como registro textual; tamanho original NÃO VERIFICADO | [scripts/mapa-calor/README.md:103](../scripts/mapa-calor/README.md#L103); [scripts/mapa-calor/agregar_ssp_navegador.js:4](../scripts/mapa-calor/agregar_ssp_navegador.js#L4). Planilha original não foi baixada, aberta ou medida. |
| j — cinco scripts e asserts | CONFERE por inspeção — seção 7 | Cinco scripts na pasta, além do README; os comandos possuem argumentos/caminhos coerentes. popBR.csv é um nome de arquivo de entrada, não uma constante do script. [scripts/mapa-calor/README.md:22](../scripts/mapa-calor/README.md#L22); [scripts/mapa-calor/README.md:53](../scripts/mapa-calor/README.md#L53); [scripts/mapa-calor/README.md:107](../scripts/mapa-calor/README.md#L107); [scripts/mapa-calor/README.md:149](../scripts/mapa-calor/README.md#L149). Asserts reais e comandos estáticos abaixo; nenhum script executado. |
| k — ponto-em-polígono / busca / haversine | CONFERE — seções 6.3, 6.4 e 6.5 | [src/utils/areaDoPonto.ts:50](../src/utils/areaDoPonto.ts#L50); [src/utils/areaDoPonto.ts:75](../src/utils/areaDoPonto.ts#L75); [src/components/MapaCalorDelegacias.tsx:79](../src/components/MapaCalorDelegacias.tsx#L79); [src/components/MapaCalorDelegacias.tsx:105](../src/components/MapaCalorDelegacias.tsx#L105); [src/components/MapaCalorDelegacias.tsx:181](../src/components/MapaCalorDelegacias.tsx#L181). Raio 6371 km; distância em linha reta, não rota de transporte. |
| l — responsividade e texto | CONFERE | [src/hooks/useResponsiveLayout.ts:11](../src/hooks/useResponsiveLayout.ts#L11); [src/hooks/useResponsiveLayout.ts:15](../src/hooks/useResponsiveLayout.ts#L15); [src/hooks/useResponsiveLayout.ts:24](../src/hooks/useResponsiveLayout.ts#L24); [src/components/AppText.tsx:33](../src/components/AppText.tsx#L33). Padding 14/16/22/30/36; escalas 1/1.15/1.3. |
| m — documentos e registros de validação | CONFERE — seção 9 | [docs/arquitetura-software.md:185](../docs/arquitetura-software.md#L185); [docs/migracao-sdk58.md:20](../docs/migracao-sdk58.md#L20); [docs/integracao-zip-navegacao.md:29](../docs/integracao-zip-navegacao.md#L29); [docs/publicacao-2026-10-23.md:13](../docs/publicacao-2026-10-23.md#L13); [docs/publicacao-2026-10-23.md:31](../docs/publicacao-2026-10-23.md#L31). A seção 9 diferencia corretamente esses registros históricos de nova execução; não houve nova exportação/deploy nesta auditoria. |
| n — preview, Pages, configuração e service worker | CONFERE a configuração e ausência identificada | [eas.json:3](../eas.json#L3); [scripts/publicar-github-pages.sh:15](../scripts/publicar-github-pages.sh#L15); [scripts/publicar-github-pages.sh:9](../scripts/publicar-github-pages.sh#L9); [scripts/publicar-github-pages.sh:10](../scripts/publicar-github-pages.sh#L10); [scripts/publicar-github-pages.sh:18](../scripts/publicar-github-pages.sh#L18); [app.config.js:7](../app.config.js#L7); [README.md:198](../README.md#L198). Inventário de public e busca estática não localizaram implementação/registro de service worker. |
| o — hashes e PRs | CONFERE no histórico Git e metadados GitHub | Ambos são ancestrais de main. [PR #3](https://github.com/StenioCalado/projeto-soma/pull/3) integra mapas/navegação/SDK 58; [PR #4](https://github.com/StenioCalado/projeto-soma/pull/4) altera apenas AGENTS, README e arquitetura. Prova primária: git log --first-parent e gh pr view; metadados Git não possuem numeração de linha de código equivalente. |
| p — árvore da seção 3 do documento | CONFERE como árvore simplificada — seção 3 | A estrutura de alto nível e os componentes listados existem. Estrutura de referência em [README.md:328](../README.md#L328); inventário real de src/app descrito abaixo. A atribuição das chaves a storage.ts requer a correção específica descrita em B. |

### Versões e dependências relevantes

| Pacote | Declaração | Evidência |
| --- | --- | --- |
| `expo` | `^58.0.17` | [package.json:9](../package.json#L9) |
| `expo-router` | `~58.0.25` | [package.json:19](../package.json#L19) |
| `react-native` | `0.88.0` | [package.json:27](../package.json#L27) |
| `react` | `19.3.0` | [package.json:25](../package.json#L25) |
| `typescript` | `~6.0.3` | [package.json:41](../package.json#L41) |
| `react-native-web` | `^0.21.4` | [package.json:33](../package.json#L33) |
| `react-native-svg` | `15.16.0` | [package.json:32](../package.json#L32) |
| `react-native-gesture-handler` | `~3.3.0` | [package.json:28](../package.json#L28) |
| `expo-location` | `~58.0.18` | [package.json:18](../package.json#L18) |
| `@react-native-async-storage/async-storage` | `2.2.0` | [package.json:8](../package.json#L8) |
| `@expo/vector-icons` | `^15.0.2` | [package.json:7](../package.json#L7) |
| `react-native-safe-area-context` | `~5.10.1` | [package.json:30](../package.json#L30) |
| `react-native-reanimated` | `4.7.1` | [package.json:29](../package.json#L29) |
| `react-native-worklets` | `0.13.0` | [package.json:34](../package.json#L34) |
| `expo-linear-gradient` | `~58.0.3` | [package.json:16](../package.json#L16) |
| `expo-splash-screen` | `~58.0.11` | [package.json:20](../package.json#L20) |
| `expo-asset` | `~58.0.18` | [package.json:10](../package.json#L10) |
| `expo-font` | `~58.0.9` | [package.json:13](../package.json#L13) |
| `react-native-screens` | `~4.30.0` | [package.json:31](../package.json#L31) |

A tabela da seção 2 omite safe-area-context, Reanimated, Worklets, LinearGradient, SplashScreen, Asset, Font, Screens e React DOM. Nem toda dependência precisa estar numa tabela resumida; priorizar as que explicam os componentes discutidos no texto. Declaração de intervalo e versão resolvida/instalada são conceitos diferentes.

### API de gestos e operações geométricas

O pacote local `react-native-gesture-handler` é 3.3.0 (`node_modules/react-native-gesture-handler/package.json:3`). Seu `src/index.ts:127` exporta GestureObjects como Gesture; `src/handlers/gestures/gestureObjects.ts:40`, `:50` e `:147` marcam Pan, Pinch e Simultaneous como obsoletos. Esses arquivos não são versionados no SOMA e não devem ser tratados como evidência permanente sem consultar o lockfile. O [guia oficial de migração para a API 3](https://docs.swmansion.com/react-native-gesture-handler/docs/guides/upgrading-to-3/) descreve os hooks usePanGesture/usePinchGesture/useSimultaneousGestures. A API usada no SOMA existe; não é correto concluir apenas pelo major 3 que as chamadas deixaram de existir. Não houve migração funcional nesta tarefa.

Trecho real de zoom (mesma lógica da seção 5.1 do apêndice):

[src/components/MapaInterativo.tsx:233](../src/components/MapaInterativo.tsx#L233)

```tsx
  const zoomEm = (v: VistaMapa, fator: number, fx?: number, fy?: number) => {
    const novaLargura = Math.min(
      larguraMapa,
      Math.max(larguraMinima, v.largura / fator)
    );
    const escala = novaLargura / v.largura;
    const focoX = fx ?? v.x + v.largura / 2;
    const focoY = fy ?? v.y + (v.largura * proporcao) / 2;

    return ajustar({
      largura: novaLargura,
      x: focoX - (focoX - v.x) * escala,
      y: focoY - (focoY - v.y) * escala,
    });
  };
```

O foco fica fixo ao mudar a largura; a largura é limitada por larguraMinima/larguraMapa e ajustar aplica os limites espaciais. O bloqueio de seleção usa Date.now menos ultimoArraste; a referência é atualizada em onUpdate de pan **e** pinch. Portanto os 350 ms são contados desde o último update, não um temporizador disparado especificamente no término do arraste.

Trecho real do estado ativo do menu:

[src/components/BottomNavigation.tsx:47](../src/components/BottomNavigation.tsx#L47)

```tsx
const ROTAS_SEM_MENU = ['/', '/onboarding'];

const COR_INATIVA = '#857A82';

export function BottomNavigation() {
  const pathname = usePathname();
  const { isCompactPhone, contentMaxWidth } =
    useResponsiveLayout();

  if (ROTAS_SEM_MENU.includes(pathname)) {
    return null;
  }

  const ativo = (item: Item) =>
    pathname === item.rota ||
    (item.rota === '/home' && ['/mais', '/configuracoes'].includes(pathname)) ||
    (item.tambem ?? []).some((r) => pathname.startsWith(r));
```

### Asserts reais solicitados

Não foram executados. A presença de um assert não comprova que ele passou com os insumos atuais.

[scripts/mapa-calor/gerar_delegacias.py:116](../scripts/mapa-calor/gerar_delegacias.py#L116)

```python
    assert len(formas) == 93

    # ---------- números por área ----------
    assert set(ssp['dp']) == set(geoms_dp), 'números de DP diferentes entre SSP e CEM'
    anos = ['2024', '2025', '2026']
    por_dp = []
    soma_casos = 0
    for num in sorted(ssp['dp'], key=int):
        d = ssp['dp'][num]
        tipos = {}
        for ano in anos:
            tipos[ano] = {TIPOS[k]: v for k, v in d['anoNat'].get(ano, {}).items()}
            soma_casos += sum(tipos[ano].values())
        por_dp.append({'id': num, 'vitimas': {a: d['anoVitimas'].get(a, 0) for a in anos}, 'casos': tipos})

    sem_area = sum(sum(v.values()) for v in ssp['semArea'].values())
    total_cidade = sum(sum(o.values()) for o in ssp['cidadeMesNat'].values())
    assert soma_casos + sem_area == total_cidade == ssp['linhasCapital']
```
[scripts/mapa-calor/gerar_capital.py:42](../scripts/mapa-calor/gerar_capital.py#L42)

```python
    assert len(formas) == 96, len(formas)
    por_chave = {chave(nome): (id_, nome, sub) for id_, nome, sub in formas}

    assert len(tabela) == 96, len(tabela)
    linhas = []
    usados = set()
    for nome_fonte, taxa in tabela:
        k = chave(nome_fonte)
        assert k in por_chave, f'sem contorno: {nome_fonte}'
        assert k not in usados, f'repetido: {nome_fonte}'
        usados.add(k)
        id_, nome, _ = por_chave[k]
        linhas.append({'id': id_, 'nome': nome, 'taxa': taxa})

    soma = sum(t for _, t in tabela)
    media = round(soma / 96, 2)
    assert media == fonte['valores_publicados']['media_dos_distritos'], media
    menor = min(tabela, key=lambda x: x[1])
    maior = max(tabela, key=lambda x: x[1])
    assert list(menor) == fonte['valores_publicados']['melhor'], menor
    assert list(maior) == fonte['valores_publicados']['pior'], maior
```

### Comandos de preparação: leitura, sem execução

| Script | Uso constatado | Limitação |
| --- | --- | --- |
| agregar_ssp_navegador.js | Colar/executar no console do navegador na página do painel SSP, conforme seu cabeçalho e README | Não é um comando Node.js comum; requer APIs do navegador e acesso à fonte |
| gerar_dados.py | `python3 gerar_dados.py MALHA.json sysdata.rda popBR2000-2025.long.csv saida.json` | Quatro argumentos e bibliotecas pyreadr/pandas; a conversão final JSON → TypeScript é etapa separada |
| gerar_capital.py | `python3 scripts/mapa-calor/gerar_capital.py` na raiz | Usa arquivos de entrada já presentes nos caminhos definidos |
| gerar_delegacias.py | `python3 scripts/mapa-calor/gerar_delegacias.py CAMINHO/distritos-sp.geojson` na raiz | Requer malha original externa e shapely |
| gerar_lugares.py | `python3 scripts/mapa-calor/gerar_lugares.py` na raiz | Requer insumos locais e shapely |

Evidências: [scripts/mapa-calor/agregar_ssp_navegador.js:1](../scripts/mapa-calor/agregar_ssp_navegador.js#L1); [scripts/mapa-calor/gerar_dados.py:1](../scripts/mapa-calor/gerar_dados.py#L1); [scripts/mapa-calor/gerar_capital.py:1](../scripts/mapa-calor/gerar_capital.py#L1); [scripts/mapa-calor/gerar_delegacias.py:1](../scripts/mapa-calor/gerar_delegacias.py#L1); [scripts/mapa-calor/gerar_lugares.py:1](../scripts/mapa-calor/gerar_lugares.py#L1).

### Rotas e arquivos especiais

| Arquivo | Caminho / papel |
| --- | --- |
| [src/app/+html.tsx:1](../src/app/+html.tsx#L1) | `Documento HTML web; não é tela` |
| [src/app/_layout.tsx:1](../src/app/_layout.tsx#L1) | `Layout compartilhado; não é tela` |
| [src/app/configuracoes.tsx:1](../src/app/configuracoes.tsx#L1) | `/configuracoes` |
| [src/app/conteudo/[id].tsx:1](../src/app/conteudo/[id].tsx#L1) | `/conteudo/[id]` |
| [src/app/denunciar.tsx:1](../src/app/denunciar.tsx#L1) | `/denunciar` |
| [src/app/emergencia.tsx:1](../src/app/emergencia.tsx#L1) | `/emergencia` |
| [src/app/explorar.tsx:1](../src/app/explorar.tsx#L1) | `/explorar` |
| [src/app/home.tsx:1](../src/app/home.tsx#L1) | `/home` |
| [src/app/index.tsx:1](../src/app/index.tsx#L1) | `/ (splash)` |
| [src/app/mais.tsx:1](../src/app/mais.tsx#L1) | `/mais` |
| [src/app/mapa.tsx:1](../src/app/mapa.tsx#L1) | `/mapa` |
| [src/app/onboarding.tsx:1](../src/app/onboarding.tsx#L1) | `/onboarding` |
| [src/app/rede-apoio.tsx:1](../src/app/rede-apoio.tsx#L1) | `/rede-apoio` |
| [src/app/tipos-violencia.tsx:1](../src/app/tipos-violencia.tsx#L1) | `/tipos-violencia` |

## B. Mudanças necessárias na DOCUMENTAÇÃO externa

Nenhuma alteração foi feita no DOCX. Os trechos atuais abaixo foram lidos na versão confirmada. “Precisão” e “editorial” não significam funcionalidade inexistente ou defeito de código.

| Seção | Texto atual | Correção sugerida | Evidência e classificação |
| --- | --- | --- | --- |
| 1 — introdução | “A versão oficial deste documento está no repositório StenioCalado/projeto-soma, branch main” | “O código de referência está no repositório StenioCalado/projeto-soma, branch main, na baseline 4ee94af.” Só afirmar que o apêndice está versionado depois de incluí-lo. | DIVERGE: o inventário git ls-files da baseline não contém o apêndice DOCX/SOMA_doc.md; o documento existente [docs/arquitetura-software.md:1](arquitetura-software.md#L1) é outro texto. O hash Git citado está correto. |
| 2 — tabela de tecnologias | A tabela termina em “@expo/vector-icons (Ionicons)” | Acrescentar ao menos Safe Area Context, Reanimated/Worklets e LinearGradient; opcionalmente SplashScreen/Asset/Font/Screens e React DOM, conforme o nível de detalhe. Manter as 11 versões atuais, que conferem. | Complemento: [package.json:19](../package.json#L19), [package.json:32](../package.json#L32), [package.json:36](../package.json#L36), [src/app/_layout.tsx:10](../src/app/_layout.tsx#L10). Não é erro nas versões existentes. |
| 3 — tabela de pastas | storage.ts: “Nomes das chaves gravadas no aparelho com AsyncStorage” | “storage.ts define ONBOARDING_STORAGE_KEY; AppText.tsx define TEXT_SCALE_STORAGE_KEY.” | DIVERGE por atribuição incompleta: [src/constants/storage.ts:2](../src/constants/storage.ts#L2), [src/components/AppText.tsx:29](../src/components/AppText.tsx#L29). |
| 3 — utils | “voltar.ts (Voltar contextual; Home sem histórico)” | “Voltar contextual; fallback para a Home quando não há tela anterior.” | Precisão de linguagem: [src/utils/voltar.ts:9](../src/utils/voltar.ts#L9). O sentido condicional é correto, mas não significa apagar o histórico. |
| 5.1 — gestos | “arrastar (Gesture.Pan) e pinça (Gesture.Pinch) rodam ao mesmo tempo com Gesture.Simultaneous” | Acrescentar que são builders da API legada ainda exportada na dependência 3.3.0; a API nova da versão 3 usa hooks. Não trocar os exemplos por hooks como se a migração já tivesse ocorrido. | Precisão: [src/components/MapaInterativo.tsx:252](../src/components/MapaInterativo.tsx#L252), guia oficial de migração citado em A. O comportamento descrito e os nomes usados pelo código conferem. |
| 5.2 — código simplificado | `Linking.openURL(QUICK_EXIT_URL);` e retorno à Home sem try/catch no exemplo | Manter o rótulo de fluxo simplificado, declarar a constante QUICK_EXIT_URL se o trecho tiver de ser autocontido e mencionar que o código real captura falhas de navegação e abertura do link. | Precisão, não trecho removido: [src/utils/quickExit.ts:18](../src/utils/quickExit.ts#L18), [:45](../src/utils/quickExit.ts#L45), [:55](../src/utils/quickExit.ts#L55). O código real inclui `.catch(...)`; o apêndice já avisa que é simplificação. |
| 6.1 — cobertura espacial | “só 36% dos registros da capital têm latitude e longitude” | “O agregado histórico classifica 74.228 registros como no distrito (35,7%, aproximadamente 36%), 130.440 sem coordenada e 3.047 fora da cidade, totalizando 207.715.” Não confundir presença de coordenadas com classificação territorial. | DIVERGE: [scripts/mapa-calor/dados/ssp_violencia_mulher_capital_agregado.json:1](../scripts/mapa-calor/dados/ssp_violencia_mulher_capital_agregado.json#L1). O README dos scripts repete a simplificação; não foi editado por estar fora dos caminhos expressamente permitidos nesta tarefa. |
| 6.2 — violência doméstica | “lesão, ameaça, injúria, dano e os demais tipos só entram quando o boletim marca violência doméstica” | Atribuir essa seleção à metodologia/base fornecida pela SSP. O agregador local usa as linhas da fonte, filtra a capital e agrupa; não aplica um filtro adicional por indicador de violência doméstica. | Precisão de responsabilidade: [scripts/mapa-calor/agregar_ssp_navegador.js:85](../scripts/mapa-calor/agregar_ssp_navegador.js#L85); [scripts/mapa-calor/README.md:117](../scripts/mapa-calor/README.md#L117). A política da SSP não foi revalidada externamente nesta auditoria. |
| 7 — papel de gerar_dados.py | “Feminicídios por município (2019–2023) e contornos dos municípios” | Esclarecer que o comando gera saida.json; a conversão para os TypeScript distribuídos é uma etapa posterior documentada no README do pipeline. | Precisão: [scripts/mapa-calor/gerar_dados.py:12](../scripts/mapa-calor/gerar_dados.py#L12), [scripts/mapa-calor/README.md:24](../scripts/mapa-calor/README.md#L24). |
| 7 — tamanho da planilha | “Lê a base da SSP (309 MB) em partes” | “Lê a base da SSP (aproximadamente 309 MB, conforme registro histórico) em partes.” | NÃO VERIFICADO por medida atual; o valor é relatado em [scripts/mapa-calor/agregar_ssp_navegador.js:4](../scripts/mapa-calor/agregar_ssp_navegador.js#L4), mas o arquivo original não foi medido nesta auditoria. |
| 6.1/7 — reprodutibilidade | O texto ressalva insumos ausentes, mas não identifica a ausência de coordStatus no gerador atual | Acrescentar: “O snapshot histórico contém coordStatus; o agregador atual não calcula/exporta esse campo. A reprodução dessa classificação demanda recuperar o procedimento histórico.” | Limitação comprovada: [scripts/mapa-calor/agregar_ssp_navegador.js:124](../scripts/mapa-calor/agregar_ssp_navegador.js#L124), agregado [:1](../scripts/mapa-calor/dados/ssp_violencia_mulher_capital_agregado.json#L1). Nenhum gerador foi alterado. |

### Trechos de código e forma acadêmica

- **Não foi encontrado trecho funcional removido que o documento apresente como atual.** FormaMapa, zoomEm, árvore raiz, ativo, par-ímpar, escalas de texto e asserts correspondem à implementação, admitindo trechos declarados simplificados. O exemplo de quickExit omite tratamentos de erro e a declaração de QUICK_EXIT_URL; é a ressalva técnica indicada na tabela, não um pedido para implementar outro fluxo.
- **Seção 9.3:** “Antes de qualquer publicação opcional no GitHub Pages, verificar as variáveis...” e “Não executar deploy, build custoso nem alterar destino, credenciais ou certificados sem autorização expressa da equipe.” Soam como instruções operacionais de equipe/agente. Sugestão editorial: “A publicação opcional depende da configuração das variáveis de destino e de autorização da equipe; as credenciais e certificados fazem parte do processo de distribuição.” Os comandos podem ficar em apêndice operacional. O fato técnico sobre EAS/Pages está correto.
- **Seção 9.4:** “Não há novo build/deploy ou execução integral desses testes comprovados nos commits de merge.” É uma delimitação de evidência válida, mas repete 9.2/9.3 e enfatiza o histórico interno. Sugestão editorial: concentrar em uma tabela com verificação, data, resultado, evidência e limitações, sem sugerir nova execução. Não é uma instrução para agente nem um erro factual.
- **Seções 1, 9 e 11:** “merge documental” e as referências a PR #3/#4 são úteis para proveniência, mas podem ser reduzidas a uma nota de baseline e referências. No corpo acadêmico, priorizar as características técnicas e os resultados observados. Citar PR não é incorreto por si só.
- **Seção 10:** os itens de trabalho futuro são propostas, não funcionalidades já implementadas. A ausência de Playwright versionado, máscara nativa própria e proteção adicional a pequenas contagens não deve ser “corrigida” por implementação nesta tarefa.

## C. Alterações no repositório e verificações atuais

- README: versões declaradas e gesto legado; limite da neutralidade da página; escopo do mascaramento de pequenas contagens. As antigas premissas de SDK 57/mapa em desenvolvimento/fonte futura já haviam sido corrigidas na main pelo PR #4, portanto não foram reapresentadas como defeitos atuais.
- docs/arquitetura-software.md: escopo preciso do mascaramento, preservando diagramas e demais decisões.
- src/components/MapaInterativo.tsx: somente comentários, incluindo uso por áreas de delegacia e critérios reais de memoização; nenhuma instrução executável alterada.
- Este relatório: comparação do DOCX confirmado, evidências com arquivo/linha, trechos reais e propostas para o apêndice, sem editá-lo.
- AGENTS, dados, dependências, configurações e scripts executáveis permanecem intactos. O README dos scripts não foi editado por estar fora dos caminhos de documentação explicitamente permitidos; sua ressalva sobre coordenadas e a limitação de reprodutibilidade foram reportadas em B.

Verificações executadas na baseline de código desta branch: `npx tsc --noEmit` terminou com código 0; `npm run lint` terminou com código 0, sem erros/avisos de lint (apenas aviso do npm sobre nova versão disponível). As alterações posteriores são textuais/comentários. Nenhum teste funcional, Expo Doctor, exportação, EAS Build, deploy ou gerador de dados foi executado nesta auditoria.

## D. Itens que dependem do usuário

1. Aplicar as sugestões ao apêndice acadêmico, especialmente seções 1, 3 e 6.1. O DOCX não foi alterado, conforme solicitado.
2. Autorizar, se desejado, correção textual em `scripts/mapa-calor/README.md`, que repete a simplificação dos 36%. O escopo recebido permitiu README raiz, docs e comentários; este arquivo foi preservado e a divergência foi explicitada em B.
3. Recuperar o procedimento histórico que produziu coordStatus se for necessário alegar reprodutibilidade dessa análise. A existência do agregado não prova que o código atual reproduza todos os seus metadados.
4. Decidir em tarefas futuras sobre migração da API de gestos, testes automatizados, máscara nativa e eventual supressão efetiva de pequenas contagens. Esses itens alteram código/dados ou processo e não foram implementados.

Não há decisão sobre adicionar o SAMU: 192 já está implementado e o documento o cita corretamente. A identificação do DOCX foi esclarecida pelo usuário durante a auditoria.

## E. Não verificado

- Paginação, renderização visual e eventual apresentação tipográfica das fórmulas/snippets no Word. A revisão foi textual e de consistência técnica, sem alterar ou renderizar o DOCX.
- Tamanho/qualidade integral da planilha original de aproximadamente 309 MB e dos registros individuais; não houve download nem abertura de dados pessoais. A política original da SSP não foi auditada externamente.
- Reexecução dos cinco scripts, seus asserts com insumos reais e reprodução do campo coordStatus. Asserts presentes não equivalem a execução bem-sucedida.
- Funcionamento em aparelho, leitores de tela, latência de seleção, gestos reais, abertura de discagem, previsão do tempo e proteção em multitarefa; auditoria estática e dois comandos de verificação não são homologação de uso.
- Novo estado de hospedagem/EAS ou novos artefatos após os registros históricos. Nenhuma distribuição foi executada nesta tarefa.
