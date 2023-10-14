import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './ChannelsStyle';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import { color } from '../../constants/Colors';

const Channels = () => {

  const navigate = useNavigation();
  const onPressChannel = () => {
    navigate.navigate('ChatScreen')
  }

  return (
    <View style={styles.main} > 
      <View>
        <Text style={styles.heading}>Channels</Text>
      </View>

      <ScrollView>

    <View style={styles.contentMain}>

      <TouchableOpacity onPress={onPressChannel}>
      <View style={styles.contentParent}>
        <View style={styles.content}>
        <Text style={styles.cardHeading}>Women at Work 💼</Text>
        <View style={styles.iconParent}>
        <Image source={require('../../assets/circle.png')} />
        <Text style={styles.onLineText}>56/3429 online</Text>
        </View>
        <View style= {styles.chatParent}>
        <Text style={styles.chatPerson}>Jenny:</Text>
        <Text style={styles.chat}>Yeah, I have been thinking about it for a long time...</Text>
        </View>
        <View style= {styles.chatParent}>
        <Text style={styles.chatPerson}>Lina:</Text>
        <Text style={{color:color.third}}>Hey girls, Wassup!!</Text>
        </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressChannel}>
      <View style={styles.contentParent}>
        <View style={styles.content}>
        <Text style={styles.cardHeading}>School Girls 🏫</Text>
        <View style={styles.iconParent}>
        <Image source={require('../../assets/circle.png')} />
        <Text style={styles.onLineText}>38/1856 online</Text>
        </View>
        <View style= {styles.chatParent}>
        <Text style={styles.chatPerson}>Jenny:</Text>
        <Text style={styles.chat}>Yeah, I have been thinking about it for a long time...</Text>
        </View>
        <View style= {styles.chatParent}>
        <Text style={styles.chatPerson}>Myle:</Text>
        <Text style={{color:color.third}}>Hey girls, Wassup!!</Text>
        </View>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressChannel}>
      <View style={styles.contentParent}>
        <View style={styles.content}>
        <Text style={styles.cardHeading}>Homemakers 🏠</Text>
        <View style={styles.iconParent}>
        <Image source={require('../../assets/circle.png')} />
        <Text style={styles.onLineText}>75/2951 women online</Text>
        </View>
        <View style= {styles.chatParent}>
        <Text style={styles.chatPerson}>Sofie:</Text>
        <Text style={styles.chat}>Yeah, I have been thinking about it for a long time...</Text>
        </View>
        <View style= {styles.chatParent}>
        <Text style={styles.chatPerson}>Eliza:</Text>
        <Text style={{color:color.third}}>Hey girls, Wassup!!</Text>
        </View>
        </View>
      </View>
      </TouchableOpacity>



      </View>
      </ScrollView>
    </View>
  )
}

export default Channels;