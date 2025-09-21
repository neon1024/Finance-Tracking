import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from "react-native";

import { useState } from "react";

import { Octicons } from "@expo/vector-icons";

export default function Account() {
    const { height, width } = useWindowDimensions();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hiddenPassword, setHiddenPassword] = useState(true);

    const cardStyles = StyleSheet.create({
        cardContainer: {
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",

            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            width: "65%",
            maxWidth: height * 0.5,
            minWidth: height * 0.3,

            borderStyle: "solid",
            borderWidth: 4,
            borderRadius: 16,

            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 16,
        },
    });

    return (
        <View style={cardStyles.cardContainer}>
            <Octicons name="person" size={48} color="black" />
            <TextInput
                style={styles.input}
                editable
                value={username}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                editable
                value={email}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.inputPassword}
                    editable
                    secureTextEntry={hiddenPassword}
                    value={password}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 8,
                    }}
                    onPress={() => setHiddenPassword(!hiddenPassword)}
                >
                    <Octicons
                        name={hiddenPassword ? "eye-closed" : "eye"}
                        size={24}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => alert("Saved")}>
                <Text style={styles.button}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 16,

        width: "100%",

        marginTop: 16,
        padding: 8,
    },

    inputPassword: {
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 16,

        width: "80%",

        padding: 8,
    },

    button: {
        borderStyle: "solid",
        borderWidth: 0,
        borderRadius: 16,

        backgroundColor: "black",
        color: "cyan",

        marginTop: 16,
        
        paddingTop: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
    },

    passwordContainer: {
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",

        marginTop: 16,
    },
});
