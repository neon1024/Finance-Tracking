import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: "cyan",
      headerTitleAlign: "center",
    }
  }/>;
}
