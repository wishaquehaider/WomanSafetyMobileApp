import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './ChatScreenStyle';
import Icon from 'react-native-vector-icons/Feather'
import { color } from '../../constants/Colors';
import MyTabs from '../../navigation/BottomNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainHome from '../mainHome/MainHome';
const Tab = createBottomTabNavigator();
const ChatScreen = () => {

  
  return (
    <View style={styles.main}>
      <ScrollView>
      <View style={styles.headingParent}>
        <Icon size={24} color={color.third} name='chevron-left' />
        <Text style={styles.heading}>Women at Work</Text>
      </View>

      <View style={styles.chatMain}>
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>naina :</Text>
          <Text style={styles.chat}>Hello. Have you just arrived at the camp? I’m naina.</Text>
        </View>

        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>Nelly :</Text>
          <Text style={styles.chat}>My name is Nelly. Nice to meet you.</Text>
        </View>

        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>naina :</Text>
          <Text style={styles.chat}>Oh, OK… Where are you from?</Text>
        </View>

        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>Nelly :</Text>
          <Text style={styles.chat}>I’m from Greece, but I’ve lived in this area for a long time. You?</Text>
        </View>

        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>naina :</Text>
          <Text style={styles.chat}>I’m from the USA. I’m here on holidays.</Text>
        </View>

        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>Nelly :</Text>
          <Text style={styles.chat}>Are you from a big family?</Text>
        </View>

        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>naina :</Text>
          <Text style={styles.chat}>No, there are just five of us- me, my sister, my brother and my parents. What about you?</Text>
        </View>
        
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>Nelly :</Text>
          <Text style={styles.chat}>I’ve got two sisters.</Text>
        </View>
        
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>naina :</Text>
          <Text style={styles.chat}>Oh, that’s nice. What do you usually do in your free time? Do you have any hobbies?</Text>
        </View>
        
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>Nelly :</Text>
          <Text style={styles.chat}>I love hanging out with my friends or stay at home and read a good book. I don’t have a lot of hobbies. I enjoy playing volleyball… What about you?</Text>
        </View>
        
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>naina :</Text>
          <Text style={styles.chat}> I love it, too…What’s your favourite subject?</Text>
        </View>
        
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>Nelly :</Text>
          <Text style={styles.chat}>I like Biology. I love learning about the Environment</Text>
        </View>
        
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>naina :</Text>
          <Text style={styles.chat}>Me too. I think we are going to be great friends!. What about you?</Text>
        </View>
        
        <View style={styles.chatParent}>
          <Text style={styles.chatPerson}>Nelly :</Text>
          <Text style={styles.chat}>So do I!</Text>
        </View>
         
      </View>

      <View style={styles.inputBoxParent}>
        <TextInput style={styles.inputBox} />
        <Image style={styles.calenderImg} source={require('../../assets/calender.png')} />
      </View>

      

   
    </ScrollView>
    </View>
  );
};

export default ChatScreen;
