import { StyleSheet } from "react-native";
import { color } from "../../constants/Colors";
import {     widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal, } from "../../constants/responiveStyles";

export const styles =StyleSheet.create({
    main:{
       flex:1,
       backgroundColor: color.primary
    },

    contentParent: {
        position: 'absolute',
        width: '100%',
        top: '40%',
        paddingHorizontal: pixelSizeHorizontal(21)
    },

    backgroundTheme: {
        flex: 1,
        position: "relative"
    },

    test: {
        color: color.secoundry,
        fontSize: fontPixel(36),
        fontWeight: "700",
        paddingBottom: pixelSizeVertical(30),
        fontFamily: 'Nunito-Bold'
    },

    inputField: {
        height: heightPixel(50),
        borderColor: color.secoundry,
        borderWidth: 1,
        borderRadius: 10,
        padding: pixelSizeHorizontal(15),
        color: color.secoundry,
        marginBottom: pixelSizeVertical(10),
        marginTop: pixelSizeVertical(5)
    },

    mailParent: {
        width: '90%'
    },

    inputLable: {
        color: color.secoundry,
        paddingLeft: pixelSizeHorizontal(5),
        fontSize: fontPixel(14),
        fontWeight: '400',
        fontFamily: 'Nunito-Regular'
    },

    inputParent: {
      display: 'flex',
      rowGap:10
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
        paddingTop: pixelSizeVertical(5)
    },

    forgotText: {
        color: color.secoundry,
        textAlign: 'right'
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
        fontSize: fontPixel(24),
        fontWeight: '400',
        color: color.third,
        fontSize: fontPixel(24),
        fontFamily: 'Nunito-Bold'
    },

    lastParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: pixelSizeVertical(40),
    },

    lastText: {
        color: color.secoundry,
        alignSelf: 'flex-end',
        fontSize: fontPixel(16),
        fontWeight: '400',
        fontFamily: 'Nunito-SemiBold'
    },

    register: {
    fontWeight: '700',
    fontFamily: 'Nunito-SemiBold'
    },

    scrollMian: {
        backgroundColor: color.primary
    }

})
