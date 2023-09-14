import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './SafetyScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SafetyScreen = () => {

  const navigate = useNavigation()
  const onPressCard = () => {
      navigate.navigate('safetyDetails')
  }

  return (
    <View style={styles.main}>
      <View style={styles.headingLogoParent}>
        <Text style={styles.heading}>Bible of Safety</Text>
        <Image source={require('../../assets/womanLogo.png')} />
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={onPressCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardHeading}>Safety at Work</Text>
          <Icon size={28} color={'white'} name="chevron-right" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardHeading}>Safety at Home</Text>
          <Icon size={28} color={'white'} name="chevron-right" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardHeading}>Safety at University</Text>
          <Icon size={28} color={'white'} name="chevron-right" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardHeading}>Women Safety Online</Text>
          <Icon size={28} color={'white'} name="chevron-right" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardHeading}> Safety on the Streets</Text>
          <Icon size={28} color={'white'} name="chevron-right" />
        </View>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default SafetyScreen;
