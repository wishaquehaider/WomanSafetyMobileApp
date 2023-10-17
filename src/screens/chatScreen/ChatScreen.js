import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './ChatScreenStyle';
import Icon from 'react-native-vector-icons/Feather';
import {color} from '../../constants/Colors';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fontPixel} from '../../constants/responiveStyles';
import {useNavigation} from '@react-navigation/native';
import ChatIcon from '../../assets/Group.svg';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [userGmailData, setUserGmailData] = useState(null);
  const [empty, setEmpty] = useState(true);

  const navigate = useNavigation();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('GmailData');
        const customUser = await AsyncStorage.getItem('userData');
        setUserGmailData(JSON.parse(user));
        setUserDetails(JSON.parse(customUser));
        setLoader(false);
      } catch (error) {}
    };
    getUser();
  }, []);

  const onPressSendMessage = async () => {
    await firestore()
      .collection('message')
      .add({
        message: message,
        name: userGmailData ? userGmailData.user.name : userDetails.fullName,
        createdAt: new Date(),
      })
      .then(() => {
        setEmpty(true);
        setMessage('');
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
          return {...item.data(), id: item.id};
        });
        setMessages(allMessages);
      });

    return () => subscriber();
  }, []);

  const onHandleChange = data => {
    setMessage(data);
    if (data.length > 0) {
      setEmpty(false);
    }
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.headingParent}>
          <TouchableOpacity onPress={() => navigate.navigate('Channels')}>
            <Icon
              size={fontPixel(24)}
              color={color.third}
              name="chevron-left"
            />
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
          placeholder="Message"
          multiline={true}
          numberOfLines={1}
          textAlignVertical="top"
        />
        <TouchableOpacity
          disabled={empty}
          style={styles.calenderImg}
          onPress={onPressSendMessage}>
          <ChatIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
