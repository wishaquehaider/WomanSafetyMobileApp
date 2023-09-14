import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {color} from '../../constants/Colors';
import {styles} from './SafetyDetailsStyle';
const SafetyDetails = () => {
  return (
    <View style={styles.main}>
        <ScrollView>
      <View style={styles.headingParent}>
        <Icon size={24} color={color.third} name="chevron-left" />
        <Text style={styles.heading}>Safety at Work</Text>
        <Image
          style={styles.Logo}
          source={require('../../assets/womanLogo.png')}
        />
      </View>

      <View style={styles.cardSection}>
        <Image source={require('../../assets/girl.png')} />

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus a
          pellentesque sit amet porttitor eget dolor morbi non. Pharetra
          convallis posuere morbi leo urna molestie at elementum eu. Quis vel
          eros donec ac odio tempor orci dapibus. Purus sit amet luctus
          venenatis lectus magna fringilla. Vitae et leo duis ut diam quam nulla
          porttitor massa. Convallis posuere morbi leo urna molestie at
          elementum. Nulla aliquet enim tortor at auctor urna. Laoreet id donec
          ultrices tincidunt. Blandit massa enim nec dui nunc. 
        </Text>
        <Text>Et tortor
          consequat id porta nibh venenatis cras sed felis. Facilisis magna
          etiam tempor orci eu lobortis elementum nibh tellus. Egestas sed sed
          risus pretium quam vulputate dignissim suspendisse. Pulvinar sapien et
          ligula ullamcorper malesuada proin libero nunc consequat. Lorem sed
          risus ultricies tristique nulla aliquet enim tortor. Sed libero enim
          sed faucibus turpis. Eget nunc lobortis mattis aliquam.</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default SafetyDetails;
