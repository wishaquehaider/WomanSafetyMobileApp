import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import {styles} from './SingupStyle';
import { color } from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';
const Singup = () => {

  const navigate = useNavigation();

  const onPressAlreadyAccound = () => {
    navigate.navigate('Login')
  }

  const onPressRegister = () => {
    navigate.navigate('Login')
  }

  return (
    <ScrollView style={styles.main}>
      <View style={styles.allMain}>
        <Image source={require('../../assets/Background.png')} />

        <View style={styles.contentMain}>
          <Text style={styles.headingMain}>Register</Text>
          <View style={styles.allInputs}>
            <View style={styles.nameField}>
              <Text style={styles.inputLable}>Full Name</Text>
              <TextInput
              placeholderTextColor={color.secoundry}
                style={styles.inputField}
                placeholder="Enter your name"
              />
            </View>

            <View>
              <Text style={styles.inputLable}>Email</Text>
              <TextInput placeholderTextColor={color.secoundry} style={styles.inputField} placeholder="Enter your email" />
            </View>

            <View>
              <Text style={styles.inputLable}>Password</Text>
              <TextInput placeholderTextColor={color.secoundry} style={styles.inputField} placeholder="Enter your password" />
            </View>
          </View>

          <View style={styles.iconsMain}>
          <TouchableOpacity style={styles.iconParent}>
            <Image source={require('../../assets/google.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconParent}>
            <Image source={require('../../assets/facebook.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconParent}>
            <Image source={require('../../assets/apple.png')} />
          </TouchableOpacity>
          </View>
           
           <View  style={styles.lastParent}>
          <Text onPress={onPressAlreadyAccound} style={styles.lastText}> Already Member? Login</Text>
          <TouchableOpacity onPress={onPressRegister} style={styles.btn}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
          </View>

          </View>

        </View>
    </ScrollView>
  );
};

export default Singup;
