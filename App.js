import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  FlatList

}
  from "react-native";

import Title from './src/components/Title/Title';
import globalStyles from './src/components/globalStyles/globalStyles';

import FontAwesome from "react-native-vector-icons/FontAwesome"
import UserStory from './src/components/UserStory/UserStory';

const App = () => {

  const userStories = [
    {
      firstName: "Joseph",
      id: 1,
      profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Angel",
      id: 2,
     profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Daniel",
      id: 3,
     profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Jeph",
      id: 4,
     profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Natah",
      id: 5,
     profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Nino",
      id: 6,
           profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Max",
      id: 7,
           profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Joseph",
      id: 8,
           profileImage: require('./src/assets/images/elipse.png')
    },
    {
      firstName: "Bob",
      id: 9,
           profileImage: require('./src/assets/images/elipse.png')
    },

  ]

  return (

    <SafeAreaView >
      <View style={globalStyles.header}>
        
        <Title title={"Let's Explore"} />

        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesome name='stepforward' color='#202020' size={20} />

          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>
              2
            </Text>
          </View>

        </TouchableOpacity>

      </View>

      <View style={globalStyles.userStoryContainer}>

        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
          data={userStories}
          renderItem={({ item }) => (
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />

      </View>

    </SafeAreaView>
  )
}

export default App;
