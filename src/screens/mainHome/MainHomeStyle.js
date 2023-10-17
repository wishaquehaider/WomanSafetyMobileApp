import {StyleSheet} from 'react-native';
import {color} from '../../constants/Colors';
import {fontPixel, pixelSizeHorizontal} from '../../constants/responiveStyles';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: color.secoundry,
    flex: 1,
    rowGap: 40,
  },

  headingParent: {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  mainHeading: {
    fontSize: fontPixel(33),
    fontWeight: '600',
    textAlign: 'center',
    maxWidth: 250,
    color: color.third,
    fontFamily: 'Nunito-Bold'
  },

  cardParent: {
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 12,
    display: 'flex',
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },

  flx: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },

  cardsMain: {
    width: '100%',
    paddingHorizontal: pixelSizeHorizontal(30),
    display: 'flex',
    rowGap: 15,
  },

  cardHeading: {
    fontSize: fontPixel(24),
    color: color.primary,
    fontWeight: '600',
    fontFamily: 'Nunito-Bold'
  },

  cardText: {
    fontSize: fontPixel(14),
    fontWeight: '400',
    color: color.third,
    fontFamily: 'Nunito-Bold'
  },

  cardContentParent: {
    paddingVertical: 10,
  },

  icon: {
    color: 'red',
    fontSize: 22,
  },
});
