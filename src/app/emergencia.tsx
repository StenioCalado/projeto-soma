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

export default function EmergenciaScreen() {
  async function ligar(numero: string) {
    try {
      const url = `tel:${numero}`;

      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(
          'Ligação indisponível',
          `Não foi possível iniciar uma ligação para ${numero} neste dispositivo.`
        );
      }
    } catch {
      Alert.alert(
        'Não foi possível abrir o telefone',
        'Tente novamente ou procure o canal diretamente.'
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Voltar */}

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

        {/* Cabeçalho */}

        <View style={styles.headerIcon}>
          <Ionicons
            name="warning-outline"
            size={48}
            color={colors.white}
          />
        </View>

        <Text style={styles.title}>
          Você está em perigo agora?
        </Text>

        <Text style={styles.subtitle}>
          Se existe risco imediato para você ou outra pessoa,
          priorize o atendimento de emergência.
        </Text>

        {/* Emergência 190 */}

        <View style={styles.emergencyCard}>
          <View style={styles.cardIcon}>
            <Ionicons
              name="call"
              size={34}
              color={colors.white}
            />
          </View>

          <Text style={styles.emergencyLabel}>
            EMERGÊNCIA
          </Text>

          <Text style={styles.emergencyNumber}>
            190
          </Text>

          <Text style={styles.emergencyDescription}>
            Polícia Militar
          </Text>

          <Text style={styles.emergencyExplanation}>
            Utilize este canal quando houver perigo imediato,
            agressão em andamento ou risco à integridade física.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.callButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => ligar('190')}
          >
            <Ionicons
              name="call"
              size={24}
              color={colors.primary}
            />

            <Text style={styles.callButtonText}>
              Ligar para 190
            </Text>
          </Pressable>
        </View>

        {/* Aviso */}

        <View style={styles.warningBox}>
          <Ionicons
            name="information-circle-outline"
            size={26}
            color={colors.primary}
          />

          <Text style={styles.warningText}>
            O SOMA não aciona viaturas nem envia pedidos de
            socorro diretamente. O botão acima apenas abre o
            canal oficial de emergência do seu dispositivo.
          </Text>
        </View>

        {/* Outras situações */}

        <Text style={styles.sectionTitle}>
          Não é uma emergência imediata?
        </Text>

        <Text style={styles.sectionDescription}>
          Você também pode buscar orientação ou conhecer outros
          canais de apoio.
        </Text>

        {/* 180 */}

        <Pressable
          style={({ pressed }) => [
            styles.optionCard,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => ligar('180')}
        >
          <View style={styles.optionIcon}>
            <Ionicons
              name="call-outline"
              size={28}
              color={colors.primary}
            />
          </View>

          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>
              Ligue 180
            </Text>

            <Text style={styles.optionDescription}>
              Orientação e atendimento às mulheres.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color={colors.primary}
          />
        </Pressable>

        {/* Denunciar */}

        <Pressable
          style={({ pressed }) => [
            styles.optionCard,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push('/denunciar')}
        >
          <View style={styles.optionIcon}>
            <Ionicons
              name="chatbox-ellipses-outline"
              size={28}
              color={colors.primary}
            />
          </View>

          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>
              Ver canais de denúncia
            </Text>

            <Text style={styles.optionDescription}>
              Conheça outras formas de buscar ajuda.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color={colors.primary}
          />
        </Pressable>

        {/* Rede de apoio */}

        <Pressable
          style={({ pressed }) => [
            styles.optionCard,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push('/rede-apoio')}
        >
          <View style={styles.optionIcon}>
            <Ionicons
              name="people-outline"
              size={28}
              color={colors.primary}
            />
          </View>

          <View style={styles.optionContent}>
            <Text style={styles.optionTitle}>
              Rede de apoio
            </Text>

            <Text style={styles.optionDescription}>
              Encontre serviços de orientação e acolhimento.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={24}
            color={colors.primary}
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

  headerIcon: {
    width: 78,
    height: 78,
    borderRadius: 39,

    backgroundColor: colors.primary,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 22,
  },

  title: {
    color: colors.primary,

    fontSize: 36,
    lineHeight: 43,

    fontWeight: '700',

    marginBottom: 12,
  },

  subtitle: {
    color: colors.text,

    fontSize: 18,
    lineHeight: 27,

    marginBottom: 30,
  },

  emergencyCard: {
    backgroundColor: colors.primary,

    borderRadius: 28,

    paddingHorizontal: 24,
    paddingVertical: 30,

    alignItems: 'center',

    marginBottom: 20,
  },

  cardIcon: {
    width: 64,
    height: 64,

    borderRadius: 32,

    backgroundColor: 'rgba(255, 255, 255, 0.15)',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 18,
  },

  emergencyLabel: {
    color: colors.lightPink,

    fontSize: 14,
    fontWeight: '700',

    letterSpacing: 2,
  },

  emergencyNumber: {
    color: colors.white,

    fontSize: 64,
    lineHeight: 72,

    fontWeight: '800',

    marginTop: 5,
  },

  emergencyDescription: {
    color: colors.white,

    fontSize: 21,
    fontWeight: '700',

    marginBottom: 15,
  },

  emergencyExplanation: {
    color: '#F4EDEF',

    fontSize: 16,
    lineHeight: 23,

    textAlign: 'center',

    marginBottom: 25,
  },

  callButton: {
    width: '100%',
    minHeight: 58,

    backgroundColor: colors.white,

    borderRadius: 30,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 10,
  },

  callButtonText: {
    color: colors.primary,

    fontSize: 18,
    fontWeight: '700',
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [
      {
        scale: 0.98,
      },
    ],
  },

  warningBox: {
    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 20,

    padding: 17,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 11,

    marginBottom: 35,
  },

  warningText: {
    flex: 1,

    color: colors.text,

    fontSize: 14,
    lineHeight: 21,
  },

  sectionTitle: {
    color: colors.primary,

    fontSize: 25,
    fontWeight: '700',

    marginBottom: 8,
  },

  sectionDescription: {
    color: colors.text,

    fontSize: 16,
    lineHeight: 23,

    marginBottom: 20,
  },

  optionCard: {
    minHeight: 88,

    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: '#E3DADC',

    borderRadius: 22,

    padding: 15,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 14,
  },

  optionIcon: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: colors.lightPink,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },

  optionContent: {
    flex: 1,
  },

  optionTitle: {
    color: colors.primary,

    fontSize: 17,
    fontWeight: '700',

    marginBottom: 4,
  },

  optionDescription: {
    color: colors.text,

    fontSize: 14,
    lineHeight: 19,
  },
});