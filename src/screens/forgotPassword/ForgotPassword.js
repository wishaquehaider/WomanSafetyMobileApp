import { Button, ActivityIndicator, StyleSheet, Text, View,TextInput , ScrollView, TouchableOpacity, StatusBar} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup'
import uuid from 'react-native-uuid'
import { color } from '../../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../constants/responiveStyles'

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [userMail, setUserMail] = useState({
    email: ''
  });
  const [mailError, setMailError] = useState({
    email: null
  });
  const [loader, setLoader] = useState(false);
  
  const validateUserMail = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email format')
  })

  const id = uuid.v4();
  const verifyToken = id.slice(0,4);


  const  emailCode = async() => {
    try{
      await validateUserMail.validate(userMail, {abortEarly: false});
      setLoader(true)
      const responce = await fetch('https://woman-safety-server-crup.vercel.app/api/forgotMail', {
       method: 'POST',
       headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
          email: userMail.email,
          verifyToken: verifyToken
      })
      });

      const news =await responce.json();
      console.log('news',news);
      console.log('responce', responce);
      if (responce.ok) {
        setLoader(false)
        navigation.navigate('EmailCode');
      }
    }catch(error){
      setLoader(false)
      const validationErrors = {};
      error.inner.forEach(err => {
        console.log('is',err);
        validationErrors[err.path] = err.message;
      });
      // Update the state with validation errors
      setMailError(validationErrors);
    }finally{
      setLoader(false)
    }
  };

  const onFocusField = () => {
    setMailError('')
  }

  const onPressBack = () => {
    navigation.navigate('Login')
  }

 

  return (
    <ScrollView style={styles.main}>
        <StatusBar barStyle={'dark-content'} backgroundColor={color.secoundry} />

      <TouchableOpacity onPress={onPressBack} style={{display: 'flex', flexDirection: 'row', columnGap: 5, marginLeft: 10}}>
        <Icon style={{color: color.primary}} name='arrow-undo-outline' size={25} />
        <Text style={{color: color.primary, fontSize: 20}}>Back</Text>
      </TouchableOpacity>
     
    
      <View style={styles.container}>
        <Text style={styles.forgot}>Forgot Password</Text>
        <Text style={styles.notesIdea}>Insert your email address to receive a code for creating a new password</Text>
      <View style={styles.inputParent}>
        <Text style={styles.lable}>Email Address</Text>
        <TextInput 
        onChangeText={(text) => setUserMail({email: text})} 
        onFocus={ onFocusField}
        style={styles.input} 
        placeholderTextColor={'#180E25'} 
        placeholder='anto_michael@gmail.com' />

        {mailError.email && <Text style={{color: 'red'}}>{mailError.email}</Text>}
      </View>
      <View style={{ marginTop: 100 }}>
      <View>
    <TouchableOpacity disabled={loader} onPress={emailCode}  style={loader ? styles.btnDisable : styles.btn}>
      {loader ?  <ActivityIndicator style={{paddingLeft: 115}} size="large" color="#fff" /> : <Text style={  styles.text}>Send Code</Text>}
    
      
    </TouchableOpacity>
  </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  main:{
    backgroundColor: color.secoundry
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    left: 16,
    marginTop: pixelSizeVertical(150)
  },
  forgot: {
    fontSize: fontPixel(32),
    color: color.primary,
    fontWeight: '700',
    lineHeight: 38.4,
  },
  notesIdea: {
    color: '#827D89',
    fontSize: fontPixel(14),
    marginTop: pixelSizeHorizontal(20),
    fontFamily: 'Inter',
    lineHeight: 22.4,
    fontWeight: '400',
    paddingRight: pixelSizeHorizontal(30)
    
  },
    input: {
    borderWidth: 1,
    padding: pixelSizeHorizontal(16),
    color: "#180E25",
    width: widthPixel(328),
    borderColor: '#C8C5CB',
    borderRadius: 8,
    height: heightPixel(54),
    
  },
  lable: {
    color: "black",
    fontSize: fontPixel(16),
    fontWeight:'500',
    marginVertical: pixelSizeVertical( 10),
    lineHeight: 22.4
  },
  inputParent: {
    marginTop: pixelSizeVertical(50)
  }, 
  btn: {
    backgroundColor: color.primary,
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:"center",
    borderRadius: 100,
    width: widthPixel(328),
    height: heightPixel(54),
    marginBottom: pixelSizeVertical(30),
  },

  btnDisable: {
    backgroundColor: 'grey',
    paddingVertical: pixelSizeVertical(15),
    paddingHorizontal: pixelSizeHorizontal(20),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:"center",
    borderRadius: 100,
    width: widthPixel(328),
    height: heightPixel(54),
    marginBottom: pixelSizeVertical(30)
  },
  text: {
    color: color.secoundry,
    fontSize: fontPixel(16),
    fontWeight: '500',
    paddingLeft: pixelSizeHorizontal(115),
    lineHeight: 22.4,
    fontFamily:'Inter'
  },

})