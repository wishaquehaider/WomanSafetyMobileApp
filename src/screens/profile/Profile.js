import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {styles} from './ProfileStyle';
import Icon from 'react-native-vector-icons/Feather';
import {color} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '../contextComp/ContextComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';
import {fontPixel, widthPixel} from '../../constants/responiveStyles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoadingScreen from '../loadingScreen/LoadingScreen';

const Profile = () => {
  const navigate = useNavigation();
  const [userDetails, setUserDetails] = useState(null);
  const [userGmailData, setUserGmailData] = useState(null);
  const [ProfileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('GmailData');
        const customUser = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(user);
        setUserGmailData(userData);
        setUserDetails(JSON.parse(customUser));
        setLoader(false);
      } catch (error) {}
    };
    getUser();
  }, []);

  const onPressLogout = async () => {
    try {
      await deltToken();
      if (userGmailData) {
        await GoogleSignin.signOut();
      }
      navigate.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  const deltToken = async () => {
    await AsyncStorage.removeItem('myToken');
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('GmailData');
    await AsyncStorage.removeItem('profileImg');
  };

  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Gallery Permission',
          message: 'App needs access to your gallery to select an image.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        pickImage();
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const pickImage = () => {
    setLoading(true);
    const options = {
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, async response => {
      setLoading(false);
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        const uri = response.assets[0].uri;
        await AsyncStorage.setItem('profileImg', uri);
        setProfileImage(uri);
      }
    });
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const uri = await AsyncStorage.getItem('profileImg');
        setProfileImage(uri);
      } catch (err) {}
    };
    getProfile();
  }, []);

  return (
    <>
      {loader ? (
        <LoadingScreen />
      ) : (
        <View style={styles.main}>
          <View style={styles.profileParent}>
            <Text style={styles.heading}>Profile</Text>
            <View style={styles.circleProfile}>
              {userDetails ? (
                <Image
                  source={{uri: ProfileImage}}
                  style={{
                    width: widthPixel(155),
                    height: widthPixel(155),
                    borderRadius: 100,
                  }}
                />
              ) : (
                <Image
                  source={{uri: userGmailData.user.photo}}
                  style={{
                    width: widthPixel(155),
                    height: widthPixel(155),
                    borderRadius: 100,
                  }}
                />
              )}

              <TouchableOpacity
                onPress={requestGalleryPermission}
                style={styles.editParent}>
                <Icon
                  color={color.primary}
                  size={fontPixel(24)}
                  name="edit-2"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cardParent}>
            <View>
              <Text style={styles.nameStyle}>Name</Text>
              <View style={styles.card}>
                {userGmailData ? (
                  <Text style={styles.cardUserName}>
                    {userGmailData.user.name}
                  </Text>
                ) : (
                  <Text style={styles.cardUserName}>
                    {userDetails.fullName}
                  </Text>
                )}
              </View>
            </View>

            <View>
              <Text style={styles.nameStyle}>Email</Text>
              <View style={styles.card}>
                {userGmailData ? (
                  <Text style={styles.cardUserName}>
                    {userGmailData.user.email}
                  </Text>
                ) : (
                  <Text style={styles.cardUserName}>{userDetails.email}</Text>
                )}
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={onPressLogout} style={styles.btn}>
            <Text style={styles.btnText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Profile;