import {StyleSheet} from 'react-native';
import { color } from '../../constants/Colors';

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
      paddingHorizontal: 21
    },

    headingMain: {
        fontSize: 36,
        color: color.secoundry,
        paddingBottom: 20
    },


    inputField: {
        borderColor: color.secoundry,
        borderWidth: 1,
        width: '90%',
        borderRadius: 10,
        height: 50,
        padding: 15,
        color: color.secoundry
    },

    allInputs: {
        display: 'flex',
        rowGap: 20
    },

    inputLable: {
        color: color.secoundry,
        paddingLeft: 5,
        paddingBottom: 5
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
        paddingTop: 25
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




})