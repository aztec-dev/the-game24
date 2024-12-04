import { Component, ReactNode, useState } from "react";
import { Text, View, StyleSheet, Linking, TouchableOpacity, Dimensions } from "react-native";
import CardButton from "./CardButton";
import Tile from "./Tile";
import Entity from "./Entity";
import Player from "./Player";

const styles = StyleSheet.create({
  top : {
    height: Dimensions.get('window').height * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  bottom : {
    height: Dimensions.get('window').height * 0.45,
    backgroundColor: 'grey'
  },
  hand : {
    flexDirection:"row",
    justifyContent: 'center',
    marginTop: 32,
  },
  row : {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 2,
    height: 30,
    width: 30,
  }
});

interface BoardState {
  tiles: Array<Array<Tile>>,
  entities: Array<Entity>,
  player: Player
}

class Game extends Component<{}, BoardState> {
  
  constructor(props: {}) {
    super(props);

    const _tiles: Array<Array<Tile>> = [];
    for (let rowIndex = 0; rowIndex < 7; rowIndex++) {
      const row: Array<Tile> = [];
      for (let colIndex = 0; colIndex < 7; colIndex++) {
        row.push(
          new Tile({})
        )
      }
      _tiles.push(row)
    }

    this.state = {
      player: new Player(3, 3),
      entities: [],
      tiles: _tiles
    };
  }

  isBlocked(y: number, x: number): boolean {
    return this.state.entities.filter(
      (entity) => {entity.X == x && entity.X == y}
    ).length > 0;
  }

  onPress(rowIndex: number, colIndex: number) {
    //this.state.player.setPosition(rowIndex, colIndex)
    const { player } = this.state;
    player.move(colIndex, rowIndex);
    this.setState({ player });
  };

  renderRow = (rowIndex: number) => {
    const row = [];
    for (let colIndex = 0; colIndex < 7; colIndex++) {
      row.push(
        <TouchableOpacity
          key={`button-${rowIndex}+${colIndex}`}
          style={styles.button}
          onPress={() => this.onPress(rowIndex, colIndex)}
          >
        <Text>
          {this.state.player.X == colIndex && this.state.player.Y == rowIndex ?
              'P' : this.state.tiles[rowIndex][colIndex].getText()
          }
        </Text>
        </TouchableOpacity>
      );

    }
    
    return <View key={`row-${rowIndex}`} style={styles.row}>{row}</View>;
  }

  render(): ReactNode {
    const rows = [];
    for (let rowIndex = 0; rowIndex < 7; rowIndex++) {
      rows.push(this.renderRow(rowIndex));
    }
    return (
      <View>

        <View style={styles.top}>
          {rows}
        </View>

        <View style={styles.bottom}>
          <View style={styles.hand}>

            <CardButton
              onPress={() => console.log("Card 1 selected")}
              Source = {require("../images/react-logo.png")}
            />
            <CardButton
              onPress={() => console.log("Card 2 selected")}
            />
            <CardButton
              onPress={() => console.log("Card 3 selected")}
              Source = {require("../images/favicon.png")}
            />

          </View>
        </View>

      </View>
    )
  }
}

export default Game;
