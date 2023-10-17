import {color} from '../../constants/Colors';
import {pixelSizeHorizontal} from '../../constants/responiveStyles';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  main: {
    backgroundColor: color.secoundry,
    flex: 1,
  },

  headingParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 40,
  },

  heading: {
    fontSize: 22,
    fontWeight: '400',
    color: color.third,
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatPerson: {
    fontSize: 12,
    fontWeight: '400',
    color: color.primary,
  },

  chat: {
    fontSize: 12,
    fontWeight: '400',
    color: color.third,
  },

  chatParent: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },

  chatMain: {
    display: 'flex',
    rowGap: 10,
    paddingBottom: 90,
    paddingHorizontal: 40,
    paddingRight: 80,
  },

  inputBox: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingRight: pixelSizeHorizontal(50),
    paddingLeft: pixelSizeHorizontal(10),
    color: color.third,
    lineHeight: 20,
  },

  calenderImg: {
    position: 'absolute',
    right: 35,
    top: 12,
  },

  message: {
    color: color.third,
  },

  bottom: {
    paddingTop: 40,
  },

  inputBoxParent: {
    paddingHorizontal: 20,
    position: 'relative',
    bottom: 10,
  },
});
