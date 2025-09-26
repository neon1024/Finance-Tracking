import { Picker } from "@react-native-picker/picker";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { Octicons } from "@expo/vector-icons";

import { useState } from "react";

import Expense from "./Expense";

// TODO use FlashList for better performance

export default function Expenses() {
    const months = [
        { label: "January", value: 1 },
        { label: "February", value: 2 },
        { label: "March", value: 3 },
        { label: "April", value: 4 },
        { label: "May", value: 5 },
        { label: "June", value: 6 },
        { label: "July", value: 7 },
        { label: "August", value: 8 },
        { label: "September", value: 9 },
        { label: "October", value: 10 },
        { label: "November", value: 11 },
        { label: "December", value: 12 },
    ];

    const [month, setMonth] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.monthPickerAndAddExpenseButtonContainer}>
                <Picker
                    style={styles.monthPicker}
                    selectedValue={month}
                    onValueChange={(selectedMonth) => setMonth(selectedMonth)}
                >
                    <Picker.Item label="Month" value={0} />
                    {months.map((month) => (
                        <Picker.Item
                            key={month.value}
                            label={month.label}
                            value={month.value}
                        />
                    ))}
                </Picker>
                <TouchableOpacity style={styles.addExpenseButtonContainer}>
                    <Octicons name="plus" size={24} color="#fff" />
                    <Text style={styles.addExpenseButtonText}>Add Expense</Text>
                </TouchableOpacity>
            </View>

            <View>Chart + Total</View>
            <View>Categories</View>
            <View>Recent Expenses</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    monthPicker: {
        borderRadius: 16,

        padding: 8,

        backgroundColor: "black",

        color: "cyan",
    },

    monthPickerAndAddExpenseButtonContainer: {
        flexDirection: "row",

        justifyContent: "space-between",
        alignItems: "center",

        width: "90%",

        marginTop: 24,
    },

    addExpenseButtonContainer: {
        width: 200,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        borderRadius: 16,

        backgroundColor: "cyan",

        padding: 8,
    },

    addExpenseButtonText: {
        fontSize: 24,
        color: "#fff",
    },
});
