import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './SafetyScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {fontPixel} from '../../constants/responiveStyles';
import WomanLogo from '../../assets/womanLogo.svg'

const SafetyScreen = () => {
  const navigate = useNavigation();
  const onPressCard = () => {
    navigate.navigate('safetyDetails');
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.headingLogoParent}>
          <Text style={styles.heading}>Bible of Safety</Text>
          <WomanLogo  style={styles.imgLogo} />
        </View>

        <View style={styles.card}>
          <TouchableOpacity onPress={onPressCard}>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeading}>Safety at Work</Text>
              <Icon size={fontPixel(28)} color={'white'} name="chevron-right" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressCard}>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeading}>Safety at Home</Text>
              <Icon size={fontPixel(28)} color={'white'} name="chevron-right" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressCard}>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeading}>Safety at University</Text>
              <Icon size={fontPixel(28)} color={'white'} name="chevron-right" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressCard}>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeading}>Women Safety Online</Text>
              <Icon size={fontPixel(28)} color={'white'} name="chevron-right" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressCard}>
            <View style={styles.cardContent}>
              <Text style={styles.cardHeading}> Safety on the Streets</Text>
              <Icon size={fontPixel(28)} color={'white'} name="chevron-right" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SafetyScreen;