import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {color} from '../../constants/Colors';
import {styles} from './MainHomeStyle';
import {useNavigation} from '@react-navigation/native';
import Location from '../../assets/location.svg';
import Arrow from '../../assets/arrow.svg'

const MainHome = () => {
  const navigate = useNavigation();

  const onPressCard = () => {
    navigate.navigate('XplafeDetails');
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.main}>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={color.secoundry}
          />

          <View style={styles.headingParent}>
            <Text style={styles.mainHeading}>Xplafés Around You</Text>
          </View>

          <View style={styles.cardsMain}>
            <TouchableOpacity onPress={onPressCard}>
              <View style={styles.cardParent}>
                <View style={styles.flx}>
                  <Location/>
                  <View style={styles.cardContentParent}>
                    <Text style={styles.cardHeading}>Jennifer Lydia</Text>
                    <Text style={styles.cardText}>
                      Wild West Street, New York
                    </Text>
                  </View>
                </View>
                <Arrow/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCard}>
              <View style={styles.cardParent}>
                <View style={styles.flx}>
                <Location/>
                  <View style={styles.cardContentParent}>
                    <Text style={styles.cardHeading}>Maddie </Text>
                    <Text style={styles.cardText}>
                      Bell Bottom Street, Madison
                    </Text>
                  </View>
                </View>
                <Arrow/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCard}>
              <View style={styles.cardParent}>
                <View style={styles.flx}>
                  <Location/>
                  <View style={styles.cardContentParent}>
                    <Text style={styles.cardHeading}>Lawrence</Text>
                    <Text style={styles.cardText}>
                      Caramon Street, Penselvenia
                    </Text>
                  </View>
                </View>
                <Arrow/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCard}>
              <View style={styles.cardParent}>
                <View style={styles.flx}>
                  <Location/>
                  <View style={styles.cardContentParent}>
                    <Text style={styles.cardHeading}>Medona S</Text>
                    <Text style={styles.cardText}>Baker’s Street, London</Text>
                  </View>
                </View>
                <Arrow/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCard}>
              <View style={styles.cardParent}>
                <View style={styles.flx}>
                  <Location/>
                  <View style={styles.cardContentParent}>
                    <Text style={styles.cardHeading}>Christina</Text>
                    <Text style={styles.cardText}>
                      Schindler’s Street, New York
                    </Text>
                  </View>
                </View>
                <Arrow/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressCard}>
              <View style={styles.cardParent}>
                <View style={styles.flx}>
                  <Location/>
                  <View style={styles.cardContentParent}>
                    <Text style={styles.cardHeading}>Emilia Chan</Text>
                    <Text style={styles.cardText}>
                      Royalty Street, New York
                    </Text>
                  </View>
                </View>
                <Arrow/>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainHome;