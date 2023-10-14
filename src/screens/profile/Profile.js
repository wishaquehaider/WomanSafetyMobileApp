import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {styles} from './ProfileStyle';
import Icon from 'react-native-vector-icons/Feather';
import {color} from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '../contextComp/ContextComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker'; // Removed unnecessary import
import {PermissionsAndroid} from 'react-native';
import {fontPixel, widthPixel} from '../../constants/responiveStyles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import LoadingScreen from '../loadingScreen/LoadingScreen';

const Profile = () => {
  const navigate = useNavigation();
  const {currentUser, updateUserDetails} = useContext(DataContext);
  const [userDetails, setUserDetails] = useState(null);
  const [userGmailData, setUserGmailData] = useState(null);
  const [ProfileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);

  //console.log('User Details', currentUser)
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem('GmailData');
        const customUser = await AsyncStorage.getItem('userData');
        const userData = JSON.parse(user);
        setUserGmailData(userData);
        setUserDetails(JSON.parse(customUser));
        setLoader(false);
      } catch (error) {
        console.log('Error getting data!', error);
      }
    };
    getUser();
  }, []);

  // const {userDetailsGmail} = useContext(DataContext);



  const onPressLogout = async () => {
    try {
      await deltToken();
      console.log('check user gmailData is true ===>',userGmailData);
      if(userGmailData){
        await GoogleSignin.signOut() ; // Sign out from Google
      }
    navigate.navigate('Login');
      
      // Navigate to the Login screen
    } catch (error) {
      console.error(error);
    }
  };

  const deltToken = async () => {
    await AsyncStorage.removeItem('myToken');
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('GmailData')
    await AsyncStorage.removeItem('profileImg');
  }

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
        // Permission granted, launch the gallery
        pickImage();
      } else {
        console.log('Gallery permission denied');
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
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Display the selected image
        console.log('Selected Image URI: ', response.uri);
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

  console.log('ProfileImage', ProfileImage);

  console.log('userDetails', userDetails);
  console.log('userGmailData', userGmailData);

  return (
    <>
      {loader ? (
        <LoadingScreen />
      ) : (
        <View style={styles.main}>
          <View style={styles.profileParent}>
            <Text style={styles.heading}>Profile</Text>
            <View style={styles.circleProfile}>
              {userDetails ?
                  <Image
                  source={{uri: ProfileImage}}
                  style={{
                    width: widthPixel(155),
                    height: widthPixel(155),
                    borderRadius: 100,
                  }}
                /> : 
                <Image
                source={{uri: userGmailData.user.photo}}
                style={{
                  width: widthPixel(155),
                  height: widthPixel(155),
                  borderRadius: 100,
                }}
              />  
            }
          
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
              { userGmailData ? (
                  <Text style={styles.cardUserName}>
                    {userGmailData.user.name}
                  </Text>
                ) : (
                  <Text style={styles.cardUserName}>{userDetails.fullName}</Text>
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
