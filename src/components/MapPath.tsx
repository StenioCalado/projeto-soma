import { Path } from 'react-native-svg';

import type { MapPathProps } from './MapPath.types';

export function MapPath(props: MapPathProps) {
  return <Path {...props} />;
}
