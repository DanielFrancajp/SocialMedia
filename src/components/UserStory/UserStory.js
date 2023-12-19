import React from "react";
import PropTypes from "prop-types"

import {
    Text,
    View,
} from "react-native";

import styles from "./style";
import UserProfileImage from "../UserProfile/UserProfileImage";
import { horizontalScale, verticalScale, scaleFontSize } from "../globalStyles/scalling";

const UserStory = (props) => {

    return (

        <View style={styles.storyContainer}>
            <UserProfileImage
                profileImage={props.profileImage}
                imageDimensions={horizontalScale(48)}
            />

            <Text style={styles.firstName}>{props.firstName}</Text>
        </View>

    )
}

UserStory.PropTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired,
    updateName: PropTypes.any.isRequired
}

export default UserStory;