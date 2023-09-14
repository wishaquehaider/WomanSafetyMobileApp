import { color } from "../../constants/Colors";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({

    main: {
        backgroundColor: color.secoundry,
        flex: 1
    },

    heading: {
        fontSize: 30,
        fontWeight: '600',
        color: color.third
    },

    circleProfile: {
        width: 194,
        height: 194,
        backgroundColor: color.fourth,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },

    profileImage: {
        width: 152,
        height: 152
    },

    profileParent: {
        display: 'flex',
        alignItems: 'center',
        rowGap:40
    },

    editParent: {
        width: 35,
        height: 35,
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
        paddingHorizontal: 20,
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
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    nameStyle: {
        fontSize: 18,
        fontWeight: '700',
        color: color.third,
        paddingLeft: 5,
        paddingBottom: 10
    },

    cardUserName: {
        fontSize: 20,
        fontWeight: '600',
        color: color.third,
        textAlign: 'center'
    },

    btn: {
        width: 120,
        height: 60,
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
        bottom: 40,
        right: 20
    },

    btnText: {
        fontSize: 20,
        fontWeight: '700',
        color: color.secoundry
    },
})