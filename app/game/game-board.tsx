import { Component, useState } from "react";
import { Text, View, StyleSheet, Linking, TouchableOpacity, Dimensions } from "react-native";
import {Link} from 'expo-router';
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import board from "./board";

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row : {
    flexDirection: 'row',
    backgroundColor: "cyan"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 5,
    height: 30,
    width: 30,
  }
});

class Game extends Component {
  playerCoords = { // displacement from center (4, 4)
    X: 0,
    Y: 0,
  };
  pressedCoords = { // displacement from center (4, 4)
    X: 0,
    Y: 0,
  };

  onPress = (x: Int32, y: Int32) => {
    console.log('X: ' + x, '\n Y: ' + y);
    this.pressedCoords.X = x;
    this.pressedCoords.Y = y;
  };

  render() {
    return (
      <View>
        <View style={{height: Dimensions.get('window').height / 2, backgroundColor: 'black'}}>
          {board(this)}
        </View>
        <View style={{height: Dimensions.get('window').height / 2, backgroundColor: 'grey'}}>
          <Text></Text>
        </View>
      </View>
    );
  }
}

export default Game;