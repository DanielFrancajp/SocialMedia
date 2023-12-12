import React from 'react';
import { 
  SafeAreaView, 
  View ,
  TouchableOpacity,
  Text

} 
  from "react-native";

import Title from './src/components/Title/Title';
import globalStyles from './src/components/globalStyles/globalStyles';

import FontAwesome from "react-native-vector-icons/FontAwesome"

const App = () => {

return(
  <SafeAreaView >
    <View style={globalStyles.header}>
    <Title title={"Let's Explore"}/>

    <TouchableOpacity style={globalStyles.messageIcon}>
    <FontAwesome name='stepforward' color='#202020' size={20}/>
    <View style={globalStyles.messageNumberContainer}>
      <Text style={globalStyles.messageNumber}>
        2
      </Text>
    </View>
    </TouchableOpacity>

    </View>
  </SafeAreaView>
)
}

export default App;
