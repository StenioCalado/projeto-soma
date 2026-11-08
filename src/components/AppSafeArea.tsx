import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export function AppSafeAreaProvider({ children }: PropsWithChildren) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
}

export function AppSafeAreaFrame({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.frame} edges={['top', 'left', 'right']}>
      {children}
    </SafeAreaView>
  );
}

export function AppSafeAreaFooter({ children }: PropsWithChildren) {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.footer, { paddingBottom: Math.max(bottom, 8) }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: { flex: 1, minHeight: 0 },
  footer: { width: '100%', alignItems: 'center' },
});
