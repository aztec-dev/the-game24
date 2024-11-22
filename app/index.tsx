import { Pressable, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from "./menu/Button";

// Main starting screen that displays buttons mapped to 
// files that displays different screens.

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/game/game-board" style={{color: 'green'}}> Game</Link>
      <Button
      onPress={() => console.log('Button pressed')}
      title="Play"
      href="/game/game-board"
      ></Button>
    </SafeAreaView>
  );

}
