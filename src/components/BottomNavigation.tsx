import { Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from './AppText';
import { AppSafeAreaFooter } from './AppSafeArea';

import { colors } from '../constants/theme';
import { useResponsiveLayout } from '../hooks/useResponsiveLayout';

/**
 * Menu inferior, fixo embaixo de todas as telas
 * (exceto a splash e o onboarding).
 *
 * Fica fora da área de rolagem: o conteúdo das telas
 * rola acima dele e nunca fica escondido por baixo.
 */

type Item = {
  rota: '/home' | '/explorar' | '/mapa' | '/denunciar';
  rotulo: string;
  icone: keyof typeof Ionicons.glyphMap;
  iconeAtivo: keyof typeof Ionicons.glyphMap;
  /** Outras rotas em que este item aparece como ativo. */
  tambem?: string[];
};

const ITENS: Item[] = [
  { rota: '/home', rotulo: 'Home', icone: 'home-outline', iconeAtivo: 'home' },
  {
    rota: '/explorar',
    rotulo: 'Explorar',
    icone: 'compass-outline',
    iconeAtivo: 'compass',
    tambem: ['/conteudo/', '/tipos-violencia'],
  },
  { rota: '/mapa', rotulo: 'Mapa', icone: 'map-outline', iconeAtivo: 'map' },
  {
    rota: '/denunciar',
    rotulo: 'Canais',
    icone: 'call-outline',
    iconeAtivo: 'call',
    tambem: ['/rede-apoio', '/emergencia'],
  },
];

const ROTAS_SEM_MENU = ['/', '/onboarding'];

const COR_INATIVA = '#857A82';

export function BottomNavigation() {
  const pathname = usePathname();
  const { isCompactPhone, contentMaxWidth } =
    useResponsiveLayout();

  if (ROTAS_SEM_MENU.includes(pathname)) {
    return null;
  }

  const ativo = (item: Item) =>
    pathname === item.rota ||
    (item.rota === '/home' && ['/mais', '/configuracoes'].includes(pathname)) ||
    (item.tambem ?? []).some((r) => pathname.startsWith(r));

  return (
    <View
      style={styles.shell}
      accessibilityRole="tablist"
      accessibilityLabel="Navegação principal"
    >
      <AppSafeAreaFooter>
        <View style={[styles.bar, { maxWidth: contentMaxWidth }]}>
        {ITENS.map((item) => {
          const selecionado = ativo(item);

          return (
            <Pressable
              key={item.rota}
              style={({ pressed }) => [
                styles.item,
                selecionado && styles.itemAtivo,
                pressed && styles.pressed,
              ]}
              onPress={() => {
                // Mesmo na seção ativa, o toque deve abrir sua página principal.
                if (pathname !== item.rota) router.replace(item.rota);
              }}
              accessibilityRole="tab"
              accessibilityLabel={item.rotulo}
              accessibilityState={{ selected: selecionado }}
              aria-selected={selecionado}
            >
              <Ionicons
                name={selecionado ? item.iconeAtivo : item.icone}
                size={isCompactPhone ? 22 : 25}
                color={selecionado ? colors.primary : COR_INATIVA}
              />
              <Text
                style={[
                  styles.texto,
                  isCompactPhone && styles.textoCompacto,
                  selecionado && styles.textoAtivo,
                ]}
              >
                {item.rotulo}
              </Text>
            </Pressable>
          );
        })}
        </View>
      </AppSafeAreaFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#E6DDE0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 10,
  },

  bar: {
    width: '100%',
    minHeight: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 6,
    paddingBottom: 4,
  },

  item: {
    flex: 1,
    minHeight: 55,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 12,
  },

  itemAtivo: { backgroundColor: '#F5EDF4' },

  pressed: {
    opacity: 0.7,
  },

  texto: {
    color: COR_INATIVA,
    fontSize: 12,
    fontWeight: '500',
  },

  textoCompacto: {
    fontSize: 10,
  },

  textoAtivo: {
    color: colors.primary,
    fontWeight: '700',
  },
});
