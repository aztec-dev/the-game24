import React from "react";
import { Text, StyleSheet, Pressable } from 'react-native';
import { ExternalPathString, Link, RelativePathString } from "expo-router";

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

type buttonProps = {
    onPress: null,
    title: string,
    href: object,
}

// Ignore error, it's an 'Any type error'
export default function Button(props: buttonProps) {
    return (
        <Link href={props.href} asChild>
            <Pressable style={styles.button} onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        </Link>
    )
}