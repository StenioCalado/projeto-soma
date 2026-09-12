import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useMemo, useState } from 'react';

import { colors } from '../constants/theme';
import { conteudos } from '../data/conteudos';

export default function ExplorarScreen() {
  const [busca, setBusca] = useState('');

  const resultados = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    if (!termo) {
      return conteudos;
    }

    return conteudos.filter((conteudo) =>
      conteudo.titulo.toLowerCase().includes(termo) ||
      conteudo.resumo.toLowerCase().includes(termo) ||
      conteudo.categoria.toLowerCase().includes(termo)
    );
  }, [busca]);

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
          Explorar
        </Text>

        <Text style={styles.subtitle}>
          Informação também é uma forma de proteção.
          Encontre orientações de forma simples e direta.
        </Text>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={23}
            color="#81777E"
          />

          <TextInput
            style={styles.searchInput}
            value={busca}
            onChangeText={setBusca}
            placeholder="Buscar assunto"
            placeholderTextColor="#918991"
          />

          {busca.length > 0 && (
            <Pressable onPress={() => setBusca('')}>
              <Ionicons
                name="close-circle"
                size={22}
                color="#918991"
              />
            </Pressable>
          )}
        </View>

        <Text style={styles.sectionTitle}>
          Informações importantes
        </Text>

        <View style={styles.list}>
          {resultados.map((conteudo) => (
            <Pressable
              key={conteudo.id}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
              onPress={() =>
                router.push(`/conteudo/${conteudo.id}` as any)
              }
            >
              <View style={styles.iconContainer}>
                <Ionicons
                  name={conteudo.icone}
                  size={31}
                  color={colors.primary}
                />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.category}>
                  {conteudo.categoria}
                </Text>

                <Text style={styles.cardTitle}>
                  {conteudo.titulo}
                </Text>

                <Text style={styles.cardDescription}>
                  {conteudo.resumo}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={25}
                color={colors.primary}
              />
            </Pressable>
          ))}
        </View>

        {resultados.length === 0 && (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="search-outline"
              size={48}
              color={colors.pink}
            />

            <Text style={styles.emptyTitle}>
              Nenhum conteúdo encontrado
            </Text>

            <Text style={styles.emptyDescription}>
              Tente buscar por outro termo.
            </Text>
          </View>
        )}

        <Pressable
          style={styles.helpCard}
          onPress={() => router.push('/denunciar')}
        >
          <View>
            <Text style={styles.helpTitle}>
              Precisa de ajuda agora?
            </Text>

            <Text style={styles.helpDescription}>
              Veja os canais oficiais disponíveis.
            </Text>
          </View>

          <Ionicons
            name="arrow-forward-circle"
            size={38}
            color={colors.white}
          />
        </Pressable>
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
    marginBottom: 26,
  },

  searchContainer: {
    height: 58,

    backgroundColor: colors.white,

    borderWidth: 1.5,
    borderColor: '#D8CFD1',

    borderRadius: 20,

    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 32,
  },

  searchInput: {
    flex: 1,

    marginLeft: 10,

    color: colors.text,

    fontSize: 16,
  },

  sectionTitle: {
    color: colors.primary,

    fontSize: 23,
    fontWeight: '700',

    marginBottom: 16,
  },

  list: {
    gap: 15,
  },

  card: {
    minHeight: 125,

    backgroundColor: colors.white,

    borderRadius: 23,

    borderWidth: 1,
    borderColor: '#E5DDDF',

    padding: 17,

    flexDirection: 'row',
    alignItems: 'center',
  },

  cardPressed: {
    opacity: 0.75,
    transform: [
      {
        scale: 0.985,
      },
    ],
  },

  iconContainer: {
    width: 64,
    height: 64,

    borderRadius: 32,

    backgroundColor: colors.lightPink,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 14,
  },

  cardContent: {
    flex: 1,
  },

  category: {
    color: colors.pink,

    fontSize: 12,
    fontWeight: '700',

    textTransform: 'uppercase',

    marginBottom: 4,
  },

  cardTitle: {
    color: colors.primary,

    fontSize: 18,
    fontWeight: '700',

    marginBottom: 5,
  },

  cardDescription: {
    color: colors.text,

    fontSize: 14,
    lineHeight: 20,
  },

  emptyContainer: {
    paddingVertical: 50,

    alignItems: 'center',
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

    marginTop: 6,
  },

  helpCard: {
    minHeight: 105,

    backgroundColor: colors.primary,

    borderRadius: 24,

    paddingHorizontal: 22,
    paddingVertical: 20,

    marginTop: 30,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  helpTitle: {
    color: colors.white,

    fontSize: 19,
    fontWeight: '700',

    marginBottom: 5,
  },

  helpDescription: {
    color: '#F0E5EA',

    fontSize: 14,
  },
});