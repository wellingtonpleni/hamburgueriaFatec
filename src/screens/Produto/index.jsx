import React from 'react';
import { View } from 'react-native';

import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { Etiqueta } from '../../components/Etiqueta';
import { Prato } from '../../components/Prato';

import { styles } from './styles';

export function Produto() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Etiqueta />
      <Prato />
      <Rodape 
        titulo="CatuBacon" 
        descricao="Pão da Casa, Molho de Tomate Especial, Hambúrguer, Catupiry (de verdade!) e Bacon crocante."
        preco="34,90"/>
    </View >
  );
}