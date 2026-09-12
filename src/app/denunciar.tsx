import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../constants/theme';
import {
  CanalDenuncia,
  canaisDenuncia,
} from '../data/canaisDenuncia';

export default function DenunciarScreen() {
  async function handleCanalPress(canal: CanalDenuncia) {
    try {
      if (canal.tipoAcao === 'telefone') {
        const url = `tel:${canal.destino}`;

        const supported = await Linking.canOpenURL(url);

        if (supported) {
          await Linking.openURL(url);
        } else {
          Alert.alert(
            'Ligação indisponível',
            `Não foi possível iniciar uma ligação para ${canal.destino} neste dispositivo.`
          );
        }

        return;
      }

      if (canal.tipoAcao === 'url') {
        await Linking.openURL(canal.destino);
        return;
      }

      if (canal.tipoAcao === 'rota') {
        router.push(canal.destino as any);
      }
    } catch {
      Alert.alert(
        'Não foi possível abrir o canal',
        'Tente novamente ou procure o serviço diretamente.'
      );
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
          Como denunciar?
        </Text>

        <Text style={styles.subtitle}>
          Escolha o canal mais adequado para a sua situação.
        </Text>

        <View style={styles.grid}>
          {canaisDenuncia.map((canal) => (
            <Pressable
              key={canal.id}
              style={({ pressed }) => [
                styles.card,
                {
                  backgroundColor: canal.cor,
                },
                pressed && styles.cardPressed,
              ]}
              onPress={() => handleCanalPress(canal)}
            >
              <Ionicons
                name={canal.icone}
                size={42}
                color={colors.white}
              />

              <Text style={styles.cardTitle}>
                {canal.titulo}
              </Text>

              <Text style={styles.cardDescription}>
                {canal.descricao}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.warningBox}>
          <Ionicons
            name="information-circle-outline"
            size={28}
            color={colors.primary}
          />

          <Text style={styles.warningText}>
            <Text style={styles.warningStrong}>
              Importante:{' '}
            </Text>

            o SOMA não realiza nem armazena denúncias.
            A plataforma orienta e direciona você para
            canais oficiais.
          </Text>
        </View>

        <View style={styles.emergencyBox}>
          <Ionicons
            name="warning-outline"
            size={28}
            color={colors.primary}
          />

          <View style={styles.emergencyContent}>
            <Text style={styles.emergencyTitle}>
              Está em perigo agora?
            </Text>

            <Text style={styles.emergencyDescription}>
              Em uma situação de risco imediato, priorize o atendimento de emergência pelo 190.
            </Text>

            <Pressable
              style={styles.emergencyButton}
              onPress={() => Linking.openURL('tel:190')}
            >
              <Ionicons
                name="call"
                size={22}
                color={colors.white}
              />

              <Text style={styles.emergencyButtonText}>
                Ligar 190
              </Text>
            </Pressable>
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
    marginBottom: 12,
  },

  subtitle: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 27,
    marginBottom: 30,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
  },

  card: {
    width: '48%',
    minHeight: 205,

    borderRadius: 24,

    paddingHorizontal: 16,
    paddingVertical: 22,

    alignItems: 'center',
    justifyContent: 'center',
  },

  cardPressed: {
    opacity: 0.8,
    transform: [
      {
        scale: 0.97,
      },
    ],
  },

  cardTitle: {
    color: colors.white,

    fontSize: 19,
    fontWeight: '700',

    textAlign: 'center',

    marginTop: 14,
    marginBottom: 8,
  },

  cardDescription: {
    color: colors.white,

    fontSize: 14,
    lineHeight: 20,

    textAlign: 'center',
  },

  warningBox: {
    marginTop: 35,

    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 22,

    padding: 18,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 12,
  },

  warningText: {
    flex: 1,

    color: colors.text,

    fontSize: 16,
    lineHeight: 23,
  },

  warningStrong: {
    color: colors.primary,
    fontWeight: '700',
  },

  emergencyBox: {
    marginTop: 25,

    backgroundColor: '#F2E1E4',

    borderRadius: 22,

    padding: 20,

    flexDirection: 'row',

    gap: 14,
  },

  emergencyContent: {
    flex: 1,
  },

  emergencyTitle: {
    color: colors.primary,

    fontSize: 19,
    fontWeight: '700',

    marginBottom: 6,
  },

  emergencyDescription: {
    color: colors.text,

    fontSize: 15,
    lineHeight: 22,

    marginBottom: 16,
  },

  emergencyButton: {
    backgroundColor: colors.primary,

    borderRadius: 25,

    paddingVertical: 12,
    paddingHorizontal: 20,

    alignSelf: 'flex-start',

    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },

  emergencyButtonText: {
    color: colors.white,

    fontSize: 16,
    fontWeight: '700',
  },
});