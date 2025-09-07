import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function NotFoundScreen() {
    const router = useRouter();

    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{fontSize: 16}}>This screen doesn't exist.</Text>

                <Pressable
                    style={{
                        marginTop: 24,
                        padding: 16,
                        backgroundColor: "cyan",
                        borderRadius: 16,
                    }}
                    onPress={() => router.replace("/")}
                >
                    <Text style={{ color: "white" }}>Go Home</Text>
                </Pressable>
            </View>
        </>
    );
}
