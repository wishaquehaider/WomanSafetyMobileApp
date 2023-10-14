import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback, useContext} from 'react';
import {styles} from './ChatScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import {color} from '../../constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainHome from '../mainHome/MainHome';
import {GiftedChat} from 'react-native-gifted-chat';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontPixel } from '../../constants/responiveStyles';
import { useNavigation } from '@react-navigation/native';
import { DataContext } from '../contextComp/ContextComp';
import ChatIcon from '../../assets/Group.svg'



const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(null);
  const [userDetails ,setUserDetails] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userGmailData, setUserGmailData] = useState(null);
  const [empty, setEmpty] = useState(true)


  const navigate = useNavigation()
  // const id = uuid.v4();
  // console.log(id);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('GmailData');
        const customUser = await AsyncStorage.getItem('userData');
        setUserGmailData(JSON.parse(user));
        setUserDetails(JSON.parse(customUser));
        setLoader(false);
      } catch (error) {
        console.log('Error getting data!', error);
      }
    };
    getUser();
  }, []);



 

  const onPressSendMessage = async () => {
    await firestore()
      .collection('message')
      .add({
        message: message,
        name: userGmailData ? userGmailData.user.name : userDetails.fullName ,
        createdAt: new Date(), // Add a timestamp if needed
      })
      .then(() => {
        console.log('Message added!');
        setEmpty(true)
        setMessage(''); // Clear the input field after sending the message
      })
      .catch(error => {
        console.error('Error adding message: ', error);
      });
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('message')
      .orderBy('createdAt', 'asc')
      .onSnapshot(querysnapshot => {
        const allMessages = querysnapshot.docs.map(item => {
          return { ...item.data(), id: item.id };
        });
        setMessages(allMessages);
      });

    // Unsubscribe when the component unmounts
    return () => subscriber();
  }, []);

  console.log('gmail user ',userGmailData);

  const onHandleChange = (data) => {
       setMessage(data);
       if(data.length > 0){
        setEmpty(false)
       }
  }

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.headingParent}>
          <TouchableOpacity onPress={() => navigate.navigate('Channels')}>
          <Icon size={fontPixel(24)} color={color.third} name="chevron-left" />
          </TouchableOpacity>
          <Text style={styles.heading}>Women at Work</Text>
        </View>

        <View style={styles.chatMain}>

          {messages.map((item, i) => {
            return (
              <View key={i}>
                <View style={styles.chatParent}>
                  <Text style={styles.chatPerson}>{item.name}</Text>
                  <Text style={styles.chat}>{item.message}</Text>
                </View>
              </View>
            );
          })}
        </View>

      </ScrollView>
        <View style={styles.inputBoxParent}>
          <TextInput
            onChangeText={text => onHandleChange(text)}
            style={styles.inputBox}
            value={message}
            placeholder='Message'
            multiline={true} // Allow multiple lines
            numberOfLines={1} // Set the number of visible lines you want
            textAlignVertical="top"
          />
          <TouchableOpacity
            disabled={empty}
            style={styles.calenderImg}
            onPress={onPressSendMessage}>
            {/* <Image source={require('../../assets/calender.png')} /> */}
            <ChatIcon  />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default ChatScreen;
