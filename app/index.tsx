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
      <Button
      onPress={() => console.log('Button pressed')}
      title="Play"
      href="/game/game-board"
      ></Button>

      <Button
      onPress={() => console.log('Button pressed')}
      title="How to play"
      href="/game/game-board"
      ></Button>

      <Button
      onPress={() => console.log('Button pressed')}
      title="Settings"
      href="/game/game-board"
      ></Button>

      <Button
      onPress={() => console.log('Button pressed')}
      title="Credits"
      href="/game/game-board"
      ></Button>
    </SafeAreaView>
  );

}
