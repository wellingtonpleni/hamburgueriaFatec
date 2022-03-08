import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { MotiView } from 'moti'

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Cabecalho() {
  return (
    <MotiView 
      from={{
        opacity: 0,
        scale: 2.5
      }}
      animate={{
        opacity: 1,
        scale: 1
      }}
      transition={{
        type: 'timing',
        duration: 3000
      }}
      /*No type da transition, podemos informar:
      timing: o tempo para realizar a movimentação
      spring: cria um movimento oscilatório parecido com uma mola
      decay: o movimento começa com uma certa velocidade que diminui até parar
      */
    
    style={styles.container}>
      <Feather
        name="arrow-left"
        color={theme.colors.brown}
        size={32}
      />

      <View>
        <Text style={styles.titulo}>
          Fatec
        </Text>

        <Text style={styles.subtitulo}>
          Hamburgueria
        </Text>
      </View>
    </MotiView>
  );
}