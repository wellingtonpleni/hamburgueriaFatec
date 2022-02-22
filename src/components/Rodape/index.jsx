import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Botao } from '../Botao';

export function Rodape(props) {
  return (
    <View>
      <Text style={styles.titulo}>
        {props.titulo}
      </Text>

      <Text style={styles.descricao}>
      {props.descricao}
      </Text>

      <View style={styles.rodape}>
        <Text style={styles.preco}>
          R$ {props.preco}
        </Text>

        <Botao />
      </View>
    </View>
  );
}