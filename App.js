import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {ScrollView} from 'react-native';
import ContextComp, {DataContext} from './src/screens/contextComp/ContextComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

function  App() {

  const getToken = async() => {
    const token = await AsyncStorage.getItem('mytoken');

    const responce = await fetch('http://192.168.50.78:3000/api/verifyToken',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        token
      })
    })
  };

  getToken();

  global.Toast = {
    error: (title, description, ...rest) =>
      Toast.show({type: 'error', text1: title, text2: description, ...rest[0]}),
    info: (title, description, ...rest) =>
      Toast.show({type: 'info', text1: title, text2: description, ...rest[0]}),
    success: (title, description, ...rest) =>
      Toast.show({
        type: 'success',
        text1: title,
        text2: description,
        ...rest[0],
      }),
  };


  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1001912539752-b8n7rbd13dlls5mn57b111am60sgt57p.apps.googleusercontent.com',
    });
  }, []);


  return (
    <>
      <ContextComp>
        <Navigation />
      </ContextComp>
      <Toast/>
    </>
  );
}

export default App;
