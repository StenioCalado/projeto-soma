export type TipoServico =
  | 'Todos'
  | 'Delegacia'
  | 'Defensoria'
  | 'Centro de Apoio'
  | 'Saúde';

export type ServicoApoio = {
  id: string;
  nome: string;
  tipo: Exclude<TipoServico, 'Todos'>;
  endereco: string;
  cidade: string;
  telefone?: string;
  horario?: string;
};

export const servicosApoio: ServicoApoio[] = [
  {
    id: '1',
    nome: 'Delegacia da Mulher - Unidade Centro',
    tipo: 'Delegacia',
    endereco: 'Região Central',
    cidade: 'São Paulo',
    telefone: '180',
    horario: 'Atendimento 24 horas',
  },
  {
    id: '2',
    nome: 'Núcleo de Atendimento Jurídico',
    tipo: 'Defensoria',
    endereco: 'Centro',
    cidade: 'São Paulo',
    horario: 'Segunda a sexta-feira',
  },
  {
    id: '3',
    nome: 'Centro de Referência da Mulher',
    tipo: 'Centro de Apoio',
    endereco: 'Zona Sul',
    cidade: 'São Paulo',
    horario: 'Segunda a sexta-feira',
  },
  {
    id: '4',
    nome: 'Unidade de Atendimento à Saúde',
    tipo: 'Saúde',
    endereco: 'Zona Leste',
    cidade: 'São Paulo',
    horario: 'Atendimento 24 horas',
  },
  {
    id: '5',
    nome: 'Centro de Proteção e Acolhimento',
    tipo: 'Centro de Apoio',
    endereco: 'Zona Norte',
    cidade: 'São Paulo',
    horario: 'Segunda a sexta-feira',
  },
];