import {StyleSheet} from 'react-native';
import {color} from '../../constants/Colors';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: color.secoundry,
    paddingHorizontal: 20,
  },

  headingParent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },

  Logo: {
    width: 45,
    height: 45,
  },

  heading: {
    fontSize: 30,
    fontWeight: '600',
    color: color.third,
    fontFamily: 'Nunito-Bold'
  },

  cardSection: {
    backgroundColor: color.fifth,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 70,
    display: 'flex',
    rowGap: 20,
    alignItems: 'center',
  },
  text: {
    color: color.third,
    fontFamily: 'Nunito-Regular'
  },
});
