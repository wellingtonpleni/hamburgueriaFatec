import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 80,
    left: 24,

    width: 90,
    height: 230,
    overflow: 'hidden',

    backgroundColor: theme.colors.red,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingVertical: 24
  },
  info: {
    marginTop: 17,
    alignItems: 'center'
  },
  texto: {
    fontFamily: theme.fonts.primary400,
    color: theme.colors.white,
    fontSize: 14
  },
  valor: {
    fontFamily: theme.fonts.primary700,
    color: theme.colors.white,
    fontSize: 15
  },
});