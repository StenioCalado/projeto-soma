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

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}

        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo-soma.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.logoText}>
            S O M A
          </Text>
        </View>

        {/* Saudação */}

        <Text style={styles.welcomeTitle}>
          Olá, seja bem-vinda!
        </Text>

        <Text style={styles.welcomeSubtitle}>
          Você não está sozinha. Estamos aqui para te apoiar.
        </Text>

        {/* Destaque */}

        <Pressable
          style={({ pressed }) => [
            styles.heroCard,
            pressed && styles.heroPressed,
          ]}
          onPress={() => router.push('/tipos-violencia')}
        >
          <View style={styles.heroDecoration}>
            <Image
              source={require('../../assets/images/logo-soma.png')}
              style={styles.heroLogo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.heroText}>
            Reconheça os{'\n'}
            sinais de{'\n'}
            violência
          </Text>

          <View style={styles.heroArrow}>
            <Ionicons
              name="chevron-forward"
              size={54}
              color={colors.background}
            />
          </View>
        </Pressable>

        {/* Atalhos */}

        <View style={styles.grid}>
          <HomeShortcutCard
            title="Tipos de Violência"
            icon="hand-left-outline"
            onPress={() => router.push('/tipos-violencia')}
          />

          <HomeShortcutCard
            title="Como denunciar"
            icon="call-outline"
            onPress={() => router.push('/denunciar')}
          />

          <HomeShortcutCard
            title="Mapa de calor"
            icon="location-outline"
            onPress={() => router.push('/mapa')}
          />

          <HomeShortcutCard
            title="Rede de Apoio"
            icon="people-outline"
            onPress={() => router.push('/rede-apoio')}
          />

          <HomeShortcutCard
            title="Emergência"
            icon="warning-outline"
            variant="emergency"
            onPress={() => router.push('/emergencia')}
          />

          <HomeShortcutCard
            title="Mais"
            icon="ellipsis-horizontal"
            onPress={() => router.push('/mais')}
          />
        </View>
      </ScrollView>

      {/* Navegação inferior */}

      <View style={styles.bottomNavigation}>
        <Pressable style={styles.navItem}>
          <Ionicons
            name="home"
            size={34}
            color={colors.primary}
          />

          <Text style={styles.navTextActive}>
            Home
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push('/explorar')}
        >
          <Ionicons
            name="search-outline"
            size={34}
            color={colors.primary}
          />

          <Text style={styles.navText}>
            Explorar
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push('/mapa')}
        >
          <Ionicons
            name="location"
            size={34}
            color={colors.primary}
          />

          <Text style={styles.navText}>
            Mapa
          </Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push('/denunciar')}
        >
          <Ionicons
            name="chatbox-ellipses-outline"
            size={34}
            color={colors.primary}
          />

          <Text style={styles.navText}>
            Canais
          </Text>
        </Pressable>
      </View>
    </View>
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
    paddingHorizontal: 26,
    paddingTop: 44,
    paddingBottom: 130,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 42,
  },

  logo: {
    width: 55,
    height: 55,
  },

  logoText: {
    color: colors.primary,
    fontSize: 22,
    letterSpacing: 7,
    marginLeft: 12,
  },

  welcomeTitle: {
    color: colors.primary,

    fontSize: 35,
    lineHeight: 42,

    fontWeight: '700',

    marginBottom: 8,
  },

  welcomeSubtitle: {
    color: colors.text,

    fontSize: 20,
    lineHeight: 29,

    maxWidth: 360,

    marginBottom: 32,
  },

  heroCard: {
    height: 245,

    backgroundColor: colors.primary,

    borderRadius: 24,

    overflow: 'hidden',

    padding: 24,

    justifyContent: 'center',

    marginBottom: 42,
  },

  heroPressed: {
    opacity: 0.9,
  },

  heroDecoration: {
    position: 'absolute',

    left: -70,
    top: -20,

    opacity: 0.28,
  },

  heroLogo: {
    width: 220,
    height: 220,
  },

  heroText: {
    color: colors.background,

    fontSize: 39,
    lineHeight: 48,

    fontWeight: '700',

    zIndex: 2,
  },

  heroArrow: {
    position: 'absolute',

    right: 25,
    bottom: 25,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    justifyContent: 'space-between',

    rowGap: 25,
  },

  bottomNavigation: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,

    minHeight: 95,

    backgroundColor: colors.background,

    borderTopWidth: 1,
    borderTopColor: '#CFC8C5',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    paddingBottom: 8,
    paddingTop: 10,
  },

  navItem: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  navText: {
    color: colors.primary,

    fontSize: 11,

    fontWeight: '600',

    marginTop: 4,

    textAlign: 'center',
  },

  navTextActive: {
    color: colors.primary,

    fontSize: 11,

    fontWeight: '800',

    marginTop: 4,

    textAlign: 'center',
  },
});