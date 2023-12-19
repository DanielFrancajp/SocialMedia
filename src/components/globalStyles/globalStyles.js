import { getFontFamily } from "../../assets/fonts/helper";
import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale, scaleFontSize } from "./scalling";


const globalStyles = StyleSheet.create({
    header: {
        marginLeft:verticalScale(27),
        marginRight: verticalScale(17),
        marginTop: horizontalScale(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    messageIcon: {
        paddingRight: verticalScale(12),
    },
    messageNumberContainer: {
        backgroundColor: "#F35BAC",
        justifyContent: 'center',
        flexDirection: "row",
        width: 10,
        height: 10,
        borderRadius: 10,
        position: 'absolute',
        right: 12
    },
    messageNumber: {
        color: "#FFFFFF",
        fontSize: scaleFontSize(6),
        fontFamily: getFontFamily("Inter", "600")
    },
    userStoryContainer: {
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(38)
    },
    userPostContainer: {
        marginHorizontal: horizontalScale(24)
    },
})

export default globalStyles;