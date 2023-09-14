import {color} from '../../constants/Colors';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.secoundry,
    paddingHorizontal: 20,
  },
  calender: {},

  calenderParent: {
    height: 400,
    backgroundColor: color.secoundry,
    paddingHorizontal: 20,
  },

  dateStartingParent: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 175,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  startingDate: {
    fontSize: 13,
    fontWeight: '700',
  },

  calenderMain: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10,
  },

  fromText: {
    fontSize: 16,
    fontWeight: '400',
    paddingLeft: 10,
    color: color.third,
    paddingBottom: 5,
  },

  toStyle: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '400',
    paddingRight: 10,
    color: color.third,
    paddingBottom: 5,
  },

  timeText: {
    fontSize: 20,
    fontWeight: '400',
    color: color.third,
    paddingLeft: 5,
    paddingBottom: 10,
  },

  locationParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },

  heading: {
    fontSize: 24,
    flex: 1,
    fontWeight: '400',
    color: color.third,
    textAlign: 'center',
  },

  headingParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },

  messageText: {
    fontSize: 20,
    fontWeight: '400',
    color: color.third,
    paddingVertical: 10,
  },

  messageParent: {
    backgroundColor: 'white',
    height: 375,
    borderRadius: 17,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  textContent: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  btnMain: {
    backgroundColor: color.primary,
    width: 250,
    borderRadius: 5,
    paddingVertical: 12,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
  },

  doneBtn: {
    backgroundColor: color.primary,
    width: 100,
    height: 40,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  doneTextBtn: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },

  cancleTextBtn: {
    fontSize: 14,
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
    paddingVertical: 30,
    backgroundColor: color.secoundry,
    borderRadius: 22,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10
  },

  notificationText: {
    fontSize: 24,
    fontWeight: '700',
    color: color.third,
  },

  okButton: {
    backgroundColor: color.primary,
    width: 55,
    height: 28,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight: 20
  },

  okBtnText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  }
});
