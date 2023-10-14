import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '../contextComp/ContextComp';
import * as Yup from 'yup';
import {color} from '../../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const EmailCode = () => {
  const navigation = useNavigation();
  const {userTokenSave} = useContext(DataContext);

  const code1Ref = useRef();
  const code2Ref = useRef();
  const code3Ref = useRef();
  const code4Ref = useRef();

  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');

  const [loader, setLoader] = useState(false);

  const handleCodeChange = (text, ref) => {
    if (text.length === 1) {
      ref.current.focus();
    }
  };

  const validationSchema = Yup.object().shape({
    code1: Yup.string()
      .required('fields are required')
      .length(1, 'All fields are required'),
    code2: Yup.string()
      .required('Code 2 is required')
      .length(1, 'Code 2 must be a single character'),
    code3: Yup.string()
      .required('Code 3 is required')
      .length(1, 'Code 3 must be a single character'),
    code4: Yup.string()
      .required('Code 4 is required')
      .length(1, 'Code 4 must be a single character'),
  });

  const [validationErrors, setValidationErrors] = useState({});

  const submitcode = async () => {
    try {
      const codes = code1 + code2 + code3 + code4;
      await validationSchema.validate(
        {code1, code2, code3, code4},
        {abortEarly: false},
      );
      setLoader(true);
      userTokenSave(codes);

      const responce = await fetch('https://woman-safety-server-crup.vercel.app/api/sendCode', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
          verifyToken: codes,
        }),
      });

      console.log('y', responce);

      console.log('y', await responce.json());

      if (responce.ok) {
        setLoader(false);
        navigation.navigate('NewPassword');
      }
    } catch (error) {
      setLoader(false);
      const errors = {};
      error.inner.forEach(e => {
        errors[e.path] = e.message;
      });
      setValidationErrors(errors);
    }finally{
      setLoader(false)
    }
  }

  const handleFieldFocus = () => {
    setValidationErrors('');
  };

  return (
    <ScrollView style={styles.main}>
      <TouchableOpacity
      onPress={() => navigation.navigate('ForgotPassword')}
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
      <View style={styles.container}>
        <Text style={styles.forgot}>Submit you code</Text>
        <Text style={styles.notesIdea}>
          Check Your Email and Type Your email code here for change password
        </Text>
        <Text style={styles.lable}>Type Code</Text>
        <View style={styles.inputParent}>
          <TextInput
            ref={code1Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code1}
            // keyboardType="numeric"
            maxLength={1}
            onChangeText={text => {
              setCode1(text);
              handleCodeChange(text, code2Ref);
            }}
            onFocus={() => handleFieldFocus('email')}
          />
          <TextInput
            ref={code2Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code2}
            onChangeText={text => {
              setCode2(text);
              handleCodeChange(text, code3Ref);
            }}
            // keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            ref={code3Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code3}
            onChangeText={text => {
              setCode3(text);
              handleCodeChange(text, code4Ref);
            }}
            // keyboardType="numeric"
            maxLength={1}
          />
          <TextInput
            ref={code4Ref}
            style={styles.codeInput}
            placeholderTextColor="#180E25"
            placeholder="0"
            value={code4}
            onChangeText={text => setCode4(text)}
            // keyboardType= "numeric"
            maxLength={1}
          />
        </View>
        {validationErrors.code1 && (
          <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>
            {validationErrors.code1}
          </Text>
        )}
        <View style={{marginTop: 100}}>
          <View>
            <TouchableOpacity
              disabled={loader}
              onPress={submitcode}
              style={loader ? styles.btnDisable : styles.btn}>
              {loader ? (
                <ActivityIndicator
                  style={{paddingLeft: 115}}
                  size="large"
                  color="#fff"
                />
              ) : (
                <Text style={styles.text}>Submit Code</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EmailCode;

const styles = StyleSheet.create({
  main: {
    backgroundColor: color.secoundry,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    left: 16,
    marginTop: 200,
  },
  forgot: {
    fontSize: 32,
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
    marginRight: 20,
  },
  lable: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
    lineHeight: 22.4,
  },
  inputParent: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 30,
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
  },

  btnDisable: {
    backgroundColor: 'grey',
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    width: 328,
    height: 54,
  },

  text: {
    color: color.secoundry,
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 100,
    lineHeight: 22.4,
    fontFamily: 'Inter',
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
    marginRight: 10,
    color: 'black',
  },
});
