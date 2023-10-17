import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {color} from '../../constants/Colors';
import WomanLogo from '../../assets/womanLogo.svg';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={color.primary} />
      <WomanLogo style={{...styles.Image, fill: 'white'}} />
      <Text style={styles.text}>Woman's Sefety</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primary,
  },
  Image: {
    width: 165,
    height: 165,
    marginBottom: 20,
    color: 'white',
  },

  text: {
    fontSize: 35,
    fontWeight: '800',
    color: 'white',
  },
});

export default LoadingScreen;
