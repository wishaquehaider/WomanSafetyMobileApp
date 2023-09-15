import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../auth/login/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Singup from '../auth/signUp/Singup';
import MainHome from '../screens/mainHome/MainHome';
import { color } from '../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import { styles } from './BottomNavigationStyle';
import Channels from '../screens/channels/Channels';
import MapScreen from '../screens/map/MapScreen';
import SafetyScreen from '../screens/safety/SafetyScreen';
import Profile from '../screens/profile/Profile';
import ChatScreen from '../screens/chatScreen/ChatScreen';
const Tab = createBottomTabNavigator();


import { Channel } from './Navigation';
export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: color.primary,
          height: 90,
          paddingTop: 15,
        },
      }}>
      
      <Tab.Screen
        name="MainHome"
        component={MainHome}
        options={{
          tabBarLabel: '',  
          tabBarActiveTintColor: 'red', // its color of lapble using under the icon
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.iconParent}>
                <Icon name="archive" size={28} color={color.primary} />
              </View>
            ) : (
              <View style={styles.iconParent}>
                <Icon name="archive" size={28} color={color.third} />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="Channel"
        component={Channel}
        options={{
          tabBarLabel: '',
          tabBarActiveTintColor: 'red',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.iconParent}>
                <Icon name="grid" size={30} color={color.primary} />
              </View>
            ) : (
              <View style={styles.iconParent}>
                <Icon name="grid" size={30} color={color.third} />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.iconParent}>
                <Icon name="map" size={28} color={color.primary} />
              </View>
            ) : (
              <View style={styles.iconParent}>
                <Icon name="map" size={28} color={color.third} />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="SafetyScreen"
        component={SafetyScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.iconParent}>
                <Icon name="book-open" size={28} color={color.primary} />
              </View>
            ) : (
              <View style={styles.iconParent}>
                <Icon name="book-open" size={28} color={color.third} />
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={styles.iconParent}>
                <Icon name="user" size={28} color={color.primary} />
              </View>
            ) : (
              <View style={styles.iconParent}>
                <Icon name="user" size={28} color={color.third} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
}