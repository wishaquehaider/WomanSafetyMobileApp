import { color } from "../../constants/Colors";

const { StyleSheet } = require("react-native");
import {     widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal, } from "../../constants/responiveStyles";

export const styles = StyleSheet.create({

    main: {
        backgroundColor: color.secoundry,
        flex: 1
    },

    heading: {
        fontSize: fontPixel(30),
        fontWeight: '600',
        color: color.third
    },

    circleProfile: {
        width: widthPixel(194),
        height:  widthPixel(194),
        backgroundColor: color.fourth,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },

    profileImage: {
        width: 152,
        height: 152,
        borderRadius: 150
    },

    profileParent: {
        display: 'flex',
        alignItems: 'center',
        rowGap:40
    },

    editParent: {
        width: widthPixel(35),
        height:  widthPixel(35),
        backgroundColor: '#ffffff',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        right: 20
    },

    cardParent: {
        paddingHorizontal: pixelSizeHorizontal(20),
        display: 'flex',
        rowGap: 30
    },

    card: {
        backgroundColor: color.secoundry,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 9, 
        borderRadius: 12,
        display: 'flex',
        paddingHorizontal: pixelSizeHorizontal(20),
        paddingVertical: pixelSizeVertical(20)
    },

    nameStyle: {
        fontSize: fontPixel(18),
        fontWeight: '700',
        color: color.third,
        paddingLeft: 5,
        paddingBottom: 10
    },

    cardUserName: {
        fontSize: fontPixel(20),
        fontWeight: '600',
        color: color.third,
        textAlign: 'center',
    },

    btn: {
        width: widthPixel(120),
        height: heightPixel(60),
        backgroundColor: color.primary,
        borderRadius: 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 120, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 7,
        position: 'absolute',
        bottom: 20,
        right: 27,
    },

    btnText: {
        fontSize: fontPixel(20),
        fontWeight: '700',
        color: color.secoundry
    },
})