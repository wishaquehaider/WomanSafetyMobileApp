import {
  View,
  Text,
  ScrollView,
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
import Google from '../../assets/google.svg';
import Facebook from '../../assets/facebook.svg';

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
    } catch (error) {
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
    const responce = await fetch(
      'https://woman-safety-server-crup.vercel.app/api/user',
      {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName,
        }),
      },
    );

    let res = await responce.json();

    if (res.ok == false) {
      Toast.error(res.message);
    }
    const token = res.token;
    const userData = JSON.stringify(res.user);

    if (responce.ok) {
      setLoader(false);

      Toast.success(res.message);

      try {
      } catch (error) {
        setLoader(false);
        Toast;
        console.error('Error storing data:', error);
      }

      navigate.navigate('Login');
    } else {
      setLoader(false);
      Toast.error(res.message);
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
              <Google style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconParent}>
              <Facebook style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.lastParent}>
            <Text onPress={onPressAlreadyAccound} style={styles.lastText}>
              {' '}
              Already Member? <Text style={styles.Login}> Login </Text>
            </Text>
            <TouchableOpacity
              disabled={loader}
              onPress={onPressRegister}
              style={styles.btn}>
              <Text style={styles.btnText}>
                {loader ? (
                  <ActivityIndicator size="large" color={color.primary} />
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
