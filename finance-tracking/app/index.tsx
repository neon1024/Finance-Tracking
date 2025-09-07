import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>neon1024</Text>
            <Link href={"/account"} style={styles.accountButton}>Go to Account</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },

    text: {
        color: "cyan",
        fontSize: 32,
    },

    accountButton: {
        color: "cyan",
        fontSize: 24,
        borderStyle: "solid",
        borderWidth: 4,
        borderRadius: 16,
        borderColor: "cyan",
        padding: 8,
    },
});
