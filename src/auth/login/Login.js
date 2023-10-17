import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useContext} from 'react';
import {styles} from './LoginStyle';
import {color} from '../../constants/Colors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {DataContext} from '../../screens/contextComp/ContextComp';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SvgImage from '../../assets/google.svg';
import FacebookSvg from '../../assets/facebook.svg';

export default function Login() {
  const [userLoginInfo, setUserLoginInfo] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [fromFieldErr, setFormFieldErr] = useState({
    email: null,
    password: null,
  });
  const navigate = useNavigation();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = await AsyncStorage.setItem(
        'GmailData',
        JSON.stringify(userInfo),
      );
      setUserLoginInfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }

    navigate.navigate('MyTabs');
  };

  const onPressRegister = () => {
    navigate.navigate('Singup');
  };

  async function onFacebookButtonPress() {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    return auth().signInWithCredential(facebookCredential);
  }

  const onHandleChange = (nameField, userText) => {
    setFormData({...formData, [nameField]: userText});
  };

  const handleFieldFocus = fieldName => {
    setFormFieldErr({...fromFieldErr, [fieldName]: null});
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('password is required')
      .min(8, 'password must be atleast 8 charatcters'),
  });

  const {currentUserDetails} = useContext(DataContext);

  const onPressLogin = async () => {
    try {
      await validationSchema.validate(formData, {abortEarly: false});
      postData();
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      // Update the state with validation errors
      setFormFieldErr(validationErrors);
    }
  };

  const postData = async () => {
    try {
      const responce = await fetch(
        'https://woman-safety-server-crup.vercel.app/api/login',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            // 'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        },
      );

      const userResponce = await responce.json();

      if (responce.ok == false) {
        Toast.error(userResponce.message);
      }

      if (responce.ok) {
        const token = userResponce.token;

        await AsyncStorage.setItem(
          'userData',
          JSON.stringify(userResponce.data.isUserPresent),
        );
        Toast.success(userResponce.message);

        try {
          await AsyncStorage.setItem('myToken', token);
        } catch (error) {}

        setUserLoginInfo(userResponce.message);

        navigate.navigate('MyTabs');
      }
    } catch (err) {}
  };

  const onPressForgot = () => {
    navigate.navigate('ForgotPassword');
  };

  return (
    <ScrollView style={styles.scrollMian}>
      <>
        <StatusBar backgroundColor={color.primary} />
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
                  onChangeText={text => onHandleChange('email', text)}
                  onFocus={() => handleFieldFocus('email')}
                  placeholderTextColor={color.secoundry}
                  style={styles.inputField}
                  placeholder="Enter your name"
                />
                {fromFieldErr.email && (
                  <Text style={{color: 'white'}}>{fromFieldErr.email}</Text>
                )}
              </View>

              <View style={styles.mailParent}>
                <Text style={styles.inputLable}>Password</Text>
                <TextInput
                  onChangeText={text => onHandleChange('password', text)}
                  onFocus={() => handleFieldFocus('password')}
                  placeholderTextColor={color.secoundry}
                  style={styles.inputField}
                  placeholder="Enter your password"
                />
                <TouchableOpacity onPress={onPressForgot}>
                  <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.iconsMain}>
              <TouchableOpacity
                onPress={() => {
                  signIn();
                }}
                style={styles.iconParent}>
                <SvgImage style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onFacebookButtonPress();
                }}
                style={styles.iconParent}>
                <FacebookSvg style={styles.icon} />
              </TouchableOpacity>
            </View>

            <View style={styles.lastParent}>
              <Text onPress={onPressRegister} style={styles.lastText}>
                New Here? <Text style={styles.register}> Register </Text>
              </Text>
              <TouchableOpacity onPress={onPressLogin} style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    </ScrollView>
  );
}
