import type { PropsWithChildren } from 'react';

/** SDK 58: o navegador aplica os insets por CSS, sem medições durante a hidratação. */
export function AppSafeAreaProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}

export function AppSafeAreaFrame({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
        boxSizing: 'border-box',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
      }}
    >
      {children}
    </div>
  );
}

export function AppSafeAreaFooter({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)',
      }}
    >
      {children}
    </div>
  );
}
