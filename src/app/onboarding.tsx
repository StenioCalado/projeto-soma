import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import { colors } from '../constants/theme';

const items = [
  {
    title: 'Tipos de Violência',
    description: 'Conheça seus direitos e saiba reconhecer os sinais.',
    icon: 'hand-left-outline',
  },
  {
    title: 'Como denunciar?',
    description: 'Passo a passo e canais oficiais.',
    icon: 'call-outline',
  },
  {
    title: 'Mapa de Calor',
    description: 'Veja dados sobre ocorrências na sua região.',
    icon: 'location-outline',
  },
  {
    title: 'Rede de Apoio',
    description: 'ONGs e centros de proteção perto de você.',
    icon: 'people-outline',
  },
];

export default function OnboardingScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        style={styles.skip}
        onPress={() => router.replace('/home')}
      >
        <Text style={styles.skipText}>pular</Text>
      </Pressable>

      <Text style={styles.title}>
        O que você encontra{'\n'}aqui?
      </Text>

      <View style={styles.list}>
        {items.map((item) => (
          <View key={item.title} style={styles.card}>
            <View style={styles.iconContainer}>
              <Ionicons
                name={item.icon as any}
                size={42}
                color={colors.text}
              />
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>

              <Text style={styles.cardDescription}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Pressable
        style={styles.button}
        onPress={() => router.replace('/home')}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 50,
  },

  skip: {
    alignSelf: 'flex-end',
    marginBottom: 55,
  },

  skipText: {
    color: '#918791',
    fontSize: 20,
    letterSpacing: 3,
  },

  title: {
    color: colors.primary,
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '700',
    marginBottom: 30,
  },

  list: {
    gap: 20,
  },

  card: {
    minHeight: 120,
    borderWidth: 1.5,
    borderColor: colors.text,
    borderRadius: 22,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D99BAD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  },

  cardDescription: {
    color: colors.text,
    fontSize: 17,
    lineHeight: 24,
  },

  button: {
    height: 76,
    backgroundColor: colors.primary,
    borderRadius: 38,
    marginTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});