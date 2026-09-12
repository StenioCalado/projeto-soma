import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { HomeShortcutCard } from '../components/HomeShortcutCard';
import { colors } from '../constants/theme';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';

export default function HomeScreen() {
  const {
    isCompactPhone,
    isPhone,
    isDesktop,
    isShortScreen,
    horizontalPadding,
    topPadding,
    contentMaxWidth,
    safeBottom,
  } = useResponsiveLayout();

  const logoSize = isCompactPhone
    ? 50
    : isPhone
      ? 60
      : 65;

  const welcomeTitleSize =
    isCompactPhone
      ? 28
      : 34;

  const welcomeSubtitleSize =
    isCompactPhone
      ? 15
      : 18;

  const heroMinHeight =
    isCompactPhone || isShortScreen
      ? 175
      : isPhone
        ? 215
        : 225;

  const heroTitleSize =
    isCompactPhone
      ? 27
      : isPhone
        ? 32
        : 34;

  const heroPadding =
    isCompactPhone
      ? 18
      : 25;

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.scrollContent,
          {
            paddingTop: topPadding,
            paddingBottom: 110 + safeBottom,
          },
        ]}
        showsVerticalScrollIndicator={false}
        bounces
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
          {/* Logo */}

          <View
            style={[
              styles.logoContainer,

              {
                marginBottom:
                  isCompactPhone
                    ? 24
                    : 36,
              },
            ]}
          >
            <Image
              source={require(
                '../../assets/images/logo-soma.png'
              )}
              style={{
                width: logoSize,
                height: logoSize,
              }}
              resizeMode="contain"
            />

            <Text
              style={[
                styles.logoText,

                {
                  fontSize:
                    isCompactPhone
                      ? 21
                      : 25,

                  letterSpacing:
                    isCompactPhone
                      ? 5
                      : 7,
                },
              ]}
            >
              SOMA
            </Text>
          </View>

          {/* Boas-vindas */}

          <Text
            style={[
              styles.welcomeTitle,

              {
                fontSize:
                  welcomeTitleSize,

                lineHeight:
                  welcomeTitleSize + 7,
              },
            ]}
          >
            Olá, seja bem-vinda!
          </Text>

          <Text
            style={[
              styles.welcomeSubtitle,

              {
                fontSize:
                  welcomeSubtitleSize,

                lineHeight:
                  welcomeSubtitleSize + 7,

                marginBottom:
                  isCompactPhone
                    ? 20
                    : 28,
              },
            ]}
          >
            Você não está sozinha.
            Estamos aqui para te apoiar.
          </Text>

          {/* Destaque */}

          <Pressable
            style={({ pressed }) => [
              styles.heroCard,

              {
                minHeight:
                  heroMinHeight,

                padding:
                  heroPadding,

                marginBottom:
                  isCompactPhone
                    ? 24
                    : 32,
              },

              pressed &&
                styles.heroPressed,
            ]}
            onPress={() =>
              router.push(
                '/tipos-violencia'
              )
            }
          >
            <View style={styles.heroContent}>
              <Text
                style={[
                  styles.heroText,

                  {
                    fontSize:
                      heroTitleSize,

                    lineHeight:
                      heroTitleSize + 6,
                  },
                ]}
              >
                Reconheça os sinais de violência
              </Text>

              <Text
                style={[
                  styles.heroDescription,

                  isCompactPhone && {
                    fontSize: 13,
                    lineHeight: 19,
                  },
                ]}
              >
                Informação pode ajudar você
                a identificar situações de
                violência e buscar apoio.
              </Text>

              <View style={styles.heroButton}>
                <Text style={styles.heroButtonText}>
                  Saiba mais
                </Text>

                <Ionicons
                  name="arrow-forward"
                  size={19}
                  color={colors.primary}
                />
              </View>
            </View>

            <View
              style={styles.heroDecorationOne}
            />

            <View
              style={styles.heroDecorationTwo}
            />

            <Ionicons
              name="heart-outline"
              size={
                isCompactPhone
                  ? 70
                  : 95
              }
              color="rgba(255,255,255,0.12)"
              style={styles.heroIcon}
            />
          </Pressable>

          {/* Atalhos */}

          <View
            style={[
              styles.shortcutsArea,

              isDesktop && {
                maxWidth: 760,
              },
            ]}
          >
            <Text
              style={[
                styles.sectionTitle,

                {
                  fontSize:
                    isCompactPhone
                      ? 21
                      : 24,
                },
              ]}
            >
              Como podemos ajudar?
            </Text>

            <View style={styles.grid}>
              <HomeShortcutCard
                title="Tipos de Violência"
                icon="hand-left-outline"
                onPress={() =>
                  router.push(
                    '/tipos-violencia'
                  )
                }
              />

              <HomeShortcutCard
                title="Como denunciar"
                icon="call-outline"
                onPress={() =>
                  router.push(
                    '/denunciar'
                  )
                }
              />

              <HomeShortcutCard
                title="Mapa de calor"
                icon="location-outline"
                onPress={() =>
                  router.push('/mapa')
                }
              />

              <HomeShortcutCard
                title="Rede de Apoio"
                icon="people-outline"
                onPress={() =>
                  router.push(
                    '/rede-apoio'
                  )
                }
              />

              <HomeShortcutCard
                title="Emergência"
                icon="warning-outline"
                variant="emergency"
                onPress={() =>
                  router.push(
                    '/emergencia'
                  )
                }
              />

              <HomeShortcutCard
                title="Mais"
                icon="ellipsis-horizontal-outline"
                onPress={() =>
                  router.push('/mais')
                }
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Menu inferior */}

      <View style={[styles.bottomNavigationShell,
    {
      paddingBottom: Math.max(safeBottom, 8),
    },
  ]}>
        <View
          style={[
            styles.bottomNavigation,

            {
              maxWidth:
                contentMaxWidth,
            },
          ]}
        >
          <NavigationItem
            label="Home"
            icon="home"
            active
            compact={isCompactPhone}
            onPress={() =>
              router.replace('/home')
            }
          />

          <NavigationItem
            label="Explorar"
            icon="compass-outline"
            compact={isCompactPhone}
            onPress={() =>
              router.push('/explorar')
            }
          />

          <NavigationItem
            label="Mapa"
            icon="map-outline"
            compact={isCompactPhone}
            onPress={() =>
              router.push('/mapa')
            }
          />

          <NavigationItem
            label="Canais"
            icon="call-outline"
            compact={isCompactPhone}
            onPress={() =>
              router.push('/denunciar')
            }
          />
        </View>
      </View>
    </View>
  );
}

type NavigationItemProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  active?: boolean;
  compact?: boolean;
  onPress: () => void;
};

function NavigationItem({
  label,
  icon,
  active = false,
  compact = false,
  onPress,
}: NavigationItemProps) {
  return (
    <Pressable
      style={styles.navItem}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={
          compact
            ? 22
            : 25
        }
        color={
          active
            ? colors.primary
            : '#857A82'
        }
      />

      <Text
        style={[
          styles.navText,

          compact && {
            fontSize: 10,
          },

          active &&
            styles.navTextActive,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    alignItems: 'center',
  },

  content: {
    width: '100%',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoText: {
    color: colors.primary,

    fontWeight: '700',

    marginLeft: 9,
  },

  welcomeTitle: {
    color: colors.primary,

    fontWeight: '700',

    marginBottom: 6,
  },

  welcomeSubtitle: {
    color: colors.text,

    maxWidth: 420,
  },

  heroCard: {
    width: '100%',

    backgroundColor:
      colors.primary,

    borderRadius: 26,

    justifyContent: 'center',

    overflow: 'hidden',
  },

  heroPressed: {
    opacity: 0.9,
  },

  heroContent: {
    zIndex: 3,

    maxWidth: 500,
  },

  heroText: {
    color: colors.background,

    fontWeight: '700',

    marginBottom: 9,

    maxWidth: 450,
  },

  heroDescription: {
    color: '#F2E8ED',

    fontSize: 15,
    lineHeight: 21,

    marginBottom: 17,

    maxWidth: 400,
  },

  heroButton: {
    alignSelf: 'flex-start',

    backgroundColor:
      colors.background,

    paddingVertical: 9,
    paddingHorizontal: 15,

    borderRadius: 22,

    flexDirection: 'row',
    alignItems: 'center',

    gap: 6,
  },

  heroButtonText: {
    color: colors.primary,

    fontSize: 14,
    fontWeight: '700',
  },

  heroDecorationOne: {
    position: 'absolute',

    width: 180,
    height: 180,

    borderRadius: 90,

    backgroundColor:
      'rgba(207,135,158,0.25)',

    right: -45,
    top: -55,
  },

  heroDecorationTwo: {
    position: 'absolute',

    width: 135,
    height: 135,

    borderRadius: 68,

    backgroundColor:
      'rgba(187,168,204,0.15)',

    right: 5,
    bottom: -50,
  },

  heroIcon: {
    position: 'absolute',

    right: 20,
    bottom: 18,
  },

  shortcutsArea: {
    width: '100%',
    alignSelf: 'center',
  },

  sectionTitle: {
    color: colors.primary,

    fontWeight: '700',

    marginBottom: 17,
  },

  grid: {
    width: '100%',

    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',

    rowGap: 14,
  },

  bottomNavigationShell: {
    position: 'absolute',

    left: 0,
    right: 0,
    bottom: 0,

    alignItems: 'center',

    backgroundColor:
      colors.white,

    borderTopWidth: 1,
    borderTopColor: '#E6DDE0',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: -2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 10,
  },

  bottomNavigation: {
    width: '100%',

    minHeight: 82,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    paddingTop: 8,
    paddingBottom: 8,
  },

  navItem: {
    flex: 1,

    minHeight: 55,

    alignItems: 'center',
    justifyContent: 'center',

    gap: 4,
  },

  navText: {
    color: '#857A82',

    fontSize: 12,
    fontWeight: '500',
  },

  navTextActive: {
    color: colors.primary,

    fontWeight: '700',
  },
});