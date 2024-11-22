import React from "react";
import { Text, StyleSheet, Pressable } from 'react-native';
import { Link } from "expo-router";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        color: 'white',
    },
})

export default function Button(props) {
    const { onPress, title = 'Play', href = 'Button'} = props;
    return (
        <Link href={href} asChild>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </Link>
    )
}