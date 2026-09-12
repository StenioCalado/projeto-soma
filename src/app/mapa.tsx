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
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Delegacia+da+Mulher+São+Paulo';

const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps?q=Delegacia+da+Mulher+São+Paulo&output=embed';

export default function MapaScreen() {
  const {
    isCompactPhone,
    isPhone,
    isTablet,
    horizontalPadding,
    topPadding,
    contentMaxWidth,
  } = useResponsiveLayout();

  function abrirMapa() {
    Linking.openURL(
      GOOGLE_MAPS_URL
    );
  }

  const mapHeight =
    isCompactPhone
      ? 290
      : isPhone
        ? 360
        : isTablet
          ? 450
          : 500;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: topPadding,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.content,
            {
              maxWidth: contentMaxWidth,
              paddingHorizontal:
                horizontalPadding,
            },
          ]}
        >
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={26}
              color={colors.primary}
            />

            <Text style={styles.backText}>
              Voltar
            </Text>
          </Pressable>

          <Text
            style={[
              styles.title,
              {
                fontSize:
                  isCompactPhone
                    ? 30
                    : 36,
              },
            ]}
          >
            Mapa
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                fontSize:
                  isCompactPhone
                    ? 15
                    : 18,
              },
            ]}
          >
            Consulte pontos de atendimento
            e proteção.
          </Text>

          <View
            style={[
              styles.mapContainer,
              {
                height: mapHeight,
              },
            ]}
          >
            {Platform.OS === 'web' ? (
              <iframe
                title="Mapa demonstrativo do SOMA"
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
                  size={
                    isCompactPhone
                      ? 55
                      : 68
                  }
                  color={colors.primary}
                />

                <Text
                  style={[
                    styles.mobileMapTitle,
                    {
                      fontSize:
                        isCompactPhone
                          ? 20
                          : 24,
                    },
                  ]}
                >
                  Delegacias da Mulher
                </Text>

                <Text style={styles.mobileMapText}>
                  Abra o mapa para visualizar
                  unidades e locais de atendimento.
                </Text>

                <Pressable
                  style={styles.openMapButton}
                  onPress={abrirMapa}
                >
                  <Ionicons
                    name="location-outline"
                    size={20}
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
              size={25}
              color={colors.primary}
            />

            <Text style={styles.infoText}>
              Nesta versão do MVP, o mapa é
              demonstrativo. Futuramente esta
              área poderá exibir dados territoriais
              agregados de violência doméstica
              e serviços da rede de apoio.
            </Text>
          </View>

          <Pressable
            style={styles.supportButton}
            onPress={() =>
              router.push('/rede-apoio')
            }
          >
            <View style={styles.supportContent}>
              <Text style={styles.supportTitle}>
                Procurando atendimento?
              </Text>

              <Text style={styles.supportText}>
                Consulte a Rede de Apoio.
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color={colors.white}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor:
      colors.background,
  },

  scrollContent: {
    alignItems: 'center',

    paddingBottom: 60,
  },

  content: {
    width: '100%',
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',

    alignSelf: 'flex-start',

    marginBottom: 28,
  },

  backText: {
    color: colors.primary,

    fontSize: 16,
    fontWeight: '600',
  },

  title: {
    color: colors.primary,

    fontWeight: '700',

    marginBottom: 10,
  },

  subtitle: {
    color: colors.text,

    lineHeight: 26,

    marginBottom: 24,
  },

  mapContainer: {
    width: '100%',

    backgroundColor: '#E8E1E3',

    borderRadius: 24,

    overflow: 'hidden',

    marginBottom: 22,
  },

  mobileMapPlaceholder: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 25,
  },

  mobileMapTitle: {
    color: colors.primary,

    fontWeight: '700',

    marginTop: 13,
    marginBottom: 7,

    textAlign: 'center',
  },

  mobileMapText: {
    color: colors.text,

    fontSize: 14,
    lineHeight: 21,

    textAlign: 'center',

    maxWidth: 400,

    marginBottom: 21,
  },

  openMapButton: {
    minHeight: 50,

    backgroundColor: colors.primary,

    borderRadius: 25,

    paddingHorizontal: 22,

    flexDirection: 'row',
    alignItems: 'center',

    gap: 7,
  },

  openMapButtonText: {
    color: colors.white,

    fontSize: 15,
    fontWeight: '700',
  },

  infoBox: {
    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 19,

    padding: 16,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 10,

    marginBottom: 21,
  },

  infoText: {
    flex: 1,

    color: colors.text,

    fontSize: 13,
    lineHeight: 20,
  },

  supportButton: {
    minHeight: 85,

    backgroundColor: colors.primary,

    borderRadius: 21,

    paddingHorizontal: 19,
    paddingVertical: 15,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  supportContent: {
    flex: 1,

    paddingRight: 10,
  },

  supportTitle: {
    color: colors.white,

    fontSize: 17,
    fontWeight: '700',

    marginBottom: 3,
  },

  supportText: {
    color: '#EFE4E8',

    fontSize: 13,
  },
});