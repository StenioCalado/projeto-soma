import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../../constants/theme';
import { conteudos } from '../../data/conteudos';

export default function ConteudoScreen() {
  const { id } = useLocalSearchParams();

  const conteudo = conteudos.find(
    (item) => item.id === id
  );

  if (!conteudo) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundTitle}>
          Conteúdo não encontrado
        </Text>

        <Pressable onPress={() => router.back()}>
          <Text style={styles.backLink}>
            Voltar
          </Text>
        </Pressable>
      </View>
    );
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

        <View style={styles.iconContainer}>
          <Ionicons
            name={conteudo.icone}
            size={42}
            color={colors.primary}
          />
        </View>

        <Text style={styles.category}>
          {conteudo.categoria}
        </Text>

        <Text style={styles.title}>
          {conteudo.titulo}
        </Text>

        <Text style={styles.summary}>
          {conteudo.resumo}
        </Text>

        <View style={styles.divider} />

        {conteudo.texto.map((paragrafo, index) => (
          <Text
            key={index}
            style={styles.paragraph}
          >
            {paragrafo}
          </Text>
        ))}

        <View style={styles.warning}>
          <Ionicons
            name="information-circle-outline"
            size={25}
            color={colors.primary}
          />

          <Text style={styles.warningText}>
            Este conteúdo tem finalidade de orientação e não
            substitui atendimento jurídico, policial, médico
            ou especializado.
          </Text>
        </View>

        <Pressable
          style={styles.helpButton}
          onPress={() => router.push('/denunciar')}
        >
          <Text style={styles.helpButtonText}>
            Ver canais de ajuda
          </Text>

          <Ionicons
            name="arrow-forward"
            size={22}
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
    marginBottom: 35,
  },

  backText: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '600',
  },

  iconContainer: {
    width: 82,
    height: 82,

    borderRadius: 41,

    backgroundColor: colors.lightPink,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 18,
  },

  category: {
    color: colors.pink,

    fontSize: 13,
    fontWeight: '700',

    textTransform: 'uppercase',

    marginBottom: 7,
  },

  title: {
    color: colors.primary,

    fontSize: 35,
    lineHeight: 42,

    fontWeight: '700',

    marginBottom: 12,
  },

  summary: {
    color: colors.text,

    fontSize: 18,
    lineHeight: 27,
  },

  divider: {
    height: 1,
    backgroundColor: '#DED5D7',

    marginVertical: 28,
  },

  paragraph: {
    color: colors.text,

    fontSize: 17,
    lineHeight: 27,

    marginBottom: 18,
  },

  warning: {
    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 20,

    padding: 17,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 11,

    marginTop: 10,
  },

  warningText: {
    flex: 1,

    color: colors.text,

    fontSize: 14,
    lineHeight: 21,
  },

  helpButton: {
    minHeight: 60,

    backgroundColor: colors.primary,

    borderRadius: 30,

    marginTop: 28,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 10,
  },

  helpButtonText: {
    color: colors.white,

    fontSize: 17,
    fontWeight: '700',
  },

  notFoundContainer: {
    flex: 1,

    backgroundColor: colors.background,

    alignItems: 'center',
    justifyContent: 'center',

    padding: 30,
  },

  notFoundTitle: {
    color: colors.primary,

    fontSize: 25,
    fontWeight: '700',
  },

  backLink: {
    color: colors.pink,

    fontSize: 17,
    fontWeight: '700',

    marginTop: 20,
  },
});