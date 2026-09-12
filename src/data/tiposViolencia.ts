import { Ionicons } from '@expo/vector-icons';

export type TipoViolencia = {
  id: string;
  titulo: string;
  descricao: string;
  icone: keyof typeof Ionicons.glyphMap;
  cor: string;
};

export const tiposViolencia: TipoViolencia[] = [
  {
    id: 'fisica',
    titulo: 'Física',
    descricao:
      'Agressões, empurrões, tapas, uso de armas ou outras formas de violência física.',
    icone: 'hand-left-outline',
    cor: '#C9829C',
  },
  {
    id: 'psicologica',
    titulo: 'Psicológica',
    descricao:
      'Ameaças, humilhações, manipulação, controle, isolamento ou intimidação.',
    icone: 'cloudy-outline',
    cor: '#C9829C',
  },
  {
    id: 'sexual',
    titulo: 'Sexual',
    descricao:
      'Forçar ou induzir a prática de atos sexuais sem consentimento.',
    icone: 'shield-outline',
    cor: '#C9829C',
  },
  {
    id: 'patrimonial',
    titulo: 'Patrimonial',
    descricao:
      'Destruição de bens, controle financeiro ou retenção de documentos.',
    icone: 'wallet-outline',
    cor: '#C9829C',
  },
  {
    id: 'moral',
    titulo: 'Moral',
    descricao:
      'Calúnia, difamação, injúria ou outras agressões contra a honra.',
    icone: 'chatbox-ellipses-outline',
    cor: '#C9829C',
  },
  {
    id: 'vicaria',
    titulo: 'Vicária',
    descricao:
      'Uso de filhos, familiares ou pessoas próximas para ameaçar, controlar ou atingir a mulher.',
    icone: 'people-outline',
    cor: '#C9829C',
  },
];