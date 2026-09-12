import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../constants/theme';

type PlaceholderScreenProps = {
  title: string;
};

export function PlaceholderScreen({
  title,
}: PlaceholderScreenProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons
          name="chevron-back"
          size={30}
          color={colors.primary}
        />

        <Text style={styles.backText}>
          Voltar
        </Text>
      </Pressable>

      <View style={styles.content}>
        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.description}>
          Tela em desenvolvimento.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 28,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },

  backText: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '600',
  },

  content: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: colors.primary,

    fontSize: 34,

    fontWeight: '700',

    textAlign: 'center',
  },

  description: {
    color: colors.text,

    fontSize: 18,

    marginTop: 10,
  },
});