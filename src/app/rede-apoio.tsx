import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  useMemo,
  useState,
} from 'react';

import { colors } from '../constants/theme';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';

type TipoServico =
  | 'Todos'
  | 'Delegacia'
  | 'Defensoria'
  | 'Centro de Apoio'
  | 'Saúde';

type Servico = {
  nome: string;
  tipo: Exclude<TipoServico, 'Todos'>;
  localizacao: string;
  horario: string;
  telefone?: string;
};

const filtros: TipoServico[] = [
  'Todos',
  'Delegacia',
  'Defensoria',
  'Centro de Apoio',
  'Saúde',
];

const servicos: Servico[] = [
  {
    nome: 'Delegacia da Mulher - Unidade Centro',
    tipo: 'Delegacia',
    localizacao:
      'Região central de São Paulo',
    horario:
      'Horário demonstrativo',
  },
  {
    nome: 'Núcleo de Atendimento Jurídico',
    tipo: 'Defensoria',
    localizacao:
      'São Paulo - SP',
    horario:
      'Horário demonstrativo',
  },
  {
    nome: 'Centro de Referência da Mulher',
    tipo: 'Centro de Apoio',
    localizacao:
      'São Paulo - SP',
    horario:
      'Horário demonstrativo',
  },
  {
    nome: 'Unidade de Atendimento à Saúde',
    tipo: 'Saúde',
    localizacao:
      'São Paulo - SP',
    horario:
      'Atendimento demonstrativo',
  },
  {
    nome: 'Centro de Proteção e Acolhimento',
    tipo: 'Centro de Apoio',
    localizacao:
      'São Paulo - SP',
    horario:
      'Horário demonstrativo',
  },
];

function getIcon(
  tipo: Servico['tipo']
): keyof typeof Ionicons.glyphMap {
  switch (tipo) {
    case 'Delegacia':
      return 'business-outline';

    case 'Defensoria':
      return 'scale-outline';

    case 'Centro de Apoio':
      return 'heart-outline';

    case 'Saúde':
      return 'medkit-outline';

    default:
      return 'location-outline';
  }
}

export default function RedeApoioScreen() {
  const [busca, setBusca] =
    useState('');

  const [filtro, setFiltro] =
    useState<TipoServico>('Todos');

  const {
    isCompactPhone,
    isPhone,
    horizontalPadding,
    topPadding,
    contentMaxWidth,
  } = useResponsiveLayout();

  const resultados = useMemo(() => {
    const termo =
      busca.trim().toLowerCase();

    return servicos.filter(
      (servico) => {
        const correspondeFiltro =
          filtro === 'Todos' ||
          servico.tipo === filtro;

        const correspondeBusca =
          !termo ||
          servico.nome
            .toLowerCase()
            .includes(termo) ||
          servico.tipo
            .toLowerCase()
            .includes(termo) ||
          servico.localizacao
            .toLowerCase()
            .includes(termo);

        return (
          correspondeFiltro &&
          correspondeBusca
        );
      }
    );
  }, [busca, filtro]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: topPadding,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.content,
            {
              maxWidth: contentMaxWidth,
              paddingHorizontal:
                horizontalPadding,
            },
          ]}
        >
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color={colors.primary}
            />

            <Text style={styles.backText}>
              Voltar
            </Text>
          </Pressable>

          <Text
            style={[
              styles.title,
              {
                fontSize:
                  isCompactPhone
                    ? 30
                    : 36,
              },
            ]}
          >
            Rede de apoio
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                fontSize:
                  isCompactPhone
                    ? 15
                    : 18,
              },
            ]}
          >
            Consulte serviços de orientação,
            acolhimento, proteção e atendimento.
          </Text>

          <View style={styles.searchContainer}>
            <Ionicons
              name="search-outline"
              size={22}
              color="#80777D"
            />

            <TextInput
              style={styles.searchInput}
              value={busca}
              onChangeText={setBusca}
              placeholder="Buscar serviço"
              placeholderTextColor="#918991"
            />

            {busca.length > 0 && (
              <Pressable
                onPress={() =>
                  setBusca('')
                }
              >
                <Ionicons
                  name="close-circle"
                  size={21}
                  color="#918991"
                />
              </Pressable>
            )}
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={
              false
            }
            contentContainerStyle={
              styles.filters
            }
          >
            {filtros.map((item) => {
              const ativo =
                item === filtro;

              return (
                <Pressable
                  key={item}
                  style={[
                    styles.filterButton,
                    ativo &&
                      styles.filterButtonActive,
                  ]}
                  onPress={() =>
                    setFiltro(item)
                  }
                >
                  <Text
                    style={[
                      styles.filterText,
                      ativo &&
                        styles.filterTextActive,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <Text style={styles.resultCount}>
            {resultados.length}{' '}
            {resultados.length === 1
              ? 'serviço encontrado'
              : 'serviços encontrados'}
          </Text>

          <View style={styles.cards}>
            {resultados.map(
              (servico) => (
                <View
                  key={servico.nome}
                  style={[
                    styles.card,
                    {
                      width:
                        isPhone
                          ? '100%'
                          : '48.5%',
                    },
                  ]}
                >
                  <View style={styles.cardHeader}>
                    <View
                      style={[
                        styles.iconContainer,
                        {
                          width:
                            isCompactPhone
                              ? 50
                              : 58,

                          height:
                            isCompactPhone
                              ? 50
                              : 58,

                          borderRadius:
                            isCompactPhone
                              ? 25
                              : 29,
                        },
                      ]}
                    >
                      <Ionicons
                        name={getIcon(
                          servico.tipo
                        )}
                        size={
                          isCompactPhone
                            ? 26
                            : 30
                        }
                        color={colors.primary}
                      />
                    </View>

                    <View style={styles.headerText}>
                      <Text style={styles.serviceType}>
                        {servico.tipo}
                      </Text>

                      <Text
                        style={[
                          styles.serviceName,
                          {
                            fontSize:
                              isCompactPhone
                                ? 17
                                : 19,
                          },
                        ]}
                      >
                        {servico.nome}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.infoRow}>
                    <Ionicons
                      name="location-outline"
                      size={19}
                      color={colors.primary}
                    />

                    <Text style={styles.infoText}>
                      {servico.localizacao}
                    </Text>
                  </View>

                  <View style={styles.infoRow}>
                    <Ionicons
                      name="time-outline"
                      size={19}
                      color={colors.primary}
                    />

                    <Text style={styles.infoText}>
                      {servico.horario}
                    </Text>
                  </View>

                  <View style={styles.actions}>
                    <Pressable
                      style={styles.mapButton}
                      onPress={() =>
                        router.push('/mapa')
                      }
                    >
                      <Ionicons
                        name="map-outline"
                        size={18}
                        color={colors.primary}
                      />

                      <Text style={styles.mapButtonText}>
                        Ver no mapa
                      </Text>
                    </Pressable>

                    {servico.telefone && (
                      <Pressable
                        style={styles.callButton}
                        onPress={() =>
                          Linking.openURL(
                            `tel:${servico.telefone}`
                          )
                        }
                      >
                        <Ionicons
                          name="call-outline"
                          size={18}
                          color={colors.white}
                        />

                        <Text style={styles.callButtonText}>
                          Ligar
                        </Text>
                      </Pressable>
                    )}
                  </View>
                </View>
              )
            )}
          </View>

          {resultados.length === 0 && (
            <View style={styles.empty}>
              <Ionicons
                name="search-outline"
                size={42}
                color={colors.pink}
              />

              <Text style={styles.emptyTitle}>
                Nenhum serviço encontrado
              </Text>

              <Text style={styles.emptyText}>
                Tente outro termo ou filtro.
              </Text>
            </View>
          )}

          <View style={styles.demoNotice}>
            <Ionicons
              name="information-circle-outline"
              size={25}
              color={colors.primary}
            />

            <Text style={styles.demoText}>
              Os serviços exibidos nesta versão
              são demonstrativos. Uma versão futura
              poderá utilizar dados oficiais
              atualizados da rede de atendimento.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    alignItems: 'center',
    paddingBottom: 60,
  },

  content: {
    width: '100%',
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',

    alignSelf: 'flex-start',

    marginBottom: 28,
  },

  backText: {
    color: colors.primary,

    fontSize: 16,
    fontWeight: '600',
  },

  title: {
    color: colors.primary,

    fontWeight: '700',

    marginBottom: 10,
  },

  subtitle: {
    color: colors.text,

    lineHeight: 26,

    maxWidth: 650,

    marginBottom: 24,
  },

  searchContainer: {
    minHeight: 55,

    backgroundColor: colors.white,

    borderWidth: 1.5,
    borderColor: '#D8CFD1',

    borderRadius: 18,

    paddingHorizontal: 15,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 18,
  },

  searchInput: {
    flex: 1,

    marginLeft: 9,

    color: colors.text,

    fontSize: 16,
  },

  filters: {
    gap: 9,

    paddingBottom: 4,
  },

  filterButton: {
    minHeight: 40,

    paddingHorizontal: 15,

    borderRadius: 20,

    borderWidth: 1,
    borderColor: '#D6C9CD',

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.white,
  },

  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  filterText: {
    color: colors.primary,

    fontSize: 13,
    fontWeight: '600',
  },

  filterTextActive: {
    color: colors.white,
  },

  resultCount: {
    color: '#756B72',

    fontSize: 13,

    marginVertical: 18,
  },

  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',

    gap: 14,
  },

  card: {
    minHeight: 230,

    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: '#E4DADC',

    borderRadius: 22,

    padding: 17,
  },

  cardHeader: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 15,
  },

  iconContainer: {
    backgroundColor: colors.lightPink,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 12,
  },

  headerText: {
    flex: 1,
  },

  serviceType: {
    color: colors.pink,

    fontSize: 11,
    fontWeight: '700',

    textTransform: 'uppercase',

    marginBottom: 3,
  },

  serviceName: {
    color: colors.primary,

    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 8,

    marginBottom: 10,
  },

  infoText: {
    flex: 1,

    color: colors.text,

    fontSize: 14,
    lineHeight: 20,
  },

  actions: {
    flexDirection: 'row',

    gap: 10,

    marginTop: 'auto',
    paddingTop: 10,
  },

  mapButton: {
    flex: 1,

    minHeight: 44,

    borderWidth: 1.5,
    borderColor: colors.primary,

    borderRadius: 22,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 6,
  },

  mapButtonText: {
    color: colors.primary,

    fontSize: 13,
    fontWeight: '700',
  },

  callButton: {
    flex: 1,

    minHeight: 44,

    backgroundColor: colors.primary,

    borderRadius: 22,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 6,
  },

  callButtonText: {
    color: colors.white,

    fontSize: 13,
    fontWeight: '700',
  },

  empty: {
    alignItems: 'center',

    paddingVertical: 45,
  },

  emptyTitle: {
    color: colors.primary,

    fontSize: 19,
    fontWeight: '700',

    marginTop: 12,
  },

  emptyText: {
    color: colors.text,

    fontSize: 14,

    marginTop: 5,
  },

  demoNotice: {
    marginTop: 25,

    backgroundColor: '#EFE7EF',

    borderRadius: 20,

    padding: 17,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 10,
  },

  demoText: {
    flex: 1,

    color: colors.text,

    fontSize: 13,
    lineHeight: 20,
  },
});