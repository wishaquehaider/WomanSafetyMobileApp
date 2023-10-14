import {
  View,
  Text,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SingupStyle';
import {color} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Singup = () => {
  const navigate = useNavigation();

  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    email: '',
  });

  const [loader, setLoader] = useState(false);

  const [formFieldErr, setFormFieldErr] = useState({
    fullName: null,
    password: null,
    email: null,
  });

  const onHandleChange = (nameField, text) => {
    setFormData({...formData, [nameField]: text});
  };

  const handleFieldFocus = nameField => {
    setFormFieldErr({...formFieldErr, [nameField]: null});
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'password must be atleast 8 characters'),
  });

  const onPressAlreadyAccound = () => {
    navigate.navigate('Login');
  };

  const onPressRegister = async () => {
    try {
      await validationSchema.validate(formData, {abortEarly: false});
      setLoader(true);
      PostData();
      // navigate.navigate('Login');
    } catch (error) {
      // Validation failed, display errors
      setLoader(false);
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      // Update the state with validation errors
      setFormFieldErr(validationErrors);
    }
  };

  const PostData = async () => {
    console.log(formData);
    const responce = await fetch('https://woman-safety-server-crup.vercel.app/api/user', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName,
      }),
    });

    
    let res = await responce.json();
    const token = res.token;
    const userData = JSON.stringify(res.user);

    if (responce.ok) {
      setLoader(false)

      Toast.success('Signup Successfully!')

      try {
        // await AsyncStorage.setItem('mytoken',token);
        // await AsyncStorage.setItem('userData',userData);
      } catch (error) {
        setLoader(false)
        console.error('Error storing data:', error);
      }
    

      navigate.navigate('Login');
    } else {
      setLoader(false)
      console.error('FINALLY==>',responce.status);
    }
  };

  return (
    <ScrollView>
      <View style={styles.allMain}>
        <Image
          style={styles.bgImg}
          source={require('../../assets/Background.png')}
        />

        <View style={styles.contentMain}>
          <Text style={styles.headingMain}>Register</Text>
          <View style={styles.allInputs}>
            <View style={styles.nameField}>
              <Text style={styles.inputLable}>Full Name</Text>
              <TextInput
                onChangeText={text => onHandleChange('fullName', text)}
                onFocus={() => handleFieldFocus('fullName')}
                placeholderTextColor={color.secoundry}
                style={styles.inputField}
                placeholder="Enter your name"
              />
              {formFieldErr.fullName && (
                <Text style={{color: 'white'}}>{formFieldErr.fullName}</Text>
              )}
            </View>

            <View>
              <Text style={styles.inputLable}>Email</Text>
              <TextInput
                onChangeText={text => onHandleChange('email', text)}
                onFocus={() => handleFieldFocus('email')}
                placeholderTextColor={color.secoundry}
                style={styles.inputField}
                placeholder="Enter your email"
              />
              {formFieldErr.email && (
                <Text style={{color: 'white'}}>{formFieldErr.email}</Text>
              )}
            </View>

            <View>
              <Text style={styles.inputLable}>Password</Text>
              <TextInput
                onChangeText={text => onHandleChange('password', text)}
                onFocus={() => handleFieldFocus('password')}
                placeholderTextColor={color.secoundry}
                style={styles.inputField}
                placeholder="Enter your password"
              />
              {formFieldErr.password && (
                <Text style={{color: 'white'}}>{formFieldErr.password}</Text>
              )}
            </View>
          </View>

          <View style={styles.iconsMain}>
            <TouchableOpacity style={styles.iconParent}>
              <Image style={styles.icon} source={require('../../assets/google.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconParent}>
              <Image style={styles.icon} source={require('../../assets/facebook.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconParent}>
              <Image style={styles.icon} source={require('../../assets/apple.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.lastParent}>
            <Text onPress={onPressAlreadyAccound} style={styles.lastText}>
              {' '}
              Already Member? Login
            </Text>
            <TouchableOpacity
              disabled={loader}
              onPress={onPressRegister}
              style={styles.btn}>
              <Text style={styles.btnText}>
                {' '}
                {loader ? (
                  <Text>
                    <ActivityIndicator size="large" color={color.primary} />
                  </Text>
                ) : (
                  <Text style={styles.btnText}>Register</Text>
                  
                )}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Singup;
