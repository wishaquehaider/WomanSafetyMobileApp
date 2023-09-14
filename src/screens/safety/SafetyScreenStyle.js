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
        color: color.third,
        textAlign: 'center'
    },

    card: {
       paddingHorizontal: 20,
       display: 'flex',
       rowGap: 20
    },

    cardContent: {
        backgroundColor: color.primary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingLeft: 40,
        paddingRight: 20,
        borderRadius: 12,
        alignItems: 'center'
    },

    cardHeading: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700'
    },

    headingLogoParent: {
        display: 'flex',
        rowGap: 10,
        alignItems: 'center',
        paddingBottom: 30
    }

});