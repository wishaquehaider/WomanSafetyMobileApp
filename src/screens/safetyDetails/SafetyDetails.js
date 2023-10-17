import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {color} from '../../constants/Colors';
import {styles} from './SafetyDetailsStyle';
import {fontPixel} from '../../constants/responiveStyles';
import {useNavigation} from '@react-navigation/native';
import WomanLogo from '../../assets/MiniWomanLogo.svg';
import Girl from '../../assets/girl.svg';

const SafetyDetails = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.headingParent}>
          <TouchableOpacity onPress={() => navigate.navigate('MyTabs')}>
            <Icon
              size={fontPixel(24)}
              color={color.third}
              name="chevron-left"
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Safety at Work</Text>
          <WomanLogo />
        </View>

        <View style={styles.cardSection}>
          <Girl />

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            a pellentesque sit amet porttitor eget dolor morbi non. Pharetra
            convallis posuere morbi leo urna molestie at elementum eu. Quis vel
            eros donec ac odio tempor orci dapibus. Purus sit amet luctus
            venenatis lectus magna fringilla. Vitae et leo duis ut diam quam
            nulla porttitor massa. Convallis posuere morbi leo urna molestie at
            elementum. Nulla aliquet enim tortor at auctor urna. Laoreet id
            donec ultrices tincidunt. Blandit massa enim nec dui nunc.
          </Text>
          <Text style={styles.text}>
            Et tortor consequat id porta nibh venenatis cras sed felis.
            Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.
            Egestas sed sed risus pretium quam vulputate dignissim suspendisse.
            Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
            consequat. Lorem sed risus ultricies tristique nulla aliquet enim
            tortor. Sed libero enim sed faucibus turpis. Eget nunc lobortis
            mattis aliquam.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SafetyDetails;
