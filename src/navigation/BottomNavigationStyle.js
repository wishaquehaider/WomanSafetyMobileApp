import { color } from "../constants/Colors";

const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    iconParent: {
        width: 45,
        height: 45,
        backgroundColor: color.secoundry,
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
})