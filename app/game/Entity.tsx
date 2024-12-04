import { Text } from "react-native";

class Entity {
    X: number;
    Y: number;
    defaultText: string;

    constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
        this.defaultText = 'E';
    }

    getText() {
        return <Text>{this.defaultText}</Text>;
    }

    setPosition(x: number, y: number) {
        this.X = x;
        this.Y = y;
    }

    move(x: number, y: number) {
        this.setPosition(this.X + Math.max(-1, Math.min(1, x - this.X)), 
                         this.Y + Math.max(-1, Math.min(1, y - this.Y)));
    }
    
    render() {
        return (
            this.getText()
        );
    }
}

export default Entity;