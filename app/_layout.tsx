import { Stack } from "expo-router";
import Game from "./game/game-board";

export default function RootLayout() {
  return <Stack
  screenOptions={{
    // Hide the header for all other routes.
    headerShown: true,
  }}
>
  <Stack.Screen
    name="index"
    options={{
      // Hide the header for this route
      headerShown: true,
      title: 'Menu',
      headerTitleAlign: 'center',
    }}
  />
  <Stack.Screen
    name="Game"
    // component={Game}
    options={{
      title: "Game"
    }}
  />
</Stack>;
}
