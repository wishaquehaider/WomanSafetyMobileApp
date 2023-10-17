import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../constants/Colors';
import {DataContext} from '../contextComp/ContextComp';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Ionicons';

const NewPassword = () => {
  const navigation = useNavigation();
  const [NewPassword, setNewPassword] = useState({
    firstPass: '',
    secondPass: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    firstPass: '',
    secondPass: '',
  });

  const [loader, setLoader] = useState(false);

  const onFocusHandler = key => {
    setValidationErrors({...validationErrors, [key]: ''});
  };

  const {userToken} = useContext(DataContext);

  const onHandleChange = (key, value) => {
    setNewPassword({...NewPassword, [key]: value});
  };

  const passwordSchema = Yup.object().shape({
    firstPass: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
    secondPass: Yup.string()
      .oneOf([Yup.ref('firstPass'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

  const HomeScreen = async () => {
    try {
      await passwordSchema.validate(NewPassword, {abortEarly: false});
      setLoader(true);
      const responce = await fetch(
        'https://woman-safety-server-crup.vercel.app/api/newPassword',
        {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify({
            password: NewPassword.firstPass,
            verifyToken: userToken,
          }),
        },
      );
      if (responce.ok) {
        setLoader(false);
        navigation.navigate('Login');
      }
    } catch (error) {
      setLoader(false);
      const errors = {};
      error.inner.forEach(e => {
        errors[e.path] = e.message;
      });
      setValidationErrors(errors);
    }
  };

  return (
    <ScrollView style={styles.main}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={color.secoundry}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('EmailCode')}
        style={{
          display: 'flex',
          flexDirection: 'row',
          columnGap: 5,
          marginLeft: 10,
        }}>
        <Icon
          style={{color: color.primary}}
          name="arrow-undo-outline"
          size={25}
        />
        <Text style={{color: color.primary, fontSize: 20}}>Back</Text>
      </TouchableOpacity>

      <View></View>
      <View style={styles.container}>
        <Text style={styles.forgot}>Create a New Password</Text>
        <Text style={styles.notesIdea}>
          Your new password should be different{' '}
        </Text>
        <Text style={styles.notesIdea2}>from the previous password</Text>

        <View style={{marginTop: 20}}>
          <Text style={styles.lable}>New Password</Text>
          <TextInput
            onFocus={() => onFocusHandler('firstPass')}
            onChangeText={text => onHandleChange('firstPass', text)}
            style={styles.input}
            placeholderTextColor={'#180E25'}
            placeholder="********"
          />
          <Text style={{color: 'red', fontSize: 12}}>
            {validationErrors.firstPass}
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.lable}>Retype New Password</Text>
          <TextInput
            onFocus={() => onFocusHandler('secondPass')}
            onChangeText={text => onHandleChange('secondPass', text)}
            style={styles.input}
            placeholderTextColor={'#180E25'}
            placeholder="********"
          />
          <Text style={{color: 'red', fontSize: 12}}>
            {validationErrors.secondPass}
          </Text>
        </View>
        <TouchableOpacity
          disabled={loader}
          onPress={HomeScreen}
          style={styles.btn}>
          {loader ? (
            <ActivityIndicator
              style={{paddingLeft: 115}}
              size="large"
              color="#fff"
            />
          ) : (
            <Text style={styles.text}>Send</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  main: {
    backgroundColor: color.secoundry,
    flex: 1,
  },

  btn: {
    backgroundColor: color.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    width: 328,
    height: 54,
    marginTop: 30,
    textAlign: 'center',
  },

  text: {
    color: color.secoundry,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 115,
    lineHeight: 22.4,
    fontFamily: 'Inter',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    left: 16,
    marginTop: 140,
  },
  forgot: {
    fontSize: 35,
    maxWidth: 250,
    color: color.primary,
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: 38.4,
  },
  notesIdea: {
    color: '#827D89',
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'Inter',
    lineHeight: 22.4,
    fontWeight: '400',
  },
  notesIdea2: {
    color: '#827D89',
    fontSize: 16,
    fontFamily: 'Inter',
    lineHeight: 22.4,
    fontWeight: '400',
  },
  input: {
    borderWidth: 1,
    padding: 16,
    color: '#180E25',
    width: 328,
    borderColor: '#C8C5CB',
    borderRadius: 8,
    height: 54,
  },
  lable: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    lineHeight: 22.4,
  },
  inputParent: {
    marginTop: 50,
  },
  passwordValidation: {
    color: '#C8C5CB',
    fontSize: 12,
    lineHeight: 14.52,
    top: 5,
  },
});