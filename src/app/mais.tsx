import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../constants/theme';

type MenuItemProps = {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

function MenuItem({
  title,
  description,
  icon,
  onPress,
}: MenuItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.menuItem,
        pressed && styles.menuItemPressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.menuIcon}>
        <Ionicons
          name={icon}
          size={28}
          color={colors.primary}
        />
      </View>

      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>
          {title}
        </Text>

        <Text style={styles.menuDescription}>
          {description}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={24}
        color={colors.primary}
      />
    </Pressable>
  );
}

export default function MaisScreen() {
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

        {/* Título */}

        <Text style={styles.title}>
          Mais
        </Text>

        <Text style={styles.subtitle}>
          Informações e recursos que podem ajudar você
          a utilizar o SOMA com mais segurança.
        </Text>

        {/* Menu */}

        <View style={styles.menu}>
          <MenuItem
            title="Segurança digital"
            description="Cuidados ao buscar ajuda usando seu dispositivo."
            icon="lock-closed-outline"
            onPress={() =>
              router.push('/conteudo/seguranca-digital')
            }
          />

          <MenuItem
            title="Quero ajudar alguém"
            description="Orientações para apoiar uma pessoa em situação de violência."
            icon="people-outline"
            onPress={() =>
              router.push('/conteudo/ajudar-outra-pessoa')
            }
          />

          <MenuItem
            title="Tipos de violência"
            description="Conheça sinais e diferentes formas de violência."
            icon="hand-left-outline"
            onPress={() =>
              router.push('/tipos-violencia')
            }
          />

          <MenuItem
            title="Rede de apoio"
            description="Encontre serviços de orientação, acolhimento e proteção."
            icon="heart-outline"
            onPress={() =>
              router.push('/rede-apoio')
            }
          />
        </View>

        {/* Sobre */}

        <Text style={styles.sectionTitle}>
          Sobre o SOMA
        </Text>

        <View style={styles.aboutCard}>
          <View style={styles.aboutHeader}>
            <View style={styles.aboutIcon}>
              <Ionicons
                name="flower-outline"
                size={30}
                color={colors.primary}
              />
            </View>

            <View>
              <Text style={styles.aboutName}>
                Projeto SOMA
              </Text>

              <Text style={styles.aboutMeaning}>
                Segurança • Orientação • Monitoramento • Apoio
              </Text>
            </View>
          </View>

          <Text style={styles.aboutText}>
            O SOMA é um projeto acadêmico criado para facilitar
            o acesso a informações e canais oficiais de apoio
            para mulheres em situação de violência doméstica.
          </Text>

          <Text style={styles.aboutText}>
            A plataforma busca tornar esse processo mais simples,
            discreto e acessível, ajudando a identificar
            necessidades e encontrar o caminho adequado para
            buscar ajuda.
          </Text>
        </View>

        {/* Privacidade */}

        <Text style={styles.sectionTitle}>
          Privacidade e segurança
        </Text>

        <View style={styles.privacyCard}>
          <Ionicons
            name="shield-checkmark-outline"
            size={34}
            color={colors.primary}
          />

          <View style={styles.privacyContent}>
            <Text style={styles.privacyTitle}>
              Seus dados importam
            </Text>

            <Text style={styles.privacyText}>
              O SOMA não é um órgão policial e não recebe
              denúncias diretamente. Os canais apresentados
              direcionam você para serviços oficiais.
            </Text>

            <Text style={styles.privacyText}>
              O projeto também foi pensado para reduzir o
              armazenamento de informações sensíveis.
            </Text>
          </View>
        </View>

        {/* Aviso acadêmico */}

        <View style={styles.prototypeBox}>
          <Ionicons
            name="information-circle-outline"
            size={25}
            color={colors.primary}
          />

          <Text style={styles.prototypeText}>
            Esta é uma versão de demonstração do Projeto SOMA.
            Alguns serviços e informações apresentados no MVP
            poderão utilizar dados simulados.
          </Text>
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
    marginBottom: 30,
  },

  menu: {
    gap: 14,
    marginBottom: 38,
  },

  menuItem: {
    minHeight: 100,

    backgroundColor: colors.white,

    borderWidth: 1,
    borderColor: '#E5DDDF',

    borderRadius: 22,

    padding: 15,

    flexDirection: 'row',
    alignItems: 'center',
  },

  menuItemPressed: {
    opacity: 0.7,
    transform: [
      {
        scale: 0.985,
      },
    ],
  },

  menuIcon: {
    width: 60,
    height: 60,

    borderRadius: 30,

    backgroundColor: colors.lightPink,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 14,
  },

  menuContent: {
    flex: 1,
  },

  menuTitle: {
    color: colors.primary,

    fontSize: 18,
    fontWeight: '700',

    marginBottom: 4,
  },

  menuDescription: {
    color: colors.text,

    fontSize: 14,
    lineHeight: 20,
  },

  sectionTitle: {
    color: colors.primary,

    fontSize: 24,
    fontWeight: '700',

    marginBottom: 15,
  },

  aboutCard: {
    backgroundColor: '#E8C8CA',

    borderRadius: 24,

    padding: 20,

    marginBottom: 35,
  },

  aboutHeader: {
    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 18,
  },

  aboutIcon: {
    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#F1DCDE',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 13,
  },

  aboutName: {
    color: colors.primary,

    fontSize: 21,
    fontWeight: '700',
  },

  aboutMeaning: {
    color: colors.text,

    fontSize: 12,
    lineHeight: 18,

    marginTop: 3,
  },

  aboutText: {
    color: colors.text,

    fontSize: 16,
    lineHeight: 24,

    marginBottom: 12,
  },

  privacyCard: {
    backgroundColor: colors.white,

    borderWidth: 1.5,
    borderColor: colors.pink,

    borderRadius: 22,

    padding: 19,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 14,

    marginBottom: 25,
  },

  privacyContent: {
    flex: 1,
  },

  privacyTitle: {
    color: colors.primary,

    fontSize: 18,
    fontWeight: '700',

    marginBottom: 7,
  },

  privacyText: {
    color: colors.text,

    fontSize: 14,
    lineHeight: 21,

    marginBottom: 9,
  },

  prototypeBox: {
    backgroundColor: '#F0E7EF',

    borderRadius: 20,

    padding: 17,

    flexDirection: 'row',
    alignItems: 'flex-start',

    gap: 11,
  },

  prototypeText: {
    flex: 1,

    color: colors.text,

    fontSize: 14,
    lineHeight: 21,
  },
});