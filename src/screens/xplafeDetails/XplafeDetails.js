import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {color} from '../../constants/Colors';
import {styles} from './XplafeDetailsStyle';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

const XplafeDetails = () => {
  const [selected, setSelected] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleNotification, setModalVisibleNotification] =
    useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModalNotification = () => {
    setModalVisibleNotification(!isModalVisibleNotification);
  };

  return (
    <View style={styles.main}>
      <ScrollView>
      <View style={styles.headingParent}>
        <Icon size={24} color={color.third} name="chevron-left" />
        <Text style={styles.heading}>Nearby Xplafé</Text>
      </View>
      <View style={styles.locationParent}>
        <Text>Schindler’s Street, New York</Text>
        <Image source={require('../../assets/location.png')} />
      </View>

      <Text style={styles.timeText}>Time</Text>
      <View style={styles.calenderMain}>
        <View>
          <Text style={styles.fromText}>From</Text>
          <View style={styles.dateStartingParent}>
            <Text style={styles.startingDate}>21/2 /2021 / 7:15</Text>
            <Icon
              onPress={toggleModal}
              size={24}
              color={color.third}
              name="calendar"
            />
          </View>
          <View>
            <Modal isVisible={isModalVisible}>
              <View style={styles.calenderParent}>
                <Calendar
                  style={styles.calender}
                  onDayPress={day => {
                    setSelected(day.dateString);
                  }}
                  theme={{
                    backgroundColor: color.secoundry,
                    agendaDayNumColor: color.primary,
                    calendarBackground: color.secoundry,
                    monthTextColor: 'black',
                    selectedDayBackgroundColor: color.primary,
                    textDisabledColor: 'gray',
                    todayButtonFontSize: 33,
                    todayButtonTextColor: color.primary,
                    todayTextColor: color.primary,
                    arrowColor: color.primary,
                    dayTextColor: 'black',
                    agendaTodayColor: 'black',
                    textMonthColor: 'black',
                    selectedDotColor: 'red',
                  }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedDotColor: 'orange',
                    },
                  }}
                />
                <TouchableOpacity>
                  <Text>ook</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>

        <View>
          <Text style={styles.toStyle}> To</Text>
          <View style={styles.dateStartingParent}>
            <Text style={styles.startingDate}>21/2 /2021 / 7:15</Text>
            <Icon
              title="Hide modal"
              onPress={toggleModal}
              size={24}
              color={color.third}
              name="calendar"
            />
          </View>
          <View>
            <Modal isVisible={isModalVisible}>
              <View style={styles.calenderParent}>
                <Calendar
                  style={styles.calender}
                  onDayPress={day => {
                    setSelected(day.dateString);
                  }}
                  theme={{
                    backgroundColor: color.secoundry,
                    agendaDayNumColor: color.primary,
                    calendarBackground: color.secoundry,
                    monthTextColor: 'black',
                    selectedDayBackgroundColor: color.primary,
                    textDisabledColor: 'gray',
                    todayButtonFontSize: 33,
                    todayButtonTextColor: color.primary,
                    todayTextColor: color.primary,
                    arrowColor: color.primary,
                    dayTextColor: 'black',
                    agendaTodayColor: 'black',
                    textMonthColor: 'black',
                    selectedDotColor: 'red',
                  }}
                  markedDates={{
                    [selected]: {
                      selected: true,
                      disableTouchEvent: true,
                      selectedDotColor: 'orange',
                    },
                  }}
                />
                <View style={styles.btnParent}>
                  <TouchableOpacity title="Show modal" onPress={toggleModal}>
                    <Text style={styles.cancleTextBtn}>Cancle</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    title="Show modal"
                    onPress={toggleModal}
                    style={styles.doneBtn}>
                    <Text style={styles.doneTextBtn}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.messageText}>Message</Text>
        <View style={styles.messageParent}>
          <Text style={styles.textContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
            dignissim odio nisi, semper magna et ultricies tempor interdum. A
            elementum viverra at pulvinar hendrerit id. Faucibus massa,
            ridiculus quis lectus commodo.
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Modal isVisible={isModalVisibleNotification}>
          <View style={styles.notification}>
            <Text style={styles.notificationText}>Notification Sent!!</Text>
            <TouchableOpacity onPress={toggleModalNotification} style={styles.okButton}>
              <Text style={styles.okBtnText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={toggleModalNotification}
          style={styles.btnMain}>
          <Text style={styles.btnText}>Contact Her!</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>  



    </View>
  );
};

export default XplafeDetails;
