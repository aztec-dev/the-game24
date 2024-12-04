import React, { Component } from "react";
import { View, Text } from "react-native";
import Entity from "./Entity";

class Player extends Entity {

    constructor(x: number, y: number) {
        super(x, y);
        this.defaultText = 'P';
    }

    getText() {
        return <Text>{this.defaultText}</Text>;
    }
    
    render() {
        return (
            this.getText()
        );
    }
}

export default Player;