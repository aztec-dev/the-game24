import { Component, ReactNode, useState } from "react";
import { Text, View, StyleSheet, Linking, TouchableOpacity } from "react-native";
import {Link} from 'expo-router';

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
  state = { 
    playerX: 3,  // changed to center P
    playerY: 3,  // changed to center p
  };
  

  onPress = (rowIndex, colIndex) => {
    this.setState({
      playerX: colIndex,
      playerY: rowIndex,
    })
  };

  renderRow = (rowIndex) => {
    const buttons = [];
    for (let colIndex = 0; colIndex < 7; colIndex++) {
      buttons.push(
        <TouchableOpacity
          key={`button-${rowIndex}+${colIndex}`}
          style={styles.button}
          onPress={() => this.onPress(rowIndex, colIndex)}
          >
        <Text>
          {this.state.playerX == colIndex && this.state.playerY === rowIndex ? 'P' : '+'}
        </Text>            
        </TouchableOpacity>
      );

    }
    
    return <View key={`row-${rowIndex}`} style={styles.row}>{buttons}</View>;
  }

  render(): ReactNode {
    const rows = [];
    for (let rowIndex = 0; rowIndex < 7; rowIndex++) {
      rows.push(this.renderRow(rowIndex));
    }
    return (
      <View style={styles.container}>
        {rows}
        <Text>Hopefully this works</Text>
      </View>
    )
  }
}

export default Game;