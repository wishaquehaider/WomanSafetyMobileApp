import {StyleSheet} from 'react-native';
import { color } from '../../constants/Colors';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../constants/responiveStyles';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: color.primary,
        position: 'relative',
        flex: 1
    },

    allMain: {
        backgroundColor: color.primary,
        flex: 1
    },

    contentMain: {
      position: 'absolute',
      top: '37%',
      width: '100%',
      paddingHorizontal: pixelSizeHorizontal(21)
    },

    headingMain: {
        fontSize: fontPixel(36),
        color: color.secoundry,
        paddingBottom: pixelSizeVertical(20)
    },


    inputField: {
        borderColor: color.secoundry,
        borderWidth: 1,
        width: '90%',
        borderRadius: 10,
        height: heightPixel(50),
        padding: pixelSizeHorizontal(15),
        color: color.secoundry
    },

    allInputs: {
        display: 'flex',
        rowGap: 20
    },

    inputLable: {
        color: color.secoundry,
        paddingLeft: pixelSizeHorizontal(5),
        paddingBottom: pixelSizeVertical(5)
    },

    iconParent: {
        width: widthPixel(45),
        height: heightPixel(45),
        backgroundColor: color.secoundry,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 120, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 7, 
    },

    icon: {
        width: widthPixel(27),
        height: heightPixel(27)
    },

    
    iconsMain: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
        paddingTop: pixelSizeHorizontal(15)
    },

    lastParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: pixelSizeVertical(20),
    },

    lastText: {
        color: color.secoundry,
        alignSelf: 'flex-end',
        fontSize: fontPixel(16),
        fontWeight: '400'
    },

    btn: {
        width: widthPixel(144),
        height: heightPixel(60),
        backgroundColor: color.secoundry,
        borderRadius: 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 120, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 7, 
    },

    btnText: {
        fontSize: 24,
        fontWeight: '400',
        color: color.third
    },

    bgImg: {
        // height: 900
    },

    btnText: {
        fontSize: fontPixel(24),
        fontWeight: '400'
    }




})