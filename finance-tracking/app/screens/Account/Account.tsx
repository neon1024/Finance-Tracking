import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { useState } from "react";

import { Octicons } from "@expo/vector-icons";

import { buttonStyles, containerStyles, inputStyles } from "./Account.styles";

export default function Account() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hiddenPassword, setHiddenPassword] = useState(true);

    return (
        <View style={containerStyles.cardContainer}>
            <Octicons name="person" size={48} color="black" />
            <TextInput
                style={inputStyles.input}
                editable
                value={username}
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={inputStyles.input}
                editable
                value={email}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <View style={containerStyles.passwordContainer}>
                <TextInput
                    style={inputStyles.inputPassword}
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
                <Text style={buttonStyles.button}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}
