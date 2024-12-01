import React, { Component } from "react";
import { View, Text } from "react-native";

interface TileState { defaultText: string; }

class Tile extends Component<{}, TileState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            defaultText: '+'
        };
    }

    getText() {
        return <Text>{this.state.defaultText}</Text>;
    }
    
    render() {
        return (
            this.getText()
        );
    }
}

export default Tile;