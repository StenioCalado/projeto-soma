import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../constants/theme';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Delegacia+da+Mulher+São+Paulo';

const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=Delegacia+da+Mulher+São+Paulo&output=embed';

export default function MapaScreen() {
  function abrirMapa() {
    Linking.openURL(GOOGLE_MAPS_URL);
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
          Mapa
        </Text>

        <Text style={styles.subtitle}>
          Consulte pontos de atendimento e proteção próximos.
        </Text>

        <View style={styles.mapContainer}>
          {Platform.OS === 'web' ? (
            <iframe
              src={GOOGLE_MAPS_EMBED}
              style={{
                width: '100%',
                height: '100%',
                border: 0,
              }}
              loading="lazy"
            />
          ) : (
            <View style={styles.mobileMapPlaceholder}>
              <Ionicons
                name="map-outline"
                size={70}
                color={colors.primary}
              />

              <Text style={styles.mobileMapTitle}>
                Delegacias da Mulher
              </Text>

              <Text style={styles.mobileMapText}>
                Abra o mapa para visualizar unidades próximas.
              </Text>

              <Pressable
                style={styles.openMapButton}
                onPress={abrirMapa}
              >
                <Ionicons
                  name="location-outline"
                  size={22}
                  color={colors.white}
                />

                <Text style={styles.openMapButtonText}>
                  Abrir no mapa
                </Text>
              </Pressable>
            </View>
          )}
        </View>

        <View style={styles.infoBox}>
          <Ionicons
            name="information-circle-outline"
            size={26}
            color={colors.primary}
          />

          <Text style={styles.infoText}>
            Nesta versão do MVP, o mapa é apenas demonstrativo.
            Futuramente, esta área poderá exibir dados territoriais
            agregados de violência doméstica e serviços da rede de apoio.
          </Text>
        </View>

        <Pressable
          style={styles.supportButton}
          onPress={() => router.push('/rede-apoio')}
        >
          <View>
            <Text style={styles.supportTitle}>
              Procurando atendimento?
            </Text>

            <Text style={styles.supportText}>
              Consulte a Rede de Apoio.
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={26}
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
    marginBottom: 28,
  },

  mapContainer: {
    width: '100%',
    height: 410,

    backgroundColor: '#E8E1E3',

    borderRadius: 26,
    overflow: 'hidden',

    marginBottom: 25,
  },

  mobileMapPlaceholder: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 30,
  },

  mobileMapTitle: {
    color: colors.primary,

    fontSize: 24,
    fontWeight: '700',

    marginTop: 15,
    marginBottom: 8,
  },

  mobileMapText: {
    color: colors.text,

    fontSize: 16,
    lineHeight: 23,

    textAlign: 'center',

    marginBottom: 25,
  },

  openMapButton: {
    backgroundColor: colors.primary,

    borderRadius: 28,

    paddingVertical: 14,
    paddingHorizontal: 25,

    flexDirection: 'row',
    alignItems: 'center',

    gap: 8,
  },

  openMapButtonText: {
    color: colors.white,

    fontSize: 16,
    fontWeight: '700',
  },

  infoBox: {
    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 20,

    padding: 17,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 11,

    marginBottom: 24,
  },

  infoText: {
    flex: 1,

    color: colors.text,

    fontSize: 14,
    lineHeight: 21,
  },

  supportButton: {
    minHeight: 90,

    backgroundColor: colors.primary,

    borderRadius: 22,

    paddingHorizontal: 20,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  supportTitle: {
    color: colors.white,

    fontSize: 18,
    fontWeight: '700',

    marginBottom: 4,
  },

  supportText: {
    color: '#EFE4E8',
    fontSize: 14,
  },
});