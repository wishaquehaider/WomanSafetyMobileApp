import React, {useEffect, useState} from 'react';
import Login from '../auth/login/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Singup from '../auth/signUp/Singup';
import MyTabs from './BottomNavigation';
import XplafeDetails from '../screens/xplafeDetails/XplafeDetails';
import ChatScreen from '../screens/chatScreen/ChatScreen';
import SafetyDetails from '../screens/safetyDetails/SafetyDetails';
import Channels from '../screens/channels/Channels';
import MapScreen from '../screens/map/MapScreen';
import SafetyScreen from '../screens/safety/SafetyScreen';
import Profile from '../screens/profile/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import EmailCode from '../screens/emailCode/EmailCode';
import NewPassword from '../screens/newPassword/NewPassword';
import LoadingScreen from '../screens/loadingScreen/LoadingScreen';

export const Channel = () => {
  return (
    <>
      <Stack.Navigator initialRouteName={'Channels'}>
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

export default function Navigation() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const [gmailToken, setGmailToken] = useState(null);

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const storedToken = await AsyncStorage.getItem('myToken');
        const gmailToken = await AsyncStorage.getItem('GmailData');
        setToken(storedToken);
        setGmailToken(gmailToken);
      } catch (error) {
        console.error('Error checking login status: ', error);
      } finally {
        setLoading(false);
      }
    }

    checkLoginStatus();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={token || gmailToken ? 'MyTabs' : 'login'}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="EmailCode"
            component={EmailCode}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="NewPassword"
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
