import { StyleSheet } from "react-native";
import { scaleFontSize ,horizontalScale, verticalScale} from "../globalStyles/scalling";

const styles = StyleSheet.create({

    userContainer: {
        flexDirection: 'row'
    },
    userTextContainer: {
        justifyContent: 'center',
        marginLeft: horizontalScale(10)
    },
    user: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    username: {
        color: '#000000',
        fontSize: scaleFontSize(16),
        fontWeight: '600'
    },
    location: {
        color: '#79869F',
        fontWeight: '400',
        fontSize: 12,
        marginTop: verticalScale(5),
    },
    postImage: {
        alignItems: 'center',
        marginVertical: horizontalScale(20),
    },
    userPostContainer: {
        margintop: verticalScale(35),
    },
    userPostsAbents:
    {
        fontSize: scaleFontSize(24),
        color: '#79869F'
    },
    userPostStats: {
        marginLeft: horizontalScale(10), flexDirection: 'row',
    },
    userPostContentIcons: {
        flexDirection: 'row'
    },
    userPostStatsButton: {
        flexDirection: 'row',
        marginLeft: horizontalScale(27),
    },
    userPostStatsText: {
        marginLeft: horizontalScale(3),
        color: '#79869f'
    },

})

export default styles;