import { getFontFamily } from "../../assets/fonts/helper";
import { StyleSheet } from "react-native";


const globalStyles = StyleSheet.create({
    header: {
        marginLeft: 27,
        marginRight: 17,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    messageIcon: {
        paddingRight: 12,
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
        fontSize: 6,
        fontFamily: getFontFamily("Inter", "600")
    },
    userStoryContainer: {
        marginTop: 20,
        marginHorizontal: 38
    },
    userPostContainer: {
        marginHorizontal: 24
    },
})

export default globalStyles