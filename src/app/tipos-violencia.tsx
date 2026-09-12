import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../constants/theme';
import { tiposViolencia } from '../data/tiposViolencia';

export default function TiposViolenciaScreen() {
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
          Tipos de violência
        </Text>

        <Text style={styles.subtitle}>
          A violência pode acontecer de diferentes formas.
          Conhecer os sinais é um passo importante para buscar ajuda.
        </Text>

        <View style={styles.list}>
          {tiposViolencia.map((tipo) => (
            <View
              key={tipo.id}
              style={[
                styles.card,
                {
                  backgroundColor: tipo.cor,
                },
              ]}
            >
              <View style={styles.iconContainer}>
                <Ionicons
                  name={tipo.icone}
                  size={42}
                  color={colors.primary}
                />
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>
                  {tipo.titulo}
                </Text>

                <Text style={styles.cardDescription}>
                  {tipo.descricao}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={26}
            color={colors.primary}
          />

          <Text style={styles.infoText}>
            Você não precisa identificar sozinha qual tipo de violência está vivendo para buscar ajuda.
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
    paddingBottom: 50,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    alignSelf: 'flex-start',
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
    marginBottom: 14,
  },

  subtitle: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 27,
    marginBottom: 30,
  },

  list: {
    gap: 18,
  },

  card: {
    minHeight: 150,
    borderRadius: 24,

    padding: 18,

    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 92,
    height: 92,

    borderRadius: 46,

    backgroundColor: '#F0D8CA',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 18,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: colors.primary,

    fontSize: 22,
    fontWeight: '700',

    marginBottom: 7,
  },

  cardDescription: {
    color: colors.white,

    fontSize: 17,
    lineHeight: 24,
  },

  infoBox: {
    marginTop: 30,

    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 20,

    padding: 18,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 12,
  },

  infoText: {
    flex: 1,

    color: colors.text,

    fontSize: 16,
    lineHeight: 23,
  },
});