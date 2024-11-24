import { Component, useState } from "react";
import { Text, View, StyleSheet, Linking, TouchableOpacity, Dimensions } from "react-native";
import {Link} from 'expo-router';
//import tile from "./tile";

const styles = StyleSheet.create({
    center: {
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 5,
      height: 30,
      width: 30,
    },
    row : {
      flexDirection: 'row',
      backgroundColor: "cyan"
    }
  });

export default function board (props: any) {
    const {game} = props;
    var rows = [];
    for (let y = -3; y <= 3; y++) {
      var buttons = [];
      for (let x = -3; x <= 3; x++) {
        buttons.push(
            <TouchableOpacity style={styles.button} onPress={
                function* fn<T>(input: T): Generator<Function> { 
                    game.onPress(x, y);
                }}>
                <Text style={styles.container}> + </Text>
            </TouchableOpacity>
        )
      }
      rows.push(
        <View style={styles.row}>
          {buttons}
        </View>
      )
    }
    return (
      <View style = {styles.container}>
        {rows}
        <Text>Hopefully this works!</Text>
      </View>
    )
  }
