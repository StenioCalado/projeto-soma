import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useResponsiveLayout() {
  const { width, height, fontScale } =
    useWindowDimensions();

  const insets = useSafeAreaInsets();

  const isUltraCompact = width < 350;
  const isCompactPhone = width < 390;

  const isPhone = width < 768;

  const isTablet =
    width >= 768 && width < 1180;

  const isDesktop =
    width >= 1180;

  const isShortScreen =
    height < 740;

  const horizontalPadding =
    isUltraCompact
      ? 14
      : isCompactPhone
        ? 16
        : isPhone
          ? 22
          : isTablet
            ? 30
            : 36;

  const topPadding =
    isCompactPhone
      ? 28
      : isPhone
        ? 38
        : 46;

  const contentMaxWidth =
    isPhone
      ? undefined
      : isTablet
        ? 760
        : 900;

  return {
    width,
    height,
    fontScale,

    isUltraCompact,
    isCompactPhone,
    isPhone,
    isTablet,
    isDesktop,
    isShortScreen,

    horizontalPadding,
    topPadding,
    contentMaxWidth,

    safeTop: insets.top,
    safeBottom: insets.bottom,
    safeLeft: insets.left,
    safeRight: insets.right,
  };
}