import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './ProfileStyle';
import Icon from 'react-native-vector-icons/Feather'
import { color } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {

  const navigate =  useNavigation();

  const onPressLogout = () =>{

    navigate.navigate('Login')
  }


  return (
    <View style={styles.main}>
      <View style={styles.profileParent}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.circleProfile}>
            <Image style={styles.profileImage} source={require('../../assets/babyGirl.png')} />
            <View style={styles.editParent}>
                <Icon color={color.primary} size={24} name='edit-2' />
            </View>
        </View>
      </View>

      <View style={styles.cardParent}>

        <View>
          <Text style={styles.nameStyle}>Name</Text>
          <View style={styles.card}>
            <Text style={styles.cardUserName}>Marie Antoinette</Text>
          </View>
        </View>
        
        <View>
          <Text style={styles.nameStyle}>Email</Text>
          <View style={styles.card}>
            <Text style={styles.cardUserName}>marieantoinette@gmail.com</Text>
          </View>
        </View>
     
      </View>
      <TouchableOpacity onPress={onPressLogout}  style={styles.btn}>
        <Text style={styles.btnText}>Log Out</Text>
      </TouchableOpacity>


    </View>
  );
};

export default Profile;
