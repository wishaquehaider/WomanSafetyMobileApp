import {color} from '../../constants/Colors';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  main: {
    backgroundColor: color.secoundry,
    flex: 1,
  },

  contentMain: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
  },

  heading: {
    fontSize: 30,
    color: color.third,
    fontWeight: '600',
    textAlign: 'center',
    paddingBottom: 30,
    fontFamily: 'Nunito-Bold'

  },

  contentParent: {
    paddingHorizontal: 20,
  },

  content: {
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  cardHeading: {
    fontSize: 22,
    fontWeight: '400',
    color: color.third,
    fontFamily: 'Nunito-Bold'
  },

  iconParent: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    alignItems: 'center',
    paddingLeft: 25,
    paddingBottom: 10,
  },

  onLineText: {
    fontSize: 20,
    fontWeight: '400',
    color: color.third,
    fontFamily: 'Nunito-Bold'
  },

  chatPerson: {
    fontSize: 12,
    color: color.primary,
    fontWeight: '400',
    fontFamily: 'Nunito-Bold'
  },

  chat: {
    fontSize: 12,
    fontWeight: '400',
    color: color.third,
    fontFamily: 'Nunito-Bold'
  },

  chatParent: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
    paddingBottom: 5,
  },

  onlineParent: {
    display: 'flex',
  },
});
