import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { colors } from '../constants/theme';
import { voltar } from '../utils/voltar';
import { Text } from './AppText';

/** Mantém o retorno contextual e oferece um caminho direto à Home. */
export function PageNavigation() {
  return (
    <View style={styles.row}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Voltar"
        onPress={voltar}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Ionicons name="chevron-back" size={24} color={colors.primary} />
        <Text style={styles.label}>Voltar</Text>
      </Pressable>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Ir para o início"
        onPress={() => router.replace('/home')}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Ionicons name="home-outline" size={21} color={colors.primary} />
        <Text style={styles.label}>Início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 20,
  },
  button: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  label: { color: colors.primary, fontSize: 16, fontWeight: '600' },
  pressed: { opacity: 0.7 },
});
