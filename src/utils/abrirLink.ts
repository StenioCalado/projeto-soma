import { Linking } from 'react-native';

import { avisar } from './alerta';

/** Exibe uma alternativa quando o sistema não consegue abrir um recurso externo. */
export async function abrirLink(url: string) {
  try {
    await Linking.openURL(url);
  } catch {
    avisar(
      'Não foi possível abrir',
      url.startsWith('tel:')
        ? `Ligue diretamente para ${url.slice(4)}.`
        : 'Verifique sua conexão e tente novamente. Você também pode acessar o serviço pelo navegador.'
    );
  }
}
