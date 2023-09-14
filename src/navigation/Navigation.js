import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
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

export const Channel = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Channels">
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
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
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
