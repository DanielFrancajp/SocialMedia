import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const styles = StyleSheet.create({

    userContainer:{
        flexDirection:'row'
    },
    userTextContainer:{
        justifyContent: 'center', 
        marginLeft: 10 ,
    },
    user:{
        
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        
    },
    username:{
        color:'#000000',
        fontSize:16,
        fontWeight:'600'
    },
    location:{
        color:'#79869F',
        fontWeight: '400',
        fontSize: 12,
        marginTop:5
    },
    postImage:{
        alignItems:'center',
        marginVertical:20,
    },
    userPostContainer:{
        margintop:35,
    }

})

export default styles;