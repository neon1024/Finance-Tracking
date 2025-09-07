import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
                    headerTitle: "Finance Tracking",
                }}
            />
            <Stack.Screen
                name="account"
                options={{
                    headerStyle: {
                        backgroundColor: "black",
                    },
                    headerTintColor: "cyan",
                    headerTitleAlign: "center",
                    headerTitle: "Account",
                }}
            />
        </Stack>
    );
}
