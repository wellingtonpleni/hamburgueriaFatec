import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  rodape: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  preco: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.brown,
    fontSize: 34
  },
  titulo: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.brown,
    fontSize: 17,
  },
  descricao: {
    fontFamily: theme.fonts.primary400,
    color: theme.colors.gray,
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 32
  }
});