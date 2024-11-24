import React from "react";
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import { Link } from "expo-router";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 120,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 8.5,
        marginHorizontal: 12,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        color: 'white'
    },
})

export default function CardButton(props: any) {
    const { onPress, name = 'Card', Source = require("../images/icon.png") } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Image style= {{width:48, height: 48}} source={Source}/>
            <Text style={styles.text}>{name}</Text>
        </Pressable>
    )
}
