import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';
import {styles} from './LoginStyle';
import {color} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native'
export default function Login() {

  const navigation = useNavigation();

  const onPressRegister = () => {
    navigation.navigate('Singup')
  }

    const onPressLogin = () => {
      navigation.navigate('MyTabs')
    }

  return (
    <ScrollView style={styles.scrollMian}>
      <StatusBar  backgroundColor={color.primary} />
    <View style={styles.main}>
      <Image
        source={require('../../assets/Background.png')}
        style={styles.backgroundTheme}
      />
      <View style={styles.contentParent}>
        <Text style={styles.test}>Login</Text>

        <View style={styles.inputParent}>
          <View style={styles.mailParent}>
            <Text style={styles.inputLable}>Email</Text>
            <TextInput
              placeholderTextColor={color.secoundry}
              style={styles.inputField}
              placeholder="Enter your name"
            />
          </View>

          <View style={styles.mailParent}>
            <Text style={styles.inputLable}>Password</Text>
            <TextInput
              placeholderTextColor={color.secoundry}
              style={styles.inputField}
              placeholder="Enter your password"
            />
            <TouchableOpacity>
           <Text style={styles.forgotText}>Forgot Password?</Text>
           </TouchableOpacity>
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

        <View style={styles.lastParent}>
            <Text onPress={onPressRegister} style={styles.lastText}>New Here? Register</Text>
            <TouchableOpacity onPress={onPressLogin} style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>

      </View>
    </View>
    </ScrollView>
  );
}
