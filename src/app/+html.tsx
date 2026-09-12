import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

export default function Root({
  children,
}: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />

        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Cor principal da interface do navegador */}
        <meta
          name="theme-color"
          content="#3D1E45"
        />

        {/* Manifest da PWA */}
        <link
          rel="manifest"
          href="/manifest.json"
        />

        {/* Ícone utilizado pelo iPhone/iPad */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />

        {/* Configurações específicas para iOS */}
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="SOMA"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />

        {/* Informações gerais */}
        <meta
          name="application-name"
          content="SOMA"
        />

        <meta
          name="description"
          content="Projeto SOMA — Segurança, Orientação, Monitoramento e Apoio"
        />

        <title>Projeto SOMA</title>

        <ScrollViewStyleReset />
      </head>

      <body>{children}</body>
    </html>
  );
}