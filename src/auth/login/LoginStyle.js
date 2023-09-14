import { StyleSheet } from "react-native";
import { color } from "../../constants/Colors";

export const styles =StyleSheet.create({
    main:{
       flex:1,
       backgroundColor: color.primary
    },

    contentParent: {
        position: 'absolute',
        width: '100%',
        top: '40%',
        paddingHorizontal: 21
    },

    backgroundTheme: {
        flex: 1,
        position: "relative"
    },

    test: {
        color: color.secoundry,
        fontSize: 36,
        fontWeight: "700",
        paddingBottom:30
    },

    inputField: {
        height: 50,
        borderColor: color.secoundry,
        borderWidth: 1,
        borderRadius: 10,
        padding:15,
        color: color.secoundry,
        marginBottom: 10,
        marginTop: 5
    },

    mailParent: {
        width: '90%'
    },

    inputLable: {
        color: color.secoundry,
        paddingLeft:5
    },

    inputParent: {
      display: 'flex',
      rowGap:10
    },

    iconParent: {
        width: 45,
        height: 45,
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

    iconsMain: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 15,
        paddingTop: 5
    },

    forgotText: {
        color: color.secoundry,
        textAlign: 'right'
    },

    btn: {
        width: 144,
        height: 60,
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
    },

    lastParent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40
    },

    lastText: {
        color: color.secoundry,
        alignSelf: 'flex-end'
    },

    scrollMian: {
        backgroundColor: color.primary
    }

})
