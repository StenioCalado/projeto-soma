# Publicação para validação do grupo — 23/10/2026

Publicação web em produção e build Android interna autorizadas explicitamente pelo usuário após validar o aplicativo no Expo Go com túnel.

## Origem

- Projeto EAS: `@steniocalado/soma`.
- ID: `72542690-8479-4fb7-a8be-838935b975e7`.
- Código local da branch `feat/integracao-zip-navegacao`, incluindo alterações ainda não commitadas.
- Expo SDK 58, versão do aplicativo `1.0.0`.
- Não foram realizados commit, push ou merge no GitHub nesta publicação.

## Web

- Comandos: `npx expo export --platform web` e `npx eas-cli@latest deploy --prod --non-interactive`.
- EAS confirmou criação do deployment e promoção para produção.
- Produção: https://projetosoma.expo.app
- Deployment específico: https://projetosoma--ij809d7cns.expo.app
- Navegador: onboarding e Home carregaram; mapa abriu e o clique em Água Rasa exibiu etiqueta/detalhes; link direto `/conteudo/medida-protetiva` abriu e o botão Início retornou à Home. Nenhum erro de console foi capturado nesse fluxo.
- Uma consulta por cliente HTTP automatizado recebeu 403; o navegador carregou e executou a aplicação normalmente.

## Android

- Comando: `npx eas-cli@latest build --platform android --profile preview --non-interactive --no-wait --json`.
- Perfil `preview`, distribuição `internal`, saída configurada como APK.
- Build ID: `423c18f5-bffe-4f29-bc53-6201acd505bb`.
- Página: https://expo.dev/accounts/steniocalado/projects/soma/builds/423c18f5-bffe-4f29-bc53-6201acd505bb
- Pacote: `com.projetosoma.app`; versionCode `1`.
- Credencial Android existente reutilizada; nenhuma chave foi gerada ou substituída.
- Fingerprint do projeto enviado: `1098a40e8ba0f437374777830730bf148d7c531c`.
- Estado: `FINISHED`, concluída em 23/10/2026 às 18:53 (America/Sao_Paulo).
- APK: https://expo.dev/artifacts/eas/S-tTIZ6CesYzMhTtIH3t9q4i6ORkU-bQpI8chF0eu24.apk

## Verificação local

TypeScript, lint, inspeção de whitespace do diff e exportação web passaram antes da publicação. A instalação e o funcionamento do APK em aparelho Android serão validados pelo grupo.

## Validação pelo grupo

- Expo Go no iPhone: usuário confirmou funcionamento após iniciar o servidor com túnel.
- APK Android: build concluída; instalação e teste em aparelho físico ainda pendentes.
- Ainda verificar no Android: botão Voltar, navegação por gestos e três botões, permissões de localização e saída rápida.
- A conclusão da build e os testes web não substituem essas verificações.
