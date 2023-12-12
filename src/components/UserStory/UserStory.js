import React from "react";
import PropTypes from "prop-types"

import {
    Text,
    View,
    Image
} from "react-native";

import styles from "./style";

const UserStory = (props) => {

    return (

        <View style={styles.storyContainer}>
    
            <View style={styles.userImageContainer}>
    
            <Image source={props.profileImage} style={styles.image} />
            
            </View>

            <Text style={styles.firstName}>{props.firstName}</Text>

        </View>

    )
}

UserStory.PropTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.object.isRequired
}

export default UserStory;