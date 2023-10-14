import {color} from '../../constants/Colors';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../constants/responiveStyles';

const {StyleSheet} = require('react-native');


export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.secoundry,
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  calender: {},

  calenderParent: {
    height: heightPixel(400),
    backgroundColor: color.secoundry,
    paddingHorizontal: pixelSizeHorizontal(20),
  },

  dateStartingParent: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: widthPixel(175),
    borderRadius: 15,
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(15),
  },

  startingDate: {
    fontSize: 13,
    fontWeight: '700',
    color: color.third
  },

  calenderMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // columnGap: 10,
    // width: '100%'
  },

  // firstPortion: {
  //   width: 100
  // },

  // secondPortion: {
  //   width: 100
  // },

  fromText: {
    fontSize: fontPixel(16),
    fontWeight: '400',
    paddingLeft: pixelSizeHorizontal(16),
    color: color.third,
    paddingBottom: pixelSizeVertical(5),
  },

  toStyle: {
    textAlign: 'right',
    fontSize: fontPixel(16),
    fontWeight: '400',
    paddingRight: pixelSizeHorizontal(10),
    color: color.third,
    paddingBottom: pixelSizeVertical(5),
  },

  timeText: {
    fontSize: fontPixel(20),
    fontWeight: '400',
    color: color.third,
    paddingLeft: pixelSizeHorizontal(5),
    paddingBottom: pixelSizeVertical(10),
  },

  locationParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: pixelSizeHorizontal(30),
    paddingVertical: pixelSizeVertical(10),
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },

  heading: {
    fontSize: fontPixel(24),
    flex: 1,
    fontWeight: '400',
    color: color.third,
    textAlign: 'center',
  },

  headingParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: pixelSizeVertical(20),
  },

  messageText: {
    fontSize: fontPixel(20),
    fontWeight: '400',
    color: color.third,
    paddingVertical: pixelSizeVertical(10),
  },

  messageParent: {
    backgroundColor: 'white',
    height: heightPixel(375),
    borderRadius: 17,
    paddingHorizontal: pixelSizeHorizontal(30),
    paddingVertical: pixelSizeVertical(40),
  },

  textContent: {
    fontSize: fontPixel(18),
    fontWeight: '400',
    lineHeight: 24,
    color: color.third
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: pixelSizeVertical(20),
  },
  btnMain: {
    backgroundColor: color.primary,
    width: widthPixel(250),
    borderRadius: 5,
    paddingVertical: pixelSizeVertical(12),
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: fontPixel(24),
    fontWeight: '400',
  },

  doneBtn: {
    backgroundColor: color.primary,
    width: widthPixel(100),
    height: heightPixel(40),
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  doneTextBtn: {
    fontSize: fontPixel(14),
    fontWeight: '700',
    color: '#ffffff',
  },

  cancleTextBtn: {
    fontSize: fontPixel(14),
    fontWeight: '700',
    color: color.third,
  },

  btnParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  notification: {
    paddingVertical: pixelSizeVertical(30),
    backgroundColor: color.secoundry,
    borderRadius: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10
  },

  notificationText: {
    fontSize: fontPixel(24),
    fontWeight: '700',
    color: color.third,
  },

  okButton: {
    backgroundColor: color.primary,
    width: widthPixel(55),
    height: heightPixel(28),
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: 20
  },

  okBtnText: {
    color: '#ffffff',
    fontSize: fontPixel(18),
    fontWeight: '700',
    textAlign: 'center'
  },

  text: {
    color: color.third
  }
});
