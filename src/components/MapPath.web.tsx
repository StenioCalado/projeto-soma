import type { MapPathProps } from './MapPath.types';

/** SVG do navegador usa clique, sem os responder events exclusivos do React Native. */
export function MapPath({ onPress, ...props }: MapPathProps) {
  return <path {...props} onClick={onPress} />;
}
