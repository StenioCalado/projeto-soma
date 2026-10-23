# Migração para Expo SDK 58 e correção do mapa

## Motivo

O projeto usava Expo SDK 57, enquanto o Expo Go do iPhone do usuário informou compatibilidade com SDK 58. A migração foi autorizada explicitamente em 23/10/2026. É uma incompatibilidade identificada; não foi possível inspecionar um relatório de crash do iPhone para atribuir a ela, com exclusividade, o fechamento do aplicativo.

O erro web foi reproduzido no servidor de desenvolvimento: o `onPress` de `react-native-svg` gerava `Unknown event handler property` para `onStartShouldSetResponder`, `onResponderGrant`, `onResponderMove`, `onResponderRelease`, `onResponderTerminate` e `onResponderTerminationRequest`. Os testes anteriores na exportação de produção não mostravam esses avisos de desenvolvimento.

## Alterações

- `package.json` e `package-lock.json`: Expo 58.0.17, React 19.3.0, React Native 0.88.0 e dependências alinhadas por `expo install` à matriz do SDK 58, incluindo SVG 15.16.0, Gesture Handler 3.3.0, Reanimated 4.7.1 e Worklets 0.13.0.
- `MapPath.tsx`, `MapPath.web.tsx`, `MapPath.types.ts` e `MapaInterativo.tsx`: o navegador renderiza um `<path>` SVG com clique; iOS e Android mantêm `Path` com `onPress`. Não foram alteradas geometrias, dados, cores ou critérios estatísticos do mapa.
- `AppText.tsx`: os estilos escalados são construídos sem mutar propriedades, para atender aos tipos imutáveis de estilo da API estrita do React Native 0.88.
- `src/app/+html.tsx`: adicionado `useServerDocumentContext()` com atributos e nós de head/body, obrigatórios para que o HTML do SDK 58 inclua scripts de hidratação, estilos e fontes. Sem isso, a página podia ser exportada, mas ficava em branco no navegador.
- `AppSafeArea.tsx`, `AppSafeArea.web.tsx`, `_layout.tsx` e `BottomNavigation.tsx`: áreas seguras nativas continuam pelo sistema; na web, os espaçamentos usam CSS `env(safe-area-inset-*)`, sem um provedor adicional que interrompa a hidratação por streaming.
- `AGENTS.md` e README: referências atuais atualizadas para SDK 58.

Não houve publicação, build EAS, alteração de certificados, identificadores do aplicativo ou projeto EAS. As alterações anteriores de navegação foram preservadas na branch `feat/integracao-zip-navegacao`.

## Validação

- `npx tsc --noEmit`: passou.
- `npm run lint`: passou.
- `npx expo-doctor@latest`: 20/20 verificações passaram.
- `npx expo install --check`: dependências atualizadas e compatíveis.
- `npx expo export --platform all --output-dir .expo/validation-sdk58`: passou para iOS, Android e web, incluindo as 19 rotas estáticas. Bundles locais não equivalem a APK, build iOS ou teste em aparelho.
- HTML exportado: inclui scripts de hidratação e `viewport-fit=cover`.
- Manifesto iOS do servidor de desenvolvimento: aplicativo SOMA, `sdkVersion: 58.0.0`, `runtimeVersion: exposdk:58.0.0`.
- Navegador em desenvolvimento: mapa renderizado, clique na região Água Rasa abriu a etiqueta e os detalhes; zoom funcionou; nenhum erro registrado no console nessa reprodução após a correção.
- Navegação no SDK 58: Mapa → Home → Explorar → Medida protetiva → Início; retorno direto à Home confirmado, sem erros no console.
- `git diff --check`: passou.

Posteriormente, o usuário confirmou funcionamento no Expo Go do iPhone com o servidor em modo túnel, resolvendo o timeout de conexão. A publicação e a build posteriores estão registradas em [publicacao-2026-10-23.md](publicacao-2026-10-23.md). A validação detalhada do APK Android pelo grupo permanece pendente.

## Retomar o teste no VS Code

Encerre o terminal antigo do Expo com Ctrl+C e rode:

```powershell
cd "C:\Users\steni\Documents\Projeto SOMA\soma"
npx expo start --go --tunnel --clear
```

Escaneie o QR code recém-gerado. O QR anterior da sessão SDK 57 não deve ser reutilizado.

## Pendências e referências

`npm audit` após a migração: 7 alertas transitivos (2 moderados e 5 altos), sem alertas críticos. Não foi aplicado `audit fix --force`.

As dependências anteriores e os arquivos de configuração foram preservados temporariamente em `C:\Users\steni\AppData\Local\Temp\soma-pre-sdk58-81139b90c8754834aad221eb6e5fa17b` para recuperação, sem inclusão no Git.

Documentação consultada: [compatibilidade Expo Go](https://docs.expo.dev/troubleshooting/expo-go-version-mismatch/), [SDK 58](https://docs.expo.dev/versions/v58.0.0/), [migração do Expo Router 57 → 58](https://docs.expo.dev/router/migrate/sdk-57-to-58/), [HTML estático](https://docs.expo.dev/router/web/static-rendering/) e [áreas seguras na web](https://docs.expo.dev/develop/user-interface/safe-areas/).
