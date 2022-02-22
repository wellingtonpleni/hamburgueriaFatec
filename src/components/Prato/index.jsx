import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';
import fotoPrato from '../../assets/catubacon.png';

export function Prato() {
  return (
    <Image
      style={styles.prato}
      source={fotoPrato}
      resizeMode="contain"
    />
  );
}