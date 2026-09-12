import { Ionicons } from '@expo/vector-icons';

export type ConteudoEducativo = {
  id: string;
  titulo: string;
  resumo: string;
  categoria: string;
  icone: keyof typeof Ionicons.glyphMap;
  texto: string[];
};

export const conteudos: ConteudoEducativo[] = [
  {
    id: 'reconheca-sinais',
    titulo: 'Reconheça os sinais',
    resumo: 'Entenda comportamentos que podem indicar uma situação de violência.',
    categoria: 'Orientação',
    icone: 'eye-outline',
    texto: [
      'A violência doméstica nem sempre começa com agressões físicas.',
      'Ameaças, humilhações, controle financeiro, isolamento, perseguição e manipulação também podem fazer parte de uma situação de violência.',
      'Você não precisa identificar sozinha qual categoria jurídica se aplica para buscar orientação ou ajuda.',
    ],
  },

  {
    id: 'medida-protetiva',
    titulo: 'Medida protetiva',
    resumo: 'Entenda para que serve e quais caminhos existem para buscar proteção.',
    categoria: 'Direitos',
    icone: 'shield-checkmark-outline',
    texto: [
      'As medidas protetivas existem para ajudar a proteger mulheres em situação de violência.',
      'A busca por proteção não deve ser confundida com a obrigação de registrar previamente um boletim de ocorrência.',
      'O SOMA pode orientar sobre os canais oficiais disponíveis para buscar informação e atendimento.',
    ],
  },

  {
    id: 'ajudar-outra-pessoa',
    titulo: 'Quero ajudar alguém',
    resumo: 'Saiba como apoiar uma amiga, familiar, vizinha ou conhecida.',
    categoria: 'Rede de apoio',
    icone: 'people-outline',
    texto: [
      'Ouvir sem julgar pode ser um primeiro passo importante.',
      'Evite pressionar a pessoa a tomar decisões para as quais ela ainda não se sente preparada.',
      'Em situações de perigo imediato, os canais oficiais de emergência devem ser priorizados.',
      'Também existem canais pelos quais terceiros podem comunicar situações de violência.',
    ],
  },

  {
    id: 'seguranca-digital',
    titulo: 'Segurança digital',
    resumo: 'Cuidados ao buscar ajuda usando celular, computador ou contas compartilhadas.',
    categoria: 'Segurança',
    icone: 'lock-closed-outline',
    texto: [
      'Em algumas situações, o dispositivo pode ser monitorado ou acessado por outra pessoa.',
      'Considere o risco antes de armazenar relatos, fotos, localização ou informações sensíveis.',
      'O SOMA foi pensado para minimizar rastros e permitir acesso rápido a informações importantes.',
    ],
  },

  {
    id: 'canais-oficiais',
    titulo: 'Qual canal procurar?',
    resumo: 'Entenda a diferença entre emergência, denúncia, BO e orientação.',
    categoria: 'Orientação',
    icone: 'navigate-outline',
    texto: [
      'Situações diferentes podem exigir canais diferentes.',
      'Emergência, denúncia anônima, boletim de ocorrência, medida protetiva e orientação não são a mesma coisa.',
      'O SOMA ajuda a identificar a necessidade e direciona para os serviços oficiais correspondentes.',
    ],
  },
];