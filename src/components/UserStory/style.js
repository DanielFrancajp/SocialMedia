import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { verticalScale, scaleFontSize } from "../globalStyles/scalling";

const styles = StyleSheet.create({
    storyContainer:{
        marginRight:verticalScale(20)
    },
    firstName:{
        color:"#022150",
        textAlign:"center",
        fontFamily: getFontFamily("Inter", "500"),
        fontSize:scaleFontSize(14),
        marginTop:verticalScale(8) 
    },
})

export default styles