import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/theme';

type HomeShortcutCardProps = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  variant?: 'default' | 'emergency';
};

export function HomeShortcutCard({
  title,
  icon,
  onPress,
  variant = 'default',
}: HomeShortcutCardProps) {
  const isEmergency = variant === 'emergency';

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        isEmergency && styles.emergencyCard,
        pressed && styles.cardPressed,
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.iconContainer,
          isEmergency && styles.emergencyIconContainer,
        ]}
      >
        <Ionicons
          name={icon}
          size={38}
          color={isEmergency ? colors.white : colors.primary}
        />
      </View>

      <Text
        style={[
          styles.title,
          isEmergency && styles.emergencyTitle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '30%',
    aspectRatio: 0.88,

    backgroundColor: '#E8C8CA',

    borderRadius: 22,
    borderWidth: 2,
    borderColor: '#EADBDD',

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 3,

    elevation: 2,
  },

  emergencyCard: {
    backgroundColor: '#B4495A',
    borderColor: '#B4495A',
  },

  cardPressed: {
    opacity: 0.7,
    transform: [
      {
        scale: 0.97,
      },
    ],
  },

  iconContainer: {
    width: 72,
    height: 72,

    borderRadius: 36,

    backgroundColor: '#D79BAD',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 12,
  },

  emergencyIconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
  },

  title: {
    color: colors.primary,

    fontSize: 16,
    lineHeight: 20,

    fontWeight: '700',

    textAlign: 'center',
  },

  emergencyTitle: {
    color: colors.white,
  },
});