import { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

import { colors } from '../constants/theme';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={['#72227B', colors.primaryDark]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 0.8 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/logo-soma.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>S O M A</Text>
      </View>

      <View style={styles.loadingContainer}>
        <View style={styles.loadingBackground}>
          <View style={styles.loadingProgress} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 210,
    height: 210,
    marginBottom: 20,
  },

  title: {
    color: colors.textLight,
    fontSize: 38,
    letterSpacing: 14,
    fontWeight: '300',
  },

  loadingContainer: {
    position: 'absolute',
    bottom: 110,
    width: '100%',
    alignItems: 'center',
  },

  loadingBackground: {
    width: '55%',
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    borderRadius: 4,
  },

  loadingProgress: {
    width: '60%',
    height: '100%',
    backgroundColor: colors.white,
    borderRadius: 4,
  },
});