import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Login from '../auth/login/Login';
import {styles} from '../auth/login/LoginStyle';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Singup from '../auth/signUp/Singup';
import MainHome from '../screens/mainHome/MainHome';
import MyTabs from './BottomNavigation';
import XplafeDetails from '../screens/xplafeDetails/XplafeDetails';
import ChatScreen from '../screens/chatScreen/ChatScreen';
import SafetyDetails from '../screens/safetyDetails/SafetyDetails';
import Channels from '../screens/channels/Channels';
import MapScreen from '../screens/map/MapScreen';
import SafetyScreen from '../screens/safety/SafetyScreen';
import Profile from '../screens/profile/Profile';
import { DataContext } from '../screens/contextComp/ContextComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import EmailCode from '../screens/emailCode/EmailCode';
import NewPassword from '../screens/newPassword/NewPassword';
import LoadingScreen from '../screens/loadingScreen/LoadingScreen';
import Container from 'toastify-react-native'


export const Channel = () => {



  
  return (
    <>
      <Stack.Navigator initialRouteName={"Channels"}>
        <Stack.Screen
          name="Channels"
          component={Channels}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};
const Stack = createNativeStackNavigator();

 export default  function Navigation() {

  // const { userDetails } = useContext(DataContext); 
  // console.log("userdetils",userDetails);

  // const [token, setToken] = useState(null)
  // const [showStackScreen, setShowStackScreen] = useState(false);


  // useEffect(() => {
  //   const getToken = async () => {
  //     try {
  //       const token = await AsyncStorage.getItem('myToken');
  //       if (token) {
  //         setToken(token);
  //         setTimeout(() => {
  //           setShowStackScreen(true);
  //         }, 4000); // Delay for 3 seconds
  //       } else {
  //         setShowStackScreen(true); // If no token, show the stack immediately
  //       }
  //     } catch (err) {
  //       console.error('error token', err);
  //     }
  //   };
  //   getToken();
  // }, []);



  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  // const [googleid, setgoogleid] = useState('');
  
  useEffect(() => {
    // Check if the user is already logged in (e.g., token exists in AsyncStorage)
    async function checkLoginStatus() {
      try {
        const storedToken = await AsyncStorage.getItem('myToken');
        const gmailToken = await AsyncStorage.getItem('GmailData');
        console.log('Token Gmail Heree========>>>>', gmailToken);
        // const googleId = await AsyncStorage.getItem('GoogleId');
        console.log("token=www=", storedToken);
        // console.log("iddddd==", googleId);
        setToken(storedToken);
        setToken(gmailToken)
        // setgoogleid(googleId)
      } catch (error) {
        console.error('Error checking login status: ', error);
      } finally {
        setLoading(false);
      }
    }

    checkLoginStatus();
  }, []);

  if (loading) {
    // Display a loader while loading
    return <LoadingScreen />;
  }


  console.log('token ha====>',token);
  

  return (
    <>


      <NavigationContainer>
        <Stack.Navigator initialRouteName={token   ?  'MyTabs' : 'login'  }>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='ForgotPassword'
            component={ForgotPassword}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name='EmailCode'
            component={EmailCode}
            options={{headerShown: false}}
          />

          <Stack.Screen
           name='NewPassword'
           component={NewPassword}
           options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Singup"
            component={Singup}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="MainHome"
            component={MainHome}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="XplafeDetails"
            component={XplafeDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="safetyDetails"
            component={SafetyDetails}
            options={{headerShown: false}}
          />
          {/* new changes */}
          <Stack.Screen
            name="MapScreen"
            component={MapScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Channel"
            component={Channel}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SafetyScreen"
            component={SafetyScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />


        </Stack.Navigator>
      </NavigationContainer>
      </>
    
  );
}