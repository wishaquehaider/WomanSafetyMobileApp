import {StyleSheet} from 'react-native'
import { color } from '../../constants/Colors'

export const styles = StyleSheet.create({

    main: {
        backgroundColor: color.secoundry,
        flex: 1,
        rowGap: 40
    },

    headingParent: {
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
      },

      mainHeading: {
        fontSize: 33, 
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: 250,
        color: color.third
      },



    cardParent: {
        borderColor: color.primary,
        borderWidth: 1,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        columnGap: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
        
    },

    flx: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 20
    },

    cardsMain: {
        width: '100%',
        paddingHorizontal: 30,
        display: 'flex',
        rowGap: 15
    },

    cardHeading: {
        fontSize: 24,
        color: color.primary,
        fontWeight: '600'
    },

    cardText: {
        fontSize: 14,
        fontWeight: '400',
        color: color.third
    },

    cardContentParent: {
       paddingVertical: 10,
    },

    icon: {
        color: 'red',
        fontSize: 22
    }


})