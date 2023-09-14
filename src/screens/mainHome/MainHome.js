import {
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {color} from '../../constants/Colors';
import {styles} from './MainHomeStyle';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const MainHome = () => {
  const navigate = useNavigation();

  const onPressCard = () => {
    navigate.navigate('Xplafe');
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={color.secoundry} />

      <View style={styles.headingParent}>
        <Text style={styles.mainHeading}>Xplafés Around You</Text>
      </View>

      <View style={styles.cardsMain}>
        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.cardParent}>
            <View style={styles.flx}>
              <Image source={require('../../assets/location.png')} />
              <View style={styles.cardContentParent}>
                <Text style={styles.cardHeading}>Jennifer Lydia</Text>
                <Text style={styles.cardText}>Wild West Street, New York</Text>
              </View>
            </View>
            <Image source={require('../../assets/arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.cardParent}>
            <View style={styles.flx}>
              <Image source={require('../../assets/location.png')} />
              <View style={styles.cardContentParent}>
                <Text style={styles.cardHeading}>Maddie </Text>
                <Text style={styles.cardText}>Bell Bottom Street, Madison</Text>
              </View>
            </View>
            <Image source={require('../../assets/arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.cardParent}>
            <View style={styles.flx}>
              <Image source={require('../../assets/location.png')} />
              <View style={styles.cardContentParent}>
                <Text style={styles.cardHeading}>Lawrence</Text>
                <Text style={styles.cardText}>Caramon Street, Penselvenia</Text>
              </View>
            </View>
            <Image source={require('../../assets/arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.cardParent}>
            <View style={styles.flx}>
              <Image source={require('../../assets/location.png')} />
              <View style={styles.cardContentParent}>
                <Text style={styles.cardHeading}>Medona S</Text>
                <Text style={styles.cardText}>Baker’s Street, London</Text>
              </View>
            </View>
            <Image source={require('../../assets/arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.cardParent}>
            <View style={styles.flx}>
              <Image source={require('../../assets/location.png')} />
              <View style={styles.cardContentParent}>
                <Text style={styles.cardHeading}>Christina</Text>
                <Text style={styles.cardText}>
                  Schindler’s Street, New York
                </Text>
              </View>
            </View>
            <Image source={require('../../assets/arrow.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
          <View style={styles.cardParent}>
            <View style={styles.flx}>
              <Image source={require('../../assets/location.png')} />
              <View style={styles.cardContentParent}>
                <Text style={styles.cardHeading}>Emilia Chan</Text>
                <Text style={styles.cardText}>Royalty Street, New York</Text>
              </View>
            </View>
            <Image
              style={styles.arrowIcon}
              source={require('../../assets/arrow.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View></View>
      </View>
    </View>
  );
};

export default MainHome;
