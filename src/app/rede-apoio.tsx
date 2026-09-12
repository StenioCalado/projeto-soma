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

import { useMemo, useState } from 'react';

import { colors } from '../constants/theme';

import {
  ServicoApoio,
  servicosApoio,
  TipoServico,
} from '../data/servicosApoio';

const filtros: TipoServico[] = [
  'Todos',
  'Delegacia',
  'Defensoria',
  'Centro de Apoio',
  'Saúde',
];

export default function RedeApoioScreen() {
  const [busca, setBusca] = useState('');
  const [filtroSelecionado, setFiltroSelecionado] =
    useState<TipoServico>('Todos');

  const servicosFiltrados = useMemo(() => {
    return servicosApoio.filter((servico) => {
      const correspondeBusca =
        servico.nome
          .toLowerCase()
          .includes(busca.toLowerCase()) ||
        servico.endereco
          .toLowerCase()
          .includes(busca.toLowerCase()) ||
        servico.cidade
          .toLowerCase()
          .includes(busca.toLowerCase());

      const correspondeFiltro =
        filtroSelecionado === 'Todos' ||
        servico.tipo === filtroSelecionado;

      return correspondeBusca && correspondeFiltro;
    });
  }, [busca, filtroSelecionado]);

  function getIcone(tipo: ServicoApoio['tipo']) {
    switch (tipo) {
      case 'Delegacia':
        return 'shield-outline';

      case 'Defensoria':
        return 'document-text-outline';

      case 'Saúde':
        return 'medical-outline';

      default:
        return 'people-outline';
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="chevron-back"
            size={28}
            color={colors.primary}
          />

          <Text style={styles.backText}>
            Voltar
          </Text>
        </Pressable>

        <Text style={styles.title}>
          Rede de Apoio
        </Text>

        <Text style={styles.subtitle}>
          Encontre serviços que podem oferecer orientação,
          acolhimento e proteção.
        </Text>

        {/* Busca */}

        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={23}
            color="#7D737B"
          />

          <TextInput
            value={busca}
            onChangeText={setBusca}
            placeholder="Buscar serviço ou região"
            placeholderTextColor="#8F878D"
            style={styles.searchInput}
          />

          {busca.length > 0 && (
            <Pressable onPress={() => setBusca('')}>
              <Ionicons
                name="close-circle"
                size={22}
                color="#8F878D"
              />
            </Pressable>
          )}
        </View>

        {/* Filtros */}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {filtros.map((filtro) => {
            const ativo = filtro === filtroSelecionado;

            return (
              <Pressable
                key={filtro}
                style={[
                  styles.filterButton,
                  ativo && styles.filterButtonActive,
                ]}
                onPress={() =>
                  setFiltroSelecionado(filtro)
                }
              >
                <Text
                  style={[
                    styles.filterText,
                    ativo && styles.filterTextActive,
                  ]}
                >
                  {filtro}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <Text style={styles.resultCount}>
          {servicosFiltrados.length}{' '}
          {servicosFiltrados.length === 1
            ? 'serviço encontrado'
            : 'serviços encontrados'}
        </Text>

        {/* Serviços */}

        <View style={styles.list}>
          {servicosFiltrados.map((servico) => (
            <View
              key={servico.id}
              style={styles.card}
            >
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Ionicons
                    name={getIcone(servico.tipo)}
                    size={30}
                    color={colors.primary}
                  />
                </View>

                <View style={styles.cardHeaderText}>
                  <Text style={styles.serviceType}>
                    {servico.tipo}
                  </Text>

                  <Text style={styles.serviceName}>
                    {servico.nome}
                  </Text>
                </View>
              </View>

              <View style={styles.infoRow}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={colors.primary}
                />

                <Text style={styles.infoText}>
                  {servico.endereco} • {servico.cidade}
                </Text>
              </View>

              {servico.horario && (
                <View style={styles.infoRow}>
                  <Ionicons
                    name="time-outline"
                    size={20}
                    color={colors.primary}
                  />

                  <Text style={styles.infoText}>
                    {servico.horario}
                  </Text>
                </View>
              )}

              <View style={styles.actions}>
                <Pressable
                  style={styles.secondaryButton}
                  onPress={() => router.push('/mapa')}
                >
                  <Ionicons
                    name="map-outline"
                    size={20}
                    color={colors.primary}
                  />

                  <Text style={styles.secondaryButtonText}>
                    Ver no mapa
                  </Text>
                </Pressable>

                {servico.telefone && (
                  <Pressable
                    style={styles.primaryButton}
                    onPress={() =>
                      Linking.openURL(
                        `tel:${servico.telefone}`
                      )
                    }
                  >
                    <Ionicons
                      name="call-outline"
                      size={20}
                      color={colors.white}
                    />

                    <Text style={styles.primaryButtonText}>
                      Ligar
                    </Text>
                  </Pressable>
                )}
              </View>
            </View>
          ))}
        </View>

        {servicosFiltrados.length === 0 && (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="search-outline"
              size={48}
              color={colors.pink}
            />

            <Text style={styles.emptyTitle}>
              Nenhum serviço encontrado
            </Text>

            <Text style={styles.emptyDescription}>
              Tente alterar a busca ou selecionar outro tipo
              de atendimento.
            </Text>
          </View>
        )}

        {/* Aviso MVP */}

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={25}
            color={colors.primary}
          />

          <Text style={styles.infoBoxText}>
            Os serviços exibidos nesta versão são dados de
            demonstração do MVP. A versão final do protótipo
            poderá utilizar informações oficiais da rede de
            atendimento.
          </Text>
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

  content: {
    paddingHorizontal: 26,
    paddingTop: 45,
    paddingBottom: 60,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 30,
  },

  backText: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '600',
  },

  title: {
    color: colors.primary,
    fontSize: 36,
    fontWeight: '700',
    marginBottom: 12,
  },

  subtitle: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 27,
    marginBottom: 28,
  },

  searchContainer: {
    height: 58,

    backgroundColor: colors.white,

    borderWidth: 1.5,
    borderColor: '#D6CDCF',

    borderRadius: 20,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,

    marginBottom: 18,
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    color: colors.text,

    fontSize: 16,
  },

  filters: {
    gap: 10,
    paddingBottom: 10,
  },

  filterButton: {
    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 22,

    paddingHorizontal: 17,
    paddingVertical: 10,
  },

  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  filterText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },

  filterTextActive: {
    color: colors.white,
  },

  resultCount: {
    color: '#777075',
    fontSize: 14,
    marginTop: 12,
    marginBottom: 16,
  },

  list: {
    gap: 18,
  },

  card: {
    backgroundColor: colors.white,

    borderRadius: 24,

    padding: 20,

    borderWidth: 1,
    borderColor: '#E5DDDE',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  iconContainer: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: colors.lightPink,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 14,
  },

  cardHeaderText: {
    flex: 1,
  },

  serviceType: {
    color: colors.pink,

    fontSize: 13,
    fontWeight: '700',

    textTransform: 'uppercase',

    marginBottom: 3,
  },

  serviceName: {
    color: colors.primary,

    fontSize: 18,
    lineHeight: 23,

    fontWeight: '700',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,

    marginBottom: 9,
  },

  infoText: {
    flex: 1,

    color: colors.text,

    fontSize: 15,
    lineHeight: 21,
  },

  actions: {
    flexDirection: 'row',

    gap: 10,

    marginTop: 15,
  },

  primaryButton: {
    flex: 1,

    minHeight: 47,

    backgroundColor: colors.primary,

    borderRadius: 24,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 7,
  },

  primaryButtonText: {
    color: colors.white,

    fontSize: 14,
    fontWeight: '700',
  },

  secondaryButton: {
    flex: 1,

    minHeight: 47,

    borderWidth: 1.5,
    borderColor: colors.primary,

    borderRadius: 24,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 7,
  },

  secondaryButtonText: {
    color: colors.primary,

    fontSize: 14,
    fontWeight: '700',
  },

  emptyContainer: {
    alignItems: 'center',

    paddingVertical: 55,
    paddingHorizontal: 25,
  },

  emptyTitle: {
    color: colors.primary,

    fontSize: 20,
    fontWeight: '700',

    marginTop: 15,
  },

  emptyDescription: {
    color: colors.text,

    fontSize: 15,
    lineHeight: 22,

    textAlign: 'center',

    marginTop: 7,
  },

  infoBox: {
    marginTop: 30,

    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 20,

    padding: 17,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 11,
  },

  infoBoxText: {
    flex: 1,

    color: colors.text,

    fontSize: 14,
    lineHeight: 21,
  },
});