import React from "react";
import { Text } from "react-native";

import styles from "./styles";
import PropTypes from "prop-types"



const Title = props => {
    return <Text style={styles.title}>{props.title}</Text>
};

Title.PropTypes={
    title: PropTypes.string.isRequired,
}

export default Title;



