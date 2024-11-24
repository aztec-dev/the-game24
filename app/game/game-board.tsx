import { Component, useState } from "react";
import { Text, View, StyleSheet, Linking, TouchableOpacity, Dimensions } from "react-native";
import {Link} from 'expo-router';
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import board from "./board";
import CardButton from "./CardButton";

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
  public gameState = new Array(7).fill(new Array(7).fill('+'));
   // coordinates are displacement from center (4, 4)
  playerCoords  = { X: 0, Y: 0};
  pressedCoords = { X: 0, Y: 0};

  onPress = (x: Int32, y: Int32) => {
    console.log('X: ' + x, '\n Y: ' + y);
    this.pressedCoords.X = x;
    this.pressedCoords.Y = y;
  };

  render() {
    return (
      <View>
        <View style={{height: Dimensions.get('window').height * 0.55, backgroundColor: 'black'}}>
          {board(this)}
        </View>

        <View style={{height: Dimensions.get('window').height * 0.45, backgroundColor: 'grey'}}>
          <View style={{ 
                flexDirection:"row", 
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 32,
            }}>
            <CardButton
              onPress={() => this.gameState[3][3] = 'P'}
              Source = {require("../images/react-logo.png")}
            ></CardButton>
            <CardButton
              onPress={() => this.gameState[3][3] = 'P'}
            ></CardButton>
            <CardButton
              onPress={() => this.gameState[3][3] = 'P'}
              Source = {require("../images/favicon.png")}
            ></CardButton>
          </View>
        </View>
      </View>
    );
  }
}

export default Game;