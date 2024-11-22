import React from "react";
import { Text, StyleSheet, Pressable } from 'react-native';
import { Link } from "expo-router";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 50,
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginBottom: 8.5,
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

/*
Comment: Implement game state:
        - Start
        - Pause
        - Resume
Pause and Resume could be in a different react component. 
*/

// Ignore error, it's an 'Any type error'
export default function Button(props) {
    const { onPress, title = 'Play', href } = props;
    return (
        <Link href={href} asChild>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </Link>
    )
}