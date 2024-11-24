import { Component, useState } from "react";
import { Text, View, StyleSheet, Linking, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import {Link} from 'expo-router';

const guide = () => {
    return (
        <View>
            <Text style={{fontSize: 50}}>How to play</Text>
            <ScrollView>
                <Text> Touch tiles to move/interact </Text>
                <Text> Cards are items you have collected </Text>
                <Text> Yeah that's as much as I'm bothered to say for now </Text>
            </ScrollView>
        </View>
    )
}

export default guide;