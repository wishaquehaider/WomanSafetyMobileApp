import { color } from "../../constants/Colors";

const { StyleSheet } = require("react-native");
import { widthPixel,
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
        color: color.third,
        textAlign: 'center'
    },

    imgLogo: {
        width: fontPixel(100),
        height: fontPixel(100)
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
        paddingVertical: pixelSizeVertical(20),
        paddingLeft: pixelSizeHorizontal(40),
        paddingRight: pixelSizeHorizontal(20),
        borderRadius: 12,
        alignItems: 'center'
    },

    cardHeading: {
        color: 'white',
        fontSize: fontPixel(25),
        fontWeight: '700'
    },

    headingLogoParent: {
        display: 'flex',
        rowGap: 10,
        alignItems: 'center',
        paddingBottom: 30
    }

});