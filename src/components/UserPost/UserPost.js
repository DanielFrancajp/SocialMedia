import React from "react";
import PropTypes from 'prop-types'
import { Image, Text, TouchableOpacity, View } from "react-native";
import UserProfileImage from "../UserProfile/UserProfileImage";
import Hearth from '../../assets/images/hearth.png'

import styles from "./styles";


const UserPost = props => {
    return (

        <View style={{ marginTop: 35 ,borderBottomWidth: 1, padding:20, borderBottomColor: '#EFF2F6'}}>

            <View style={styles.user}>
                <View style={styles.userContainer}>
                    <UserProfileImage
                        profileImage={props.profileImage}
                        imageDimensions={48}
                    />

                    <View style={styles.userTextContainer}>

                        <Text style={styles.username}>
                            {props.firstName} {props.lastName}
                        </Text>
                        {props.location && <Text style={styles.location}>{props.location}</Text>}
                    </View>

                </View>

                <View>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 24, color: '#79869F' }}>
                        ...
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.postImage}>
                <Image source={props.image} />
            </View>

            <View style={{ marginLeft: 10 , flexDirection: 'row'}}>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../../assets/images/hearth.png')}
                        style={{ width: 20, height: 20, }} />
                    <Text style={{ marginLeft: 3, color: '#79869f' }}>{props.likes}</Text>
                </View>

                <View style={{ flexDirection: 'row' ,marginLeft:27}}>
                    <Image
                        source={require('../../assets/images/chatt.png')}
                        style={{ width: 20, height: 20, }} />
                    <Text style={{ marginLeft: 3, color: '#79869f' }}>{props.likes}</Text>
                </View>
                <View style={{ flexDirection: 'row' ,marginLeft:27}}>
                    <Image
                        source={require('../../assets/images/send.png')}
                        style={{ width: 20, height: 20, }} />
                    <Text style={{ marginLeft: 3, color: '#79869f' }}>{props.likes}</Text>
                </View>
                
        
            </View>
        </View>
    )
}

UserPost.PropTpyes = {

    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    location: PropTypes.string,

    image: PropTypes.any.isRequired,

    profilleImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
    iconHearth: PropTypes.any.isRequired

}

export default UserPost