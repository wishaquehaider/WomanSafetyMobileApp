import {color} from '../../constants/Colors';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  main: {
    backgroundColor: color.secoundry,
    flex: 1,
    // paddingHorizontal: 20
  },

  headingParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 40
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
    // maxWidth: 270,
  },

  chatParent: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    // paddingHorizontal: 20,
  },

  chatMain: {
    display: 'flex',
    rowGap: 10,
    paddingBottom: 90,
    paddingHorizontal: 40,
    paddingRight: 80
  },

  inputBox: {
    backgroundColor: '#ffffff',
    position: 'relative',
    borderRadius: 10,
  },

  calenderImg: {
    position: 'absolute',
    right: 35,
    top: 12,
  },

  bottom: {
    paddingTop: 40,
  },

  inputBoxParent: {
    paddingHorizontal: 20
  }
});
